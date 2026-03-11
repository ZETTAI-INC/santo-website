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

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-santo-navy">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#0f2b4a_0%,#1a4f8b_50%,#0f2b4a_100%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-santo-accent/20" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:py-40">
          <div className="max-w-3xl">
            <div className="mb-6 inline-block border border-santo-accent/30 bg-santo-accent/10 px-4 py-1.5">
              <p className="text-[11px] font-black tracking-[0.25em] text-santo-accent">
                STAFFING SERVICE
              </p>
            </div>
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

      {/* Two Column CTA */}
      <section className="relative -mt-8 px-4 sm:px-6">
        <div className="mx-auto grid max-w-7xl gap-0 overflow-hidden rounded shadow-xl sm:grid-cols-2">
          <Link
            href="/jobseekers"
            className="group flex items-center gap-5 bg-white p-7 transition-colors hover:bg-santo-sky sm:p-8"
          >
            <div className="flex h-14 w-14 shrink-0 items-center justify-center bg-santo-sky text-santo-blue">
              <Briefcase className="h-7 w-7" />
            </div>
            <div className="flex-1">
              <h3 className="text-base font-black tracking-wider text-slate-900">
                仕事をお探しの方
              </h3>
              <p className="mt-1 text-xs text-slate-500">
                あなたに合ったお仕事をご紹介
              </p>
            </div>
            <ChevronRight className="h-5 w-5 text-slate-300 transition-colors group-hover:text-santo-blue" />
          </Link>
          <Link
            href="/employers"
            className="group flex items-center gap-5 border-t border-slate-100 bg-white p-7 transition-colors hover:bg-santo-sky sm:border-l sm:border-t-0 sm:p-8"
          >
            <div className="flex h-14 w-14 shrink-0 items-center justify-center bg-santo-navy/5 text-santo-navy">
              <Building2 className="h-7 w-7" />
            </div>
            <div className="flex-1">
              <h3 className="text-base font-black tracking-wider text-slate-900">
                人材をお探しの企業様
              </h3>
              <p className="mt-1 text-xs text-slate-500">
                最適な人材をご提案いたします
              </p>
            </div>
            <ChevronRight className="h-5 w-5 text-slate-300 transition-colors group-hover:text-santo-navy" />
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-14 text-center">
            <p className="mb-3 text-[11px] font-black tracking-[0.25em] text-santo-light">
              WHY SANTO
            </p>
            <h2 className="text-2xl font-black tracking-wider text-slate-900 sm:text-3xl">
              サントーが選ばれる理由
            </h2>
            <div className="mx-auto mt-4 h-0.5 w-12 bg-santo-navy" />
          </div>
          <div className="grid gap-0 overflow-hidden border border-slate-200 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: HeartHandshake,
                title: "きめ細やかなサポート",
                desc: "就業前から就業中まで、専任の担当者が丁寧にフォローいたします。",
              },
              {
                icon: Shield,
                title: "安心の雇用管理",
                desc: "社会保険・労働保険の完備はもちろん、安全衛生管理も徹底しています。",
              },
              {
                icon: Clock,
                title: "迅速な対応",
                desc: "お客様のご要望に素早くお応えし、最適な人材を速やかにご提案いたします。",
              },
              {
                icon: Users,
                title: "豊富な人材ネットワーク",
                desc: "幅広い職種・業種に対応できる、多様な人材をご用意しています。",
              },
              {
                icon: Briefcase,
                title: "多様な雇用形態",
                desc: "派遣・紹介予定派遣など、ニーズに合った雇用形態をご提案します。",
              },
              {
                icon: Building2,
                title: "地域密着",
                desc: "地域の企業様との信頼関係を大切にし、地元に根ざしたサービスを提供します。",
              },
            ].map((feature, i) => (
              <div
                key={feature.title}
                className="border-b border-r border-slate-200 p-8 last:border-b-0 sm:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0 lg:[&:nth-last-child(-n+3)]:border-b-0 sm:[&:nth-last-child(-n+2)]:border-b-0 lg:[&:nth-last-child(-n+2)]:border-b"
              >
                <feature.icon className="mb-5 h-8 w-8 text-santo-blue" strokeWidth={1.5} />
                <h3 className="mb-2 text-[15px] font-black tracking-wider text-slate-900">
                  {feature.title}
                </h3>
                <p className="text-[13px] leading-[1.9] text-slate-500">
                  {feature.desc}
                </p>
              </div>
            ))}
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

      {/* Ranking + Info */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* ランキング - 目立つ */}
            <a
              href="#"
              className="group relative overflow-hidden rounded border-2 border-santo-light bg-santo-sky p-8 transition-all hover:shadow-lg"
            >
              <div className="absolute right-0 top-0 bg-santo-light px-4 py-1.5">
                <span className="text-[10px] font-black tracking-[0.2em] text-white">
                  PICK UP
                </span>
              </div>
              <div className="flex items-start gap-5">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white">
                  <Star className="h-8 w-8 text-santo-light" />
                </div>
                <div className="pt-1">
                  <h3 className="mb-2 text-lg font-black tracking-wider text-slate-900 group-hover:text-santo-blue">
                    派遣会社おすすめランキング
                  </h3>
                  <p className="text-[13px] leading-[1.8] text-slate-600">
                    株式会社アドバンスフローが運営する派遣会社おすすめランキングに掲載されています。
                  </p>
                  <span className="mt-3 inline-flex items-center text-sm font-bold text-santo-blue">
                    詳しく見る
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </span>
                </div>
              </div>
            </a>

            {/* 情報公開 */}
            <a
              href="#"
              className="group flex items-start gap-5 rounded border border-slate-200 bg-white p-8 transition-all hover:shadow-lg"
            >
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-santo-gray">
                <FileText className="h-8 w-8 text-slate-500" />
              </div>
              <div className="pt-1">
                <h3 className="mb-2 text-lg font-black tracking-wider text-slate-900 group-hover:text-santo-blue">
                  労働者派遣事業に係る情報公開
                </h3>
                <p className="text-[13px] leading-[1.8] text-slate-500">
                  労働者派遣法に基づく情報公開を行っています。
                </p>
                <span className="mt-3 inline-flex items-center text-sm font-bold text-slate-500 group-hover:text-santo-blue">
                  詳しく見る
                  <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-santo-navy py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
          <p className="mb-3 text-[11px] font-black tracking-[0.25em] text-santo-accent">
            CONTACT
          </p>
          <h2 className="mb-4 text-2xl font-black tracking-wider text-white sm:text-3xl">
            まずはお気軽にご相談ください
          </h2>
          <p className="mx-auto mb-10 max-w-md text-[13px] leading-[1.9] text-slate-400">
            お仕事探し・人材のご相談、どちらもお気軽にお問い合わせください。
          </p>
          <div className="flex flex-col items-center justify-center gap-5 sm:flex-row">
            <LinkButton
              href="/contact"
              size="xl"
              className="bg-white text-santo-navy hover:bg-slate-100"
            >
              お問い合わせはこちら
              <ArrowRight className="h-4 w-4" />
            </LinkButton>
            <div className="flex flex-col items-center">
              <p className="text-[10px] font-bold tracking-widest text-slate-500">
                TEL
              </p>
              <a
                href="tel:000-000-0000"
                className="text-2xl font-black tracking-wider text-white"
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
