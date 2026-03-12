"use client";

import {
  Search,
  Building,
  HeartHandshake,
  Shield,
  GraduationCap,
  Globe,
} from "lucide-react";

const merits = [
  {
    icon: Search,
    title: "希望に合ったお仕事",
    desc: "あなたのご希望をしっかりヒアリングし、最適なお仕事をご提案します。",
  },
  {
    icon: Building,
    title: "職場見学が可能",
    desc: "実際の職場の雰囲気を事前に確認できるので安心です。",
  },
  {
    icon: HeartHandshake,
    title: "手厚いフォロー",
    desc: "専任の担当者がいつでも相談に乗ります。",
  },
  {
    icon: Shield,
    title: "社会保険・有給完備",
    desc: "健康保険・厚生年金・雇用保険・有給休暇完備。",
  },
  {
    icon: GraduationCap,
    title: "未経験OKの仕事多数",
    desc: "研修制度やサポート体制が整っています。",
  },
  {
    icon: Globe,
    title: "多言語対応で安心",
    desc: "外国籍スタッフへの多言語サポートを行っています。",
  },
];

// 六角形の6頂点座標 (pointy-top hexagon)
// 上→右上→右下→下→左下→左上 の順
// 中心(500, 400) 半径200のpointy-top hexagon
const hexCx = 500;
const hexCy = 400;
const hexR = 190;

function hexVertex(i: number) {
  const angleDeg = -90 + i * 60; // pointy-top: 最初の頂点が上
  const angleRad = (angleDeg * Math.PI) / 180;
  return {
    x: hexCx + hexR * Math.cos(angleRad),
    y: hexCy + hexR * Math.sin(angleRad),
  };
}

// 各頂点の座標
const vertices = [0, 1, 2, 3, 4, 5].map(hexVertex);

// テキスト配置: 頂点の位置に応じて方向を決める
// 0:上, 1:右上, 2:右下, 3:下, 4:左下, 5:左上
const labelConfigs = [
  { side: "top" as const },
  { side: "right" as const },
  { side: "right" as const },
  { side: "bottom" as const },
  { side: "left" as const },
  { side: "left" as const },
];

function MobileCard({ merit }: { merit: (typeof merits)[number] }) {
  const Icon = merit.icon;
  return (
    <div className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5">
      <div className="shrink-0 flex h-12 w-12 items-center justify-center rounded-full bg-santo-navy">
        <Icon className="h-6 w-6 text-white" strokeWidth={1.5} />
      </div>
      <div>
        <p className="text-[15px] font-black tracking-wider text-slate-800">
          {merit.title}
        </p>
        <p className="mt-1 text-[17px] leading-[1.8] text-slate-500">
          {merit.desc}
        </p>
      </div>
    </div>
  );
}

