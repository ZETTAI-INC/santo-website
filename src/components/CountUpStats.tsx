"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 500, suffix: "+", label: "累計紹介実績", unit: "件", desc: "これまでに多くの求職者様を企業様へご紹介してまいりました。" },
  { value: 150, suffix: "+", label: "取引企業数", unit: "社", desc: "製造・物流・事務など幅広い業種の企業様とお取引しています。" },
  { value: 98, suffix: "", label: "スタッフ満足度", unit: "%", desc: "就業中のフォロー体制が評価され、高い満足度を維持しています。" },
  { value: 24, suffix: "", label: "平均マッチング", unit: "時間", desc: "お問い合わせから最短24時間以内にお仕事をご提案いたします。" },
];

// 棒グラフのダミーデータ（年次推移）
const barData = [30, 45, 65, 80, 100, 130, 170, 220, 300, 400, 500];
// エリアチャートのダミーデータ
const areaData = [10, 20, 35, 50, 65, 80, 95, 110, 125, 140, 150];

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

/* ── 棒グラフ（累計紹介実績） ── */
function BarChart({ started }: { started: boolean }) {
  const max = Math.max(...barData);
  const w = 200;
  const h = 80;
  const barW = w / barData.length - 3;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-full">
      {barData.map((v, i) => {
        const barH = (v / max) * (h - 4);
        return (
          <rect
            key={i}
            x={i * (barW + 3) + 1}
            y={h - barH}
            width={barW}
            height={barH}
            rx={2}
            fill={i === barData.length - 1 ? "#1d6fb5" : "#c8dff2"}
            style={{
              opacity: started ? 1 : 0,
              transform: started ? "scaleY(1)" : "scaleY(0)",
              transformOrigin: "bottom",
              transition: `transform 0.6s cubic-bezier(0.25,1,0.5,1) ${i * 60 + 300}ms, opacity 0.4s ${i * 60 + 300}ms`,
            }}
          />
        );
      })}
    </svg>
  );
}

