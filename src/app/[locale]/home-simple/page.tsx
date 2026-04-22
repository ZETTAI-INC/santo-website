import {
  ArrowRight,
} from "lucide-react";
import { LinkButton } from "@/components/LinkButton";
import { FeatureCards } from "@/components/FeatureCards";
import { HeroSection } from "@/components/HeroSection";
import { getTranslations, setRequestLocale } from "next-intl/server";

export default async function HomeSimple({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Home");


  return (
    <>
      {/* Hero */}
      <HeroSection />

      {/* Features */}
      <section className="bg-santo-gray py-6 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-5 text-center sm:mb-14">
            <p className="mb-1 text-[14px] font-black tracking-[0.3em] text-santo-light sm:mb-3">
              {t("whySantoLabel")}
            </p>
            <h2 className="text-2xl font-black tracking-wider text-slate-900 sm:text-4xl lg:text-5xl">
              {t("whySantoTitle")}
            </h2>
            <div className="mx-auto mt-1.5 h-1 bg-santo-navy" style={{ width: "555px", maxWidth: "100%" }} />
            <p className="mx-auto mt-2 max-w-2xl text-[13px] leading-[1.7] text-slate-500 sm:mt-4 sm:text-[18px] sm:leading-[1.9]">
              {t("whySantoDescPre1")}<span className="whitespace-nowrap text-[1.15em] font-bold text-santo-blue">{t("whySantoDescHighlight1")}</span>{t("whySantoDescMid1")}<span className="whitespace-nowrap text-[1.15em] font-bold text-santo-navy">{t("whySantoDescHighlight2")}</span>{t("whySantoDescMid2")}<span className="whitespace-nowrap text-[1.15em] font-bold text-santo-blue">{t("whySantoDescHighlight3")}</span>{t("whySantoDescPost")}
            </p>
          </div>

          <FeatureCards />
        </div>
      </section>

      {/* 信頼の紹介 */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="mb-8 text-center text-[15px] font-bold leading-[1.6] text-slate-700 sm:text-[24px] lg:text-[28px]">
            <span className="mr-2 hidden text-slate-800 sm:inline">＼</span>
            {t("trustedDesc1")}<br className="sm:hidden" />
            <span className="text-[1.15em] font-black text-santo-blue">{t("trustedDescHighlight")}</span>
            {t("trustedDesc2")}
            <span className="ml-2 hidden text-slate-800 sm:inline">／</span>
          </p>
          <div className="-mx-4 overflow-visible bg-[#5ba3d9] sm:mx-auto sm:max-w-5xl sm:overflow-hidden sm:rounded-2xl">
            <div className="relative flex items-center justify-center px-4 py-4 sm:py-5 lg:py-6">
              {/* 左カード */}
              <a
                href="https://haken-matching.jp/haken-comparison/kanagawa/196/#:~:text=株式会社%20サントー"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute left-[2%] z-30 w-[35%] -rotate-6 overflow-hidden rounded-xl shadow-2xl transition-all duration-300 hover:scale-[1.15] hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] sm:left-[1%] sm:w-[37%] sm:hover:scale-110"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/hojin_haken_matching_ranking.png"
                  alt="神奈川の人材派遣会社おすすめランキング"
                  className="w-full"
                />
              </a>

              {/* 中央テキスト（丸い破線枠） */}
              <div className="relative z-10 flex flex-col items-center rounded-full border-[2px] border-dashed border-white bg-white/95 px-3 py-2.5 shadow-lg sm:border-[3px] sm:px-10 sm:py-6 lg:px-14 lg:py-8">
                <span className="mb-1 inline-block rounded-md bg-[#f5c518] px-2 py-0.5 text-[8px] font-black tracking-widest text-slate-900 shadow-sm sm:mb-2 sm:px-5 sm:py-1 sm:text-[14px]">
                  CHECK!
                </span>
                <p className="text-center text-[12px] leading-[1.3] tracking-wider text-santo-navy sm:text-[22px] sm:leading-[1.4] lg:text-[28px]" style={{ fontWeight: 900, WebkitTextStroke: "0.5px currentColor" }}>
                  {t("trustedCheckText").split("\n").map((line, i, arr) => (
                    <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
                  ))}
                </p>
              </div>

              {/* 右カード */}
              <a
                href="https://find-bestwork.com/chiiki/kanagawa/100006/#:~:text=株式会社サントー"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute right-[2%] z-30 w-[33%] rotate-6 overflow-hidden rounded-xl shadow-2xl transition-all duration-300 hover:scale-[1.15] hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] sm:right-[1%] sm:w-[35%] sm:hover:scale-110"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/hashtag_shushoku_expanded_v2.png"
                  alt="#就職しよう"
                  className="w-full"
                />
              </a>
            </div>
          </div>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <a
              href="https://haken-matching.jp/haken-comparison/kanagawa/196/#:~:text=株式会社%20サントー"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-santo-navy px-8 py-4 text-[15px] font-bold tracking-wide text-white shadow-sm transition hover:bg-santo-blue sm:px-10 sm:text-[17px]"
            >
              {t("trustedButtonMatching")}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="https://find-bestwork.com/chiiki/kanagawa/100006/#:~:text=株式会社サントー"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#e89b0c] px-8 py-4 text-[15px] font-bold tracking-wide text-white shadow-sm transition hover:bg-[#d08a0a] sm:px-10 sm:text-[17px]"
            >
              {t("trustedButtonShushoku")}
              <ArrowRight className="h-4 w-4" />
            </a>
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
            <p className="mx-auto mt-6 max-w-2xl text-[16px] font-bold leading-[2] text-white drop-shadow-md sm:text-[24px]">
              {t("ctaDesc")}
            </p>
          </div>
        </div>

        {/* オーバーラップする2カラムカード */}
        <div className="relative -mt-24 px-4 pb-20 sm:px-6 sm:pb-28">
          <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2">
            {/* 求職者向け */}
            <div className="flex flex-col rounded-xl bg-white p-6 shadow-xl sm:p-10">
              <span className="inline-block rounded-full bg-santo-sky px-4 py-1.5 text-[13px] font-black tracking-wider text-santo-blue">
                {t("ctaJobseekersTitle")}
              </span>
              <h3 className="mt-4 text-2xl font-black tracking-wider text-slate-900 sm:text-3xl">
                {t("ctaJobseekersDesc")}
              </h3>
              <ul className="mt-5 space-y-3">
                {[
                  t("ctaJobseekersBullet1"),
                  t("ctaJobseekersBullet2"),
                  t("ctaJobseekersBullet3"),
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[16px] font-bold leading-[1.8] text-slate-600">
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
                  href={`/${locale}/jobseekers`}
                  size="xl"
                  className="mt-2 w-full justify-center bg-santo-navy text-white hover:bg-santo-blue"
                >
                  {t("ctaJobseekersButton")}
                  <ArrowRight className="h-4 w-4" />
                </LinkButton>
              </div>
            </div>

            {/* 企業向け */}
            <div className="flex flex-col rounded-xl bg-white p-6 shadow-xl sm:p-10">
              <span className="inline-block rounded-full bg-santo-navy/5 px-4 py-1.5 text-[13px] font-black tracking-wider text-santo-navy">
                {t("ctaEmployersTitle")}
              </span>
              <h3 className="mt-4 text-2xl font-black tracking-wider text-slate-900 sm:text-3xl">
                {t("ctaEmployersDesc")}
              </h3>
              <ul className="mt-5 space-y-3">
                {[
                  t("ctaEmployersBullet1"),
                  t("ctaEmployersBullet2"),
                  t("ctaEmployersBullet3"),
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[16px] font-bold leading-[1.8] text-slate-600">
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
                  href={`/${locale}/employers`}
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
          <h2 className="mb-4 text-3xl font-black tracking-wider text-white sm:text-4xl lg:text-5xl">
            {t("contactTitle")}
          </h2>
          <p className="mx-auto mb-8 max-w-md text-[13px] font-bold leading-[1.9] text-white/70 sm:mb-10 sm:text-[14px]">
            {t("contactDesc")}
          </p>
          <div className="flex flex-col items-center gap-6">
            <LinkButton
              href={`/${locale}/contact`}
              size="xl"
              className="animate-shimmer relative overflow-hidden bg-white px-8 py-4 text-lg text-santo-navy shadow-lg shadow-white/20 hover:bg-slate-100 sm:px-12"
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
                  href="mailto:santo@santo-ho.co.jp"
                  className="text-lg font-black tracking-wider text-white"
                >
                  santo@santo-ho.co.jp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
