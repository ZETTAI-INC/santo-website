"use client";

import { useState, useEffect, useRef } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { Search, ChevronDown, Check } from "lucide-react";

/* ── 共通アコーディオンドロップダウン ── */
function AccordionSelect({
  label,
  options,
  selected,
  onSelect,
  open,
  onToggleOpen,
  last,
}: {
  label: string;
  options: { key: string; label: string }[];
  selected: string[];
  onSelect: (key: string) => void;
  multiple?: boolean;
  open: boolean;
  onToggleOpen: () => void;
  last?: boolean;
}) {
  const inline = options.length <= 7;

  const displayLabel = selected.length > 0
    ? options.filter((o) => selected.includes(o.key)).map((o) => o.label).join("、")
    : "";

  return (
    <div className={`flex ${last ? "" : "border-b border-slate-100"}`}>
      {/* ラベル */}
      <div className="flex w-[100px] shrink-0 items-center border-r border-slate-100 px-4 py-2 sm:w-[120px] sm:px-5">
        <span className="text-[13px] font-bold tracking-wide text-slate-700 sm:text-[14px]">
          {label}
        </span>
      </div>

      {/* コンテンツ */}
      {inline ? (
        /* 7個以下: チェックボックス横並び */
        <div className="flex min-w-0 flex-1 flex-wrap items-center gap-x-5 gap-y-1.5 px-5 py-2 sm:px-6">
          {options.map((opt) => {
            const isSelected = selected.includes(opt.key);
            return (
              <label
                key={opt.key}
                onClick={() => onSelect(opt.key)}
                className="flex cursor-pointer select-none items-center gap-2 text-[13px] text-slate-600 transition hover:text-santo-navy sm:text-[14px]"
              >
                <span
                  className={`flex shrink-0 items-center justify-center rounded transition ${
                    isSelected ? "border-2 border-santo-blue bg-santo-blue" : "border-2 border-slate-500 bg-slate-100"
                  }`}
                  style={{ width: 15, height: 15 }}
                >
                  {isSelected && <Check className="h-3 w-3 text-white" strokeWidth={3} />}
                </span>
                <span className={isSelected ? "font-semibold text-slate-800" : ""}>
                  {opt.label}
                </span>
              </label>
            );
          })}
        </div>
      ) : (
        /* 8個以上: アコーディオンドロップダウン */
        <div className="relative min-w-0 flex-1">
          <button
            onClick={onToggleOpen}
            className="flex w-full items-center justify-between px-5 py-2 text-left transition hover:bg-slate-50/60 sm:px-6"
          >
            <span className={`truncate text-[13px] sm:text-[14px] ${selected.length > 0 ? "font-medium text-slate-800" : "text-slate-400"}`}>
              {displayLabel || "未選択"}
            </span>
            <ChevronDown
              className={`ml-2 h-4 w-4 shrink-0 text-slate-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
            />
          </button>

          {open && (
            <div className="border-t border-slate-100 bg-slate-50/50 px-5 pb-2 pt-1 sm:px-6">
              <div className="flex flex-col">
                {options.map((opt) => {
                  const isSelected = selected.includes(opt.key);
                  return (
                    <button
                      key={opt.key}
                      onClick={() => onSelect(opt.key)}
                      className="flex items-center gap-3 rounded-lg px-3 py-1.5 text-left text-[13px] transition hover:bg-white sm:text-[14px]"
                    >
                      <span
                        className={`flex shrink-0 items-center justify-center rounded transition ${
                          isSelected ? "border-2 border-santo-blue bg-santo-blue" : "border-2 border-slate-500 bg-slate-100"
                        }`}
                        style={{ width: 15, height: 15 }}
                      >
                        {isSelected && <Check className="h-3 w-3 text-white" strokeWidth={3} />}
                      </span>
                      <span className={isSelected ? "font-semibold text-slate-800" : "text-slate-600"}>
                        {opt.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

/* ══════════════════════════════════ MAIN ══════════════════════════════════ */

export function JobSearchForm() {
  const t = useTranslations("JobSearch");
  const locale = useLocale();
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  const [openField, setOpenField] = useState<string | null>(null);
  const [freeword, setFreeword] = useState("");

  // 各フィールドの選択値
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);
  const [selectedLines, setSelectedLines] = useState<string[]>([]);
  const [selectedJobTypes, setSelectedJobTypes] = useState<string[]>([]);
  const [salaryType, setSalaryType] = useState<string[]>([]);
  const [salaryRange, setSalaryRange] = useState<string[]>([]);
  const [employmentTypes, setEmploymentTypes] = useState<string[]>([]);
  const [workPeriods, setWorkPeriods] = useState<string[]>([]);
  const [features, setFeatures] = useState<string[]>([]);

  const areaOptions = [
    { key: "hiratsuka", label: t("areaHiratsuka") },
    { key: "fujisawa", label: t("areaFujisawa") },
    { key: "chigasaki", label: t("areaChigasaki") },
    { key: "atsugi", label: t("areaAtsugi") },
    { key: "isehara", label: t("areaIsehara") },
    { key: "hadano", label: t("areaHadano") },
    { key: "odawara", label: t("areaOdawara") },
    { key: "yokohama", label: t("areaYokohama") },
  ];

  const lineOptions = [
    { key: "jr_east", label: t("lineJREast") },
    { key: "jr_central", label: t("lineJRCentral") },
    { key: "odakyu", label: t("lineOdakyu") },
    { key: "keikyu", label: t("lineKeikyu") },
    { key: "yokohama_subway", label: t("lineYokohamaSubway") },
    { key: "sagami", label: t("lineSagami") },
    { key: "hakone_tozan", label: t("lineHakoneTozan") },
    { key: "izuhakone", label: t("lineIzuhakone") },
  ];

  const jobTypeOptions = [
    { key: "assembly", label: t("jtAssembly") },
    { key: "inspection", label: t("jtInspection") },
    { key: "press", label: t("jtPress") },
    { key: "welding", label: t("jtWelding") },
    { key: "machine", label: t("jtMachine") },
    { key: "forklift", label: t("jtForklift") },
    { key: "line", label: t("jtLine") },
    { key: "plc", label: t("jtPlc") },
  ];

  const salaryTypeOptions = [
    { key: "no_preference", label: t("salaryNoPreference") },
    { key: "hourly", label: t("salaryHourly") },
    { key: "daily", label: t("salaryDaily") },
    { key: "monthly", label: t("salaryMonthly") },
  ];

  const salaryRangeOptions = [
    { key: "no_preference", label: t("salaryNoPreference") },
    { key: "1000", label: "¥1,000〜" },
    { key: "1200", label: "¥1,200〜" },
    { key: "1500", label: "¥1,500〜" },
    { key: "2000", label: "¥2,000〜" },
  ];

  const employmentOptions = [
    { key: "parttime", label: t("empParttime") },
    { key: "fulltime", label: t("empFulltime") },
    { key: "contract", label: t("empContract") },
    { key: "dispatch", label: t("empDispatch") },
    { key: "permanent_dispatch", label: t("empPermanentDispatch") },
    { key: "temp_to_perm", label: t("empTempToPerm") },
    { key: "outsource", label: t("empOutsource") },
  ];

  const workPeriodOptions = [
    { key: "no_preference", label: t("salaryNoPreference") },
    { key: "long", label: t("wpLong") },
    { key: "medium", label: t("wpMedium") },
  ];

  const featureOptions = [
    { key: "no_preference", label: t("salaryNoPreference") },
    { key: "daily_pay", label: t("ftDailyPay") },
    { key: "weekly_pay", label: t("ftWeeklyPay") },
    { key: "transportation", label: t("ftTransportation") },
    { key: "no_experience", label: t("ftNoExperience") },
    { key: "dormitory", label: t("ftDormitory") },
    { key: "bonus", label: t("ftBonus") },
  ];

  const toggleList = (list: string[], key: string) =>
    list.includes(key) ? list.filter((k) => k !== key) : [...list, key];

  // 単一選択用（同じキーで解除可能）
  const toggleSingle = (prev: string[], key: string) =>
    prev.includes(key) ? [] : [key];

  const handleToggle = (field: string) => {
    setOpenField((prev) => (prev === field ? null : field));
  };

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
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}
    >
      <div className="overflow-hidden rounded-xl bg-white shadow-sm sm:rounded-2xl sm:shadow-[0_8px_40px_rgba(0,0,0,0.08)]">
        <AccordionSelect
          label={t("area")}
          options={areaOptions}
          selected={selectedAreas}
          onSelect={(key) => setSelectedAreas((p) => toggleList(p, key))}
          multiple
          open={openField === "area"}
          onToggleOpen={() => handleToggle("area")}
        />
        <AccordionSelect
          label={t("line")}
          options={lineOptions}
          selected={selectedLines}
          onSelect={(key) => setSelectedLines((p) => toggleList(p, key))}
          multiple
          open={openField === "line"}
          onToggleOpen={() => handleToggle("line")}
        />
        <AccordionSelect
          label={t("jobType")}
          options={jobTypeOptions}
          selected={selectedJobTypes}
          onSelect={(key) => setSelectedJobTypes((p) => toggleList(p, key))}
          multiple
          open={openField === "jobType"}
          onToggleOpen={() => handleToggle("jobType")}
        />
        <AccordionSelect
          label={t("salaryType")}
          options={salaryTypeOptions}
          selected={salaryType}
          onSelect={(key) => { setSalaryType((p) => toggleSingle(p, key)); setOpenField(null); }}
          open={openField === "salaryType"}
          onToggleOpen={() => handleToggle("salaryType")}
        />
        <AccordionSelect
          label={t("salary")}
          options={salaryRangeOptions}
          selected={salaryRange}
          onSelect={(key) => { setSalaryRange((p) => toggleSingle(p, key)); setOpenField(null); }}
          open={openField === "salary"}
          onToggleOpen={() => handleToggle("salary")}
        />
        <AccordionSelect
          label={t("employmentType")}
          options={employmentOptions}
          selected={employmentTypes}
          onSelect={(key) => setEmploymentTypes((p) => toggleList(p, key))}
          multiple
          open={openField === "employment"}
          onToggleOpen={() => handleToggle("employment")}
        />
        <AccordionSelect
          label={t("workPeriod")}
          options={workPeriodOptions}
          selected={workPeriods}
          onSelect={(key) => { setWorkPeriods((p) => toggleSingle(p, key)); setOpenField(null); }}
          open={openField === "workPeriod"}
          onToggleOpen={() => handleToggle("workPeriod")}
        />
        <AccordionSelect
          label={t("features")}
          options={featureOptions}
          selected={features}
          onSelect={(key) => setFeatures((p) => toggleList(p, key))}
          multiple
          open={openField === "features"}
          onToggleOpen={() => handleToggle("features")}
        />
        {/* フリーワード */}
        <div className="flex">
          <div className="flex w-[100px] shrink-0 items-center border-r border-slate-100 px-4 py-2 sm:w-[120px] sm:px-5">
            <span className="text-[13px] font-bold tracking-wide text-slate-700 sm:text-[14px]">
              {t("freeword")}
            </span>
          </div>
          <div className="flex min-w-0 flex-1 flex-col gap-2 px-5 py-2 sm:flex-row sm:items-center sm:gap-3 sm:px-6">
            <input
              type="text"
              value={freeword}
              onChange={(e) => setFreeword(e.target.value)}
              placeholder={t("freewordPlaceholder")}
              className="flex-1 rounded-lg border border-slate-200 bg-slate-50/80 px-4 py-2.5 text-[13px] text-slate-700 placeholder:text-slate-400 transition focus:border-santo-blue focus:bg-white focus:outline-none focus:ring-2 focus:ring-santo-blue/10 sm:text-[14px]"
            />
            <button
              onClick={() => {
                const params = new URLSearchParams();
                if (selectedAreas.length) params.set("area", selectedAreas.join(","));
                if (selectedLines.length) params.set("line", selectedLines.join(","));
                if (selectedJobTypes.length) params.set("jobType", selectedJobTypes.join(","));
                if (salaryType.length) params.set("salaryType", salaryType.join(","));
                if (salaryRange.length) params.set("salary", salaryRange.join(","));
                if (employmentTypes.length) params.set("employment", employmentTypes.join(","));
                if (workPeriods.length) params.set("period", workPeriods.join(","));
                if (features.length) params.set("features", features.join(","));
                if (freeword.trim()) params.set("q", freeword.trim());
                const qs = params.toString();
                router.push(`/${locale}/jobs${qs ? `?${qs}` : ""}`);
              }}
              className="flex shrink-0 items-center gap-2 rounded-lg bg-santo-navy px-5 py-2.5 text-[13px] font-bold tracking-wide text-white shadow-sm transition hover:bg-santo-blue sm:text-[14px]"
            >
              <Search className="h-4 w-4" />
              {t("search")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
