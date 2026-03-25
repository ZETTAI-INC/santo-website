"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Mail, MapPin, Globe } from "lucide-react";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

const languages = [
  { code: "ja", label: "日本語" },
  { code: "en", label: "English" },
  { code: "zh", label: "中文" },
  { code: "es", label: "Español" },
  { code: "pt", label: "Português" },
];

export function Footer() {
  const t = useTranslations("Footer");
  const tHeader = useTranslations("Header");
  const locale = useLocale();
  const pathname = usePathname();
  const pathWithoutLocale = pathname.replace(/^\/(ja|en|zh|es|pt)/, "") || "/";

  const localePath = (path: string) => {
    return `/${locale}${path}`;
  };

  function switchLocaleHref(targetLocale: string) {
    return `/${targetLocale}${pathWithoutLocale}`;
  }

  return (
    <footer className="bg-[#2a7ac7] text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-12">
          {/* Company Info */}
          <div className="lg:col-span-4">
            <div className="mb-3 flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/santo_logo_square.jpg" alt="Santo" className="h-12 w-12 object-cover lg:h-14 lg:w-14" />
              <div>
                <p className="text-base font-black tracking-wider">
                  {t("companyName")}
                </p>
                <p className="text-[10px] font-bold tracking-[0.15em] text-slate-400">
                  SANTO CO., LTD.
                </p>
              </div>
            </div>
            <div className="space-y-1.5 text-[13px] font-bold text-slate-300">
              <p className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-santo-accent" />
                {t("address")}
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-santo-accent" />
                TEL: 0463-24-1722
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-santo-accent" />
                info@santo-hp.co.jp
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h3 className="mb-2 text-[10px] font-black tracking-[0.2em] text-slate-400">
              MENU
            </h3>
            <ul className="space-y-1.5">
              {[
                { name: tHeader("home"), href: "/" },
                { name: tHeader("about"), href: "/about" },
                { name: tHeader("jobseekers"), href: "/jobseekers" },
                { name: tHeader("employers"), href: "/employers" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={localePath(item.href)}
                    className="text-[13px] font-bold text-slate-300 transition-colors hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Other Links */}
          <div className="lg:col-span-3">
            <h3 className="mb-2 text-[10px] font-black tracking-[0.2em] text-slate-400">
              OTHER
            </h3>
            <ul className="space-y-1.5">
              {[
                { name: tHeader("access"), href: "/access" },
                { name: tHeader("contact"), href: "/contact" },
                { name: t("laborInfo"), href: "/labor-info" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href === "#" ? item.href : localePath(item.href)}
                    className="text-[13px] font-bold text-slate-300 transition-colors hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Language */}
          <div className="lg:col-span-3">
            <h3 className="mb-2 text-[10px] font-black tracking-[0.2em] text-slate-400">
              LANGUAGE
            </h3>
            <div className="flex flex-wrap items-center gap-2">
              <Globe className="h-4 w-4 shrink-0 text-slate-400" />
              {languages.map((lang) => (
                <Link
                  key={lang.code}
                  href={switchLocaleHref(lang.code)}
                  className={`rounded px-3 py-1.5 text-xs font-bold whitespace-nowrap transition-colors ${
                    locale === lang.code
                      ? "bg-white text-santo-navy"
                      : "bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white"
                  }`}
                >
                  {lang.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
          <p className="text-center text-[11px] font-bold tracking-wider text-slate-500">
            {t("copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
