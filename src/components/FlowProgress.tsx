"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCircle } from "lucide-react";
import { useTranslations } from "next-intl";

export function FlowProgress() {
  const t = useTranslations("FlowProgress");
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
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const steps = [t("step1"), t("step2"), t("step3"), t("step4")];

  return (
    <div ref={ref} className="mt-12">
      {/* プログレスバー */}
      <div className="relative h-3 w-full overflow-hidden rounded-full bg-slate-200">
        <div
          className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-santo-light via-santo-blue to-santo-navy"
          style={{
            width: started ? "100%" : "0%",
            transition: "width 2s cubic-bezier(0.25, 1, 0.5, 1)",
          }}
        />
      </div>

      {/* ステップラベル */}
      <div className="mt-3 flex justify-between px-1">
        {steps.map((label, i) => (
          <span
            key={label}
            className="text-[12px] font-bold text-slate-400"
            style={{
              opacity: started ? 1 : 0,
              transition: `opacity 0.5s ease ${0.5 + i * 0.5}s`,
            }}
          >
            {label}
          </span>
        ))}
      </div>

      {/* 完了メッセージ */}
      <div
        className="mt-8 flex items-center justify-center gap-3 rounded-xl bg-santo-navy px-6 py-5"
        style={{
          opacity: started ? 1 : 0,
          transform: started ? "translateY(0)" : "translateY(15px)",
          transition: "opacity 0.6s ease 2.2s, transform 0.6s ease 2.2s",
        }}
      >
        <CheckCircle className="h-6 w-6 shrink-0 text-santo-accent" />
        <p className="text-[16px] font-black tracking-wider text-white">
          <span className="whitespace-nowrap">{t("completeTitle")}</span>
          <span className="ml-2 whitespace-nowrap text-[14px] font-bold text-white/70">
            {t("completeDesc")}
          </span>
        </p>
      </div>
    </div>
  );
}
