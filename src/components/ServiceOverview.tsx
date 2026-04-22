"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

function ServiceRow({
  service,
  index,
}: {
  service: {
    img: string;
    label: string;
    title: string;
    subtitle: string;
    description: string;
    bg: string;
  };
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const isEven = index % 2 === 0;

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
    <section className={`${service.bg} relative overflow-hidden`}>
      {/* 背景の大きな番号 */}
      <div
        className={`pointer-events-none absolute top-1/2 -translate-y-1/2 text-[280px] font-black leading-none text-santo-navy/[0.03] sm:text-[360px] ${
          isEven ? "right-8" : "left-8"
        }`}
      >
        {service.label}
      </div>

      <div
        ref={ref}
        className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:py-14"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible
            ? "translateX(0)"
            : isEven
              ? "translateX(-60px)"
              : "translateX(60px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
        }}
      >
        <div
          className={`flex flex-col items-center gap-6 lg:gap-10 ${
            isEven ? "lg:flex-row" : "lg:flex-row-reverse"
          }`}
        >
          {/* 図 */}
          <div className="flex w-full items-center justify-center lg:w-[55%]">
            <div className="w-full max-w-[560px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={service.img}
                alt={service.title}
                className="h-auto w-full object-contain"
              />
            </div>
          </div>

          {/* テキスト */}
          <div className="w-full lg:w-[45%]">
            <p className="mb-3 text-[14px] font-black tracking-[0.3em] text-santo-light">
              {service.subtitle.toUpperCase()}
            </p>
            <div className="mb-3 flex items-baseline gap-3 sm:gap-4">
              <span className="text-5xl font-black leading-none text-santo-navy/10 sm:text-7xl lg:text-8xl">
                {service.label}
              </span>
              <h3 className="text-2xl font-black tracking-wider text-slate-900 sm:text-3xl lg:text-4xl">
                {service.title}
              </h3>
            </div>
            <div className="mb-3 h-1 w-14 rounded-full bg-santo-navy" />
            <p className="text-[16px] font-bold leading-[2.2] text-slate-600 sm:text-[20px]">
              {service.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServiceOverview() {
  const t = useTranslations("ServiceOverview");
  const locale = useLocale();
  const imgSuffix = locale === "ja" ? "" : locale === "zh" ? "_zh" : locale === "es" ? "_es" : locale === "pt" ? "_pt" : "_en";
  const imgExt = locale === "ja" ? ".png" : ".jpg";

  const services = [
    {
      img: locale === "ja" ? `/images/services/outsourcing_service_v3.jpg`
         : (locale === "en" || locale === "zh") ? `/images/services/dispatch_structure${imgSuffix}_v2.jpg`
         : `/images/services/dispatch_structure${imgSuffix}.jpg`,
      label: "01",
      title: t("diagramTitle"),
      subtitle: "Staffing Structure",
      description: t("diagramDesc"),
      bg: "bg-white",
    },
    {
      img: locale === "ja" ? `/images/services/dispatch_service_v5.jpg` : `/images/services/dispatch_service${imgSuffix}_v5.jpg`,
      label: "02",
      title: t("dispatchTitle"),
      subtitle: "Staffing Service",
      description: t("dispatchDesc"),
      bg: "bg-[#f4f7fb]",
    },
    {
      img: locale === "ja" ? `/images/services/outsourcing_service_v6.jpg` : `/images/services/outsourcing_service${imgSuffix}_v6.jpg`,
      label: "03",
      title: t("outsourcingTitle"),
      subtitle: "Outsourcing Service",
      description: t("outsourcingDesc"),
      bg: "bg-white",
    },
  ];

  return (
    <div>
      {/* セクションヘッダー */}
      <section className="hidden bg-white pb-0 pt-10 sm:block sm:pt-14 lg:pt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center">
            <p className="mb-3 text-[13px] font-black tracking-[0.25em] text-santo-light">
              {t("label")}
            </p>
            <h2 className="text-3xl font-black tracking-wider text-slate-900 sm:text-4xl lg:text-5xl">
              {t("title")}
            </h2>
            <div className="mx-auto mt-2 h-1 rounded-full bg-santo-navy" style={{ width: "557px", maxWidth: "100%" }} />
            <p className="mx-auto mt-4 max-w-3xl text-[15px] leading-[1.9] text-slate-500 sm:text-[18px]">
              {t("subtitlePre1")}<span className="whitespace-nowrap text-[1.15em] font-bold text-santo-blue">{t("subtitleHighlight1")}</span>{t("subtitleMid1")}<span className="whitespace-nowrap text-[1.15em] font-bold text-santo-blue">{t("subtitleHighlight2")}</span>{t("subtitleMid2")}<span className="whitespace-nowrap text-[1.15em] font-bold text-santo-navy">{t("subtitleHighlight3")}</span>{t("subtitlePost1")}<br />{t("subtitle2Pre")}<span className="whitespace-nowrap font-bold text-slate-700">{t("subtitle2Highlight1")}</span>{t("subtitle2Mid")}<span className="whitespace-nowrap font-bold text-slate-700">{t("subtitle2Highlight2")}</span>{t("subtitle2Post")}
            </p>
          </div>
        </div>
      </section>

      {/* デスクトップ: ジグザグレイアウト */}
      <div className="hidden md:block">
        {services.map((service, i) => (
          <ServiceRow key={service.title} service={service} index={i} />
        ))}
      </div>
    </div>
  );
}
