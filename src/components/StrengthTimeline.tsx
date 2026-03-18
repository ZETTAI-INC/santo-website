"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { useTranslations } from "next-intl";
import {
  Zap,
  Users,
  HeadphonesIcon,
  PiggyBank,
  Network,
  ShieldCheck,
} from "lucide-react";

/* タイトル内の強調 */
function TitleAccent({ children }: { children: ReactNode }) {
  return (
    <span className="text-[1.3em]">{children}</span>
  );
}

interface StrengthItem {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement> & { strokeWidth?: number }>;
  title: ReactNode;
  desc: ReactNode;
}

function TimelineItem({
  item,
  index,
  visible,
  totalCount,
}: {
  item: StrengthItem;
  index: number;
  visible: boolean;
  totalCount: number;
}) {
  const Icon = item.icon;
  const isLeft = index % 2 === 0;
  const num = String(index + 1).padStart(2, "0");

  return (
    <div className="relative grid grid-cols-[1fr_auto_1fr] items-center gap-0">
      {/* 左側コンテンツ（偶数） or 空 */}
      <div className={`${isLeft ? "pr-8 text-right" : ""}`}>
        {isLeft && (
          <div
            className="ml-auto max-w-sm"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-40px)",
              transition: `opacity 0.7s ease ${index * 120 + 200}ms, transform 0.7s ease ${index * 120 + 200}ms`,
            }}
          >
            <span className="text-[52px] font-extralight leading-none text-santo-navy/30">
              {num}
            </span>
            <h3 className="mt-2 text-[26px] font-black tracking-wider text-slate-900">
              {item.title}
            </h3>
            <p className="mt-3 text-[18px] font-bold leading-[2] text-slate-600">
              {item.desc}
            </p>
          </div>
        )}
      </div>

      {/* 中央ライン + ドット */}
      <div className="relative flex flex-col items-center">
        {/* 上のライン */}
        {index > 0 && (
          <div
            className="w-px bg-santo-navy/15"
            style={{
              height: 16,
              opacity: visible ? 1 : 0,
              transition: `opacity 0.5s ease ${index * 120}ms`,
            }}
          />
        )}
        {index === 0 && <div style={{ height: 16 }} />}
        {/* アイコンドット */}
        <div
          className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-2 border-santo-navy bg-white shadow-md"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "scale(1)" : "scale(0.5)",
            transition: `opacity 0.5s ease ${index * 120 + 100}ms, transform 0.5s cubic-bezier(0.34,1.56,0.64,1) ${index * 120 + 100}ms`,
          }}
        >
          <Icon className="h-6 w-6 text-santo-navy" strokeWidth={1.5} />
        </div>
        {/* 下のライン */}
        {index < totalCount - 1 && (
          <div
            className="w-px bg-santo-navy/15"
            style={{
              height: 16,
              opacity: visible ? 1 : 0,
              transition: `opacity 0.5s ease ${index * 120 + 200}ms`,
            }}
          />
        )}
        {index === totalCount - 1 && <div style={{ height: 16 }} />}
      </div>

      {/* 右側コンテンツ（奇数） or 空 */}
      <div className={`${!isLeft ? "pl-8" : ""}`}>
        {!isLeft && (
          <div
            className="max-w-sm"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(40px)",
              transition: `opacity 0.7s ease ${index * 120 + 200}ms, transform 0.7s ease ${index * 120 + 200}ms`,
            }}
          >
            <span className="text-[52px] font-extralight leading-none text-santo-navy/30">
              {num}
            </span>
            <h3 className="mt-2 text-[26px] font-black tracking-wider text-slate-900">
              {item.title}
            </h3>
            <p className="mt-3 text-[18px] font-bold leading-[2] text-slate-600">
              {item.desc}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

