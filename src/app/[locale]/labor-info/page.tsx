import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "LaborInfo" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default async function LaborInfoPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("LaborInfo");

  const trainingRows = [1, 2, 3, 4, 5, 6, 7] as const;

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      {/* タイトル */}
      <h1 className="mb-2 text-xl font-bold text-slate-900 sm:text-2xl">
        {t("pageTitle")}
      </h1>
      <p className="mb-2 text-sm text-slate-600">
        {t("pageSubtitle")}
      </p>
      <p className="mb-10 text-sm text-slate-600">
        （{t("targetPeriod")}：{t("targetPeriodValue")}）
      </p>

      <hr className="mb-8 border-slate-300" />

      {/* マージン率の計算式 */}
      <section className="mb-10">
        <h2 className="mb-3 text-base font-bold text-slate-800">
          {t("marginFormulaTitle")}
        </h2>
        <div className="mb-4 rounded bg-slate-50 px-4 py-3">
          <p className="text-center text-sm font-semibold text-slate-700">
            {t("marginFormulaDesc")}
          </p>
        </div>

        {/* マージン構成の図解 */}
        <div className="mb-4 rounded border border-slate-200 bg-white p-4">
          <div className="flex h-40 overflow-hidden rounded sm:h-48">
            {/* 労働者賃金 - 約72% */}
            <div className="flex flex-[72] flex-col items-center justify-center bg-sky-100 px-2 text-center">
              <span className="text-xs font-semibold text-sky-800 sm:text-sm">{t("marginChartWorkerWage")}</span>
            </div>
            {/* マージン部分 */}
            <div className="flex flex-[28] flex-col">
              {/* 法定福利費 */}
              <div className="flex flex-[40] items-center justify-center bg-amber-100 px-1 text-center">
                <span className="text-[10px] font-semibold text-amber-800 sm:text-xs">{t("marginChartLegalWelfare")}</span>
              </div>
              {/* その他の経費 */}
              <div className="flex flex-[35] items-center justify-center bg-emerald-100 px-1 text-center">
                <span className="text-[10px] font-semibold text-emerald-800 sm:text-xs">{t("marginChartOtherExpenses")}</span>
              </div>
              {/* 営業利益 */}
              <div className="flex flex-[25] items-center justify-center bg-rose-100 px-1 text-center">
                <span className="text-[10px] font-semibold text-rose-800 sm:text-xs">{t("marginChartProfit")}</span>
              </div>
            </div>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            （{t("marginChartOtherDetail")}）
          </p>
        </div>

        <p className="text-xs text-slate-500">
          ※ {t("marginNote")}
        </p>
      </section>

      {/* 派遣事業の状況 */}
      <section className="mb-10">
        <h2 className="mb-4 text-base font-bold text-slate-800">
          {t("dispatchInfoTitle")}
        </h2>
        <table className="w-full border-collapse border border-slate-300 text-sm">
          <tbody>
            <tr className="border-b border-slate-300">
              <th className="w-3/5 border-r border-slate-300 bg-slate-100 px-4 py-3 text-left font-semibold text-slate-700">
                {t("dispatchWorkers")}
              </th>
              <td className="px-4 py-3 text-right font-semibold text-slate-800">{t("dispatchWorkersValue")}</td>
            </tr>
            <tr className="border-b border-slate-300">
              <th className="border-r border-slate-300 bg-slate-100 px-4 py-3 text-left font-semibold text-slate-700">
                {t("dispatchDestinations")}
              </th>
              <td className="px-4 py-3 text-right font-semibold text-slate-800">{t("dispatchDestinationsValue")}</td>
            </tr>
            <tr className="border-b border-slate-300">
              <th className="border-r border-slate-300 bg-slate-100 px-4 py-3 text-left font-semibold text-slate-700">
                {t("avgFee")}
                <span className="block text-xs font-normal text-slate-500">{t("avgFeeNote")}</span>
              </th>
              <td className="px-4 py-3 text-right font-semibold text-slate-800">{t("avgFeeValue")}</td>
            </tr>
            <tr className="border-b border-slate-300">
              <th className="border-r border-slate-300 bg-slate-100 px-4 py-3 text-left font-semibold text-slate-700">
                {t("avgWage")}
                <span className="block text-xs font-normal text-slate-500">{t("avgWageNote")}</span>
              </th>
              <td className="px-4 py-3 text-right font-semibold text-slate-800">{t("avgWageValue")}</td>
            </tr>
            <tr className="border-b border-slate-300">
              <th className="border-r border-slate-300 bg-slate-100 px-4 py-3 text-left font-semibold text-slate-700">
                {t("marginRate")}
                <span className="block text-xs font-normal text-slate-500">{t("marginRateDesc")}</span>
              </th>
              <td className="px-4 py-3 text-right text-lg font-bold text-slate-900">{t("marginRateValue")}</td>
            </tr>
            <tr>
              <th className="border-r border-slate-300 bg-slate-100 px-4 py-3 text-left font-semibold text-slate-700">
                {t("careerContact")}
              </th>
              <td className="px-4 py-3 text-right text-slate-600">{t("careerContactValue")}</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* 教育訓練 */}
      <section className="mb-10">
        <h2 className="mb-4 text-base font-bold text-slate-800">
          {t("trainingTitle")}
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-slate-300 text-sm">
            <thead>
              <tr className="bg-slate-100">
                <th className="border border-slate-300 px-3 py-2 text-left font-semibold text-slate-700">{t("trainingColTarget")}</th>
                <th className="border border-slate-300 px-3 py-2 text-left font-semibold text-slate-700">{t("trainingColContent")}</th>
                <th className="border border-slate-300 px-3 py-2 text-left font-semibold text-slate-700">{t("trainingColMethod")}</th>
                <th className="border border-slate-300 px-3 py-2 text-left font-semibold text-slate-700">{t("trainingColProvider")}</th>
                <th className="border border-slate-300 px-3 py-2 text-left font-semibold text-slate-700">{t("trainingColCost")}</th>
                <th className="border border-slate-300 px-3 py-2 text-left font-semibold text-slate-700">{t("trainingColWage")}</th>
                <th className="border border-slate-300 px-3 py-2 text-left font-semibold text-slate-700">{t("trainingColHours")}</th>
              </tr>
            </thead>
            <tbody>
              {trainingRows.map((i) => (
                <tr key={i} className="border-b border-slate-300">
                  <td className="border-r border-slate-300 px-3 py-2 text-slate-600">{t(`trainingRow${i}Target`)}</td>
                  <td className="border-r border-slate-300 px-3 py-2 text-slate-600">{t(`trainingRow${i}Content`)}</td>
                  <td className="border-r border-slate-300 px-3 py-2 text-slate-600">{t(`trainingRow${i}Method`)}</td>
                  <td className="border-r border-slate-300 px-3 py-2 text-slate-600">{t(`trainingRow${i}Provider`)}</td>
                  <td className="border-r border-slate-300 px-3 py-2 text-slate-600">{t(`trainingRow${i}Cost`)}</td>
                  <td className="border-r border-slate-300 px-3 py-2 text-slate-600">{t(`trainingRow${i}Wage`)}</td>
                  <td className="px-3 py-2 text-slate-600">{t(`trainingRow${i}Hours`)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 労使協定 */}
      <section className="mb-10">
        <h2 className="mb-3 text-base font-bold text-slate-800">
          {t("agreementTitle")}
        </h2>
        <p className="mb-1 text-sm text-slate-600">
          ※{t("agreementDesc")}
        </p>
        <p className="text-sm text-slate-600">
          {t("agreementScope")}
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
