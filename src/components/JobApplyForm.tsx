"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Send, Copy, Check, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

type Props = {
  locale: string;
  jobId: string;
  jobTitle: string;
  jobCompany: string;
};

const selectClass =
  "flex h-11 w-full rounded border border-input bg-background px-3 py-2 text-[13px] ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-3 mt-2 flex items-center gap-3 border-b border-slate-200 pb-2">
      <div className="h-4 w-1 rounded-full bg-santo-navy" />
      <h3 className="text-[14px] font-black tracking-wider text-santo-navy">
        {children}
      </h3>
    </div>
  );
}

export function JobApplyForm({ locale, jobId, jobTitle, jobCompany }: Props) {
  const t = useTranslations("JobApply");
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [mailtoUrl, setMailtoUrl] = useState("");
  const [mailBody, setMailBody] = useState("");
  const [showFallback, setShowFallback] = useState(false);
  const [copied, setCopied] = useState(false);
  const linkRef = useRef<HTMLAnchorElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const get = (key: string) => ((data.get(key) as string) || "").trim();

    const name = get("name");
    const nameKana = get("nameKana");
    const birthDate = get("birthDate");
    const gender = get("gender");
    const nationality = get("nationality");
    const address = get("address");
    const phone = get("phone");
    const email = get("email");
    const visaStatus = get("visaStatus");
    const japaneseLevel = get("japaneseLevel");
    const workExperience = get("workExperience");
    const qualifications = get("qualifications");
    const preferredStartDate = get("preferredStartDate");
    const contactTime = get("contactTime");
    const language = get("language");
    const motivation = get("motivation");

    const line = (label: string, value: string) =>
      value ? `${label}: ${value}` : "";

    const body = [
      `${t("jobIdLabel")}: ${jobId}`,
      `${t("jobTitleLabel")}: ${jobTitle}`,
      `${t("jobCompanyLabel")}: ${jobCompany}`,
      "",
      `■ ${t("sectionBasicInfo")}`,
      line(t("nameLabel"), name),
      line(t("nameKanaLabel"), nameKana),
      line(t("birthDateLabel"), birthDate),
      line(t("genderLabel"), gender),
      line(t("nationalityLabel"), nationality),
      line(t("addressLabel"), address),
      line(t("phoneLabel"), phone),
      line(t("emailLabel"), email),
      "",
      `■ ${t("sectionResidency")}`,
      line(t("visaStatusLabel"), visaStatus),
      line(t("japaneseLevelLabel"), japaneseLevel),
      "",
      `■ ${t("sectionExperience")}`,
      workExperience ? `${t("workExperienceLabel")}:\n${workExperience}` : "",
      qualifications ? `${t("qualificationsLabel")}:\n${qualifications}` : "",
      "",
      `■ ${t("sectionPreferences")}`,
      line(t("preferredStartDateLabel"), preferredStartDate),
      line(t("contactTimeLabel"), contactTime),
      line(t("languageLabel"), language),
      motivation ? `${t("motivationLabel")}:\n${motivation}` : "",
    ]
      .filter((l) => l !== "")
      .join("\n");

    const subject = t("mailSubject", { jobId, jobTitle });
    const url = `mailto:santo@santo-hp.co.jp?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setMailBody(body);
    setMailtoUrl(url);
    setSubmitting(true);
  };

  useEffect(() => {
    if (submitting && mailtoUrl && linkRef.current) {
      linkRef.current.click();
      setShowFallback(true);
    }
  }, [submitting, mailtoUrl]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(mailBody);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard may be unavailable; silently ignore.
    }
  };

  const handleGoToThanks = () => {
    router.push(`/${locale}/jobs/${jobId}/thanks`);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
      <div className="rounded border border-slate-200 bg-santo-sky/40 p-4 sm:p-5">
        <p className="text-[11px] font-black tracking-[0.2em] text-santo-light">
          {t("jobSectionLabel")}
        </p>
        <p className="mt-1 text-[15px] font-bold text-santo-navy sm:text-[16px]">
          {jobTitle}
        </p>
        <p className="text-[12px] text-slate-500">{jobCompany}</p>
      </div>

      <p className="text-[13px] text-slate-500">
        {t("formIntro")}
        <span className="font-bold text-red-500"> *</span>
        {t("required")}
      </p>

      <SectionTitle>{t("sectionBasicInfo")}</SectionTitle>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="name" className="mb-2 text-[12px] font-black tracking-wider">
            {t("nameLabel")}
            <span className="text-red-500"> *</span>
          </Label>
          <Input id="name" name="name" required placeholder={t("namePlaceholder")} className="h-11" />
        </div>
        <div>
          <Label htmlFor="nameKana" className="mb-2 text-[12px] font-black tracking-wider">
            {t("nameKanaLabel")}
            <span className="text-slate-400">{t("optionalLabel")}</span>
          </Label>
          <Input id="nameKana" name="nameKana" placeholder={t("nameKanaPlaceholder")} className="h-11" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="birthDate" className="mb-2 text-[12px] font-black tracking-wider">
            {t("birthDateLabel")}
            <span className="text-red-500"> *</span>
          </Label>
          <Input id="birthDate" name="birthDate" type="date" required className="h-11" />
        </div>
        <div>
          <Label htmlFor="gender" className="mb-2 text-[12px] font-black tracking-wider">
            {t("genderLabel")}
            <span className="text-slate-400">{t("optionalLabel")}</span>
          </Label>
          <select id="gender" name="gender" defaultValue="" className={selectClass}>
            <option value="">{t("genderDefault")}</option>
            <option value={t("genderMale")}>{t("genderMale")}</option>
            <option value={t("genderFemale")}>{t("genderFemale")}</option>
            <option value={t("genderOther")}>{t("genderOther")}</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="nationality" className="mb-2 text-[12px] font-black tracking-wider">
            {t("nationalityLabel")}
            <span className="text-red-500"> *</span>
          </Label>
          <Input id="nationality" name="nationality" required placeholder={t("nationalityPlaceholder")} className="h-11" />
        </div>
        <div>
          <Label htmlFor="phone" className="mb-2 text-[12px] font-black tracking-wider">
            {t("phoneLabel")}
            <span className="text-red-500"> *</span>
          </Label>
          <Input id="phone" name="phone" type="tel" required placeholder={t("phonePlaceholder")} className="h-11" />
        </div>
      </div>

      <div>
        <Label htmlFor="address" className="mb-2 text-[12px] font-black tracking-wider">
          {t("addressLabel")}
          <span className="text-red-500"> *</span>
        </Label>
        <Input id="address" name="address" required placeholder={t("addressPlaceholder")} className="h-11" />
      </div>

      <div>
        <Label htmlFor="email" className="mb-2 text-[12px] font-black tracking-wider">
          {t("emailLabel")}
          <span className="text-red-500"> *</span>
        </Label>
        <Input id="email" name="email" type="email" required placeholder={t("emailPlaceholder")} className="h-11" />
      </div>

      <SectionTitle>{t("sectionResidency")}</SectionTitle>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="visaStatus" className="mb-2 text-[12px] font-black tracking-wider">
            {t("visaStatusLabel")}
            <span className="text-red-500"> *</span>
          </Label>
          <select id="visaStatus" name="visaStatus" required defaultValue="" className={selectClass}>
            <option value="" disabled>{t("visaStatusDefault")}</option>
            <option value={t("visaStatusEngineer")}>{t("visaStatusEngineer")}</option>
            <option value={t("visaStatusSkilled")}>{t("visaStatusSkilled")}</option>
            <option value={t("visaStatusTrainee")}>{t("visaStatusTrainee")}</option>
            <option value={t("visaStatusStudent")}>{t("visaStatusStudent")}</option>
            <option value={t("visaStatusDependent")}>{t("visaStatusDependent")}</option>
            <option value={t("visaStatusSpouse")}>{t("visaStatusSpouse")}</option>
            <option value={t("visaStatusOther")}>{t("visaStatusOther")}</option>
            <option value={t("visaStatusNotRequired")}>{t("visaStatusNotRequired")}</option>
          </select>
        </div>
        <div>
          <Label htmlFor="japaneseLevel" className="mb-2 text-[12px] font-black tracking-wider">
            {t("japaneseLevelLabel")}
            <span className="text-red-500"> *</span>
          </Label>
          <select id="japaneseLevel" name="japaneseLevel" required defaultValue="" className={selectClass}>
            <option value="" disabled>{t("japaneseLevelDefault")}</option>
            <option value={t("japaneseLevelNative")}>{t("japaneseLevelNative")}</option>
            <option value={t("japaneseLevelN1")}>{t("japaneseLevelN1")}</option>
            <option value={t("japaneseLevelN2")}>{t("japaneseLevelN2")}</option>
            <option value={t("japaneseLevelN3")}>{t("japaneseLevelN3")}</option>
            <option value={t("japaneseLevelN4")}>{t("japaneseLevelN4")}</option>
            <option value={t("japaneseLevelN5")}>{t("japaneseLevelN5")}</option>
            <option value={t("japaneseLevelNone")}>{t("japaneseLevelNone")}</option>
          </select>
        </div>
      </div>

      <SectionTitle>{t("sectionExperience")}</SectionTitle>

      <div>
        <Label htmlFor="workExperience" className="mb-2 text-[12px] font-black tracking-wider">
          {t("workExperienceLabel")}
          <span className="text-red-500"> *</span>
        </Label>
        <Textarea id="workExperience" name="workExperience" required rows={5} placeholder={t("workExperiencePlaceholder")} />
      </div>

      <div>
        <Label htmlFor="qualifications" className="mb-2 text-[12px] font-black tracking-wider">
          {t("qualificationsLabel")}
          <span className="text-slate-400">{t("optionalLabel")}</span>
        </Label>
        <Textarea id="qualifications" name="qualifications" rows={3} placeholder={t("qualificationsPlaceholder")} />
      </div>

      <SectionTitle>{t("sectionPreferences")}</SectionTitle>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="preferredStartDate" className="mb-2 text-[12px] font-black tracking-wider">
            {t("preferredStartDateLabel")}
            <span className="text-slate-400">{t("optionalLabel")}</span>
          </Label>
          <Input id="preferredStartDate" name="preferredStartDate" type="date" className="h-11" />
        </div>
        <div>
          <Label htmlFor="contactTime" className="mb-2 text-[12px] font-black tracking-wider">
            {t("contactTimeLabel")}
            <span className="text-red-500"> *</span>
          </Label>
          <select id="contactTime" name="contactTime" required defaultValue="" className={selectClass}>
            <option value="" disabled>{t("contactTimeDefault")}</option>
            <option value={t("contactTimeMorning")}>{t("contactTimeMorning")}</option>
            <option value={t("contactTimeDaytime")}>{t("contactTimeDaytime")}</option>
            <option value={t("contactTimeEvening")}>{t("contactTimeEvening")}</option>
            <option value={t("contactTimeAnytime")}>{t("contactTimeAnytime")}</option>
          </select>
        </div>
      </div>

      <div>
        <Label htmlFor="language" className="mb-2 text-[12px] font-black tracking-wider">
          {t("languageLabel")}
          <span className="text-red-500"> *</span>
        </Label>
        <select id="language" name="language" required defaultValue="" className={selectClass}>
          <option value="" disabled>{t("languageDefault")}</option>
          <option value="日本語">日本語</option>
          <option value="English">English</option>
          <option value="中文">中文</option>
          <option value="Español">Español</option>
          <option value="Português">Português</option>
        </select>
      </div>

      <div>
        <Label htmlFor="motivation" className="mb-2 text-[12px] font-black tracking-wider">
          {t("motivationLabel")}
        </Label>
        <Textarea id="motivation" name="motivation" rows={5} placeholder={t("motivationPlaceholder")} />
      </div>

      <div className="rounded bg-santo-gray p-3 sm:p-5">
        <label className="flex items-start gap-3 text-[13px] text-slate-600">
          <input type="checkbox" required className="mt-1 rounded border-slate-300" />
          <span>
            <a
              href={`/${locale}/privacy`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-santo-blue underline"
            >
              {t("privacyLink")}
            </a>
            {t("privacyConsent")}
          </span>
        </label>
      </div>

      {showFallback && (
        <div className="rounded border border-santo-blue/30 bg-santo-sky/40 p-4 sm:p-5">
          <p className="text-[14px] font-black tracking-wider text-santo-navy sm:text-[15px]">
            {t("mailFallbackTitle")}
          </p>
          <p className="mt-2 text-[13px] leading-[1.8] text-slate-600">
            {t("mailFallbackBody")}
          </p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <Button
              type="button"
              variant="outline"
              onClick={handleCopy}
              className="h-11 border-santo-navy text-santo-navy hover:bg-santo-sky"
            >
              {copied ? (
                <Check className="h-4 w-4" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
              {copied ? t("copiedLabel") : t("copyButton")}
            </Button>
            <Button
              type="button"
              onClick={handleGoToThanks}
              className="h-11 bg-santo-navy text-sm font-black tracking-wider hover:bg-santo-blue"
            >
              {t("goToThanks")}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}

      <Button
        type="submit"
        size="lg"
        disabled={submitting}
        className="h-12 w-full bg-santo-navy px-8 text-sm font-black tracking-wider hover:bg-santo-blue sm:w-auto"
      >
        <Send className="h-4 w-4" />
        {submitting ? t("submittingButton") : t("submitButton")}
      </Button>

      <a ref={linkRef} href={mailtoUrl} className="hidden" />
    </form>
  );
}
