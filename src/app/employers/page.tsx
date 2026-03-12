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

export const metadata: Metadata = {
  title: "人材をお探しの企業様",
  description:
    "株式会社サントーの人材派遣サービスのご案内。貴社のニーズに合った最適な人材をご提案いたします。",
};

const steps = [
  {
    icon: Phone,
    num: "01",
    title: "お問い合わせ",
    desc: "まずはお電話またはフォームよりお気軽にご相談ください。",
  },
  {
    icon: FileSearch,
    num: "02",
    title: "ヒアリング",
    desc: "貴社の求める人材像・業務内容・就業条件などを詳しくお伺いします。",
  },
  {
    icon: Handshake,
    num: "03",
    title: "人材のご提案",
    desc: "ご要望に合った人材をご提案し、職場見学の調整を行います。",
  },
  {
    icon: UserCheck,
    num: "04",
    title: "派遣開始・フォロー",
    desc: "派遣契約の締結後、就業を開始。定期的なフォローで安定稼働をサポートします。",
  },
];


export default function EmployersPage() {
  return (
    <>
      <PageHeader label="FOR EMPLOYERS" title="人材をお探しの企業様" subtitle="貴社に最適な人材を、迅速にご提案いたします。" image="/images/employers_factory_boss_wide.png" />

      {/* Lead */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-2xl font-black tracking-wider text-slate-900 sm:text-3xl">
              貴社の人材課題を解決します
            </h2>
            <p className="text-[15px] leading-[2.2] text-slate-600">
              株式会社サントーは、製造業・物流業を中心に、幅広い業種の企業様に人材派遣サービスを提供しています。人手不足の解消や業務効率化など、貴社の課題に合わせた最適な人材ソリューションをご提案いたします。
            </p>
          </div>
        </div>
      </section>

      {/* Strengths */}
      <section className="border-t border-slate-200 bg-santo-gray py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="mb-2 text-[11px] font-black tracking-[0.25em] text-santo-light">
            STRENGTH
          </p>
          <h2 className="mb-10 text-2xl font-black tracking-wider text-slate-900">
            サントーの強み
          </h2>
          <StrengthTimeline />
        </div>
      </section>

      {/* フルワイド写真セクション */}
      <section className="relative h-[360px] overflow-hidden sm:h-[440px] lg:h-[500px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/employers_factory_boss_wide.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-santo-navy/80 via-santo-navy/50 to-transparent" />
        <div className="relative flex h-full items-center">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
            <p className="mb-3 text-[11px] font-black tracking-[0.3em] text-santo-accent">
              PARTNER
            </p>
            <h2 className="max-w-lg text-3xl font-black leading-[1.6] tracking-wider text-white sm:text-4xl lg:text-5xl">
              貴社の成長を、
              <br />
              人材の力で支える。
            </h2>
            <div className="mt-5 h-1 w-16 rounded-full bg-santo-accent" />
            <p className="mt-6 max-w-md text-[14px] leading-[2] text-white/70">
              必要な時に、必要な人材を。サントーは企業様のパートナーとして最適な人材ソリューションを提供します。
            </p>
          </div>
        </div>
      </section>

      {/* Flow */}
      <section className="border-t border-slate-200 bg-santo-gray py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="mb-2 text-[11px] font-black tracking-[0.25em] text-santo-light">
            FLOW
          </p>
          <h2 className="mb-10 text-2xl font-black tracking-wider text-slate-900">
            ご利用の流れ
          </h2>
          {/* モバイル: 縦並び */}
          <div className="flex flex-col gap-4 lg:hidden">
            {steps.map((step) => (
              <div key={step.title} className="flex flex-col rounded-xl bg-white p-7">
                <span className="text-[38px] font-light leading-none text-santo-navy/20">
                  {step.num}
                </span>
                <h3 className="mt-2 text-[15px] font-black tracking-wider text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-[12px] leading-[1.9] text-slate-500">
                  {step.desc}
                </p>
                <div className="mt-auto flex justify-end pt-4">
                  <step.icon className="h-14 w-14 text-slate-300" strokeWidth={1} />
                </div>
              </div>
            ))}
          </div>
          {/* デスクトップ: 矢印型横並び */}
          <div className="hidden lg:flex">
            {steps.map((step, i) => {
              const isFirst = i === 0;
              const isLast = i === steps.length - 1;
              const clip = isFirst
                ? "polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%)"
                : isLast
                  ? "polygon(0 0, 100% 0, 100% 100%, 0 100%, 20px 50%)"
                  : "polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%, 20px 50%)";
              return (
                <div
                  key={step.title}
                  className="flex flex-1 flex-col bg-white px-8 py-7"
                  style={{
                    clipPath: clip,
                    marginLeft: isFirst ? 0 : -10,
                    paddingLeft: isFirst ? 32 : 40,
                  }}
                >
                  <span className="text-[38px] font-light leading-none text-santo-navy/20">
                    {step.num}
                  </span>
                  <h3 className="mt-2 text-[15px] font-black tracking-wider text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[12px] leading-[1.9] text-slate-500">
                    {step.desc}
                  </p>
                  <div className="mt-auto flex justify-end pt-4">
                    <step.icon className="h-14 w-14 text-slate-300" strokeWidth={1} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 対応業種 */}
      <section className="border-t border-slate-200 bg-santo-gray py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="mb-2 text-[11px] font-black tracking-[0.25em] text-santo-light">
            INDUSTRY
          </p>
          <h2 className="mb-10 text-2xl font-black tracking-wider text-slate-900">
            対応業種・職種
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "製造業（組立・加工・検査）",
              "物流・倉庫（仕分け・ピッキング）",
              "食品加工・包装",
              "事務・オフィスワーク",
              "建設・土木関連",
              "その他各種業種",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-5 py-4 transition-shadow duration-300 hover:shadow-md"
              >
                <span className="h-2 w-2 shrink-0 rounded-full bg-santo-blue" />
                <span className="text-[13px] font-bold tracking-wide text-slate-700">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#dce8f5] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
          <p className="mb-3 text-[11px] font-black tracking-[0.25em] text-santo-blue">
            CONTACT
          </p>
          <h2 className="mb-4 text-2xl font-black tracking-wider text-slate-800 sm:text-3xl">
            人材に関するご相談はお気軽にどうぞ
          </h2>
          <p className="mx-auto mb-10 max-w-md text-[13px] leading-[1.9] text-slate-500">
            まずは貴社の課題をお聞かせください。最適なプランをご提案いたします。
          </p>
          <div className="flex flex-col items-center justify-center gap-5 sm:flex-row">
            <LinkButton
              href="/contact"
              size="xl"
              className="bg-santo-navy text-white hover:bg-santo-blue"
            >
              お問い合わせ
              <ArrowRight className="h-4 w-4" />
            </LinkButton>
            <div className="flex flex-col items-center">
              <p className="text-[10px] font-bold tracking-widest text-slate-400">
                TEL
              </p>
              <a
                href="tel:0463-24-1722"
                className="flex items-center gap-2 text-2xl font-black tracking-wider text-slate-800"
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
