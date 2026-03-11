import Link from "next/link";
import {
  Briefcase,
  Building2,
  Users,
  Shield,
  Clock,
  HeartHandshake,
  ArrowRight,
  Star,
  FileText,
  ChevronRight,
} from "lucide-react";
import { LinkButton } from "@/components/LinkButton";
import { FeatureCards } from "@/components/FeatureCards";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-santo-navy">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/hero-bg.png')" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-santo-navy/50 via-santo-navy/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-santo-accent/20" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:py-40">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-4xl font-black leading-[1.3] tracking-wider text-white sm:text-5xl lg:text-6xl">
              人と企業をつなぎ、
              <br />
              未来をつくる。
            </h1>
            <p className="mb-10 max-w-xl text-[15px] leading-[2] text-slate-300">
              株式会社サントーは、求職者の皆様と企業の皆様を結ぶ人材派遣サービスを提供しています。一人ひとりに寄り添い、最適なマッチングを実現します。
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <LinkButton
                href="/jobseekers"
                size="xl"
                className="bg-white text-santo-navy hover:bg-slate-100"
              >
                <Briefcase className="h-5 w-5" />
                仕事をお探しの方
              </LinkButton>
              <LinkButton
                href="/employers"
                variant="outline"
                size="xl"
                className="text-white"
              >
                <Building2 className="h-5 w-5" />
                人材をお探しの企業様
              </LinkButton>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-santo-gray py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-14 text-center sm:mb-20">
            <p className="mb-3 text-[11px] font-black tracking-[0.25em] text-santo-light">
              WHY SANTO
            </p>
            <h2 className="text-3xl font-black tracking-wider text-slate-900 sm:text-4xl">
              サントーが選ばれる理由
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
            <p className="mb-3 text-[11px] font-black tracking-[0.25em] text-santo-light">
              PARTNERS
            </p>
            <h2 className="text-2xl font-black tracking-wider text-slate-900 sm:text-3xl">
              取引先企業
            </h2>
            <p className="mx-auto mt-3 max-w-md text-[13px] leading-[1.8] text-slate-500">
              多くの企業様にご利用いただいています
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
        <div className="relative px-4 pb-40 pt-20 sm:px-6 sm:pb-48 sm:pt-28">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/cta-bg-v2.png')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-santo-navy/50 via-santo-navy/25 to-transparent" />
          <div className="relative mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-black leading-[1.5] tracking-wider text-white sm:text-4xl lg:text-5xl">
              最適な出会いが、
              <br />
              ここにある。
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-[14px] leading-[2] text-slate-300">
              理想の職場を探している方も、頼れる人材を求めている企業様も。サントーが双方の想いをつなぎ、最適なマッチングを実現します。
            </p>
          </div>
        </div>

        {/* オーバーラップする2カラムカード */}
        <div className="relative -mt-24 px-4 pb-20 sm:px-6 sm:pb-28">
          <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2">
            {/* 求職者向け */}
            <div className="rounded-xl bg-white p-8 shadow-xl sm:p-10">
              <span className="inline-block rounded-full bg-santo-sky px-4 py-1.5 text-[11px] font-black tracking-wider text-santo-blue">
                求職者のあなたへ
              </span>
              <h3 className="mt-4 text-xl font-black tracking-wider text-slate-900">
                あなたに合った仕事が見つかる
              </h3>
              <ul className="mt-5 space-y-3">
                {[
                  "希望の勤務地・時間・職種でお仕事を紹介",
                  "就業前に職場見学ができるので安心",
                  "専任担当者がいつでもサポート",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[13px] leading-[1.8] text-slate-600">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-santo-blue" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-center text-[12px] text-slate-400">
                ＼ お仕事を探したい・相談したい方 ／
              </p>
              <LinkButton
                href="/jobseekers"
                size="xl"
                className="mt-2 w-full justify-center bg-santo-navy text-white hover:bg-santo-blue"
              >
                仕事をお探しの方はこちら
                <ArrowRight className="h-4 w-4" />
              </LinkButton>
            </div>

            {/* 企業向け */}
            <div className="rounded-xl bg-white p-8 shadow-xl sm:p-10">
              <span className="inline-block rounded-full bg-santo-navy/5 px-4 py-1.5 text-[11px] font-black tracking-wider text-santo-navy">
                採用担当のあなたへ
              </span>
              <h3 className="mt-4 text-xl font-black tracking-wider text-slate-900">
                最適な人材を迅速にご提案
              </h3>
              <ul className="mt-5 space-y-3">
                {[
                  "豊富な人材ネットワークから最適な候補をご紹介",
                  "製造・物流・事務など幅広い職種に対応",
                  "迅速な対応で急な人材ニーズにもお応え",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[13px] leading-[1.8] text-slate-600">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-santo-navy" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-center text-[12px] text-slate-400">
                ＼ 人材の確保・採用を検討中の方 ／
              </p>
              <LinkButton
                href="/employers"
                size="xl"
                className="mt-2 w-full justify-center bg-slate-800 text-white hover:bg-slate-700"
              >
                人材をお探しの企業様はこちら
                <ArrowRight className="h-4 w-4" />
              </LinkButton>
            </div>
          </div>
        </div>
      </section>

      {/* News */}
      <section className="border-t border-slate-200 bg-santo-gray py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="mb-2 text-[11px] font-black tracking-[0.25em] text-santo-light">
                NEWS
              </p>
              <h2 className="text-2xl font-black tracking-wider text-slate-900">
                お知らせ
              </h2>
            </div>
          </div>
          <div className="overflow-hidden rounded border border-slate-200 bg-white">
            {[
              {
                date: "2026.03.01",
                cat: "お知らせ",
                title: "ホームページをリニューアルしました",
              },
              {
                date: "2026.02.15",
                cat: "求人",
                title: "新規求人情報を更新しました",
              },
              {
                date: "2026.01.10",
                cat: "お知らせ",
                title: "年末年始休業のお知らせ",
              },
            ].map((news, i) => (
              <a
                key={i}
                href="#"
                className="flex flex-col gap-2 border-b border-slate-100 px-6 py-5 transition-colors last:border-b-0 hover:bg-santo-sky/50 sm:flex-row sm:items-center sm:gap-5"
              >
                <time className="text-[13px] font-bold tracking-wider text-slate-400">
                  {news.date}
                </time>
                <span className="inline-flex w-fit bg-santo-navy px-2.5 py-0.5 text-[10px] font-black tracking-wider text-white">
                  {news.cat}
                </span>
                <span className="text-[13px] font-bold text-slate-700">
                  {news.title}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-[#dce8f5] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
          <p className="mb-3 text-[11px] font-black tracking-[0.25em] text-santo-blue">
            CONTACT
          </p>
          <h2 className="mb-4 text-2xl font-black tracking-wider text-slate-800 sm:text-3xl">
            まずはお気軽にご相談ください
          </h2>
          <p className="mx-auto mb-10 max-w-md text-[13px] leading-[1.9] text-slate-500">
            お仕事探し・人材のご相談、どちらもお気軽にお問い合わせください。
          </p>
          <div className="flex flex-col items-center justify-center gap-5 sm:flex-row">
            <LinkButton
              href="/contact"
              size="xl"
              className="bg-santo-navy text-white hover:bg-santo-blue"
            >
              お問い合わせはこちら
              <ArrowRight className="h-4 w-4" />
            </LinkButton>
            <div className="flex flex-col items-center">
              <p className="text-[10px] font-bold tracking-widest text-slate-400">
                TEL
              </p>
              <a
                href="tel:000-000-0000"
                className="text-2xl font-black tracking-wider text-slate-800"
              >
                000-000-0000
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
