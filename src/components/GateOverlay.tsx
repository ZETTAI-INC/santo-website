"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { Building2, UserSearch } from "lucide-react";

export function GateOverlay() {
  const t = useTranslations("Gate");
  const locale = useLocale();
  const router = useRouter();
  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") return false;
    return !sessionStorage.getItem("gate_dismissed");
  });
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  const handleSelect = (path: string) => {
    setExiting(true);
    sessionStorage.setItem("gate_dismissed", "1");
    setTimeout(() => {
      document.body.style.overflow = "";
      setVisible(false);
      router.push(`/${locale}${path}`);
    }, 500);
  };

  const handleClose = () => {
    setExiting(true);
    sessionStorage.setItem("gate_dismissed", "1");
    setTimeout(() => {
      document.body.style.overflow = "";
      setVisible(false);
    }, 500);
  };

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-500 ${
        exiting ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* 背景: トップページがうっすら見える */}
      <div className="absolute inset-0 bg-santo-navy/80 backdrop-blur-sm" />

      {/* コンテンツ */}
      <div
        className={`relative z-10 w-full max-w-2xl px-6 transition-all duration-500 ${
          exiting ? "translate-y-8 opacity-0" : "translate-y-0 opacity-100"
        }`}
      >
        {/* ロゴ / テキスト */}
        <div className="mb-10 text-center">
          <p className="text-[13px] font-black tracking-[0.3em] text-white/50">
            SANTO CO., LTD.
          </p>
          <h2 className="mt-3 text-[22px] font-black tracking-wider text-white sm:text-[30px] lg:text-[36px]">
            {t("title")}
          </h2>
          <p className="mt-3 text-[14px] leading-[1.8] text-white/70 sm:text-[16px]">
            {t("subtitle")}
          </p>
        </div>

        {/* 2つのボタン */}
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          {/* 企業様 */}
          <button
            onClick={() => handleSelect("/employers")}
            className="group flex flex-col items-center rounded-2xl border-2 border-white/20 bg-white/10 px-6 py-8 text-center backdrop-blur-md transition-all duration-300 hover:border-white/50 hover:bg-white/20 sm:py-10"
          >
            <Building2 className="mb-4 h-12 w-12 text-white/80 transition group-hover:scale-110 group-hover:text-white" strokeWidth={1.2} />
            <span className="text-[18px] font-black tracking-wider text-white sm:text-[22px]">
              {t("employers")}
            </span>
            <span className="mt-2 text-[13px] leading-[1.6] text-white/60">
              {t("employersDesc")}
            </span>
          </button>

          {/* 求職者 */}
          <button
            onClick={() => handleSelect("/jobseekers")}
            className="group flex flex-col items-center rounded-2xl border-2 border-white/20 bg-white/10 px-6 py-8 text-center backdrop-blur-md transition-all duration-300 hover:border-white/50 hover:bg-white/20 sm:py-10"
          >
            <UserSearch className="mb-4 h-12 w-12 text-white/80 transition group-hover:scale-110 group-hover:text-white" strokeWidth={1.2} />
            <span className="text-[18px] font-black tracking-wider text-white sm:text-[22px]">
              {t("jobseekers")}
            </span>
            <span className="mt-2 text-[13px] leading-[1.6] text-white/60">
              {t("jobseekersDesc")}
            </span>
          </button>
        </div>

        {/* スキップ */}
        <div className="mt-8 text-center">
          <button
            onClick={handleClose}
            className="text-[13px] text-white/40 transition hover:text-white/70"
          >
            {t("skip")}
          </button>
        </div>
      </div>
    </div>
  );
}
