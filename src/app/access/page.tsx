import type { Metadata } from "next";
import { MapPin, Train, Car, Clock } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "アクセス",
  description: "株式会社サントーへのアクセス方法をご案内します。",
};

export default function AccessPage() {
  return (
    <>
      <PageHeader label="ACCESS" title="アクセス" />

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Map */}
            <div className="overflow-hidden rounded border border-slate-200">
              <div className="flex h-80 items-center justify-center bg-santo-gray text-sm font-bold text-slate-400 lg:h-full lg:min-h-[400px]">
                Google Maps
              </div>
            </div>

            {/* Info */}
            <div>
              <h2 className="mb-8 text-2xl font-black tracking-wider text-slate-900">
                株式会社サントー
              </h2>

              <div className="space-y-6">
                {[
                  {
                    icon: MapPin,
                    label: "所在地",
                    content: "〒000-0000\n○○県○○市○○ ○-○-○",
                  },
                  {
                    icon: Train,
                    label: "電車でお越しの方",
                    content: '○○線「○○駅」より徒歩○分',
                  },
                  {
                    icon: Car,
                    label: "お車でお越しの方",
                    content: "○○ICより約○分\n駐車場あり（○台分）",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex gap-4 border-b border-slate-100 pb-6 last:border-0 last:pb-0"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-santo-sky">
                      <item.icon className="h-5 w-5 text-santo-blue" />
                    </div>
                    <div>
                      <p className="mb-1 text-[11px] font-black tracking-[0.15em] text-santo-light">
                        {item.label}
                      </p>
                      <p className="text-[13px] leading-[1.9] text-slate-600 whitespace-pre-line">
                        {item.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded bg-santo-navy p-6">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="h-4 w-4 text-santo-accent" />
                  <p className="text-[11px] font-black tracking-[0.15em] text-santo-accent">
                    営業時間
                  </p>
                </div>
                <p className="text-[15px] font-bold text-white">
                  月曜日〜金曜日 9:00〜18:00
                </p>
                <p className="mt-1.5 text-[11px] text-slate-400">
                  ※土日祝日はお休みをいただいております
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
