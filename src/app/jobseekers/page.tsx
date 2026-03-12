import type { Metadata } from "next";
import {
  ArrowRight,
  ClipboardList,
  MessageSquare,
  Briefcase,
  ThumbsUp,
  MapPin,
  Clock,
  Banknote,
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
      <PageHeader label="FOR JOB SEEKERS" title="仕事をお探しの方" subtitle="あなたにぴったりのお仕事を、一緒に見つけましょう。" image="/images/jobseekers_hero.png" />

      {/* Merits */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="mb-2 text-[11px] font-black tracking-[0.25em] text-santo-light">
            MERIT
          </p>
          <h2 className="mb-10 text-2xl font-black tracking-wider text-slate-900">
            サントーで働くメリット
          </h2>
          <HexMerits />
        </div>
      </section>

      {/* Numbers */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        {/* 上波 */}
        <div className="absolute -top-px left-0 w-full">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none" style={{ height: 80 }}>
            <path fill="#dceefb">
              <animate attributeName="d" dur="6s" repeatCount="indefinite" values="
                M0,0 L1440,0 L1440,60 Q1080,30 720,60 Q360,80 0,55 Z;
                M0,0 L1440,0 L1440,45 Q1080,75 720,45 Q360,15 0,60 Z;
                M0,0 L1440,0 L1440,60 Q1080,30 720,60 Q360,80 0,55 Z
              " />
            </path>
          </svg>
        </div>
        {/* 下波 */}
        <div className="absolute -bottom-px left-0 w-full">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none" style={{ height: 80 }}>
            <path fill="#dceefb">
              <animate attributeName="d" dur="6s" repeatCount="indefinite" values="
                M0,55 Q360,80 720,55 Q1080,30 1440,60 L1440,80 L0,80 Z;
                M0,60 Q360,25 720,55 Q1080,75 1440,45 L1440,80 L0,80 Z;
                M0,55 Q360,80 720,55 Q1080,30 1440,60 L1440,80 L0,80 Z
              " />
            </path>
          </svg>
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-14 flex flex-col items-center">
            <h2 className="text-2xl font-black tracking-wider text-slate-900 sm:text-3xl">
              数字で見るサントー
            </h2>
            <div className="numbers-line mt-4 h-[2px] bg-slate-900" />
          </div>
          <CountUpStats />
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
          {/* モバイル: 縦並び / デスクトップ: 矢印型横並び */}
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

      {/* Job Categories */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="mb-2 text-[11px] font-black tracking-[0.25em] text-santo-light">
            JOB TYPE
          </p>
          <h2 className="mb-10 text-2xl font-black tracking-wider text-slate-900">
            取り扱い職種
          </h2>
          <JobCategories />
        </div>
      </section>

      {/* Pickup Jobs */}
      <section className="border-t border-slate-200 bg-santo-gray py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="mb-2 text-[11px] font-black tracking-[0.25em] text-santo-light">
            PICKUP
          </p>
          <h2 className="mb-10 text-2xl font-black tracking-wider text-slate-900">
            注目の求人
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "製造ラインの組立スタッフ",
                category: "製造・軽作業",
                location: "大阪府東大阪市",
                salary: "時給 1,300円〜1,500円",
                time: "8:00〜17:00（土日休み）",
                tags: ["未経験OK", "社保完備", "交通費支給"],
              },
              {
                title: "一般事務・データ入力",
                category: "事務・オフィスワーク",
                location: "大阪府大阪市中央区",
                salary: "時給 1,400円〜1,600円",
                time: "9:00〜18:00（土日祝休み）",
                tags: ["駅チカ", "残業少なめ", "経験者優遇"],
              },
              {
                title: "倉庫内ピッキング・仕分け",
                category: "物流・倉庫",
                location: "大阪府摂津市",
                salary: "時給 1,200円〜1,400円",
                time: "9:00〜18:00（シフト制）",
                tags: ["未経験OK", "車通勤OK", "即日スタート"],
              },
            ].map((job) => (
              <div
                key={job.title}
                className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-shadow duration-300 hover:shadow-lg"
              >
                <div className="border-b border-slate-100 bg-santo-navy px-6 py-3">
                  <span className="text-[11px] font-black tracking-wider text-santo-accent">
                    {job.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-4 text-[16px] font-black tracking-wider text-slate-900">
                    {job.title}
                  </h3>
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-2 text-[12px] text-slate-600">
                      <MapPin className="h-4 w-4 shrink-0 text-slate-400" />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-2 text-[12px] text-slate-600">
                      <Banknote className="h-4 w-4 shrink-0 text-slate-400" />
                      {job.salary}
                    </div>
                    <div className="flex items-center gap-2 text-[12px] text-slate-600">
                      <Clock className="h-4 w-4 shrink-0 text-slate-400" />
                      {job.time}
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-santo-sky px-3 py-1 text-[11px] font-bold text-santo-blue"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto pt-5">
                    <LinkButton
                      href="/contact"
                      className="w-full justify-center bg-santo-navy text-white hover:bg-santo-blue"
                    >
                      詳細を見る
                      <ArrowRight className="h-4 w-4" />
                    </LinkButton>
                  </div>
                </div>
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
      <section className="bg-[#dce8f5] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
          <p className="mb-3 text-[11px] font-black tracking-[0.25em] text-santo-blue">
            ENTRY
          </p>
          <h2 className="mb-4 text-2xl font-black tracking-wider text-slate-800 sm:text-3xl">
            お仕事をお探しの方はお気軽にご連絡ください
          </h2>
          <p className="mx-auto mb-10 max-w-md text-[13px] leading-[1.9] text-slate-500">
            ご登録は無料です。まずはお問い合わせフォームまたはお電話にてご連絡ください。
          </p>
          <LinkButton
            href="/contact"
            size="xl"
            className="bg-santo-navy text-white hover:bg-santo-blue"
          >
            お問い合わせ
            <ArrowRight className="h-4 w-4" />
          </LinkButton>
        </div>
      </section>
    </>
  );
}
