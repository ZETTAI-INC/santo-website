import {
  ArrowRight,
} from "lucide-react";
import { LinkButton } from "@/components/LinkButton";
import { FeatureCards } from "@/components/FeatureCards";
import { NewsScroller } from "@/components/NewsScroller";
import { HeroSection } from "@/components/HeroSection";
import { ServiceOverview } from "@/components/ServiceOverview";
import { getTranslations } from "next-intl/server";

export default async function Home() {
  const t = await getTranslations("Home");

  return (
    <>
      {/* Hero */}
      <HeroSection />

      {/* Service Overview */}
      <ServiceOverview />

      {/* Features */}
      <section className="bg-santo-gray py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-14 text-center sm:mb-20">
            <p className="mb-3 text-[14px] font-black tracking-[0.3em] text-santo-light">
              {t("whySantoLabel")}
            </p>
            <h2 className="text-3xl font-black tracking-wider text-slate-900 sm:text-4xl lg:text-5xl">
              {t("whySantoTitle")}
            </h2>
            <div className="mx-auto mt-4 h-0.5 w-12 bg-santo-navy" />
          </div>

          <FeatureCards />
        </div>
      </section>

      {/* Partners */}
      <section className="overflow-hidden py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-12 text-center">
            <p className="mb-3 text-[14px] font-black tracking-[0.3em] text-santo-light">
              {t("partnersLabel")}
            </p>
            <h2 className="text-3xl font-black tracking-wider text-slate-900 sm:text-4xl lg:text-5xl">
              {t("partnersTitle")}
            </h2>
            <p className="mx-auto mt-3 max-w-md text-[13px] leading-[1.8] text-slate-500">
              {t("partnersDesc")}
            </p>
          </div>
        </div>
        {/* ロゴスクロール 2段 - 全幅 */}
        <div className="relative space-y-4">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent" />

          {/* 上段: 左スクロール */}
          <div className="flex animate-scroll-left gap-10">
            {[...Array(3)].map((_, setIdx) => (
              <div key={setIdx} className="flex shrink-0 gap-10">
                {[
                  "パートナー企業A",
                  "パートナー企業B",
                  "パートナー企業C",
                  "パートナー企業D",
                  "パートナー企業E",
                  "パートナー企業F",
                  "パートナー企業G",
                  "パートナー企業H",
                ].map((name, i) => (
                  <div
                    key={`${setIdx}-${i}`}
                    className="flex h-16 w-36 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white px-4"
                  >
                    <span className="text-[13px] font-bold text-slate-400">
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* 下段: 右スクロール */}
          <div className="flex animate-scroll-right gap-10">
            {[...Array(3)].map((_, setIdx) => (
              <div key={setIdx} className="flex shrink-0 gap-10">
                {[
                  "パートナー企業I",
                  "パートナー企業J",
                  "パートナー企業K",
                  "パートナー企業L",
                  "パートナー企業M",
                  "パートナー企業N",
                  "パートナー企業O",
                  "パートナー企業P",
                ].map((name, i) => (
                  <div
                    key={`${setIdx}-${i}`}
                    className="flex h-16 w-36 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white px-4"
                  >
                    <span className="text-[13px] font-bold text-slate-400">
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden">
        {/* 背景画像エリア */}
        <div className="relative px-5 pb-32 pt-16 sm:px-6 sm:pb-48 sm:pt-28">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/cta-bg-v2.png')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-santo-navy/70 via-santo-navy/50 to-santo-navy/30" />
          <div className="relative mx-auto max-w-4xl text-center">
            <h2 className="text-2xl font-black leading-[1.5] tracking-wider text-white drop-shadow-lg sm:text-4xl lg:text-6xl">
              {t("ctaTitle")}
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-[2] text-white drop-shadow-md sm:text-[22px]">
              {t("ctaDesc")}
            </p>
          </div>
        </div>

        {/* オーバーラップする2カラムカード */}
        <div className="relative -mt-24 px-4 pb-20 sm:px-6 sm:pb-28">
          <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2">
            {/* 求職者向け */}
            <div className="flex flex-col rounded-xl bg-white p-8 shadow-xl sm:p-10">
              <span className="inline-block rounded-full bg-santo-sky px-4 py-1.5 text-[13px] font-black tracking-wider text-santo-blue">
                {t("ctaJobseekersTitle")}
              </span>
              <h3 className="mt-4 text-2xl font-black tracking-wider text-slate-900">
                {t("ctaJobseekersDesc")}
              </h3>
              <ul className="mt-5 space-y-3">
                {[
                  t("ctaJobseekersBullet1"),
                  t("ctaJobseekersBullet2"),
                  t("ctaJobseekersBullet3"),
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[15px] leading-[1.8] text-slate-600">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-santo-blue" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-6">
                <p className="text-center text-[14px] text-slate-400">
                  {t("ctaJobseekersPrompt")}
                </p>
                <LinkButton
                  href="/jobseekers"
                  size="xl"
                  className="mt-2 w-full justify-center bg-santo-navy text-white hover:bg-santo-blue"
                >
                  {t("ctaJobseekersButton")}
                  <ArrowRight className="h-4 w-4" />
                </LinkButton>
              </div>
            </div>

            {/* 企業向け */}
            <div className="flex flex-col rounded-xl bg-white p-8 shadow-xl sm:p-10">
              <span className="inline-block rounded-full bg-santo-navy/5 px-4 py-1.5 text-[13px] font-black tracking-wider text-santo-navy">
                {t("ctaEmployersTitle")}
              </span>
              <h3 className="mt-4 text-2xl font-black tracking-wider text-slate-900">
                {t("ctaEmployersDesc")}
              </h3>
              <ul className="mt-5 space-y-3">
                {[
                  t("ctaEmployersBullet1"),
                  t("ctaEmployersBullet2"),
                  t("ctaEmployersBullet3"),
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[15px] leading-[1.8] text-slate-600">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-santo-navy" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-6">
                <p className="text-center text-[14px] text-slate-400">
                  {t("ctaEmployersPrompt")}
                </p>
                <LinkButton
                  href="/employers"
                  size="xl"
                  className="mt-2 w-full justify-center bg-slate-800 text-white hover:bg-slate-700"
                >
                  {t("ctaEmployersButton")}
                  <ArrowRight className="h-4 w-4" />
                </LinkButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News */}
      <section className="border-t border-slate-200 bg-santo-gray py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-12 text-center">
            <p className="mb-3 text-[14px] font-black tracking-[0.3em] text-santo-light">
              {t("newsLabel")}
            </p>
            <h2 className="text-3xl font-black tracking-wider text-slate-900 sm:text-4xl lg:text-5xl">
              {t("newsTitle")}
            </h2>
            <div className="mx-auto mt-4 h-0.5 w-12 bg-santo-navy" />
          </div>
          <NewsScroller />
        </div>
      </section>

      {/* Contact CTA */}
      <section className="relative overflow-hidden py-20 sm:py-36 lg:py-44 min-h-[420px] sm:min-h-[520px] lg:min-h-[600px]">
        {/* 背景画像 */}
        <div
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{ backgroundImage: "url('/images/trustworthy_woman_blurred_man.png')", backgroundPosition: "center 30%" }}
        />
        <div className="absolute inset-0 bg-santo-navy/55" />
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6">
          <p className="mb-3 text-[12px] font-black tracking-[0.3em] text-white/70">
            {t("contactLabel")}
          </p>
          <h2 className="mb-4 text-2xl font-black tracking-wider text-white sm:text-3xl lg:text-4xl">
            {t("contactTitle")}
          </h2>
          <p className="mx-auto mb-8 max-w-md text-[13px] leading-[1.9] text-white/70 sm:mb-10 sm:text-[14px]">
            {t("contactDesc")}
          </p>
          <div className="flex flex-col items-center gap-6">
            <LinkButton
              href="/contact"
              size="xl"
              className="animate-shimmer relative overflow-hidden bg-white px-12 py-4 text-lg text-santo-navy shadow-lg shadow-white/20 hover:bg-slate-100"
            >
              {t("contactButton")}
              <ArrowRight className="h-5 w-5" />
            </LinkButton>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-8">
              <div className="flex flex-col items-center">
                <p className="text-[10px] font-bold tracking-widest text-white/60">
                  TEL
                </p>
                <a
                  href="tel:0463-24-1722"
                  className="text-2xl font-black tracking-wider text-white"
                >
                  0463-24-1722
                </a>
              </div>
              <div className="hidden h-10 w-px bg-white/30 sm:block" />
              <div className="flex flex-col items-center">
                <p className="text-[10px] font-bold tracking-widest text-white/60">
                  MAIL
                </p>
                <a
                  href="mailto:info@santo-hp.co.jp"
                  className="text-lg font-black tracking-wider text-white"
                >
                  info@santo-hp.co.jp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
