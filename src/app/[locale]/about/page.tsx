import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { getTranslations } from "next-intl/server";
import { getLocale } from "next-intl/server";

export const metadata: Metadata = {
  title: "会社概要",
  description:
    "株式会社サントーの会社概要、企業理念、代表挨拶、沿革をご紹介します。",
};

export default async function AboutPage() {
  const t = await getTranslations("About");
  const locale = await getLocale();
  const isJa = locale === "ja";

  const companyInfo = [
    { label: t("infoCompanyName"), value: t("infoCompanyNameValue") },
    { label: t("infoEnName"), value: t("infoEnNameValue") },
    { label: t("infoCeo"), value: t("infoCeoValue") },
    { label: t("infoFounded"), value: t("infoFoundedValue") },
    { label: t("infoCapital"), value: t("infoCapitalValue") },
    { label: t("infoBusiness"), value: t("infoBusinessValue") },
    { label: t("infoLicense"), value: t("infoLicenseValue") },
    { label: t("infoAddress"), value: t("infoAddressValue") },
    { label: t("infoTel"), value: t("infoTelValue") },
    { label: t("infoFax"), value: t("infoFaxValue") },
  ];

  return (
    <>
      <PageHeader label={t("pageLabel")} title={t("pageTitle")} subtitle={t("pageSubtitle")} image="/images/company_hero_factory_people.png" largeSubtitle />

      {/* 代表挨拶 */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="mb-3 text-[14px] font-black tracking-[0.3em] text-santo-light">
            {t("messageLabel")}
          </p>
          <h2 className="mb-4 text-4xl font-black tracking-wider text-slate-900 sm:text-5xl">
            {t("messageTitle")}
          </h2>
          <div className="grid gap-10 lg:grid-cols-5">
            <div className="flex h-72 items-center justify-center bg-santo-gray text-sm font-bold text-slate-400 lg:col-span-2 lg:h-auto">
              {t("messagePhoto")}
            </div>
            <div className="lg:col-span-3">
              <p className="mb-5 text-[15px] leading-[2.2] text-slate-600">
                {t("messageP1")}
              </p>
              <p className="mb-5 text-[15px] leading-[2.2] text-slate-600">
                {t("messageP2")}
              </p>
              <p className="mb-8 text-[15px] leading-[2.2] text-slate-600">
                {t("messageP3")}
              </p>
              <div className="border-l-2 border-santo-navy pl-5">
                <p className="text-sm font-black tracking-wider text-slate-800">
                  {t("messageRole")}
                </p>
                <p className="mt-1 text-xl font-black tracking-wider text-santo-navy">
                  {t("messageName")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 企業理念 */}
      <section className="relative min-h-[520px] overflow-hidden bg-cover py-28 sm:py-36 lg:py-44" style={{ backgroundImage: "url('/images/philosophy_bg_sky.png')", backgroundPosition: "center bottom" }}>
        <div className="absolute inset-0 bg-santo-navy/25" />
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6">
          <p className="mb-3 text-[14px] font-black tracking-[0.3em] text-slate-500">
            {t("philosophyLabel")}
          </p>
          <h2 className="mb-8 text-3xl font-black tracking-wider text-slate-800 drop-shadow-md sm:text-4xl">
            {t("philosophyTitle")}
          </h2>
          <div className="mx-auto h-1 w-14 rounded-full bg-slate-800/30" />
          <div className="mx-auto max-w-4xl py-12 sm:py-16">
            <p className={`font-black leading-[1.8] text-slate-800 drop-shadow-lg ${isJa ? "text-4xl tracking-[0.1em] sm:text-5xl lg:text-6xl" : "text-2xl tracking-wide sm:text-3xl lg:text-4xl"}`}>
              {t("philosophyText1")}<span className="text-santo-blue">{t("philosophyHighlight1")}</span>{t("philosophyText2")}
              <br />
              {t("philosophyText3")}<span className="text-santo-blue">{t("philosophyHighlight2")}</span>{t("philosophyText4")}<span className="text-santo-blue">{t("philosophyHighlight3")}</span>{t("philosophyText5")}
            </p>
          </div>
          <p className="mx-auto max-w-lg text-[17px] leading-[2] text-slate-600">
            {t("philosophyDesc")}
          </p>
        </div>
      </section>

      {/* 会社情報テーブル */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="mb-3 text-[14px] font-black tracking-[0.3em] text-santo-light">
            {t("overviewLabel")}
          </p>
          <h2 className="mb-4 text-4xl font-black tracking-wider text-slate-900 sm:text-5xl">
            {t("overviewTitle")}
          </h2>
          <div className="overflow-hidden rounded-xl border border-slate-200">
            <table className="w-full">
              <tbody>
                {companyInfo.map((item, i) => (
                  <tr
                    key={item.label}
                    className={
                      i % 2 === 0 ? "bg-white" : "bg-santo-gray"
                    }
                  >
                    <th className="w-40 border-r border-slate-200 px-6 py-5 text-left text-[16px] font-black tracking-wider text-santo-navy sm:w-52">
                      {item.label}
                    </th>
                    <td className="px-6 py-5 text-[16px] text-slate-600">
                      {item.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 沿革 */}
      <section className="border-t border-slate-200 bg-[#d4e3ea] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-12 text-center">
            <p className="mb-3 text-[12px] font-black tracking-[0.3em] text-santo-light">
              {t("historyLabel")}
            </p>
            <h2 className="text-4xl font-black tracking-wider text-slate-900 sm:text-5xl">
              {t("historyTitle")}
            </h2>
            <div className="mx-auto mt-5 h-1 w-14 rounded-full bg-santo-navy" />
            <p className="mx-auto mt-5 max-w-md text-[15px] leading-[1.9] text-slate-500">
              {t("historyDesc")}
            </p>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={isJa ? "/images/history_stairs_v3.jpg" : locale === "zh" ? "/images/history_stairs_v3_zh.jpg" : "/images/history_stairs_v3_en.jpg"}
            alt={t("historyTitle")}
            className="w-full h-auto rounded-xl"
          />
        </div>
      </section>
    </>
  );
}
