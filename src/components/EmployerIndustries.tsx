"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { Factory, Monitor, Truck, ChevronRight } from "lucide-react";

export function EmployerIndustries() {
  const t = useTranslations("EmployerIndustries");
  const [active, setActive] = useState(0);
  const [fadeKey, setFadeKey] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  const categories = [
    {
      id: "manufacturing",
      label: t("cat1"),
      icon: Factory,
      items: [
        { title: t("cat1_job1"), desc: t("cat1_job1Desc") },
        { title: t("cat1_job2"), desc: t("cat1_job2Desc") },
        { title: t("cat1_job3"), desc: t("cat1_job3Desc") },
        { title: t("cat1_job4"), desc: t("cat1_job4Desc") },
      ],
    },
    {
      id: "logistics",
      label: t("cat2"),
      icon: Truck,
      items: [
        { title: t("cat2_job1"), desc: t("cat2_job1Desc") },
        { title: t("cat2_job2"), desc: t("cat2_job2Desc") },
        { title: t("cat2_job3"), desc: t("cat2_job3Desc") },
        { title: t("cat2_job4"), desc: t("cat2_job4Desc") },
      ],
    },
    {
      id: "office",
      label: t("cat3"),
      icon: Monitor,
      items: [
        { title: t("cat3_job1"), desc: t("cat3_job1Desc") },
        { title: t("cat3_job2"), desc: t("cat3_job2Desc") },
        { title: t("cat3_job3"), desc: t("cat3_job3Desc") },
        { title: t("cat3_job4"), desc: t("cat3_job4Desc") },
      ],
    },
  ];

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
      <div className="grid items-stretch gap-0 lg:grid-cols-2">
        {/* 左: 写真エリア */}
        <div className="relative order-1 min-h-[240px] overflow-hidden rounded-2xl lg:order-1 lg:min-h-[520px] lg:rounded-r-none lg:rounded-l-2xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/photo_hr_proposal_man.png"
            alt={t("cta")}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-santo-navy/60 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8">
            <p className="text-[11px] font-black tracking-[0.25em] text-white/70">
              YOUR PARTNER
            </p>
            <p className="mt-1 text-lg font-black tracking-wider text-white sm:text-xl">
              {t("cta")}
            </p>
          </div>
        </div>

        {/* 右: 白い情報ボックス */}
        <div className="relative z-10 flex flex-col justify-center order-2 lg:order-2">
          <div className="rounded-2xl bg-white p-6 shadow-[0_8px_40px_rgba(0,0,0,0.08)] sm:p-10 lg:-ml-12 lg:rounded-l-2xl">
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
              {current.items.map((item) => (
                <div
                  key={item.title}
                  className="group flex items-center gap-4 rounded-xl border border-slate-100 bg-santo-sky/30 px-5 py-4 transition-all duration-200 hover:border-santo-light/50 hover:bg-santo-sky"
                >
                  <ChevronRight className="h-4 w-4 shrink-0 text-santo-navy transition-transform duration-200 group-hover:translate-x-0.5" />
                  <div>
                    <p className="text-[15px] font-bold tracking-wider text-slate-800">
                      {item.title}
                    </p>
                    <p className="mt-0.5 text-[12px] text-slate-400">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
