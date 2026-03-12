"use client";

import { useEffect, useRef, useState } from "react";
import { Wrench, Monitor, Package, ChevronRight } from "lucide-react";

const categories = [
  {
    id: "manufacturing",
    label: "製造・軽作業",
    icon: Wrench,
    jobs: [
      { title: "組立作業", desc: "部品の組み立て・加工作業" },
      { title: "検品・梱包", desc: "製品の品質チェック・梱包作業" },
      { title: "フォークリフト", desc: "倉庫内での荷物運搬作業" },
      { title: "機械オペレーター", desc: "製造機械の操作・管理" },
    ],
  },
  {
    id: "office",
    label: "事務・オフィスワーク",
    icon: Monitor,
    jobs: [
      { title: "一般事務", desc: "書類作成・電話対応・庶務業務" },
      { title: "データ入力", desc: "各種データの入力・集計作業" },
      { title: "経理事務", desc: "経理・会計関連の事務処理" },
      { title: "受付", desc: "来客対応・電話応対業務" },
    ],
  },
  {
    id: "logistics",
    label: "物流・倉庫",
    icon: Package,
    jobs: [
      { title: "ピッキング", desc: "指示書に基づく商品の取り出し" },
      { title: "仕分け", desc: "商品の分類・整理作業" },
      { title: "入出荷作業", desc: "商品の入荷・出荷処理" },
      { title: "在庫管理", desc: "在庫数の管理・棚卸し作業" },
    ],
  },
];

export function JobCategories() {
  const [active, setActive] = useState(0);
  const [fadeKey, setFadeKey] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleTabChange = (index: number) => {
    if (index === active) return;
    setActive(index);
    setFadeKey((k) => k + 1);
  };

  const current = categories[active];

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: "opacity 0.8s ease, transform 0.8s ease",
      }}
    >
      {/* レイアウト: 左に情報ボックス、右に人物画像 */}
      <div className="grid items-stretch gap-0 lg:grid-cols-2">
        {/* 左: 白い情報ボックス */}
        <div className="relative z-10 flex flex-col justify-center order-2 lg:order-1">
          <div className="rounded-2xl bg-white p-6 shadow-[0_8px_40px_rgba(0,0,0,0.08)] sm:p-10 lg:-mr-12 lg:rounded-r-2xl">
            {/* タブ */}
            <div className="mb-8 flex gap-2 overflow-x-auto sm:gap-3">
              {categories.map((cat, i) => {
                const Icon = cat.icon;
                const isActive = i === active;
                return (
                  <button
                    key={cat.id}
                    onClick={() => handleTabChange(i)}
                    className={`flex shrink-0 items-center gap-2 rounded-full px-4 py-2.5 text-[13px] font-bold tracking-wider transition-all duration-300 sm:px-5 ${
                      isActive
                        ? "bg-santo-navy text-white shadow-md"
                        : "bg-santo-sky text-slate-600 hover:bg-santo-gray hover:text-santo-navy"
                    }`}
                  >
                    <Icon className="h-4 w-4" strokeWidth={isActive ? 2 : 1.5} />
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* カテゴリタイトル */}
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-santo-navy">
                <current.icon className="h-5 w-5 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-black tracking-wider text-slate-900">
                {current.label}
              </h3>
            </div>

            {/* 職種リスト */}
            <div
              key={fadeKey}
              className="grid gap-3 sm:grid-cols-2"
              style={{
                animation: "jobFadeIn 0.4s ease forwards",
              }}
            >
              {current.jobs.map((job) => (
                <div
                  key={job.title}
                  className="group flex items-center gap-4 rounded-xl border border-slate-100 bg-santo-sky/30 px-5 py-4 transition-all duration-200 hover:border-santo-light/50 hover:bg-santo-sky"
                >
                  <ChevronRight className="h-4 w-4 shrink-0 text-santo-navy transition-transform duration-200 group-hover:translate-x-0.5" />
                  <div>
                    <p className="text-[15px] font-bold tracking-wider text-slate-800">
                      {job.title}
                    </p>
                    <p className="mt-0.5 text-[12px] text-slate-400">
                      {job.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 右: 写真エリア */}
        <div className="relative order-1 min-h-[240px] overflow-hidden rounded-2xl lg:order-2 lg:min-h-[520px] lg:rounded-l-none lg:rounded-r-2xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/job_types_mixed_photo.png"
            alt="さまざまな職種"
            className="absolute inset-0 h-full w-full object-cover"
          />
          {/* オーバーレイ */}
          <div className="absolute inset-0 bg-gradient-to-t from-santo-navy/60 via-transparent to-transparent" />

          {/* キャッチコピー */}
          <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8">
            <p className="text-[11px] font-black tracking-[0.25em] text-white/70">
              YOUR CAREER
            </p>
            <p className="mt-1 text-lg font-black tracking-wider text-white sm:text-xl">
              あなたに合った働き方を
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