/* ── エリアチャート（取引企業数） ── */
function AreaChart({ started }: { started: boolean }) {
  const max = Math.max(...areaData);
  const w = 200;
  const h = 80;
  const points = areaData.map((v, i) => ({
    x: (i / (areaData.length - 1)) * w,
    y: h - (v / max) * (h - 8),
  }));

  const linePath = points.map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`).join(" ");
  const areaPath = `${linePath} L${w},${h} L0,${h} Z`;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-full">
      <defs>
        <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1d6fb5" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#1d6fb5" stopOpacity="0.03" />
        </linearGradient>
      </defs>
      <path
        d={areaPath}
        fill="url(#areaGrad)"
        style={{
          opacity: started ? 1 : 0,
          transition: "opacity 0.8s ease 0.4s",
        }}
      />
      <path
        d={linePath}
        fill="none"
        stroke="#1d6fb5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          strokeDasharray: 600,
          strokeDashoffset: started ? 0 : 600,
          transition: "stroke-dashoffset 1.5s cubic-bezier(0.25,1,0.5,1) 0.3s",
        }}
      />
      {/* 最終点のドット */}
      <circle
        cx={points[points.length - 1].x}
        cy={points[points.length - 1].y}
        r="4"
        fill="#1d6fb5"
        style={{
          opacity: started ? 1 : 0,
          transition: "opacity 0.4s ease 1.6s",
        }}
      />
    </svg>
  );
}

/* ── ドーナツグラフ（スタッフ満足度） ── */
function DonutChart({ started, value }: { started: boolean; value: number }) {
  const r = 36;
  const circumference = 2 * Math.PI * r;
  const offset = circumference - (value / 100) * circumference;

  return (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      {/* 背景リング */}
      <circle cx="50" cy="50" r={r} fill="none" stroke="#e8eff7" strokeWidth="8" />
      {/* 進捗リング */}
      <circle
        cx="50"
        cy="50"
        r={r}
        fill="none"
        stroke="#1d6fb5"
        strokeWidth="8"
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={started ? offset : circumference}
        style={{
          transition: "stroke-dashoffset 1.8s cubic-bezier(0.25,1,0.5,1) 0.4s",
          transform: "rotate(-90deg)",
          transformOrigin: "50% 50%",
        }}
      />
    </svg>
  );
}

/* ── ゲージ（平均マッチング） ── */
function GaugeChart({ started }: { started: boolean }) {
  const r = 36;
  const circumference = Math.PI * r; // 半円
  const fillRatio = 24 / 48; // 24時間 / 48時間スケール
  const offset = circumference - fillRatio * circumference;

  return (
    <svg viewBox="0 0 100 60" className="w-full h-full">
      {/* 背景半円 */}
      <path
        d="M 14,55 A 36,36 0 0,1 86,55"
        fill="none"
        stroke="#e8eff7"
        strokeWidth="8"
        strokeLinecap="round"
      />
      {/* 進捗半円 */}
      <path
        d="M 14,55 A 36,36 0 0,1 86,55"
        fill="none"
        stroke="#1d6fb5"
        strokeWidth="8"
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={started ? offset : circumference}
        style={{
          transition: "stroke-dashoffset 1.5s cubic-bezier(0.25,1,0.5,1) 0.4s",
        }}
      />
      {/* 目盛り */}
      {[0, 12, 24, 36, 48].map((h, i) => {
        const angle = Math.PI - (i / 4) * Math.PI;
        const x1 = 50 + 42 * Math.cos(angle);
        const y1 = 55 - 42 * Math.sin(angle);
        return (
          <text
            key={h}
            x={x1}
            y={y1}
            textAnchor="middle"
            dominantBaseline="middle"
            className="fill-slate-400"
            fontSize="6"
          >
            {h}h
          </text>
        );
      })}
    </svg>
  );
}

/* ── 統合カード ── */
function StatCard({
  value,
  suffix,
  label,
  unit,
  desc,
  started,
  delay,
  index,
}: {
  value: number;
  suffix: string;
  label: string;
  unit: string;
  desc: string;
  started: boolean;
  delay: number;
  index: number;
}) {
  const count = useCountUp(value, 2200, started);

  const chartMap: Record<number, React.ReactNode> = {
    0: <BarChart started={started} />,
    1: <AreaChart started={started} />,
    2: <DonutChart started={started} value={value} />,
    3: <GaugeChart started={started} />,
  };

  return (
    <div
      className="flex flex-col rounded-2xl border border-slate-200 bg-white px-6 py-7 sm:px-7 sm:py-8"
      style={{
        opacity: started ? 1 : 0,
        transform: started ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.9s cubic-bezier(0.25,1,0.5,1) ${delay}ms, transform 0.9s cubic-bezier(0.25,1,0.5,1) ${delay}ms`,
      }}
    >
      {/* ラベル */}
      <p className="text-[13px] font-bold tracking-wider text-slate-900">
        {label}
      </p>

      {/* 数字 */}
      <div className="mt-2 flex items-baseline">
        <span className="text-5xl font-extralight tabular-nums tracking-tight text-santo-navy sm:text-6xl">
          {count}
        </span>
        <span className="ml-1 text-lg font-medium text-santo-navy">
          {unit}{suffix}
        </span>
      </div>

      {/* グラフ */}
      <div className={`mt-4 ${index === 2 ? "mx-auto w-24 h-24" : index === 3 ? "mx-auto w-32 h-16" : "w-full h-20"}`}>
        {chartMap[index]}
      </div>

      {/* 説明文 */}
      <p className="mt-3 text-[11px] leading-[1.8] text-slate-500">
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
      className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4"
    >
      {stats.map((stat, i) => (
        <StatCard key={stat.label} {...stat} started={started} delay={i * 150} index={i} />
      ))}
    </div>
  );
}
