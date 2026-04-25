import { setRequestLocale, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import Link from "next/link";
import type { Metadata } from "next";
import { CheckCircle2, ArrowRight, Phone } from "lucide-react";

const JOB_IDS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16"];

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    JOB_IDS.map((id) => ({ locale, id }))
  );
}

export const dynamic = "force-static";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const th = await getTranslations({ locale, namespace: "JobThanks" });
  return { title: th("pageTitle") };
}

export default async function JobThanksPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { locale, id } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "Jobs" });
  const th = await getTranslations({ locale, namespace: "JobThanks" });

  const jobTitle = t(`job${id}Title` as never) as string;

  return (
    <div className="bg-white text-slate-800">
      <div className="mx-auto max-w-[768px] px-[15px] pb-[60px] pt-[40px] sm:pt-[80px]">
        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-50 sm:h-20 sm:w-20">
            <CheckCircle2 className="h-10 w-10 text-green-600 sm:h-12 sm:w-12" />
          </div>
          <p className="mt-4 text-[11px] font-black tracking-[0.25em] text-santo-light">
            {th("pageLabel")}
          </p>
          <h1 className="mt-2 text-[22px] font-bold leading-[1.4] text-santo-navy sm:text-[28px]">
            {th("pageTitle")}
          </h1>
          <p className="mt-4 text-[14px] leading-[1.9] text-slate-600 sm:text-[15px]">
            {th("pageDesc")}
          </p>
        </div>

        <div className="mt-8 rounded-[10px] border border-slate-200 bg-santo-sky/40 p-5 sm:p-6">
          <p className="text-[11px] font-black tracking-[0.2em] text-santo-light">
            {th("jobSectionLabel")}
          </p>
          <p className="mt-1 text-[14px] font-bold text-santo-navy sm:text-[15px]">
            {jobTitle}
          </p>
        </div>

        <div className="mt-6 rounded-[10px] bg-slate-50 p-5 sm:p-6">
          <p className="text-[13px] font-bold text-santo-navy">
            {th("nextStepsTitle")}
          </p>
          <ul className="mt-3 space-y-2 text-[13px] leading-[1.8] text-slate-600">
            <li>・{th("nextStep1")}</li>
            <li>・{th("nextStep2")}</li>
            <li>・{th("nextStep3")}</li>
          </ul>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href={`/${locale}/jobs`}
            className="flex flex-1 items-center justify-center gap-2 rounded-[10px] bg-santo-navy py-[16px] text-[15px] font-bold text-white transition hover:bg-santo-blue"
            style={{ minHeight: 56 }}
          >
            {th("backToJobs")}
            <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href="tel:0463-24-1722"
            className="flex flex-1 items-center justify-center gap-2 rounded-[10px] border-2 border-santo-navy py-[16px] text-[15px] font-bold text-santo-navy transition hover:bg-santo-navy hover:text-white"
            style={{ minHeight: 56 }}
          >
            <Phone className="h-4 w-4" />
            {th("callButton")}
          </a>
        </div>
      </div>
    </div>
  );
}
