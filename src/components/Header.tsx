"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
import { Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const languages = [
  { code: "ja", label: "日本語", flag: "🇯🇵" },
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "zh", label: "中文", flag: "🇨🇳" },
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "pt", label: "Português", flag: "🇧🇷" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("Header");

  const navigation = [
    { name: t("home"), href: "/" },
    { name: t("about"), href: "/about" },
    { name: t("jobseekers"), href: "/jobseekers" },
    { name: t("employers"), href: "/employers" },
    { name: t("access"), href: "/access" },
    { name: t("contact"), href: "/contact" },
  ];

  // Strip locale prefix from pathname for active detection
  const pathWithoutLocale = pathname.replace(/^\/(ja|en|zh|es|pt)/, "") || "/";

  function getLocalizedHref(path: string) {
    return `/${locale}${path}`;
  }

  function switchLocaleHref(targetLocale: string) {
    return `/${targetLocale}${pathWithoutLocale}`;
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Main Nav */}
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-[72px]">
        {/* Logo */}
        <Link href={getLocalizedHref("/")} className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/santo_logo_square.jpg" alt="Santo" className="h-12 w-12 object-cover lg:h-14 lg:w-14" />
          <div>
            <p className="text-[15px] font-black leading-tight tracking-wider text-santo-navy lg:text-base">
              {t("companyName")}
            </p>
            <p className="text-[10px] font-bold tracking-[0.15em] text-slate-400">
              {t("companyNameEn")}
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 lg:flex">
          <nav className="flex items-center gap-0.5">
            {navigation.map((item) => {
              const isActive = item.href === "/" ? pathWithoutLocale === "/" : pathWithoutLocale.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={getLocalizedHref(item.href)}
                  className={`relative px-3 py-2 text-[13px] font-bold tracking-wide transition-colors ${
                    isActive ? "text-santo-navy" : "text-slate-600 hover:text-santo-navy"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 h-[2px] w-4/5 -translate-x-1/2 rounded-full bg-santo-navy" />
                  )}
                </Link>
              );
            })}
          </nav>
          {/* Language Switcher */}
          <div className="ml-2 flex items-center gap-1 border-l border-slate-200 pl-3">
            {languages.map((lang) => (
              <Link
                key={lang.code}
                href={switchLocaleHref(lang.code)}
                className={`flex flex-col items-center rounded px-2 py-1 transition-colors ${
                  locale === lang.code
                    ? "bg-santo-navy text-white"
                    : "text-slate-500 hover:bg-slate-100 hover:text-santo-navy"
                }`}
              >
                <span className="text-[11px] font-bold whitespace-nowrap">{lang.label}</span>
                <span className="text-[28px] leading-none">{lang.flag}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="lg:hidden"
            render={<Button variant="ghost" size="icon" />}
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">{t("menu")}</span>
          </SheetTrigger>
          <SheetContent side="right" className="w-80 p-0">
            <div className="flex h-full flex-col">
              <div className="border-b border-slate-100 p-5">
                <p className="text-sm font-black tracking-wider text-santo-navy">
                  {t("companyName")}
                </p>
              </div>
              <nav className="flex-1 p-3">
                {navigation.map((item) => {
                  const isActive = item.href === "/" ? pathWithoutLocale === "/" : pathWithoutLocale.startsWith(item.href);
                  return (
                    <Link
                      key={item.href}
                      href={getLocalizedHref(item.href)}
                      onClick={() => setOpen(false)}
                      className={`block rounded px-4 py-3.5 text-sm font-bold transition-colors ${
                        isActive
                          ? "bg-santo-sky text-santo-navy border-l-2 border-santo-navy"
                          : "text-slate-700 hover:bg-santo-sky hover:text-santo-navy"
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </nav>
              <div className="border-t border-slate-100 p-5">
                <p className="mb-2 text-[10px] font-bold tracking-widest text-slate-400">
                  {t("language")}
                </p>
                <div className="flex flex-wrap gap-2">
                  {languages.map((lang) => (
                    <Link
                      key={lang.code}
                      href={switchLocaleHref(lang.code)}
                      onClick={() => setOpen(false)}
                      className={`flex flex-col items-center rounded px-3 py-1.5 ${
                        locale === lang.code
                          ? "bg-santo-navy text-white"
                          : "bg-slate-100 text-slate-600 hover:bg-santo-sky hover:text-santo-navy"
                      }`}
                    >
                      <span className="text-xs font-bold">{lang.label}</span>
                      <span className="text-[30px] leading-none">{lang.flag}</span>
                    </Link>
                  ))}
                </div>
                <a
                  href="tel:0463-24-1722"
                  className="mt-4 flex items-center gap-2 text-sm font-black text-santo-navy"
                >
                  <Phone className="h-4 w-4" />
                  0463-24-1722
                </a>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
