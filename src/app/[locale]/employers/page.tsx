import type { Metadata } from "next";
import {
  ArrowRight,
  Phone,
  FileSearch,
  Handshake,
  UserCheck,
} from "lucide-react";
import { LinkButton } from "@/components/LinkButton";
import { PageHeader } from "@/components/PageHeader";
import { StrengthTimeline } from "@/components/StrengthTimeline";
import { EmployerIndustries } from "@/components/EmployerIndustries";
import { getTranslations, setRequestLocale } from "next-intl/server";

export const metadata: Metadata = {
  title: "人材をお探しの企業様",
  description:
    "株式会社サントーの人材派遣サービスのご案内。貴社のニーズに合った最適な人材をご提案いたします。",
};

export default async function EmployersPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Employers");

  const steps = [
    {
      icon: Phone,
      num: "01",
      title: t("step1Title"),
      desc: t("step1Desc"),
    },
    {
      icon: FileSearch,
      num: "02",
      title: t("step2Title"),
      desc: t("step2Desc"),
    },
    {
      icon: Handshake,
      num: "03",
      title: t("step3Title"),
      desc: t("step3Desc"),
    },
    {
      icon: UserCheck,
      num: "04",
      title: t("step4Title"),
      desc: t("step4Desc"),
    },
  ];

  const stats = [
    { num: t("stat1Num"), suffix: t("stat1Suffix"), label: t("stat1Label"), desc: t("stat1Desc") },
    { num: t("stat2Num"), suffix: t("stat2Suffix"), label: t("stat2Label"), desc: t("stat2Desc") },
    { num: t("stat3Num"), suffix: t("stat3Suffix"), label: t("stat3Label"), desc: t("stat3Desc") },
  ];

  return (
    <>
      <PageHeader label={t("pageLabel")} title={t("pageTitle")} subtitle={t("pageSubtitle")} image="/images/employers_factory_boss_wide.png" largeSubtitle />

      {/* Lead */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* 左: テキスト */}
            <div>
              <p className="mb-3 text-[14px] font-black tracking-[0.3em] text-santo-light">
                {t("leadLabel")}
              </p>
              <h2 className="mb-6 text-2xl font-black tracking-wider text-slate-900 sm:text-4xl lg:text-5xl">
                {t("leadTitle1")}<br /><span className="text-santo-blue">{t("leadTitle2")}</span>{t("leadTitle3")}
              </h2>
              <div className="mb-6 h-1 w-14 rounded-full bg-santo-navy" />
              <p className="text-[15px] leading-[2.2] text-slate-600 sm:text-[17px]">
                {t("leadDesc")}
              </p>
              <div className="mt-8 flex justify-center">
                <LinkButton
                  href={`/${locale}/contact`}
                  size="xl"
                  className="bg-santo-navy px-14 text-white hover:bg-santo-blue"
                >
                  {t("leadButton")}
                  <ArrowRight className="h-4 w-4" />
                </LinkButton>
              </div>
            </div>

            {/* 右: イラスト + 数字カード */}
            <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-stretch lg:gap-6">
              {/* イラスト */}
              <div className="flex flex-1 items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/illust_handshake_transparent.png"
                  alt=""
                  className="h-auto w-64 opacity-90 lg:w-72"
                />
              </div>
              {/* 数字カード */}
              <div className="flex w-full flex-col gap-3 lg:w-[280px] lg:shrink-0">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-center gap-4 rounded-2xl bg-gradient-to-br from-[#e0f0fa] to-[#f0f7fc] px-4 py-4"
                  >
                    {/* 円形数字 */}
                    <div className="relative flex h-[88px] w-[88px] shrink-0 flex-col items-center justify-center rounded-full bg-gradient-to-br from-santo-blue to-[#0ea5e9] shadow-md">
                      <span className="text-[10px] font-bold tracking-wider text-white/80">
                        {stat.label}
                      </span>
                      <div className="flex items-baseline">
                        <span className="text-[30px] font-black leading-none tabular-nums text-white">
                          {stat.num}
                        </span>
                        <span className="text-[12px] font-bold text-white/80">
                          {stat.suffix}
                        </span>
                      </div>
                    </div>
                    {/* テキスト */}
                    <p className="text-[13px] font-bold leading-[1.7] tracking-wider text-slate-600">
                      {stat.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strengths */}
      <section className="border-t border-slate-200 bg-santo-gray py-6 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="mb-1 text-[14px] font-black tracking-[0.3em] text-santo-light sm:mb-3">
            {t("strengthLabel")}
          </p>
          <h2 className="mb-3 text-2xl font-black tracking-wider text-slate-900 sm:mb-4 sm:text-4xl lg:text-5xl">
            {t("strengthTitle")}
          </h2>
          <StrengthTimeline />
        </div>
      </section>
      {/* Flow */}
      <section className="border-t border-slate-200 bg-santo-gray py-6 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="mb-1 text-[14px] font-black tracking-[0.3em] text-santo-light sm:mb-3">
            {t("flowLabel")}
          </p>
          <h2 className="mb-3 text-2xl font-black tracking-wider text-slate-900 sm:mb-4 sm:text-4xl lg:text-5xl">
            {t("flowTitle")}
          </h2>
          {/* モバイル: 横スクロール */}
          <div className="-mx-4 px-4 lg:hidden">
            <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-2">
              {steps.map((step) => (
                <div key={step.title} className="flex w-[200px] shrink-0 snap-start flex-col rounded-xl bg-white p-4">
                  <span className="text-[28px] font-light leading-none text-santo-navy/20">
                    {step.num}
                  </span>
                  <h3 className="mt-1 text-[14px] font-black tracking-wider text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-[12px] leading-[1.7] text-slate-500">
                    {step.desc}
                  </p>
                  <div className="mt-auto flex justify-end pt-2">
                    <step.icon className="h-8 w-8 text-slate-300" strokeWidth={1} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* デスクトップ: 矢印型横並び */}
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

      {/* 対応業種 */}
      <section className="border-t border-slate-200 bg-santo-gray py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="mb-3 text-[14px] font-black tracking-[0.3em] text-santo-light">
            {t("industryLabel")}
          </p>
          <h2 className="mb-4 text-3xl font-black tracking-wider text-slate-900 sm:text-4xl lg:text-5xl">
            {t("industryTitle")}
          </h2>
          <EmployerIndustries />
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-16 sm:py-28 min-h-[380px] sm:min-h-[480px] lg:min-h-[560px]">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{ backgroundImage: "url('/images/trustworthy_woman_blurred_man.png')", backgroundPosition: "center 30%" }}
        />
        <div className="absolute inset-0 bg-santo-navy/55" />
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6">
          <p className="mb-3 text-[12px] font-black tracking-[0.3em] text-white/70">
            {t("ctaLabel")}
          </p>
          <h2 className="mb-4 text-xl font-black tracking-wider text-white sm:text-2xl lg:text-3xl">
            {t("ctaTitle")}
          </h2>
          <p className="mx-auto mb-8 max-w-md text-[13px] leading-[1.9] text-white/70 sm:mb-10 sm:text-[14px]">
            {t("ctaDesc")}
          </p>
          <div className="flex flex-col items-center justify-center gap-5 sm:flex-row">
            <LinkButton
              href={`/${locale}/contact`}
              size="xl"
              className="animate-shimmer relative overflow-hidden bg-white px-12 py-4 text-lg text-santo-navy shadow-lg shadow-white/20 hover:bg-slate-100"
            >
              {t("ctaButton")}
              <ArrowRight className="h-4 w-4" />
            </LinkButton>
            <div className="flex flex-col items-center">
              <p className="text-[10px] font-bold tracking-widest text-white/60">
                TEL
              </p>
              <a
                href="tel:0463-24-1722"
                className="flex items-center gap-2 text-2xl font-black tracking-wider text-white"
              >
                0463-24-1722
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
