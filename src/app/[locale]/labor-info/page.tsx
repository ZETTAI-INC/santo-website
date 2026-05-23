import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

export const metadata: Metadata = {
  title: "改正派遣法に基づくマージン率の公開 | 株式会社サントー",
  description: "労働者派遣法第23条5項に基づき、マージン率・教育訓練・労使協定等の情報を公開しています。",
};

const trainingRows = [
  { target: "新規採用者訓練", content: "ビジネスマナー研修", method: "ロールプレイング", provider: "弊社", cost: "無償", wage: "有給", hours: "4時間" },
  { target: "新規採用者訓練", content: "製造基礎訓練",       method: "テキスト",           provider: "弊社", cost: "無償", wage: "有給", hours: "4時間" },
  { target: "二年目以降",     content: "製造基礎訓練",       method: "テキスト",           provider: "弊社", cost: "無償", wage: "有給", hours: "4時間" },
  { target: "二年目以降",     content: "エクセル初心者教育", method: "PC、テキスト",       provider: "弊社", cost: "無償", wage: "有給", hours: "8時間" },
  { target: "三年目以降",     content: "品質関連教育",       method: "PC、テキスト",       provider: "弊社", cost: "無償", wage: "有給", hours: "8時間" },
  { target: "三年目以降",     content: "衛生管理者教育",     method: "PC、テキスト",       provider: "弊社", cost: "無償", wage: "有給", hours: "16時間" },
  { target: "四年目以降",     content: "資格取得",           method: "—",                  provider: "委託等", cost: "無償", wage: "有給", hours: "24時間" },
] as const;

