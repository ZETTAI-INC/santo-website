import type { Metadata } from "next";
import { Suspense } from "react";
import { setRequestLocale } from "next-intl/server";
import { JobSearchBanner } from "@/components/JobSearchBanner";
import { JobList } from "@/components/JobList";

export const metadata: Metadata = {
  title: "仕事一覧",
  description: "株式会社サントーの求人一覧。製造・物流・事務など、あなたに合ったお仕事をお探しください。",
};

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