/* モバイル: 左ライン型 */
function MobileTimelineItem({
  item,
  index,
  visible,
  totalCount,
}: {
  item: StrengthItem;
  index: number;
  visible: boolean;
  totalCount: number;
}) {
  const Icon = item.icon;
  const num = String(index + 1).padStart(2, "0");

  return (
    <div className="relative flex gap-3 sm:gap-5">
      {/* 左: ライン + ドット */}
      <div className="relative flex flex-col items-center">
        <div
          className={`w-px flex-1 ${index === 0 ? "bg-transparent" : "bg-santo-navy/15"}`}
          style={{
            opacity: visible ? 1 : 0,
            transition: `opacity 0.4s ease ${index * 100}ms`,
          }}
        />
        <div
          className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-santo-navy bg-white shadow-md sm:h-11 sm:w-11"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "scale(1)" : "scale(0.5)",
            transition: `opacity 0.4s ease ${index * 100 + 50}ms, transform 0.4s cubic-bezier(0.34,1.56,0.64,1) ${index * 100 + 50}ms`,
          }}
        >
          <Icon className="h-4 w-4 text-santo-navy sm:h-5 sm:w-5" strokeWidth={1.5} />
        </div>
        <div
          className={`w-px flex-1 ${index === totalCount - 1 ? "bg-transparent" : "bg-santo-navy/15"}`}
          style={{
            opacity: visible ? 1 : 0,
            transition: `opacity 0.4s ease ${index * 100 + 100}ms`,
          }}
        />
      </div>

      {/* 右: コンテンツ */}
      <div
        className="pb-4 sm:pb-8"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateX(0)" : "translateX(20px)",
          transition: `opacity 0.6s ease ${index * 100 + 100}ms, transform 0.6s ease ${index * 100 + 100}ms`,
        }}
      >
        <span className="text-[28px] font-extralight leading-none text-santo-navy/30 sm:text-[36px]">
          {num}
        </span>
        <h3 className="mt-0.5 text-[15px] font-black tracking-wider text-slate-900 sm:mt-1 sm:text-[18px]">
          {item.title}
        </h3>
        <p className="mt-1 text-[13px] font-bold leading-[1.7] text-slate-600 sm:mt-2 sm:text-[14px] sm:leading-[1.9]">
          {item.desc}
        </p>
      </div>
    </div>
  );
}

export function StrengthTimeline() {
  const t = useTranslations("StrengthTimeline");
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  const strengths: StrengthItem[] = [
    {
      icon: Zap,
      title: (
        <>
          <TitleAccent>{t("title1Accent")}</TitleAccent>{t("title1Rest")}
        </>
      ),
      desc: t("desc1"),
    },
    {
      icon: Users,
      title: (
        <>
          <TitleAccent>{t("title2Accent")}</TitleAccent>{t("title2Rest")}
        </>
      ),
      desc: t("desc2"),
    },
    {
      icon: HeadphonesIcon,
      title: (
        <>
          {t("title3Pre")}<TitleAccent>{t("title3Accent")}</TitleAccent>
        </>
      ),
      desc: t("desc3"),
    },
    {
      icon: PiggyBank,
      title: (
        <>
          <TitleAccent>{t("title4Accent")}</TitleAccent>{t("title4Rest")}
        </>
      ),
      desc: t("desc4"),
    },
    {
      icon: Network,
      title: (
        <>
          <TitleAccent>{t("title5Accent")}</TitleAccent>{t("title5Rest")}
        </>
      ),
      desc: t("desc5"),
    },
    {
      icon: ShieldCheck,
      title: (
        <>
          <TitleAccent>{t("title6Accent")}</TitleAccent>{t("title6Rest")}
        </>
      ),
      desc: t("desc6"),
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
      {/* デスクトップ: 左右交互 */}
      <div className="relative hidden md:block">
        {/* 背景シルエット画像 */}
        {/* Step01付近: 左外側 */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/bg_silhouette_1.png"
          alt=""
          className="pointer-events-none absolute hidden lg:block"
          style={{
            top: "-2%",
            left: "-8%",
            height: 560,
            width: "auto",
            opacity: visible ? 0.22 : 0,
            filter: "grayscale(100%) blur(2px) contrast(1.1)",
            zIndex: 0,
            transition: "opacity 1.2s ease 0.3s",
          }}
        />
        {/* Step02付近: 右外側 */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/bg_silhouette_2.png"
          alt=""
          className="pointer-events-none absolute hidden lg:block"
          style={{
            top: "30%",
            right: "-8%",
            height: 560,
            width: "auto",
            opacity: visible ? 0.22 : 0,
            filter: "grayscale(100%) blur(2px) contrast(1.1)",
            zIndex: 0,
            transition: "opacity 1.2s ease 0.6s",
          }}
        />
        {/* Step03付近: 左外側 */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/bg_silhouette_3.png"
          alt=""
          className="pointer-events-none absolute hidden lg:block"
          style={{
            top: "62%",
            left: "-8%",
            height: 560,
            width: "auto",
            opacity: visible ? 0.22 : 0,
            filter: "grayscale(100%) blur(2px) contrast(1.1)",
            zIndex: 0,
            transition: "opacity 1.2s ease 0.9s",
          }}
        />

        <div className="relative z-[1]">
          {strengths.map((item, i) => (
            <TimelineItem key={i} item={item} index={i} visible={visible} totalCount={strengths.length} />
          ))}
        </div>
      </div>

      {/* モバイル: 左ライン（シルエット非表示） */}
      <div className="md:hidden">
        {strengths.map((item, i) => (
          <MobileTimelineItem key={i} item={item} index={i} visible={visible} totalCount={strengths.length} />
        ))}
      </div>
    </div>
  );
}
