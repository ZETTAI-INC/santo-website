import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE = "https://santo-hp.co.jp";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/jobs/*/thanks/"],
    },
    sitemap: `${BASE}/sitemap.xml`,
  };
}
