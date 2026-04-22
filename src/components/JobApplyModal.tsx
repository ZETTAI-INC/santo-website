"use client";

import { useState, useEffect } from "react";
import { ArrowRight, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { JobApplyForm } from "./JobApplyForm";

type Props = {
  locale: string;
  jobId: string;
  jobTitle: string;
  jobCompany: string;
  buttonLabel: string;
};

export function JobApplyModal({ locale, jobId, jobTitle, jobCompany, buttonLabel }: Props) {
  const t = useTranslations("JobApply");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.location.hash === "#apply") {
      history.replaceState(null, "", window.location.pathname + window.location.search);
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setOpen(true);
    }
  }, []);

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex flex-1 items-center justify-center gap-2 rounded-[10px] bg-santo-navy py-[16px] text-[16px] font-bold text-white transition hover:bg-santo-blue"
        style={{ minHeight: 60 }}
      >
        {buttonLabel}
        <ArrowRight className="h-4 w-4" />
      </button>

      {open ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
          role="dialog"
          aria-modal="true"
          aria-label={t("pageTitle")}
        >
          <div className="relative flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-xl bg-white shadow-2xl">
            <div className="flex items-start justify-between gap-4 border-b border-slate-200 px-5 py-4 sm:px-8 sm:py-5">
              <div>
                <p className="text-[11px] font-black tracking-[0.25em] text-santo-light">
                  {t("pageLabel")}
                </p>
                <h2 className="mt-1 text-[20px] font-black text-santo-navy sm:text-[22px]">
                  {t("pageTitle")}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="-mr-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="overflow-y-auto px-5 py-5 sm:px-8 sm:py-6">
              <JobApplyForm
                locale={locale}
                jobId={jobId}
                jobTitle={jobTitle}
                jobCompany={jobCompany}
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
