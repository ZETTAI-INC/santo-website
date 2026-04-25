import type { Metadata } from "next";
import { Suspense } from "react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { JobSearchBanner } from "@/components/JobSearchBanner";
import { JobList } from "@/components/JobList";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Jobs" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default async function JobsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <JobSearchBanner />
      <Suspense>
        <JobList />
      </Suspense>
    </>
  );
}
