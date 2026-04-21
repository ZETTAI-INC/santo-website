"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useSearchParams } from "next/navigation";
import { ArrowLeft, Star } from "lucide-react";
import Link from "next/link";

export function JobList() {
  const t = useTranslations("Jobs");
  const locale = useLocale();
  const searchParams = useSearchParams();
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFav = (id: number) =>
    setFavorites((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]));

  const JOB_COUNT = 16;
  const NEW_IDS = new Set([1, 2, 3, 10, 14, 16]);
  const DAYS_LEFT: Record<number, number> = {
    1: 7, 2: 5, 3: 10, 4: 12, 5: 8, 6: 6, 7: 14, 8: 9,
    9: 11, 10: 7, 11: 13, 12: 10, 13: 5, 14: 7, 15: 9, 16: 12,
  };
  const jobs = Array.from({ length: JOB_COUNT }, (_, i) => {
    const id = i + 1;
    return {
      id,
      company: t(`job${id}Company` as never) as string,
      title: t(`job${id}Title` as never) as string,
      image: id % 2 === 1 ? "/images/job_types_mixed_photo.png" : "/images/jobseekers_hero.png",
      salary: t(`job${id}Salary` as never) as string,
      type: t(`job${id}Type` as never) as string,
      shift: t(`job${id}Shift` as never) as string,
      access: t(`job${id}Access` as never) as string,
      isNew: NEW_IDS.has(id),
      daysLeft: DAYS_LEFT[id] ?? 7,
    };
  });

  // 検索パラメータ表示
  const activeFilters: string[] = [];
  const area = searchParams.get("area");
  const line = searchParams.get("line");
  const jobType = searchParams.get("jobType");
  const q = searchParams.get("q");
  if (area) activeFilters.push(area);
  if (line) activeFilters.push(line);
  if (jobType) activeFilters.push(jobType);
  if (q) activeFilters.push(q);

  return (
    <section className="py-10 sm:py-14">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* 戻る + 件数 */}
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href={`/${locale}/jobseekers`}
            className="inline-flex w-fit items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-[13px] font-medium text-slate-600 transition hover:bg-slate-50"
          >
            <ArrowLeft className="h-4 w-4" />
            {t("backToSearch")}
          </Link>
          <p className="text-[14px] text-slate-500">
            {t("resultCount", { count: jobs.length })}
            {activeFilters.length > 0 && (
              <span className="ml-2 text-slate-400">
                ({activeFilters.join(", ")})
              </span>
            )}
          </p>
        </div>

        {/* 求人カード一覧 */}
        <div className="flex flex-col gap-5">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="overflow-hidden border border-slate-200 bg-white transition hover:shadow-md"
            >
              {/* ── 上部: NEWバッジ + 企業名 ── */}
              <div className="border-b border-slate-100 px-5 py-3 sm:px-6">
                <div className="flex items-center gap-3">
                  {job.isNew && (
                    <span className="inline-block rounded-sm bg-orange-500 px-2 py-0.5 text-[10px] font-bold leading-none text-white">
                      NEW
                    </span>
                  )}
                  <p className="text-[15px] font-bold text-slate-900">
                    {job.company}
                  </p>
                </div>
              </div>

              {/* ── メイン: 画像 + 右側コンテンツ ── */}
              <div className="flex flex-col sm:flex-row">
                {/* サムネイル */}
                <div className="shrink-0 p-4 sm:p-5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={job.image}
                    alt={job.title}
                    className="h-[120px] w-full rounded object-cover sm:h-[130px] sm:w-[160px]"
                  />
                </div>

                {/* 右側 */}
                <div className="flex-1 px-4 pb-4 sm:py-4 sm:pl-0 sm:pr-5">
                  {/* タイトル */}
                  <Link
                    href={`/${locale}/jobs/${job.id}`}
                    className="text-[14px] font-bold leading-[1.7] text-[#1a6dcc] hover:underline sm:text-[15px]"
                  >
                    {job.title}
                  </Link>

                  {/* 情報テーブル */}
                  <div className="mt-3 border-t border-slate-100 text-[13px]">
                    {/* 給与 */}
                    <div className="flex border-b border-slate-100">
                      <div className="flex w-[90px] shrink-0 items-center gap-1.5 border-r border-slate-100 bg-slate-50/80 px-3 py-2 sm:w-[100px]">
                        <span className="text-[12px] text-slate-400">$</span>
                        <span className="font-bold text-slate-600">{t("labelSalary")}</span>
                      </div>
                      <div className="flex-1 px-3 py-2 text-slate-700">
                        {job.salary}
                      </div>
                    </div>
                    {/* 雇用形態 + シフト */}
                    <div className="flex border-b border-slate-100">
                      <div className="flex w-[90px] shrink-0 items-center gap-1.5 border-r border-slate-100 bg-slate-50/80 px-3 py-2 sm:w-[100px]">
                        <span className="text-[12px] text-slate-400">&#9776;</span>
                        <span className="font-bold text-slate-600">{t("labelType")}</span>
                      </div>
                      <div className="flex flex-1 flex-wrap">
                        <div className="border-r border-slate-100 px-3 py-2 text-slate-700">
                          {job.type}
                        </div>
                        <div className="flex items-center gap-1.5 px-3 py-2">
                          <span className="text-[12px] text-slate-400">&#9776;</span>
                          <span className="font-bold text-slate-600">{t("labelShift")}</span>
                          <span className="ml-1 text-slate-700">{job.shift}</span>
                        </div>
                      </div>
                    </div>
                    {/* アクセス */}
                    <div className="flex">
                      <div className="flex w-[90px] shrink-0 items-center gap-1.5 border-r border-slate-100 bg-slate-50/80 px-3 py-2 sm:w-[100px]">
                        <span className="text-[12px] text-slate-400">&#9737;</span>
                        <span className="font-bold text-slate-600">{t("labelAccess")}</span>
                      </div>
                      <div className="flex-1 px-3 py-2 text-slate-700">
                        {job.access}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── フッター: ボタン + 残り日数 ── */}
              <div className="border-t border-slate-200 px-5 py-3 sm:px-6">
                <div className="flex items-center gap-3">
                  <Link
                    href={`/${locale}/contact`}
                    className="flex-1 rounded-lg bg-santo-navy py-2.5 text-center text-[13px] font-bold tracking-wide text-white transition hover:bg-santo-blue"
                  >
                    {t("apply")}
                  </Link>
                  <Link
                    href={`/${locale}/jobs/${job.id}`}
                    className="flex-1 rounded-lg border-2 border-santo-navy py-2.5 text-center text-[13px] font-bold tracking-wide text-santo-navy transition hover:bg-santo-navy hover:text-white"
                  >
                    {t("detail")}
                  </Link>
                  <button
                    onClick={() => toggleFav(job.id)}
                    className={`shrink-0 transition ${favorites.includes(job.id) ? "text-orange-400" : "text-slate-300 hover:text-orange-400"}`}
                  >
                    <Star
                      className="h-5 w-5"
                      fill={favorites.includes(job.id) ? "currentColor" : "none"}
                    />
                  </button>
                </div>
                <p className="mt-2 text-[12px] text-slate-400">
                  {t("daysLeft", { days: job.daysLeft })}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-2xl bg-[#dce8f5] p-8 text-center sm:p-12">
          <h2 className="text-xl font-black tracking-wider text-slate-800 sm:text-2xl">
            {t("ctaTitle")}
          </h2>
          <p className="mx-auto mt-3 max-w-md text-[13px] leading-[1.9] text-slate-500">
            {t("ctaDesc")}
          </p>
          <Link
            href={`/${locale}/contact`}
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-santo-navy px-8 py-3 text-[14px] font-bold text-white transition hover:bg-santo-blue"
          >
            {t("ctaButton")}
          </Link>
        </div>
      </div>
    </section>
  );
}
