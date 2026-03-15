"use client";

import { useEffect, useState } from "react";
import { Briefcase, Building2 } from "lucide-react";
import { LinkButton } from "@/components/LinkButton";
import { TypeWriter } from "@/components/TypeWriter";
import { useTranslations, useLocale } from "next-intl";

export function HeroSection() {
  const t = useTranslations("Home");
  const locale = useLocale();
  const localePath = (path: string) => `/${locale}${path}`;
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // タイプライター完了後にコンテンツ表示（約1.5秒後）
    const timer = setTimeout(() => setShowContent(true), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-santo-navy">
      <div
        className="hero-bg absolute inset-0 bg-no-repeat"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-santo-navy/90 via-santo-navy/70 to-santo-navy/30 sm:from-santo-navy/70 sm:via-santo-navy/50" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-santo-accent/20" />

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-32 lg:py-40">
        <div>
          <div className="max-w-3xl">
            {/* タイプライターキャッチコピー */}
            <h1 className="relative mb-6 font-black leading-[1.2] tracking-wider text-white drop-shadow-lg">
              <TypeWriter
                texts={[t("heroLine1"), t("heroLine2")]}
                lineClasses={[
                  "text-2xl sm:text-3xl lg:text-4xl text-white/80",
                  "text-3xl sm:text-6xl lg:text-8xl",
                ]}
              />
            </h1>

            {/* 「未来をつくる」の下線アニメーション */}
            <div
              className="mb-8 h-1 rounded-full bg-santo-accent"
              style={{
                width: showContent ? "80px" : "0px",
                transition: "width 0.8s cubic-bezier(0.25,1,0.5,1)",
              }}
            />

            {/* 説明文（フェードイン） */}
            <div
              className="mb-10 flex max-w-xl items-stretch gap-4"
              style={{
                opacity: showContent ? 1 : 0,
                transform: showContent ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s",
              }}
            >
              <div className="w-[3px] shrink-0 rounded-full bg-santo-accent" />
              <p className="text-[13px] leading-[1.8] text-white sm:text-[22px]" style={{ textShadow: "0 2px 4px rgba(0,0,0,0.3)" }}>
                <span className="sm:whitespace-nowrap">{t("heroSub1")}</span>
                <br />
                <span className="sm:whitespace-nowrap"><span className="text-[15px] font-bold sm:text-[26px]" style={{ color: "#0a2e5c", textShadow: "none" }}>{t("heroSub2")}</span>{t("heroSub3")}</span>
                <br />
                <span className="sm:whitespace-nowrap">{t("heroSub4")}</span>
              </p>
            </div>

            {/* ボタン（フェードイン） */}
            <div
              className="flex flex-col gap-3 sm:flex-row sm:gap-4"
              style={{
                opacity: showContent ? 1 : 0,
                transform: showContent ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s",
              }}
            >
              <LinkButton
                href={localePath("/jobseekers")}
                size="xl"
                className="bg-white text-santo-navy hover:bg-slate-100"
              >
                <Briefcase className="h-5 w-5" />
                {t("forJobseekers")}
              </LinkButton>
              <LinkButton
                href={localePath("/employers")}
                variant="outline"
                size="xl"
                className="text-white"
              >
                <Building2 className="h-5 w-5" />
                {t("forEmployers")}
              </LinkButton>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
