import type { Metadata } from "next";
import {
  ArrowRight,
  Phone,
  FileSearch,
  Handshake,
  UserCheck,
  HeadphonesIcon,
  CheckSquare,
} from "lucide-react";
import { LinkButton } from "@/components/LinkButton";
import { PageHeader } from "@/components/PageHeader";

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

const strengths = [
  {
    title: "迅速な人材提案",
    desc: "お問い合わせから最短で人材をご提案。急な人員ニーズにもお応えします。",
  },
  {
    title: "丁寧なマッチング",
    desc: "スキル・経験だけでなく、人柄や職場との相性も考慮した人選を行います。",
  },
  {
    title: "充実のフォロー体制",
    desc: "派遣スタッフへの定期的なフォローにより、安定した就業をサポートします。",
  },
  {
    title: "コスト削減",
    desc: "採用にかかる時間とコストを大幅に削減。必要な時に必要な人材を確保できます。",
  },
  {
    title: "多様な人材",
    desc: "製造・物流・事務など幅広い職種に対応できる人材ネットワークを保有しています。",
  },
  {
    title: "コンプライアンス遵守",
    desc: "労働関係法令を遵守し、安心してご利用いただけるサービスを提供します。",
  },
];

export default function EmployersPage() {
  return (
    <>
      <PageHeader label="FOR EMPLOYERS" title="人材をお探しの企業様" />

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
          <div className="grid gap-0 overflow-hidden rounded border border-slate-200 bg-white sm:grid-cols-2 lg:grid-cols-3">
            {strengths.map((s, i) => (
              <div
                key={s.title}
                className="border-b border-r border-slate-200 p-7 last:border-b-0 sm:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0 lg:[&:nth-last-child(-n+3)]:border-b-0 sm:[&:nth-last-child(-n+2)]:border-b-0 lg:[&:nth-last-child(-n+2)]:border-b"
              >
                <div className="mb-3 flex items-center gap-2">
                  <CheckSquare className="h-4 w-4 text-santo-light" />
                  <h3 className="text-[13px] font-black tracking-wider text-santo-navy">
                    {s.title}
                  </h3>
                </div>
                <p className="text-[12px] leading-[1.9] text-slate-500">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flow */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="mb-2 text-[11px] font-black tracking-[0.25em] text-santo-light">
            FLOW
          </p>
          <h2 className="mb-10 text-2xl font-black tracking-wider text-slate-900">
            ご利用の流れ
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div
                key={step.title}
                className="rounded border border-slate-200 bg-white p-6"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="text-3xl font-black tracking-tighter text-santo-navy/15">
                    {step.num}
                  </span>
                  <step.icon className="h-6 w-6 text-santo-blue" strokeWidth={1.5} />
                </div>
                <h3 className="mb-2 text-[13px] font-black tracking-wider text-slate-900">
                  {step.title}
                </h3>
                <p className="text-[12px] leading-[1.9] text-slate-500">
                  {step.desc}
                </p>
              </div>
            ))}
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
                className="flex items-center gap-3 rounded border border-slate-200 bg-white px-5 py-4"
              >
                <span className="h-2 w-2 shrink-0 bg-santo-navy" />
                <span className="text-[13px] font-bold tracking-wide text-slate-700">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-santo-navy py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
          <p className="mb-3 text-[11px] font-black tracking-[0.25em] text-santo-accent">
            CONTACT
          </p>
          <h2 className="mb-4 text-2xl font-black tracking-wider text-white sm:text-3xl">
            人材に関するご相談はお気軽にどうぞ
          </h2>
          <p className="mx-auto mb-10 max-w-md text-[13px] leading-[1.9] text-slate-400">
            まずは貴社の課題をお聞かせください。最適なプランをご提案いたします。
          </p>
          <div className="flex flex-col items-center justify-center gap-5 sm:flex-row">
            <LinkButton
              href="/contact"
              size="xl"
              className="bg-white text-santo-navy hover:bg-slate-100"
            >
              お問い合わせ
              <ArrowRight className="h-4 w-4" />
            </LinkButton>
            <div className="flex flex-col items-center">
              <p className="text-[10px] font-bold tracking-widest text-slate-500">
                TEL
              </p>
              <a
                href="tel:000-000-0000"
                className="flex items-center gap-2 text-2xl font-black tracking-wider text-white"
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