const pieSegments = [
  {
    label: "労働者賃金",
    labelLines: ["労働者賃金"],
    percent: 71.9,
    color: "#bae6fd",
    text: "#0c4a6e",
    fontSize: 16,
    labelRadius: 0.6,
  },
  {
    label: "営業利益",
    labelLines: ["営業利益"],
    percent: 9.37,
    color: "#fecaca",
    text: "#9f1239",
    fontSize: 10,
    labelRadius: 0.7,
  },
  {
    label: "法定福利費",
    labelLines: ["法定", "福利費"],
    percent: 9.37,
    color: "#fde68a",
    text: "#92400e",
    fontSize: 10,
    labelRadius: 0.7,
  },
  {
    label: "その他の経費\n（教育訓練費他）",
    labelLines: ["その他の", "経費"],
    percent: 9.36,
    color: "#a7f3d0",
    text: "#065f46",
    fontSize: 10,
    labelRadius: 0.7,
  },
] as const;

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function MarginPieChart() {
  const cx = 110;
  const cy = 110;
  const r = 95;

  let currentDeg = 0;
  const slices = pieSegments.map((seg) => {
    const startDeg = currentDeg;
    const sweep = (seg.percent / 100) * 360;
    const endDeg = currentDeg + sweep;
    const start = polarToCartesian(cx, cy, r, startDeg);
    const end = polarToCartesian(cx, cy, r, endDeg);
    const largeArc = sweep > 180 ? 1 : 0;
    const path = `M ${cx} ${cy} L ${start.x} ${start.y} A ${r} ${r} 0 ${largeArc} 1 ${end.x} ${end.y} Z`;
    const midDeg = startDeg + sweep / 2;
    const labelPos = polarToCartesian(cx, cy, r * seg.labelRadius, midDeg);
    currentDeg = endDeg;
    return { ...seg, path, labelPos };
  });

  return (
    <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-center sm:justify-center sm:gap-8">
      <svg
        viewBox="0 0 220 220"
        className="h-64 w-64 sm:h-72 sm:w-72"
        role="img"
        aria-label="マージン率の構成"
      >
        {slices.map((slice) => (
          <path
            key={`${slice.label}-slice`}
            d={slice.path}
            fill={slice.color}
            stroke="#ffffff"
            strokeWidth={2}
          />
        ))}
        {slices.map((slice) => {
          const lineHeight = slice.fontSize * 1.15;
          const total = slice.labelLines.length;
          return slice.labelLines.map((line, idx) => {
            const y = slice.labelPos.y + (idx - (total - 1) / 2) * lineHeight;
            return (
              <text
                key={`${slice.label}-${idx}`}
                x={slice.labelPos.x}
                y={y}
                textAnchor="middle"
                dominantBaseline="central"
                fontSize={slice.fontSize}
                fontWeight="700"
                fill={slice.text}
              >
                {line}
              </text>
            );
          });
        })}
      </svg>

      {/* 凡例 */}
      <ul className="grid w-full max-w-xs grid-cols-1 gap-2 text-xs sm:w-auto sm:text-sm">
        {pieSegments.map((seg) => (
          <li key={seg.label} className="flex items-start gap-2">
            <span
              className="mt-0.5 h-3.5 w-3.5 shrink-0 rounded-sm border border-slate-300"
              style={{ backgroundColor: seg.color }}
            />
            <span className="whitespace-pre-line font-semibold text-slate-700">
              {seg.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default async function LaborInfoPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      {/* タイトル */}
      <h1 className="mb-2 text-xl font-bold text-slate-900 sm:text-2xl">
        改正派遣法に基づくマージン率の公開
      </h1>
      <p className="mb-2 text-sm text-slate-600">
        労働者派遣法第23条5項に基づき、下記の情報を公開いたします。
      </p>
      <p className="mb-10 text-sm text-slate-600">
        （対象年度：令和7年〜令和8年度 ［令和6年8月〜令和7年8月］）
      </p>

      <hr className="mb-8 border-slate-300" />

      {/* マージン率の計算式 */}
      <section className="mb-10">
        <h2 className="mb-3 text-base font-bold text-slate-800">マージン率の計算式</h2>
        <div className="mb-4 rounded bg-slate-50 px-4 py-3">
          <p className="text-center text-sm font-semibold text-slate-700 [text-wrap:balance] break-keep">
            <span className="inline-block whitespace-nowrap">マージン率 ＝</span>
            <br className="sm:hidden" />
            <span className="inline-block whitespace-nowrap">派遣料金の平均額 − 派遣労働者の賃金の平均額</span>
            <br className="sm:hidden" />
            <span className="inline-block whitespace-nowrap">÷ 派遣料金の平均額</span>
          </p>
        </div>

        {/* 円グラフ */}
        <div className="mb-4 rounded border border-slate-200 bg-white p-4">
          <MarginPieChart />
          <p className="mt-4 text-xs text-slate-500">
            （その他の経費：教育訓練費、福利厚生費、募集採用費、労務管理費、事務所費、光熱費、車両費等）
          </p>
        </div>

        <p className="text-xs text-slate-500">
          マージンには、営業利益以外に法定福利費、その他経費なども含まれております。
        </p>
      </section>

      {/* 派遣事業の状況 */}
      <section className="mb-10">
        <h2 className="mb-4 text-base font-bold text-slate-800">派遣事業の状況</h2>
        <table className="w-full border-collapse border border-slate-300 text-sm">
          <tbody>
            <tr className="border-b border-slate-300">
              <th className="w-1/2 border-r border-slate-300 bg-slate-100 px-3 py-3 text-left font-semibold text-slate-700 sm:w-3/5 sm:break-keep sm:px-4">
                ①派遣労働者の数（1日平均）
              </th>
              <td className="px-4 py-3 text-right font-semibold text-slate-800">89名</td>
            </tr>
            <tr className="border-b border-slate-300">
              <th className="border-r border-slate-300 bg-slate-100 px-3 py-3 text-left font-semibold text-slate-700 sm:break-keep sm:px-4">
                ②派遣先数
              </th>
              <td className="px-3 py-3 text-right font-semibold text-slate-800 sm:px-4">21社</td>
            </tr>
            <tr className="border-b border-slate-300">
              <th className="border-r border-slate-300 bg-slate-100 px-3 py-3 text-left font-semibold text-slate-700 sm:break-keep sm:px-4">
                ③労働者派遣に関する料金の平均額
                <span className="block text-xs font-normal text-slate-500 sm:break-keep">
                  （1日当たり8時間労働として計算）
                </span>
              </th>
              <td className="px-3 py-3 text-right font-semibold text-slate-800 sm:px-4">16,968円</td>
            </tr>
            <tr className="border-b border-slate-300">
              <th className="border-r border-slate-300 bg-slate-100 px-3 py-3 text-left font-semibold text-slate-700 sm:break-keep sm:px-4">
                ④派遣労働者の賃金の額の平均額
                <span className="block text-xs font-normal text-slate-500 sm:break-keep">
                  （1日当たり8時間労働として計算）
                </span>
              </th>
              <td className="px-3 py-3 text-right font-semibold text-slate-800 sm:px-4">12,192円</td>
            </tr>
            <tr className="border-b border-slate-300">
              <th className="border-r border-slate-300 bg-slate-100 px-3 py-3 text-left font-semibold text-slate-700 sm:break-keep sm:px-4">
                ⑤労働者派遣に関する料金の平均額から派遣労働者の賃金の平均額を控除した額を当該労働者派遣に関する料金の平均額で除して得た割合
              </th>
              <td className="px-3 py-3 text-right text-lg font-bold text-slate-900 sm:px-4">28.1％</td>
            </tr>
            <tr>
              <th className="border-r border-slate-300 bg-slate-100 px-3 py-3 text-left font-semibold text-slate-700 sm:break-keep sm:px-4">
                ⑥派遣労働者のキャリア形成相談窓口
              </th>
              <td className="px-3 py-3 text-right text-slate-600 sm:px-4">TEL：0463-24-1722</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* 教育訓練 */}
      <section className="mb-10">
        <h2 className="mb-4 text-base font-bold text-slate-800">教育訓練</h2>
        <p className="mb-2 text-xs text-slate-500 sm:hidden">
          ※ 表は横にスクロールできます
        </p>
        <div className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
          <table className="w-full min-w-[640px] border-collapse border border-slate-300 text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-100">
                <th className="whitespace-nowrap border border-slate-300 px-2 py-2 text-left font-semibold text-slate-700 sm:px-3">対象者</th>
                <th className="whitespace-nowrap border border-slate-300 px-2 py-2 text-left font-semibold text-slate-700 sm:px-3">内容</th>
                <th className="whitespace-nowrap border border-slate-300 px-2 py-2 text-left font-semibold text-slate-700 sm:px-3">方法</th>
                <th className="whitespace-nowrap border border-slate-300 px-2 py-2 text-left font-semibold text-slate-700 sm:px-3">主体</th>
                <th className="whitespace-nowrap border border-slate-300 px-2 py-2 text-left font-semibold text-slate-700 sm:px-3">費用負担</th>
                <th className="whitespace-nowrap border border-slate-300 px-2 py-2 text-left font-semibold text-slate-700 sm:px-3">賃金支給</th>
                <th className="whitespace-nowrap border border-slate-300 px-2 py-2 text-left font-semibold text-slate-700 sm:px-3">平均時間</th>
              </tr>
            </thead>
            <tbody>
              {trainingRows.map((row, i) => (
                <tr key={i} className="border-b border-slate-300 odd:bg-white even:bg-slate-50/60">
                  <td className="whitespace-nowrap border-r border-slate-300 px-2 py-2 text-slate-600 sm:px-3">{row.target}</td>
                  <td className="whitespace-nowrap border-r border-slate-300 px-2 py-2 text-slate-600 sm:px-3">{row.content}</td>
                  <td className="whitespace-nowrap border-r border-slate-300 px-2 py-2 text-slate-600 sm:px-3">{row.method}</td>
                  <td className="whitespace-nowrap border-r border-slate-300 px-2 py-2 text-slate-600 sm:px-3">{row.provider}</td>
                  <td className="whitespace-nowrap border-r border-slate-300 px-2 py-2 text-slate-600 sm:px-3">{row.cost}</td>
                  <td className="whitespace-nowrap border-r border-slate-300 px-2 py-2 text-slate-600 sm:px-3">{row.wage}</td>
                  <td className="whitespace-nowrap px-2 py-2 text-slate-600 sm:px-3">{row.hours}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 労使協定 */}
      <section className="mb-10">
        <h2 className="mb-3 text-base font-bold text-slate-800">
          ⑦派遣労働者の待遇の決定に係る労使協定を締結しているか否かの別
        </h2>
        <p className="mb-1 text-sm text-slate-600">
          ※労使協定を締結している（有効期間終期：2025年3月）
        </p>
        <p className="text-sm text-slate-600">
          協定労働者の範囲（派遣従業員全員）
        </p>
      </section>

      <hr className="mb-6 border-slate-300" />

      <div className="text-center text-sm text-slate-500">
        <p>〒254-0807 神奈川県平塚市代官町7-29</p>
        <p className="mt-1 font-bold text-slate-700">株式会社サントー</p>
      </div>
    </div>
  );
}
