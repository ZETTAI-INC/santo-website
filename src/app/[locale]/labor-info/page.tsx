import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

export const metadata: Metadata = {
  title: "労働者派遣事業に係る情報公開",
  description:
    "労働者派遣法第23条第5項に基づく情報提供。マージン率、教育訓練、キャリアコンサルティング等の情報を公開しています。",
};

export default async function LaborInfoPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("LaborInfo");

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="mb-2 text-xl font-bold text-slate-900 sm:text-2xl">
        {t("pageTitle")}
      </h1>
      <p className="mb-10 text-xs text-slate-500">
        {t("pageSubtitle")}
      </p>

      <hr className="mb-8 border-slate-300" />

      {/* 1. 派遣元事業主の情報 */}
      <section className="mb-10">
        <h2 className="mb-4 text-base font-bold text-slate-800">
          {t("businessInfoTitle")}
        </h2>
        <table className="w-full border-collapse border border-slate-300 text-sm">
          <tbody>
            <tr className="border-b border-slate-300">
              <th className="w-2/5 border-r border-slate-300 bg-slate-100 px-4 py-3 text-left font-semibold text-slate-700">
                {t("companyName")}
              </th>
              <td className="px-4 py-3 text-slate-600">{t("companyName")}</td>
            </tr>
            <tr className="border-b border-slate-300">
              <th className="border-r border-slate-300 bg-slate-100 px-4 py-3 text-left font-semibold text-slate-700">
                {t("license")}
              </th>
              <td className="px-4 py-3 text-slate-600">{t("licenseValue")}</td>
            </tr>
            <tr>
              <th className="border-r border-slate-300 bg-slate-100 px-4 py-3 text-left font-semibold text-slate-700">
                {t("validPeriod")}
              </th>
              <td className="px-4 py-3 text-slate-600">{t("validPeriodValue")}</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* 2. 労働者派遣事業の状況 */}
      <section className="mb-10">
        <h2 className="mb-4 text-base font-bold text-slate-800">
          {t("dispatchInfoTitle")}
        </h2>
        <table className="w-full border-collapse border border-slate-300 text-sm">
          <tbody>
            <tr className="border-b border-slate-300">
              <th className="w-2/5 border-r border-slate-300 bg-slate-100 px-4 py-3 text-left font-semibold text-slate-700">
                {t("fiscalYear")}
              </th>
              <td className="px-4 py-3 text-slate-600">{t("fiscalYearValue")}</td>
            </tr>
            <tr className="border-b border-slate-300">
              <th className="border-r border-slate-300 bg-slate-100 px-4 py-3 text-left font-semibold text-slate-700">
                {t("dispatchWorkers")}
              </th>
              <td className="px-4 py-3 text-slate-600">{t("dispatchWorkersValue")}</td>
            </tr>
            <tr>
              <th className="border-r border-slate-300 bg-slate-100 px-4 py-3 text-left font-semibold text-slate-700">
                {t("dispatchDestinations")}
              </th>
              <td className="px-4 py-3 text-slate-600">{t("dispatchDestinationsValue")}</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* 3. マージン率等 */}
      <section className="mb-10">
        <h2 className="mb-4 text-base font-bold text-slate-800">
          {t("marginTitle")}
        </h2>
        <table className="w-full border-collapse border border-slate-300 text-sm">
          <tbody>
            <tr className="border-b border-slate-300">
              <th className="w-2/5 border-r border-slate-300 bg-slate-100 px-4 py-3 text-left font-semibold text-slate-700">
                {t("avgFee")}
              </th>
              <td className="px-4 py-3 text-slate-600">{t("avgFeeValue")}</td>
            </tr>
            <tr className="border-b border-slate-300">
              <th className="border-r border-slate-300 bg-slate-100 px-4 py-3 text-left font-semibold text-slate-700">
                {t("avgWage")}
              </th>
              <td className="px-4 py-3 text-slate-600">{t("avgWageValue")}</td>
            </tr>
            <tr>
              <th className="border-r border-slate-300 bg-slate-100 px-4 py-3 text-left font-semibold text-slate-700">
                {t("marginRate")}
              </th>
              <td className="px-4 py-3 text-slate-600">{t("marginRateValue")}</td>
            </tr>
          </tbody>
        </table>
        <p className="mt-3 text-xs text-slate-500">
          ※ {t("marginNote")}
        </p>
      </section>

      {/* 4. 教育訓練 */}
      <section className="mb-10">
        <h2 className="mb-3 text-base font-bold text-slate-800">
          {t("trainingTitle")}
        </h2>
        <p className="mb-3 text-sm text-slate-600">{t("trainingDesc")}</p>
        <ul className="list-disc pl-6 text-sm text-slate-600 space-y-1">
          <li>{t("trainingItem1")}</li>
          <li>{t("trainingItem2")}</li>
          <li>{t("trainingItem3")}</li>
        </ul>
      </section>

      {/* 5. キャリアコンサルティング */}
      <section className="mb-10">
        <h2 className="mb-3 text-base font-bold text-slate-800">
          {t("careerTitle")}
        </h2>
        <p className="mb-3 text-sm text-slate-600">{t("careerDesc")}</p>
        <p className="text-sm text-slate-600">
          {t("careerContact")}：{t("careerContactValue")}
        </p>
      </section>

      {/* 6. 福利厚生 */}
      <section className="mb-10">
        <h2 className="mb-3 text-base font-bold text-slate-800">
          {t("welfareBenefitsTitle")}
        </h2>
        <p className="mb-3 text-sm text-slate-600">{t("welfareBenefitsDesc")}</p>
        <ul className="list-disc pl-6 text-sm text-slate-600 space-y-1">
          <li>{t("welfareBenefit1")}</li>
          <li>{t("welfareBenefit2")}</li>
          <li>{t("welfareBenefit3")}</li>
        </ul>
      </section>

      <hr className="mb-4 border-slate-300" />

      <p className="text-right text-xs text-slate-400">
        {t("updateDate")}：{t("updateDateValue")}
      </p>
    </div>
  );
}
