"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";

/* 各ボックスの位置 (デスクトップ) */
const positions = [
  // pos-1: top center
  { top: "2%", left: "50%", marginLeft: "-140px", side: "top" as const },
  // pos-2: top right
  { top: "22%", right: "0%", side: "right" as const },
  // pos-3: bottom right
  { top: "62%", right: "0%", side: "right" as const },
  // pos-4: bottom center
  { bottom: "-2%", left: "50%", marginLeft: "-140px", side: "bottom" as const },
  // pos-5: bottom left
  { top: "62%", left: "0%", side: "left" as const },
  // pos-6: top left
  { top: "22%", left: "0%", side: "left" as const },
];

/* SVGの各パス（中心→各ノードへの配線） */
const svgPaths = [
  "M500,312.5 L500,70",
  "M500,312.5 L800,200",
  "M500,312.5 L800,440",
  "M500,312.5 L500,560",
  "M500,312.5 L200,440",
  "M500,312.5 L200,200",
];

function MobileCard({ merit }: { merit: { iconImg: string; title: string; desc: string } }) {
  return (
    <div className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={merit.iconImg} alt="" className="h-14 w-14 shrink-0 rounded-full object-contain" />
      <div>
        <p className="text-[15px] font-black tracking-wider text-slate-800">
          {merit.title}
        </p>
        <p className="mt-1 text-[13px] leading-[1.8] text-slate-500">
          {merit.desc}
        </p>
      </div>
    </div>
  );
}

