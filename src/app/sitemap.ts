import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE = "https://santo-hp.co.jp";
const LOCALES = ["ja", "en", "es", "pt", "zh"] as const;
const DEFAULT_LOCALE = "ja";

// Job IDs match generateStaticParams in src/app/[locale]/jobs/[id]/page.tsx
const JOB_IDS = [
  "1", "2", "3", "4", "5", "6", "7", "8",
  "9", "10", "11", "12", "13", "14", "15", "16",
];

type ChangeFreq = NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;

type StaticPage = {
  path: string; // e.g. "" for home, "/about" (no trailing slash; added later)
  changeFrequency: ChangeFreq;
  priority: number;
};

const STATIC_PAGES: StaticPage[] = [
  { path: "", changeFrequency: "weekly", priority: 1.0 },
  { path: "/about", changeFrequency: "monthly", priority: 0.7 },
  { path: "/employers", changeFrequency: "monthly", priority: 0.8 },
  { path: "/jobseekers", changeFrequency: "monthly", priority: 0.8 },
  { path: "/jobs", changeFrequency: "weekly", priority: 0.9 },
  { path: "/labor-info", changeFrequency: "monthly", priority: 0.5 },
  { path: "/access", changeFrequency: "monthly", priority: 0.5 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.7 },
  { path: "/privacy", changeFrequency: "monthly", priority: 0.3 },
];

function buildUrl(locale: string, path: string): string {
  // localePrefix: "always" — every locale gets a prefix, including the default
  const localePart = `/${locale}`;
  // Trailing slash to match next.config.ts trailingSlash: true
  return `${BASE}${localePart}${path}/`;
}

function buildAlternates(path: string): Record<string, string> {
  const languages: Record<string, string> = {};
  for (const locale of LOCALES) {
    languages[locale] = buildUrl(locale, path);
  }
  // x-default points to the default locale
  languages["x-default"] = buildUrl(DEFAULT_LOCALE, path);
  return languages;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const entries: MetadataRoute.Sitemap = [];

  // Static pages: one entry per locale per page, with hreflang alternates
  for (const page of STATIC_PAGES) {
    const alternates = buildAlternates(page.path);
    for (const locale of LOCALES) {
      entries.push({
        url: buildUrl(locale, page.path),
        lastModified,
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        alternates: { languages: alternates },
      });
    }
  }

  // Job detail and apply pages (thanks pages are intentionally excluded)
  for (const id of JOB_IDS) {
    const detailPath = `/jobs/${id}`;
    const applyPath = `/jobs/${id}/apply`;
    const detailAlternates = buildAlternates(detailPath);
    const applyAlternates = buildAlternates(applyPath);

    for (const locale of LOCALES) {
      entries.push({
        url: buildUrl(locale, detailPath),
        lastModified,
        changeFrequency: "weekly",
        priority: 0.8,
        alternates: { languages: detailAlternates },
      });
      entries.push({
        url: buildUrl(locale, applyPath),
        lastModified,
        changeFrequency: "monthly",
        priority: 0.6,
        alternates: { languages: applyAlternates },
      });
    }
  }

  return entries;
}