export function HexMerits() {
  const viewW = 1000;
  const viewH = 800;

  return (
    <>
      {/* デスクトップ */}
      <div className="hidden lg:flex justify-center">
        <div className="relative w-full" style={{ maxWidth: viewW }}>
          <svg
            viewBox={`0 0 ${viewW} ${viewH}`}
            className="w-full h-auto"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="hexGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1a2e4a" />
                <stop offset="100%" stopColor="#3b6fa0" />
              </linearGradient>
            </defs>

            {/* 六角形の外枠（光彩） */}
            <polygon
              points={vertices.map((v) => `${v.x},${v.y}`).join(" ")}
              fill="none"
              stroke="#1a2e4a"
              strokeWidth="2"
              opacity="0.1"
              transform={`translate(0, 0) scale(1.08)`}
              style={{ transformOrigin: `${hexCx}px ${hexCy}px` }}
            />

            {/* 六角形本体 */}
            <polygon
              points={vertices.map((v) => `${v.x},${v.y}`).join(" ")}
              fill="url(#hexGrad)"
              stroke="#1a2e4a"
              strokeWidth="2"
              opacity="0.95"
            />

            {/* 中央テキスト */}
            <text
              x={hexCx}
              y={hexCy - 16}
              textAnchor="middle"
              className="fill-santo-accent text-[13px] font-black"
              style={{ letterSpacing: "0.3em" }}
            >
              MERIT
            </text>
            <text
              x={hexCx}
              y={hexCy + 20}
              textAnchor="middle"
              className="fill-white text-[26px] font-black"
              style={{ letterSpacing: "0.1em" }}
            >
              6つの強み
            </text>
          </svg>

          {/* アイコン + テキストをHTML overlayで配置 */}
          <div className="absolute inset-0">
            {merits.map((merit, i) => {
              const Icon = merit.icon;
              const v = vertices[i];
              const config = labelConfigs[i];

              // SVG座標 → パーセント
              const pxPercent = (v.x / viewW) * 100;
              const pyPercent = (v.y / viewH) * 100;

              const isTop = config.side === "top";
              const isBottom = config.side === "bottom";
              const isLeft = config.side === "left";
              const isRight = config.side === "right";

              return (
                <div
                  key={merit.title}
                  className="absolute"
                  style={{
                    left: `${pxPercent}%`,
                    top: `${pyPercent}%`,
                  }}
                >
                  {isTop && (
                    <div className="flex flex-col items-center" style={{ transform: "translate(-50%, -100%)", marginTop: -12 }}>
                      <div className="text-center mb-3 ">
                        <p className="text-[22px] font-black tracking-wider text-slate-800">
                          {merit.title}
                        </p>
                        <p className="mt-1.5 text-[17px] leading-[1.8] text-slate-500">
                          {merit.desc}
                        </p>
                      </div>
                      <div className="shrink-0 flex h-14 w-14 items-center justify-center rounded-full bg-santo-navy shadow-lg border-[3px] border-white">
                        <Icon className="h-6 w-6 text-white" strokeWidth={1.5} />
                      </div>
                    </div>
                  )}

                  {isBottom && (
                    <div className="flex flex-col items-center" style={{ transform: "translate(-50%, 0%)", marginTop: 12 }}>
                      <div className="shrink-0 flex h-14 w-14 items-center justify-center rounded-full bg-santo-navy shadow-lg border-[3px] border-white">
                        <Icon className="h-6 w-6 text-white" strokeWidth={1.5} />
                      </div>
                      <div className="text-center mt-3 ">
                        <p className="text-[22px] font-black tracking-wider text-slate-800">
                          {merit.title}
                        </p>
                        <p className="mt-1.5 text-[17px] leading-[1.8] text-slate-500">
                          {merit.desc}
                        </p>
                      </div>
                    </div>
                  )}

                  {isRight && (
                    <div className="flex items-center gap-4" style={{ transform: "translate(0%, -50%)", marginLeft: 12 }}>
                      <div className="shrink-0 flex h-14 w-14 items-center justify-center rounded-full bg-santo-navy shadow-lg border-[3px] border-white">
                        <Icon className="h-6 w-6 text-white" strokeWidth={1.5} />
                      </div>
                      <div className="" style={{ width: 220 }}>
                        <p className="text-[22px] font-black tracking-wider text-slate-800">
                          {merit.title}
                        </p>
                        <p className="mt-1.5 text-[17px] leading-[1.8] text-slate-500">
                          {merit.desc}
                        </p>
                      </div>
                    </div>
                  )}

                  {isLeft && (
                    <div className="flex items-center gap-4" style={{ transform: "translate(-100%, -50%)", marginLeft: -12 }}>
                      <div className="text-right " style={{ width: 220 }}>
                        <p className="text-[22px] font-black tracking-wider text-slate-800">
                          {merit.title}
                        </p>
                        <p className="mt-1.5 text-[17px] leading-[1.8] text-slate-500">
                          {merit.desc}
                        </p>
                      </div>
                      <div className="shrink-0 flex h-14 w-14 items-center justify-center rounded-full bg-santo-navy shadow-lg border-[3px] border-white">
                        <Icon className="h-6 w-6 text-white" strokeWidth={1.5} />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
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
    </>
  );
}
