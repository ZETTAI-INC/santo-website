"use client";

import { useEffect, useRef, useState } from "react";

const features = [
  {
    problem: "派遣が初めてで不安…\n仕事についていけるか心配",
    problemImg: "/images/features/problem01.svg",
    title: "きめ細やかなサポート",
    solution: "就業前から就業中まで、専任の担当者が一人ひとりに寄り添い丁寧にフォロー。不安や悩みもすぐに相談できる体制を整えています。",
    img: "/images/features/support_illustration.svg",
  },
  {
    problem: "急に人手が必要になった…\nすぐに対応してもらえる？",
    problemImg: "/images/features/problem02.svg",
    title: "迅速な対応",
    solution: "お客様のご要望に素早くお応えし、最適な人材を速やかにご提案。急な人員ニーズにも柔軟に対応いたします。",
    img: "/images/features/quick_response.svg",
  },
  {
    problem: "求めるスキルの人材が\nなかなか見つからない…",
    problemImg: "/images/features/problem03.svg",
    title: "豊富な人材ネットワーク",
    solution: "製造・物流・事務など幅広い職種に対応できる多様な人材を確保。企業様のニーズにぴったりの人材をご紹介します。",
    img: "/images/features/talent_network.svg",
  },
];

function FeatureRow({
  feature,
  index,
}: {
  feature: (typeof features)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(el);
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(el);
      return () => observer.disconnect();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.7s cubic-bezier(0.4,0,0.2,1) ${index * 150}ms, transform 0.7s cubic-bezier(0.4,0,0.2,1) ${index * 150}ms`,
      }}
    >
      {/* モバイル: 縦並び */}
      <div className="flex flex-col md:hidden">
        <div className="rounded-t-2xl bg-slate-100 border border-b-0 border-slate-200 px-4 py-2">
          <div className="flex justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/extracted_curly_line_straight.png" alt="お悩み" className="h-16 w-16 object-contain" />
          </div>
          <p className="whitespace-pre-line text-center text-[20px] font-bold leading-[1.7] text-slate-700">
            {feature.problem}
          </p>
        </div>
        <div className="rounded-b-2xl border border-t-0 border-slate-200 bg-white p-8 relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-santo-navy before:rounded-bl-2xl">
          <div className="mb-4 flex justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={feature.img} alt={feature.title} className="h-32 w-32 object-contain" />
          </div>
          <h3 className="mb-2 text-center text-xl font-black tracking-wider text-santo-navy">
            {feature.title}
          </h3>
          <p className="text-center text-[15px] leading-[2] text-slate-600">
            {feature.solution}
          </p>
        </div>
      </div>

      {/* デスクトップ */}
      <div className="relative hidden md:flex items-stretch">
        {/* 左: 悩み（斜めカット） */}
        <div
          className="flex flex-[0_0_42%] items-center rounded-l-2xl border border-slate-200 bg-slate-100 py-8 pl-7 pr-10"
          style={{
            clipPath: "polygon(0 0, calc(100% - 40px) 0, 100% 100%, 0 100%)",
          }}
        >
          <div className="flex items-center gap-4">
            <div className="shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/extracted_curly_line_straight.png" alt="お悩み" className="h-20 w-20 object-contain" />
            </div>
            <p className="whitespace-pre-line text-[22px] font-bold leading-[1.7] text-slate-700">
              {feature.problem}
            </p>
          </div>
        </div>

        {/* 右: 解決（斜めカットで噛み合う） */}
        <div
          className="flex flex-[0_0_60%] items-center rounded-r-2xl border border-slate-200 bg-white py-8 pl-12 pr-8"
          style={{
            marginLeft: "-2%",
            clipPath: "polygon(40px 0, 100% 0, 100% 100%, 0 100%)",
          }}
        >
          <div className="flex items-center gap-6">
            <div className="shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={feature.img} alt={feature.title} className="h-36 w-36 object-contain" />
            </div>
            <div>
              <h3 className="text-2xl font-black tracking-wider text-santo-navy">
                {feature.title}
              </h3>
              <p className="mt-2 text-[15px] leading-[2] text-slate-600">
                {feature.solution}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FeatureCards() {
  return (
    <div className="space-y-10">
      {features.map((feature, i) => (
        <FeatureRow key={feature.title} feature={feature} index={i} />
      ))}
    </div>
  );
}
