"use client";

import { useEffect, useRef, useState } from "react";
import { RefreshCw, Star, MessageCircle, Zap } from "lucide-react";
import { useTranslations } from "next-intl";

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
  stat,
  started,
  delay,
}: {
  stat: {
    value: number;
    suffix: string;
    label: string;
    unit: string;
    desc: string;
    icon: typeof RefreshCw;
    color: string;
    borderColor: string;
  };
  started: boolean;
  delay: number;
}) {
  const count = useCountUp(stat.value, 2000, started);
  const Icon = stat.icon;

  return (
    <div
      className="px-3 py-3 sm:px-6 sm:py-7"
      style={{
        opacity: started ? 1 : 0,
        transform: started ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      <div className="mb-2 flex items-center gap-2 sm:mb-5 sm:gap-3">
        <Icon className={`h-5 w-5 sm:h-7 sm:w-7 ${stat.color}`} />
        <p className="text-[13px] font-black tracking-wider text-slate-800 sm:text-[22px]">
          {stat.label}
        </p>
      </div>
      <div className="flex items-baseline">
        <span className="text-3xl font-black tabular-nums tracking-tight text-slate-900 sm:text-7xl">
          {count}
        </span>
        <span className="ml-1 text-sm font-bold text-slate-500 sm:ml-1.5 sm:text-xl">
          {stat.unit}
          {stat.suffix}
        </span>
      </div>
      <p className="mt-2 hidden text-[14px] font-bold leading-[1.9] text-slate-500 sm:mt-4 sm:block sm:text-[17px]">
        {stat.desc}
      </p>
    </div>
  );
}

export function CountUpStats() {
  const t = useTranslations("CountUpStats");
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
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      value: 95,
      suffix: "",
      label: t("stat1Label"),
      unit: t("stat1Unit"),
      desc: t("stat1Desc"),
      icon: RefreshCw,
      color: "text-blue-400",
      borderColor: "border-l-blue-400",
    },
    {
      value: 98,
      suffix: "",
      label: t("stat2Label"),
      unit: t("stat2Unit"),
      desc: t("stat2Desc"),
      icon: Star,
      color: "text-blue-500",
      borderColor: "border-l-blue-500",
    },
    {
      value: 24,
      suffix: "",
      label: t("stat3Label"),
      unit: t("stat3Unit"),
      desc: t("stat3Desc"),
      icon: MessageCircle,
      color: "text-blue-600",
      borderColor: "border-l-blue-600",
    },
    {
      value: 24,
      suffix: "",
      label: t("stat4Label"),
      unit: t("stat4Unit"),
      desc: t("stat4Desc"),
      icon: Zap,
      color: "text-blue-800",
      borderColor: "border-l-blue-800",
    },
  ];

  return (
    <div ref={ref} className="flex flex-col gap-5 lg:flex-row lg:gap-16">
      {/* 左: タイトル（PCではsticky） */}
      <div className="lg:w-[380px] lg:shrink-0">
        <div className="lg:sticky lg:top-32">
          <p className="mb-2 text-[14px] font-black tracking-[0.3em] text-santo-light sm:mb-4">
            {t("label")}
          </p>
          <h2 className="text-[1.7rem] font-black tracking-wider text-slate-900 sm:text-[2.3rem] sm:whitespace-nowrap">
            {t("title")}
          </h2>
          <div className="mt-3 h-1 w-16 rounded-full bg-santo-navy sm:mt-6" />
          <p className="mt-3 text-[13px] font-bold leading-[1.9] text-slate-500 sm:mt-8 sm:text-[17px] sm:leading-[2.2]">
            <span className="sm:whitespace-nowrap">{t("desc1")}</span>
            <br className="hidden sm:block" />
            <span className="sm:whitespace-nowrap">{t("desc2")}</span>
            <br className="hidden sm:block" />
            <span className="sm:whitespace-nowrap">{t("desc3")}</span>
          </p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/illust_numbers_growth.png"
            alt=""
            className="mt-8 ml-8 hidden h-auto w-72 opacity-80 lg:block"
          />
        </div>
      </div>

      {/* 右: 2x2 グリッド */}
      <div className="grid flex-1 grid-cols-2 gap-2 sm:gap-5 sm:grid-cols-2">
        {stats.map((stat, i) => (
          <StatCard
            key={stat.label}
            stat={stat}
            started={started}
            delay={i * 200}
          />
        ))}
      </div>
    </div>
  );
}
