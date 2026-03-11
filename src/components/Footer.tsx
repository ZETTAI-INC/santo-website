import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-santo-navy text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Company Info */}
          <div className="lg:col-span-4">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center bg-white text-base font-black text-santo-navy">
                S
              </div>
              <div>
                <p className="text-base font-black tracking-wider">
                  株式会社サントー
                </p>
                <p className="text-[10px] font-bold tracking-[0.15em] text-slate-400">
                  SANTO CO., LTD.
                </p>
              </div>
            </div>
            <div className="space-y-2.5 text-[13px] text-slate-300">
              <p className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-santo-accent" />
                〒000-0000 所在地をここに記載
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-santo-accent" />
                TEL: 000-000-0000
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-santo-accent" />
                info@santo-hp.co.jp
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h3 className="mb-4 text-[10px] font-black tracking-[0.2em] text-slate-400">
              MENU
            </h3>
            <ul className="space-y-2.5">
              {[
                { name: "ホーム", href: "/" },
                { name: "会社概要", href: "/about" },
                { name: "仕事をお探しの方", href: "/jobseekers" },
                { name: "企業様へ", href: "/employers" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[13px] text-slate-300 transition-colors hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Other Links */}
          <div className="lg:col-span-3">
            <h3 className="mb-4 text-[10px] font-black tracking-[0.2em] text-slate-400">
              OTHER
            </h3>
            <ul className="space-y-2.5">
              {[
                { name: "アクセス", href: "/access" },
                { name: "お問い合わせ", href: "/contact" },
                { name: "労働者派遣事業に係る情報公開", href: "#" },
                { name: "プライバシーポリシー", href: "#" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-[13px] text-slate-300 transition-colors hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Language */}
          <div className="lg:col-span-3">
            <h3 className="mb-4 text-[10px] font-black tracking-[0.2em] text-slate-400">
              LANGUAGE
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                { name: "English", href: "/en" },
                { name: "Português", href: "/pt" },
                { name: "Español", href: "/es" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded bg-white/10 px-3.5 py-1.5 text-xs font-bold text-slate-300 transition-colors hover:bg-white/20 hover:text-white"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6">
          <p className="text-center text-[11px] font-bold tracking-wider text-slate-500">
            &copy; {new Date().getFullYear()} SANTO CO., LTD. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
