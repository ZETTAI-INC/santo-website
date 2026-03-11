"use client";

import { useEffect, useRef, useState } from "react";

const features = [
  {
    label: "01",
    title: "きめ細やかなサポート",
    desc: "就業前から就業中まで、専任の担当者が一人ひとりに寄り添い丁寧にフォロー。不安や悩みもすぐに相談できる体制を整えています。",
    img: "/images/features/support_illustration.svg",
  },
  {
    label: "02",
    title: "迅速な対応",
    desc: "お客様のご要望に素早くお応えし、最適な人材を速やかにご提案。急な人員ニーズにも柔軟に対応いたします。",
    img: "/images/features/quick_response.svg",
  },
  {
    label: "03",
    title: "豊富な人材ネットワーク",
    desc: "製造・物流・事務など幅広い職種に対応できる多様な人材を確保。企業様のニーズにぴったりの人材をご紹介します。",
    img: "/images/features/talent_network.svg",
  },
];

function FeatureCard({
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

    // 少し遅延させてから監視開始（ページロード時に即発火しないように）
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
        transition: `opacity 0.7s cubic-bezier(0.4,0,0.2,1) ${index * 120}ms, transform 0.7s cubic-bezier(0.4,0,0.2,1) ${index * 120}ms`,
      }}
    >
      <div
        className="group relative flex h-full flex-col items-center overflow-hidden rounded-2xl border border-slate-200 bg-white px-6 pb-10 pt-8 text-center"
        style={{
          transition: "transform 0.4s ease, box-shadow 0.4s ease, background-color 0.4s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-8px)";
          e.currentTarget.style.boxShadow =
            "0 20px 40px -12px rgba(15, 43, 74, 0.15)";
          e.currentTarget.style.backgroundColor = "#eef7ff";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "none";
          e.currentTarget.style.backgroundColor = "#ffffff";
        }}
      >
        {/* 上部アクセントボーダー */}
        <div
          className="absolute left-0 top-0 h-1 w-full origin-left bg-santo-blue"
          style={{
            transform: "scaleX(0)",
            transition: "transform 0.4s ease",
          }}
          ref={(el) => {
            const parent = el?.parentElement;
            if (!parent || !el) return;
            parent.addEventListener("mouseenter", () => {
              el.style.transform = "scaleX(1)";
            });
            parent.addEventListener("mouseleave", () => {
              el.style.transform = "scaleX(0)";
            });
          }}
        />
        {/* タイトル */}
        <h3 className="mb-6 text-xl font-black tracking-wider text-slate-900">
          {feature.title}
        </h3>
        {/* イラスト画像 */}
        <div
          className="mb-6"
          style={{ transition: "transform 0.4s ease" }}
          ref={(el) => {
            const parent = el?.closest("[class*='group']");
            if (!parent || !el) return;
            parent.addEventListener("mouseenter", () => {
              el.style.transform = "scale(1.1)";
            });
            parent.addEventListener("mouseleave", () => {
              el.style.transform = "scale(1)";
            });
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={feature.img}
            alt={feature.title}
            className="h-40 w-40 object-contain"
          />
        </div>
        {/* 説明文 */}
        <p className="text-[13px] leading-[2] text-slate-500">
          {feature.desc}
        </p>
      </div>
    </div>
  );
}

export function FeatureCards() {
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-3">
      {features.map((feature, i) => (
        <FeatureCard key={feature.title} feature={feature} index={i} />
      ))}
    </div>
  );
}
