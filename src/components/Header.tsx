"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navigation = [
  { name: "ホーム", href: "/" },
  { name: "会社概要", href: "/about" },
  { name: "仕事をお探しの方", href: "/jobseekers" },
  { name: "企業様へ", href: "/employers" },
  { name: "アクセス", href: "/access" },
  { name: "お問い合わせ", href: "/contact" },
];

const languages = [
  { name: "EN", href: "/en", label: "English" },
  { name: "PT", href: "/pt", label: "Português" },
  { name: "ES", href: "/es", label: "Español" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top Bar */}
      <div className="border-b border-slate-100 bg-santo-navy">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-end gap-4 px-4 sm:px-6">
          <div className="flex items-center gap-1">
            {languages.map((lang) => (
              <Link
                key={lang.name}
                href={lang.href}
                className="rounded px-2 py-0.5 text-[11px] font-bold tracking-wider text-slate-300 transition-colors hover:text-white"
              >
                {lang.name}
              </Link>
            ))}
          </div>
          <a
            href="tel:0463-24-1722"
            className="flex items-center gap-1.5 text-[11px] font-bold tracking-wider text-white"
          >
            <Phone className="h-3 w-3" />
            0463-24-1722
          </a>
        </div>
      </div>

      {/* Main Nav */}
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-[72px]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center bg-santo-navy text-base font-black tracking-tighter text-white lg:h-11 lg:w-11">
            S
          </div>
          <div>
            <p className="text-[15px] font-black leading-tight tracking-wider text-santo-navy lg:text-base">
              株式会社サントー
            </p>
            <p className="text-[10px] font-bold tracking-[0.15em] text-slate-400">
              SANTO CO., LTD.
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-0.5 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative px-3 py-2 text-[13px] font-bold tracking-wide text-slate-600 transition-colors hover:text-santo-navy"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="lg:hidden"
            render={<Button variant="ghost" size="icon" />}
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">メニュー</span>
          </SheetTrigger>
          <SheetContent side="right" className="w-80 p-0">
            <div className="flex h-full flex-col">
              <div className="border-b border-slate-100 p-5">
                <p className="text-sm font-black tracking-wider text-santo-navy">
                  株式会社サントー
                </p>
              </div>
              <nav className="flex-1 p-3">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded px-4 py-3.5 text-sm font-bold text-slate-700 transition-colors hover:bg-santo-sky hover:text-santo-navy"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
              <div className="border-t border-slate-100 p-5">
                <p className="mb-2 text-[10px] font-bold tracking-widest text-slate-400">
                  LANGUAGE
                </p>
                <div className="flex gap-2">
                  {languages.map((lang) => (
                    <Link
                      key={lang.name}
                      href={lang.href}
                      onClick={() => setOpen(false)}
                      className="rounded bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-600 hover:bg-santo-sky hover:text-santo-navy"
                    >
                      {lang.label}
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
