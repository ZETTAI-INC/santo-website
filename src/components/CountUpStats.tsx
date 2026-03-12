"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 500, suffix: "+", label: "累計紹介実績", unit: "件", desc: "これまでに多くの求職者様を企業様へご紹介してまいりました。" },
  { value: 150, suffix: "+", label: "取引企業数", unit: "社", desc: "製造・物流・事務など幅広い業種の企業様とお取引しています。" },
  { value: 98, suffix: "", label: "スタッフ満足度", unit: "%", desc: "就業中のフォロー体制が評価され、高い満足度を維持しています。" },
  { value: 24, suffix: "", label: "平均マッチング", unit: "時間", desc: "お問い合わせから最短24時間以内にお仕事をご提案いたします。" },
];

function useCountUp(target: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    let raf: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) {
        raf = requestAnimationFrame(step);
      }
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, start]);

  return count;
}

function StatCard({
  value,
  suffix,
  label,
  unit,
  desc,
  started,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  unit: string;
  desc: string;
  started: boolean;
  delay: number;
}) {
  const count = useCountUp(value, 2200, started);

  return (
    <div
      className="flex flex-col rounded-2xl border border-slate-200 bg-white px-6 py-8 sm:px-8 sm:py-10"
      style={{
        opacity: started ? 1 : 0,
        transform: started ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.9s cubic-bezier(0.25,1,0.5,1) ${delay}ms, transform 0.9s cubic-bezier(0.25,1,0.5,1) ${delay}ms`,
      }}
    >
      {/* ラベル */}
      <p className="text-[14px] font-bold tracking-wider text-slate-900">
        {label}
      </p>

      {/* 数字 */}
      <div className="mt-3 flex items-baseline">
        <span className="text-6xl font-extralight tabular-nums tracking-tight text-santo-navy sm:text-7xl">
          {count}
        </span>
        <span className="ml-1 text-xl font-medium text-santo-navy">
          {unit}{suffix}
        </span>
      </div>

      {/* 区切り線 */}
      <div className="mt-5 h-px w-full bg-slate-200" />

      {/* 説明文 */}
      <p className="mt-4 text-[12px] leading-[1.8] text-slate-700">
        {desc}
      </p>
    </div>
  );
}

export function CountUpStats() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          // 見出し線のアニメーション発火
          document.querySelector(".numbers-line")?.classList.add("is-visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4"
    >
      {stats.map((stat, i) => (
        <StatCard key={stat.label} {...stat} started={started} delay={i * 150} />
      ))}
    </div>
  );
}
