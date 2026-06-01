import { routing } from "@/i18n/routing";

export default function RootPage() {
  const href = `/${routing.defaultLocale}/`;

  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-4 text-center">
      <div>
        <meta httpEquiv="refresh" content={`0;url=${href}`} />
        <h1 className="text-xl font-black text-santo-navy">株式会社サントー</h1>
        <p className="mt-3 text-sm text-slate-600">
          <a className="font-bold text-santo-blue underline" href={href}>
            サイトを表示する
          </a>
        </p>
      </div>
    </main>
  );
}
