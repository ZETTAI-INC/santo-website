"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 500, suffix: "+", label: "累計紹介実績", unit: "件" },
  { value: 150, suffix: "+", label: "取引企業数", unit: "社" },
  { value: 98, suffix: "", label: "スタッフ満足度", unit: "%" },
  { value: 24, suffix: "", label: "平均マッチング", unit: "時間" },
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
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
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

function StatItem({
  value,
  suffix,
  label,
  unit,
  started,
}: {
  value: number;
  suffix: string;
  label: string;
  unit: string;
  started: boolean;
}) {
  const count = useCountUp(value, 2000, started);

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-baseline">
        <span className="text-5xl font-black tabular-nums tracking-tight text-white sm:text-6xl">
          {count}
        </span>
        <span className="ml-1 text-2xl font-black text-santo-accent">
          {unit}
          {suffix}
        </span>
      </div>
      <p className="mt-2 text-[13px] font-bold tracking-wider text-slate-300">
        {label}
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
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="grid grid-cols-2 gap-10 sm:gap-12 lg:grid-cols-4"
    >
      {stats.map((stat) => (
        <StatItem key={stat.label} {...stat} started={started} />
      ))}
    </div>
  );
}
