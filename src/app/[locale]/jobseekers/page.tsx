import type { Metadata } from "next";
import {
  ArrowRight,
  ClipboardList,
  MessageSquare,
  Briefcase,
  ThumbsUp,
} from "lucide-react";
import { LinkButton } from "@/components/LinkButton";
import { CountUpStats } from "@/components/CountUpStats";
import { PageHeader } from "@/components/PageHeader";
import { HexMerits } from "@/components/HexMerits";
import { JobCategories } from "@/components/JobCategories";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: "仕事をお探しの方",
  description:
    "株式会社サントーで、あなたに合ったお仕事を見つけませんか？派遣のお仕事情報や登録の流れをご案内します。",
};

export default async function JobseekersPage() {
  const t = await getTranslations("Jobseekers");

  const steps = [
    {
      icon: ClipboardList,
      num: "01",
      title: t("step1Title"),
      desc: t("step1Desc"),
    },
    {
      icon: MessageSquare,
      num: "02",
      title: t("step2Title"),
      desc: t("step2Desc"),
    },
    {
      icon: Briefcase,
      num: "03",
      title: t("step3Title"),
      desc: t("step3Desc"),
    },
    {
      icon: ThumbsUp,
      num: "04",
      title: t("step4Title"),
      desc: t("step4Desc"),
    },
  ];

  const faqs = [
    { q: t("faq1Q"), a: t("faq1A") },
    { q: t("faq2Q"), a: t("faq2A") },
    { q: t("faq3Q"), a: t("faq3A") },
    { q: t("faq4Q"), a: t("faq4A") },
    { q: t("faq5Q"), a: t("faq5A") },
    { q: t("faq6Q"), a: t("faq6A") },
    { q: t("faq7Q"), a: t("faq7A") },
    { q: t("faq8Q"), a: t("faq8A") },
    { q: t("faq9Q"), a: t("faq9A") },
  ];

  return (
    <>
      <PageHeader label={t("pageLabel")} title={t("pageTitle")} subtitle={t("pageSubtitle")} image="/images/jobseekers_hero.png" tall largeSubtitle />

      {/* Merits */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="mb-3 text-[14px] font-black tracking-[0.3em] text-santo-light">
            {t("meritLabel")}
          </p>
          <h2 className="mb-4 text-4xl font-black tracking-wider text-slate-900 sm:text-5xl lg:text-6xl">
            {t("meritTitle1")}<span className="relative inline-block text-santo-blue" style={{ backgroundImage: "linear-gradient(transparent 70%, #bfdbfe 70%)", backgroundRepeat: "no-repeat" }}>{t("meritTitle2")}</span>
          </h2>
          <div className="mt-5 h-1 w-14 rounded-full bg-santo-navy" />
          <p className="mt-5 mb-12 whitespace-nowrap text-[34px] font-bold leading-[1.8] tracking-wide text-slate-500">
            {t("meritDesc")}
          </p>
          <HexMerits />
          <div className="mt-14 flex flex-col items-center text-center">
            <div className="h-[2px] w-12 rounded-full bg-santo-blue" />
            <p className="mt-5 whitespace-nowrap text-[24px] font-bold leading-[1.8] tracking-wide text-slate-700 sm:text-[34px] lg:text-[40px]">
              {t("meritCta1")}<span className="text-[1.1em] font-black text-santo-blue">{t("meritCtaHighlight1")}</span>{t("meritCta2")}<br />{t("meritCta3")}<span className="text-[1.1em] font-black text-santo-blue">{t("meritCtaHighlight2")}</span>{t("meritCta4")}
            </p>
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="bg-[#f4f7fb] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <CountUpStats />
        </div>
      </section>

      {/* Flow */}
      <section className="border-t border-slate-200 bg-santo-gray py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="mb-3 text-[14px] font-black tracking-[0.3em] text-santo-light">
            {t("flowLabel")}
          </p>
          <h2 className="mb-4 text-4xl font-black tracking-wider text-slate-900 sm:text-5xl">
            {t("flowTitle")}
          </h2>
          {/* モバイル: 縦並び / デスクトップ: 矢印型横並び */}
          <div className="flex flex-col gap-4 lg:hidden">
            {steps.map((step) => (
              <div key={step.title} className="flex flex-col rounded-xl bg-white p-7">
                <span className="text-[38px] font-light leading-none text-santo-navy/20">
                  {step.num}
                </span>
                <h3 className="mt-2 whitespace-nowrap text-[18px] font-black tracking-wider text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-[15px] leading-[1.9] text-slate-500">
                  {step.desc}
                </p>
                <div className="mt-auto flex justify-end pt-4">
                  <step.icon className="h-14 w-14 text-slate-300" strokeWidth={1} />
                </div>
              </div>
            ))}
          </div>
          <div className="hidden lg:flex items-stretch">
            {steps.map((step, i) => {
              const isFirst = i === 0;
              const isLast = i === steps.length - 1;
              const clip = isFirst
                ? "polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%)"
                : isLast
                  ? "polygon(0 0, 100% 0, 100% 100%, 0 100%, 20px 50%)"
                  : "polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%, 20px 50%)";
              const topColors = [
                "#93c5fd",
                "#3b82f6",
                "#1d6fb5",
                "#0f2d5c",
              ];
              const numColors = [
                "text-blue-300",
                "text-blue-400",
                "text-santo-blue",
                "text-santo-navy",
              ];
              return (
                <div key={step.title} className="flex flex-1 items-stretch">
                  <div
                    className="relative flex flex-1 flex-col bg-white px-8 py-7"
                    style={{
                      clipPath: clip,
                      marginLeft: isFirst ? 0 : -10,
                      paddingLeft: isFirst ? 32 : 40,
                    }}
                  >
                    {/* 上部カラーライン */}
                    <div
                      className="absolute top-0 left-0 right-0 h-1"
                      style={{ background: topColors[i] }}
                    />
                    <span className={`text-[38px] font-light leading-none ${numColors[i]}`}>
                      {step.num}
                    </span>
                    <h3 className="mt-2 whitespace-nowrap text-[18px] font-black tracking-wider text-slate-900">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-[1.9] text-slate-500">
                      {step.desc}
                    </p>
                    <div className="mt-auto flex justify-end pt-4">
                      <step.icon className="h-14 w-14 text-slate-300" strokeWidth={1} />
                    </div>
                  </div>
                  {/* カード間アニメーション矢印 */}
                  {!isLast && (
                    <div className="relative z-10 -mx-3 flex items-center">
                      <div className="flex items-center gap-[3px] animate-pulse">
                        <span className="block h-[3px] w-[6px] rounded-full bg-santo-blue/50" />
                        <span className="block h-[3px] w-[8px] rounded-full bg-santo-blue/70" />
                        <span className="block h-[3px] w-[10px] rounded-full bg-santo-navy" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Job Categories */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="mb-3 text-[14px] font-black tracking-[0.3em] text-santo-light">
            {t("jobTypeLabel")}
          </p>
          <h2 className="mb-4 text-4xl font-black tracking-wider text-slate-900 sm:text-5xl">
            {t("jobTypeTitle")}
          </h2>
          <JobCategories />
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-slate-200 bg-santo-gray py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="mb-3 text-[14px] font-black tracking-[0.3em] text-santo-light">
            {t("faqLabel")}
          </p>
          <h2 className="mb-4 text-4xl font-black tracking-wider text-slate-900 sm:text-5xl">
            {t("faqTitle")}
          </h2>
          <Accordion className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                className="rounded border border-slate-200 bg-white"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-[13px] font-bold tracking-wide">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5 text-[13px] leading-[1.9] text-slate-600">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#dce8f5] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
          <p className="mb-3 text-[11px] font-black tracking-[0.25em] text-santo-blue">
            {t("ctaLabel")}
          </p>
          <h2 className="mb-4 text-2xl font-black tracking-wider text-slate-800 sm:text-3xl">
            {t("ctaTitle")}
          </h2>
          <p className="mx-auto mb-10 max-w-md text-[13px] leading-[1.9] text-slate-500">
            {t("ctaDesc")}
          </p>
          <LinkButton
            href="/contact"
            size="xl"
            className="bg-santo-navy text-white hover:bg-santo-blue"
          >
            {t("ctaButton")}
            <ArrowRight className="h-4 w-4" />
          </LinkButton>
        </div>
      </section>
    </>
  );
}
