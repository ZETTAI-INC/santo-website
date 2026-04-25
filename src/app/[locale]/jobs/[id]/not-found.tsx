import Link from "next/link";
import { getLocale } from "next-intl/server";

const messages: Record<string, { title: string; body: string; cta: string }> = {
  ja: { title: "求人が見つかりませんでした", body: "お探しの求人は存在しないか、募集を終了しています。", cta: "求人一覧に戻る" },
  en: { title: "Job not found", body: "The job you are looking for does not exist or has been closed.", cta: "Back to job list" },
  es: { title: "Empleo no encontrado", body: "El empleo que busca no existe o ha sido cerrado.", cta: "Volver a la lista de empleos" },
  pt: { title: "Vaga não encontrada", body: "A vaga que você procura não existe ou foi encerrada.", cta: "Voltar à lista de vagas" },
  zh: { title: "未找到该职位", body: "您查找的职位不存在或已关闭。", cta: "返回职位列表" },
};

export default async function JobNotFound() {
  const locale = await getLocale();
  const m = messages[locale] ?? messages.ja;
  return (
    <main className="mx-auto max-w-2xl px-5 py-20 text-center">
      <p className="text-[12px] font-black tracking-[0.2em] text-santo-blue">404</p>
      <h1 className="mt-3 text-[24px] font-black tracking-wider text-santo-navy sm:text-[28px]">
        {m.title}
      </h1>
      <p className="mt-4 text-[14px] leading-[1.8] text-slate-600">
        {m.body}
      </p>
      <Link
        href={`/${locale}/jobs`}
        className="mt-8 inline-block rounded bg-santo-navy px-6 py-3 text-sm font-black tracking-wider text-white hover:bg-santo-blue"
      >
        {m.cta}
      </Link>
    </main>
  );
}