export function HexMerits() {
  const t = useTranslations("HexMerits");
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  const merits = [
    {
      iconImg: "/images/merit_icons/icon_1.png",
      title: t("merit1Title"),
      desc: t("merit1Desc"),
    },
    {
      iconImg: "/images/merit_icons/icon_3.png",
      title: t("merit2Title"),
      desc: t("merit2Desc"),
    },
    {
      iconImg: "/images/merit_icons/icon_6.png",
      title: t("merit3Title"),
      desc: t("merit3Desc"),
    },
    {
      iconImg: "/images/merit_icons/icon_5.png",
      title: t("merit4Title"),
      desc: t("merit4Desc"),
    },
    {
      iconImg: "/images/merit_icons/icon_4.png",
      title: t("merit5Title"),
      desc: t("merit5Desc"),
    },
    {
      iconImg: "/images/merit_icons/icon_2.png",
      title: t("merit6Title"),
      desc: t("merit6Desc"),
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

  return (
    <div ref={ref}>
      {/* デスクトップ: ネットワーク配線レイアウト */}
      <div className="hidden lg:block">
        <style jsx>{`
          @keyframes bg-shift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          @keyframes spin-ring {
            100% { transform: translate(-50%, -50%) rotate(-360deg); }
          }
          @keyframes spin-ring-2 {
            100% { transform: translate(-50%, -50%) rotate(360deg); }
          }
          @keyframes pulse-core {
            0% { box-shadow: 0 0 40px rgba(59,130,246,0.4), inset 0 0 15px rgba(96,165,250,0.4); }
            100% { box-shadow: 0 0 80px rgba(59,130,246,0.8), inset 0 0 30px rgba(96,165,250,0.8); }
          }
          @keyframes flow-dash {
            100% { stroke-dashoffset: 1000; }
          }
          @keyframes dash-flow {
            0% { stroke-dasharray: 0 200; stroke-dashoffset: 200; opacity: 0; }
            50% { stroke-dasharray: 30 200; opacity: 1; }
            100% { stroke-dasharray: 0 200; stroke-dashoffset: -50; opacity: 0; }
          }
          @keyframes float-box {
            0% { transform: translateY(0); }
            100% { transform: translateY(-10px); }
          }
          @keyframes gradient-shift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          @keyframes ripple-icon {
            0% { box-shadow: 0 0 0 0 rgba(59,130,246,0.4); }
            100% { box-shadow: 0 0 0 15px rgba(59,130,246,0); }
          }
          @keyframes float-particle {
            0% { transform: translate(0, 0); opacity: 0; }
            20% { opacity: 0.5; }
            80% { opacity: 0.5; }
            100% { transform: translate(100px, -100px); opacity: 0; }
          }
        `}</style>

        <div
          className="relative mx-auto"
          style={{
            maxWidth: 1000,
            aspectRatio: "16 / 10",
            opacity: visible ? 1 : 0,
            transition: "opacity 0.8s ease",
          }}
        >
          {/* 背景パーティクル */}
          {[
            { top: "20%", left: "30%", delay: "0s", size: 4 },
            { top: "60%", left: "80%", delay: "2s", size: 6 },
            { top: "80%", left: "40%", delay: "5s", size: 4 },
            { top: "10%", left: "70%", delay: "7s", size: 3 },
            { top: "40%", left: "10%", delay: "1s", size: 4 },
            { top: "70%", left: "20%", delay: "4s", size: 4 },
          ].map((p, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-blue-500 pointer-events-none"
              style={{
                top: p.top,
                left: p.left,
                width: p.size,
                height: p.size,
                filter: "blur(1px)",
                opacity: 0.3,
                animation: `float-particle 10s infinite linear ${p.delay}`,
              }}
            />
          ))}

          {/* SVG配線アニメーション */}
          <svg
            className="absolute inset-0 h-full w-full pointer-events-none"
            viewBox="0 0 1000 625"
            preserveAspectRatio="xMidYMid meet"
            style={{ zIndex: 1 }}
          >
            <defs>
              <filter id="merit-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
            {svgPaths.map((d, i) => (
              <g key={i}>
                <path
                  d={d}
                  fill="none"
                  stroke="#cbd5e1"
                  strokeWidth="2"
                  strokeDasharray="4 6"
                  style={{ animation: "flow-dash 30s linear infinite reverse" }}
                />
                <path
                  d={d}
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeDasharray="0 200"
                  style={{
                    filter: "drop-shadow(0 0 8px #60a5fa) drop-shadow(0 0 12px #60a5fa)",
                    animation: `dash-flow 2.5s cubic-bezier(0.4,0,0.2,1) infinite ${i * 0.4}s`,
                  }}
                />
                <path
                  d={d}
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray="0 200"
                  style={{
                    filter: "drop-shadow(0 0 5px #fff)",
                    animation: `dash-flow 2.5s cubic-bezier(0.4,0,0.2,1) infinite ${i * 0.4}s`,
                  }}
                />
              </g>
            ))}
          </svg>

          {/* 中央コア */}
          <div
            className="absolute flex flex-col items-center justify-center rounded-full text-white"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 220,
              height: 220,
              background: "linear-gradient(135deg, #0f172a, #1e3a8a, #0f172a)",
              backgroundSize: "200% 200%",
              zIndex: 10,
              boxShadow: "0 0 50px rgba(59,130,246,0.5), inset 0 0 20px rgba(96,165,250,0.5)",
              animation: "pulse-core 4s infinite alternate, bg-shift 8s ease infinite",
            }}
          >
            {/* 装飾リング1 */}
            <div
              className="absolute rounded-full pointer-events-none"
              style={{
                inset: -20,
                border: "2px solid transparent",
                borderTopColor: "#60a5fa",
                borderBottomColor: "#60a5fa",
                top: "50%",
                left: "50%",
                width: "calc(100% + 40px)",
                height: "calc(100% + 40px)",
                transform: "translate(-50%, -50%)",
                animation: "spin-ring 15s linear infinite",
                opacity: 0.8,
                filter: "drop-shadow(0 0 10px #60a5fa)",
                zIndex: -1,
              }}
            />
            {/* 装飾リング2 */}
            <div
              className="absolute rounded-full pointer-events-none"
              style={{
                top: "50%",
                left: "50%",
                width: "calc(100% + 80px)",
                height: "calc(100% + 80px)",
                transform: "translate(-50%, -50%)",
                border: "1px dashed rgba(96,165,250,0.4)",
                animation: "spin-ring-2 25s linear infinite",
                zIndex: -2,
              }}
            />
            <div className="text-center relative z-[2]">
              <span
                className="block text-[14px] font-bold tracking-[0.3em] text-blue-300 mb-2"
                style={{ textShadow: "0 0 10px rgba(96,165,250,0.8)" }}
              >
                MERIT
              </span>
              <h2
                className="text-[28px] font-bold text-white m-0"
                style={{ textShadow: "0 2px 10px rgba(0,0,0,0.5)", letterSpacing: "0.05em" }}
              >
                {t("centerTitle")}
              </h2>
            </div>
          </div>

          {/* 6つのフィーチャーボックス */}
          {merits.map((merit, i) => {
            const pos = positions[i];
            const isRight = pos.side === "right";

            return (
              <div
                key={merit.title}
                className="group absolute"
                style={{
                  width: 280,
                  top: pos.top,
                  bottom: pos.bottom,
                  left: pos.left,
                  right: pos.right,
                  marginLeft: pos.marginLeft,
                  zIndex: 5,
                  animation: `float-box 6s ease-in-out infinite alternate ${-i}s`,
                }}
              >
                <div
                  className={`relative flex ${isRight ? "flex-row-reverse text-right" : "flex-row text-left"} items-start gap-4 rounded-xl bg-white/95 backdrop-blur-sm border border-slate-200 p-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] transition-all duration-400 hover:scale-105 hover:-translate-y-1 hover:shadow-[0_20px_40px_-10px_rgba(59,130,246,0.2)] hover:border-transparent`}
                >
                  {/* ホバー時のグロー枠 */}
                  <div
                    className="absolute -inset-0.5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 -z-10"
                    style={{
                      background: "linear-gradient(45deg, #3b82f6, transparent, #60a5fa, transparent)",
                      backgroundSize: "200% 200%",
                      filter: "blur(4px)",
                      animation: "gradient-shift 3s ease infinite",
                    }}
                  />
                  {/* アイコン */}
                  <div className="relative shrink-0 transition-transform duration-400 group-hover:-translate-y-1 group-hover:scale-105">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={merit.iconImg} alt="" className="h-16 w-16 rounded-full object-contain drop-shadow-md" />
                    <div
                      className="absolute inset-[-4px] rounded-full opacity-0 group-hover:opacity-100"
                      style={{ animation: "ripple-icon 1.5s infinite" }}
                    />
                  </div>
                  {/* テキスト */}
                  <div className="flex-grow">
                    <h3 className="relative inline-block text-[16px] font-bold text-slate-900 tracking-wider mb-2">
                      {merit.title}
                      <span
                        className={`absolute -bottom-1 ${isRight ? "right-0" : "left-0"} h-0.5 w-8 bg-slate-300 transition-all duration-300 group-hover:w-full group-hover:bg-blue-500`}
                      />
                    </h3>
                    <p className="text-[12.5px] leading-[1.6] text-slate-500">
                      {merit.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* モバイル・タブレット */}
      <div className="lg:hidden">
        <div className="grid gap-3 sm:grid-cols-2">
          {merits.map((merit) => (
            <MobileCard key={merit.title} merit={merit} />
          ))}
        </div>
      </div>
    </div>
  );
}
