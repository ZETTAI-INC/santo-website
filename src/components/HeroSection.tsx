"use client";

import { useEffect, useState } from "react";
import { Briefcase, Building2, ChevronDown } from "lucide-react";
import { LinkButton } from "@/components/LinkButton";
import { TypeWriter } from "@/components/TypeWriter";

export function HeroSection() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // タイプライター完了後にコンテンツ表示（約1.5秒後）
    const timer = setTimeout(() => setShowContent(true), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-santo-navy">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bg.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-santo-navy/50 via-santo-navy/25 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-santo-accent/20" />

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:py-40">
        <div>
          <div className="max-w-3xl">
            {/* タイプライターキャッチコピー */}
            <h1 className="mb-6 font-black leading-[1.2] tracking-wider text-white">
              <TypeWriter
                texts={["人と企業をつなぎ、", "未来をつくる。"]}
                lineClasses={[
                  "text-2xl sm:text-3xl lg:text-4xl text-white/80",
                  "text-5xl sm:text-6xl lg:text-8xl",
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
              <p className="text-[18px] leading-[2.2] text-white/60">
                求職者と企業の皆様を結ぶ
                <br />
                <span className="font-bold text-white">人材派遣サービス</span>を提供しています。
                <br />
                一人ひとりに寄り添い、
                <span className="font-bold text-white">最適なマッチング</span>を実現します。
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
                href="/jobseekers"
                size="xl"
                className="bg-white text-santo-navy hover:bg-slate-100"
              >
                <Briefcase className="h-5 w-5" />
                仕事をお探しの方
              </LinkButton>
              <LinkButton
                href="/employers"
                variant="outline"
                size="xl"
                className="text-white"
              >
                <Building2 className="h-5 w-5" />
                人材をお探しの企業様
              </LinkButton>
            </div>
          </div>
        </div>

        {/* スクロールダウン矢印 */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
          style={{
            opacity: showContent ? 1 : 0,
            transition: "opacity 1s ease 0.8s",
          }}
        >
          <p className="text-[9px] font-bold tracking-[0.2em] text-white/40">
            SCROLL
          </p>
          <ChevronDown className="h-4 w-4 animate-bounce text-white/40" />
        </div>
      </div>
    </section>
  );
}
