import type { Metadata } from "next";
import {
  CheckCircle,
  ArrowRight,
  ClipboardList,
  MessageSquare,
  Briefcase,
  ThumbsUp,
} from "lucide-react";
import { LinkButton } from "@/components/LinkButton";
import { PageHeader } from "@/components/PageHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "仕事をお探しの方",
  description:
    "株式会社サントーで、あなたに合ったお仕事を見つけませんか？派遣のお仕事情報や登録の流れをご案内します。",
};

const steps = [
  {
    icon: ClipboardList,
    num: "01",
    title: "お問い合わせ・ご登録",
    desc: "お電話またはお問い合わせフォームよりご連絡ください。ご来社いただき、スキルやご希望をお伺いします。",
  },
  {
    icon: MessageSquare,
    num: "02",
    title: "お仕事のご紹介",
    desc: "あなたの経験・スキル・希望条件に合ったお仕事をご紹介します。",
  },
  {
    icon: Briefcase,
    num: "03",
    title: "職場見学・就業開始",
    desc: "職場の雰囲気を事前に確認いただけます。就業条件にご納得いただいた上で勤務開始となります。",
  },
  {
    icon: ThumbsUp,
    num: "04",
    title: "就業中のフォロー",
    desc: "就業後も担当者が定期的にフォロー。困りごとがあればいつでもご相談ください。",
  },
];

const jobs = [
  {
    category: "製造・軽作業",
    examples: ["組立作業", "検品・梱包", "フォークリフト", "機械オペレーター"],
  },
  {
    category: "事務・オフィスワーク",
    examples: ["一般事務", "データ入力", "経理事務", "受付"],
  },
  {
    category: "物流・倉庫",
    examples: ["ピッキング", "仕分け", "入出荷作業", "在庫管理"],
  },
];

const faqs = [
  {
    q: "派遣で働くのが初めてですが大丈夫ですか？",
    a: "はい、大丈夫です。未経験の方でもしっかりサポートいたします。お仕事内容の説明から就業後のフォローまで、担当者が丁寧に対応いたします。",
  },
  {
    q: "社会保険には加入できますか？",
    a: "はい、一定の条件を満たした方は社会保険（健康保険・厚生年金・雇用保険）にご加入いただけます。",
  },
  {
    q: "登録に費用はかかりますか？",
    a: "いいえ、ご登録は無料です。お気軽にお問い合わせください。",
  },
  {
    q: "外国籍でも働けますか？",
    a: "はい、在留資格をお持ちの方であればご登録いただけます。多言語でのサポートも行っておりますのでご安心ください。",
  },
];

export default function JobseekersPage() {
  return (
    <>
      <PageHeader label="FOR JOB SEEKERS" title="仕事をお探しの方" />

      {/* Merits */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="mb-2 text-[11px] font-black tracking-[0.25em] text-santo-light">
            MERIT
          </p>
          <h2 className="mb-10 text-2xl font-black tracking-wider text-slate-900">
            サントーで働くメリット
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "あなたの希望に合ったお仕事をご紹介",
              "就業前の職場見学が可能",
              "専任担当者による手厚いフォロー",
              "社会保険・有給休暇完備",
              "未経験OKのお仕事も多数",
              "多言語対応で外国籍の方も安心",
            ].map((merit) => (
              <div
                key={merit}
                className="flex items-start gap-3 border-l-2 border-santo-light bg-santo-sky/50 p-5"
              >
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-santo-light" />
                <p className="text-[13px] font-bold tracking-wide text-slate-700">
                  {merit}
                </p>
              </div>
            ))}
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
            ご登録からお仕事開始までの流れ
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

      {/* Job Categories */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="mb-2 text-[11px] font-black tracking-[0.25em] text-santo-light">
            JOB TYPE
          </p>
          <h2 className="mb-10 text-2xl font-black tracking-wider text-slate-900">
            取り扱い職種
          </h2>
          <div className="grid gap-5 sm:grid-cols-3">
            {jobs.map((job) => (
              <div
                key={job.category}
                className="rounded border border-slate-200 bg-white"
              >
                <div className="border-b border-slate-200 bg-santo-navy px-6 py-3.5">
                  <h3 className="text-[13px] font-black tracking-wider text-white">
                    {job.category}
                  </h3>
                </div>
                <ul className="p-6 space-y-3">
                  {job.examples.map((ex) => (
                    <li
                      key={ex}
                      className="flex items-center gap-2.5 text-[13px] text-slate-600"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 bg-santo-light" />
                      {ex}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-slate-200 bg-santo-gray py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="mb-2 text-[11px] font-black tracking-[0.25em] text-santo-light">
            FAQ
          </p>
          <h2 className="mb-10 text-2xl font-black tracking-wider text-slate-900">
            よくある質問
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
      <section className="bg-santo-navy py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
          <p className="mb-3 text-[11px] font-black tracking-[0.25em] text-santo-accent">
            ENTRY
          </p>
          <h2 className="mb-4 text-2xl font-black tracking-wider text-white sm:text-3xl">
            お仕事をお探しの方はお気軽にご連絡ください
          </h2>
          <p className="mx-auto mb-10 max-w-md text-[13px] leading-[1.9] text-slate-400">
            ご登録は無料です。まずはお問い合わせフォームまたはお電話にてご連絡ください。
          </p>
          <LinkButton
            href="/contact"
            size="xl"
            className="bg-white text-santo-navy hover:bg-slate-100"
          >
            お問い合わせ
            <ArrowRight className="h-4 w-4" />
          </LinkButton>
        </div>
      </section>
    </>
  );
}
