"use client";

import { useEffect, useRef } from "react";

const historyItems = [
  {
    year: "○○○○",
    title: "株式会社サントー設立",
    desc: "地域密着型の人材派遣サービスを開始。",
  },
  {
    year: "○○○○",
    title: "一般労働者派遣事業許可取得",
    desc: "事業基盤を確立し、本格的にサービスを展開。",
  },
  {
    year: "○○○○",
    title: "事業拡大に伴い移転",
    desc: "より広域なエリアでのサポート体制を確立。",
  },
  {
    year: "○○○○",
    title: "ホームページリニューアル",
    desc: "次世代に向けたデジタルトランスフォーメーションを推進。",
  },
];

function StairStep({
  item,
  index,
  total,
}: {
  item: (typeof historyItems)[number];
  index: number;
  total: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("stair-visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const blockHeight = 60 + index * 60;

  return (
    <div
      ref={ref}
      className="stair-step flex flex-1 max-w-[250px] flex-col relative"
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      {/* カード */}
      <div className="stair-card relative z-10 mx-2.5 mb-5 rounded-lg bg-white p-6 shadow-[0_4px_15px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(37,99,235,0.1)]">
        <p className="font-[Montserrat] text-xl font-extrabold text-[#3b82f6]">
          {item.year}
        </p>
        <h3 className="mt-1 text-base font-bold text-[#1e3a8a]">
          {item.title}
        </h3>
        <p className="mt-3 text-[13px] leading-[1.6] text-slate-500">
          {item.desc}
        </p>
      </div>

      {/* 階段ブロック */}
      <div
        className="stair-block w-full border-t-4 border-[#3b82f6] border-r border-l border-r-slate-200 border-l-slate-200 bg-white shadow-[10px_10px_20px_rgba(0,0,0,0.02)] transition-colors duration-300"
        style={{ height: blockHeight }}
      />
    </div>
  );
}

export function StairsTimeline() {
  return (
    <>
      {/* デスクトップ: 階段レイアウト */}
      <div className="hidden md:flex items-end justify-center w-full pt-24">
        {historyItems.map((item, i) => (
          <StairStep key={i} item={item} index={i} total={historyItems.length} />
        ))}
      </div>

      {/* モバイル: 縦タイムライン */}
      <div className="md:hidden border-l-[3px] border-slate-200 pl-5 space-y-8">
        {historyItems.map((item, i) => (
          <div key={i} className="relative" style={{ marginLeft: i * 10 }}>
            {/* ドット */}
            <div className="absolute -left-[calc(1.25rem+7px)] top-5 h-3 w-3 rounded-full border-[3px] border-[#3b82f6] bg-white" />
            {/* 横線 */}
            <div className="absolute -left-5 top-[1.4rem] h-0.5 w-5 bg-[#3b82f6]/30" />
            <div className="rounded-lg bg-white p-5 shadow-[0_4px_15px_rgba(0,0,0,0.05)]">
              <p className="font-[Montserrat] text-lg font-extrabold text-[#3b82f6]">
                {item.year}
              </p>
              <h3 className="mt-1 text-[15px] font-bold text-[#1e3a8a]">
                {item.title}
              </h3>
              <p className="mt-2 text-[13px] leading-[1.6] text-slate-500">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
