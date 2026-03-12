"use client";

import { useEffect, useRef, useState } from "react";
import {
  Zap,
  Users,
  HeadphonesIcon,
  PiggyBank,
  Network,
  ShieldCheck,
} from "lucide-react";

const strengths = [
  {
    icon: Zap,
    title: "迅速な人材提案",
    desc: "お問い合わせから最短で人材をご提案。急な人員ニーズにもお応えします。",
  },
  {
    icon: Users,
    title: "丁寧なマッチング",
    desc: "スキル・経験だけでなく、人柄や職場との相性も考慮した人選を行います。",
  },
  {
    icon: HeadphonesIcon,
    title: "充実のフォロー体制",
    desc: "派遣スタッフへの定期的なフォローにより、安定した就業をサポートします。",
  },
  {
    icon: PiggyBank,
    title: "コスト削減",
    desc: "採用にかかる時間とコストを大幅に削減。必要な時に必要な人材を確保できます。",
  },
  {
    icon: Network,
    title: "多様な人材",
    desc: "製造・物流・事務など幅広い職種に対応できる人材ネットワークを保有しています。",
  },
  {
    icon: ShieldCheck,
    title: "コンプライアンス遵守",
    desc: "労働関係法令を遵守し、安心してご利用いただけるサービスを提供します。",
  },
];

function TimelineItem({
  item,
  index,
  visible,
}: {
  item: (typeof strengths)[number];
  index: number;
  visible: boolean;
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
            <span className="text-[52px] font-extralight leading-none text-santo-navy/10">
              {num}
            </span>
            <h3 className="mt-2 text-[22px] font-black tracking-wider text-santo-navy">
              {item.title}
            </h3>
            <p className="mt-3 text-[15px] leading-[2] text-slate-800">
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
              height: 40,
              opacity: visible ? 1 : 0,
              transition: `opacity 0.5s ease ${index * 120}ms`,
            }}
          />
        )}
        {index === 0 && <div style={{ height: 40 }} />}
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
        {index < strengths.length - 1 && (
          <div
            className="w-px bg-santo-navy/15"
            style={{
              height: 40,
              opacity: visible ? 1 : 0,
              transition: `opacity 0.5s ease ${index * 120 + 200}ms`,
            }}
          />
        )}
        {index === strengths.length - 1 && <div style={{ height: 40 }} />}
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
            <span className="text-[52px] font-extralight leading-none text-santo-navy/10">
              {num}
            </span>
            <h3 className="mt-2 text-[22px] font-black tracking-wider text-santo-navy">
              {item.title}
            </h3>
            <p className="mt-3 text-[15px] leading-[2] text-slate-800">
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
}: {
  item: (typeof strengths)[number];
  index: number;
  visible: boolean;
}) {
  const Icon = item.icon;
  const num = String(index + 1).padStart(2, "0");

  return (
    <div className="relative flex gap-5">
      {/* 左: ライン + ドット */}
      <div className="relative flex flex-col items-center">
        {/* 上のライン */}
        <div
          className={`w-px flex-1 ${index === 0 ? "bg-transparent" : "bg-santo-navy/15"}`}
          style={{
            opacity: visible ? 1 : 0,
            transition: `opacity 0.4s ease ${index * 100}ms`,
          }}
        />
        {/* アイコンドット */}
        <div
          className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-santo-navy bg-white shadow-md"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "scale(1)" : "scale(0.5)",
            transition: `opacity 0.4s ease ${index * 100 + 50}ms, transform 0.4s cubic-bezier(0.34,1.56,0.64,1) ${index * 100 + 50}ms`,
          }}
        >
          <Icon className="h-5 w-5 text-santo-navy" strokeWidth={1.5} />
        </div>
        {/* 下のライン */}
        <div
          className={`w-px flex-1 ${index === strengths.length - 1 ? "bg-transparent" : "bg-santo-navy/15"}`}
          style={{
            opacity: visible ? 1 : 0,
            transition: `opacity 0.4s ease ${index * 100 + 100}ms`,
          }}
        />
      </div>

      {/* 右: コンテンツ */}
      <div
        className="pb-8"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateX(0)" : "translateX(20px)",
          transition: `opacity 0.6s ease ${index * 100 + 100}ms, transform 0.6s ease ${index * 100 + 100}ms`,
        }}
      >
        <span className="text-[36px] font-extralight leading-none text-santo-navy/10">
          {num}
        </span>
        <h3 className="mt-1 text-[18px] font-black tracking-wider text-santo-navy">
          {item.title}
        </h3>
        <p className="mt-2 text-[14px] leading-[1.9] text-slate-800">
          {item.desc}
        </p>
      </div>
    </div>
  );
}

export function StrengthTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

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
      <div className="hidden md:block">
        {strengths.map((item, i) => (
          <TimelineItem key={item.title} item={item} index={i} visible={visible} />
        ))}
      </div>

      {/* モバイル: 左ライン */}
      <div className="md:hidden">
        {strengths.map((item, i) => (
          <MobileTimelineItem key={item.title} item={item} index={i} visible={visible} />
        ))}
      </div>
    </div>
  );
}
