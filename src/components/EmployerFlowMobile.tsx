"use client";

import { useRef, useState, type ReactNode } from "react";
import { useLocale } from "next-intl";
import {
  ChevronLeft,
  ChevronRight,
  FileSearch,
  Handshake,
  Phone,
  UserCheck,
} from "lucide-react";

const icons = [Phone, FileSearch, Handshake, UserCheck];

type Step = {
  num: string;
  title: string;
  desc: ReactNode;
};

export function EmployerFlowMobile({ steps }: { steps: Step[] }) {
  const locale = useLocale();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = 200 + 12; // w-[200px] + gap-3
    const index = Math.round(el.scrollLeft / cardWidth);
    const clamped = Math.max(0, Math.min(index, steps.length - 1));
    if (clamped !== activeIndex) setActiveIndex(clamped);
  };

  return (
    <div className="lg:hidden">
      <div className="relative -mx-4">
        <div
          aria-hidden
          className={`pointer-events-none absolute left-0 top-1/2 z-10 -translate-y-1/2 transition-opacity ${
            activeIndex === 0 ? "opacity-25" : "opacity-60"
          }`}
        >
          <ChevronLeft className="h-8 w-8 text-santo-navy" strokeWidth={1.5} />
        </div>
        <div
          aria-hidden
          className={`pointer-events-none absolute right-0 top-1/2 z-10 -translate-y-1/2 transition-opacity ${
            activeIndex === steps.length - 1 ? "opacity-25" : "opacity-60"
          }`}
        >
          <ChevronRight className="h-8 w-8 text-santo-navy" strokeWidth={1.5} />
        </div>

        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-3 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-[calc((100vw-200px)/2)] pb-2"
        >
          {steps.map((step, i) => {
            const Icon = icons[i];
            return (
              <div
                key={step.title}
                className="flex w-[200px] shrink-0 snap-center flex-col rounded-xl bg-white p-4"
              >
                <span className="text-[28px] font-light leading-none text-santo-navy/20">
                  {step.num}
                </span>
                <h3 className="mt-1 text-[14px] font-black tracking-wider text-slate-900">
                  {step.title}
                </h3>
                <p className={`mt-1 text-[12px] font-bold leading-[1.7] text-slate-500 [text-wrap:pretty] ${locale === "ja" ? "break-keep" : ""}`}>
                  {step.desc}
                </p>
                <div className="mt-auto flex justify-end pt-2">
                  <Icon className="h-8 w-8 text-slate-300" strokeWidth={1} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-3 flex justify-center gap-2">
        {steps.map((step, i) => (
          <span
            key={step.title}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === activeIndex ? "w-6 bg-santo-navy" : "w-2 bg-santo-navy/25"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
