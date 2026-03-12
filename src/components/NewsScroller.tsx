"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const newsList = [
  {
    date: "2026.03.01",
    cat: "お知らせ",
    title: "ホームページをリニューアルしました",
    desc: "株式会社サントーのホームページを全面リニューアルいたしました。より見やすく、使いやすいデザインに生まれ変わりました。",
    img: "/images/news/news01.png",
  },
  {
    date: "2026.02.15",
    cat: "求人",
    title: "新規求人情報を更新しました",
    desc: "製造・物流・事務など、新しい求人情報を多数掲載しました。ぜひご覧ください。",
    img: "/images/news/news02.png",
  },
  {
    date: "2026.01.10",
    cat: "お知らせ",
    title: "年末年始休業のお知らせ",
    desc: "誠に勝手ながら、年末年始の休業期間についてご案内いたします。ご不便をおかけしますがご了承ください。",
    img: "/images/news/news03.png",
  },
];

export function NewsScroller() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = 280;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      {/* 左右ボタン */}
      <button
        onClick={() => scroll("left")}
        className="absolute -left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md transition-all hover:bg-santo-sky hover:shadow-lg"
      >
        <ChevronLeft className="h-5 w-5 text-santo-navy" />
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute -right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md transition-all hover:bg-santo-sky hover:shadow-lg"
      >
        <ChevronRight className="h-5 w-5 text-santo-navy" />
      </button>

      {/* フェードエッジ */}
      <div className="pointer-events-none absolute left-0 top-0 z-[5] h-full w-12 bg-gradient-to-r from-santo-gray to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-[5] h-full w-12 bg-gradient-to-l from-santo-gray to-transparent" />

      {/* スクロールエリア */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto scroll-smooth px-2 pb-2"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {newsList.map((news, i) => (
          <a
            key={i}
            href="#"
            className="group w-64 shrink-0 overflow-hidden rounded-xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="aspect-[16/10] overflow-hidden bg-santo-sky">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={news.img}
                alt={news.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <div className="mb-2 flex items-center gap-2">
                <time className="text-[11px] font-bold tracking-wider text-slate-400">
                  {news.date}
                </time>
                <span className="inline-flex bg-santo-navy px-2 py-0.5 text-[9px] font-black tracking-wider text-white">
                  {news.cat}
                </span>
              </div>
              <h3 className="mb-1.5 text-[13px] font-black tracking-wider text-slate-800">
                {news.title}
              </h3>
              <p className="text-[11px] leading-[1.7] text-slate-500">
                {news.desc}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
