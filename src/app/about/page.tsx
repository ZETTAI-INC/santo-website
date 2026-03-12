import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { StairsTimeline } from "@/components/StairsTimeline";

export const metadata: Metadata = {
  title: "会社概要",
  description:
    "株式会社サントーの会社概要、企業理念、代表挨拶、沿革をご紹介します。",
};

const companyInfo = [
  { label: "会社名", value: "株式会社サントー" },
  { label: "英文社名", value: "SANTO Co., Ltd." },
  { label: "代表者", value: "代表取締役 ○○ ○○" },
  { label: "設立", value: "○○年○月○日" },
  { label: "資本金", value: "○○万円" },
  { label: "事業内容", value: "一般労働者派遣事業" },
  { label: "許可番号", value: "派○○-○○○○○○" },
  { label: "所在地", value: "〒254-0807 神奈川県平塚市代官町7-29" },
  { label: "TEL", value: "0463-24-1722" },
  { label: "FAX", value: "0463-24-1722" },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader label="COMPANY" title="会社概要" subtitle="信頼と実績で、人と企業の架け橋となります。" image="/images/company_hero_factory_people.png" />

      {/* 代表挨拶 */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="mb-2 text-[11px] font-black tracking-[0.25em] text-santo-light">
            MESSAGE
          </p>
          <h2 className="mb-10 text-2xl font-black tracking-wider text-slate-900">
            代表挨拶
          </h2>
          <div className="grid gap-10 lg:grid-cols-5">
            <div className="flex h-72 items-center justify-center bg-santo-gray text-sm font-bold text-slate-400 lg:col-span-2 lg:h-auto">
              代表写真
            </div>
            <div className="lg:col-span-3">
              <p className="mb-5 text-[15px] leading-[2.2] text-slate-600">
                株式会社サントーのホームページをご覧いただき、誠にありがとうございます。
              </p>
              <p className="mb-5 text-[15px] leading-[2.2] text-slate-600">
                当社は、人材派遣事業を通じて、求職者の皆様と企業の皆様をつなぐ架け橋として日々努めてまいりました。一人ひとりの個性やスキルを大切にし、最適なマッチングを実現することで、働く方の充実したキャリア形成と、企業様の発展に貢献してまいります。
              </p>
              <p className="mb-8 text-[15px] leading-[2.2] text-slate-600">
                今後とも、皆様に信頼していただけるサービスの提供を目指し、社員一同精進してまいりますので、何卒よろしくお願い申し上げます。
              </p>
              <div className="border-l-2 border-santo-navy pl-5">
                <p className="text-sm font-black tracking-wider text-slate-800">
                  代表取締役
                </p>
                <p className="mt-1 text-xl font-black tracking-wider text-santo-navy">
                  ○○ ○○
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 企業理念 */}
      <section className="relative bg-[#dce8f5] py-20 sm:py-28 bg-cover bg-center" style={{ backgroundImage: "url('/images/philosophy_bg_geometric.png')" }}>
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
          <p className="mb-2 text-[11px] font-black tracking-[0.25em] text-santo-light">
            PHILOSOPHY
          </p>
          <h2 className="mb-10 text-2xl font-black tracking-wider text-slate-900">
            企業理念
          </h2>
          <div className="mx-auto max-w-3xl py-12 sm:py-16">
            <p className="text-3xl font-black leading-[1.8] tracking-[0.1em] text-santo-navy sm:text-4xl lg:text-5xl">
              人と企業の架け橋となり、
              <br />
              地域社会の発展に貢献する
            </p>
          </div>
          <p className="mx-auto max-w-lg text-[14px] leading-[2] text-slate-500">
            私たちは、働く人の可能性を信じ、一人ひとりに寄り添ったサポートを通じて、企業と人材の最適なマッチングを追求します。
          </p>
        </div>
      </section>

      {/* 会社情報テーブル */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="mb-2 text-[11px] font-black tracking-[0.25em] text-santo-light">
            OVERVIEW
          </p>
          <h2 className="mb-10 text-2xl font-black tracking-wider text-slate-900">
            会社情報
          </h2>
          <div className="overflow-hidden rounded-xl border border-slate-200">
            <table className="w-full">
              <tbody>
                {companyInfo.map((item, i) => (
                  <tr
                    key={item.label}
                    className={
                      i % 2 === 0 ? "bg-white" : "bg-santo-gray"
                    }
                  >
                    <th className="w-40 border-r border-slate-200 px-6 py-5 text-left text-[13px] font-black tracking-wider text-santo-navy sm:w-52">
                      {item.label}
                    </th>
                    <td className="px-6 py-5 text-[13px] text-slate-600">
                      {item.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 沿革 */}
      <section className="bg-[#f8fafc] py-20 sm:py-28 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-16">
            <p className="mb-2 text-[11px] font-black tracking-[0.25em] text-[#3b82f6]">
              HISTORY
            </p>
            <h2 className="text-[32px] font-bold tracking-wider text-[#1e3a8a] relative inline-block">
              沿革
              <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-10 h-[3px] bg-[#3b82f6]" />
            </h2>
          </div>
          <StairsTimeline />
        </div>
      </section>
    </>
  );
}
