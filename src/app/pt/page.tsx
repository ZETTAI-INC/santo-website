import type { Metadata } from "next";
import { ArrowRight, Phone, CheckCircle } from "lucide-react";
import { LinkButton } from "@/components/LinkButton";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Português | SANTO Co., Ltd.",
  description:
    "SANTO Co., Ltd. é uma empresa de serviços de pessoal no Japão. Conectamos candidatos a emprego com empregadores.",
};

export default function PortuguesePage() {
  return (
    <>
      <PageHeader label="PORTUGUÊS" title="SANTO Co., Ltd." />

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <p className="mb-2 text-[11px] font-black tracking-[0.25em] text-santo-light">
            SOBRE NÓS
          </p>
          <h2 className="mb-6 text-2xl font-black tracking-wider text-slate-900">
            Serviços de Recursos Humanos e Recrutamento
          </h2>
          <p className="mb-4 text-[15px] leading-[2.2] text-slate-600">
            A SANTO Co., Ltd. é uma empresa de serviços de pessoal com sede no
            Japão. Somos especializados em conectar candidatos a emprego com
            empregadores em diversas indústrias, incluindo manufatura, logística
            e trabalho de escritório.
          </p>
          <p className="text-[15px] leading-[2.2] text-slate-600">
            Estamos comprometidos em fornecer soluções confiáveis de pessoal com
            suporte personalizado para cada trabalhador e cliente.
          </p>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-santo-gray py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <p className="mb-2 text-[11px] font-black tracking-[0.25em] text-santo-light">
            PARA CANDIDATOS
          </p>
          <h2 className="mb-8 text-2xl font-black tracking-wider text-slate-900">
            Procurando Trabalho?
          </h2>
          <div className="space-y-3">
            {[
              "Empregos adequados às suas habilidades e preferências",
              "Suporte completo desde o registro até o emprego",
              "Seguro social e férias remuneradas disponíveis",
              "Suporte multilíngue disponível",
              "Sem taxa de registro",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 border-l-2 border-santo-light bg-white p-4">
                <CheckCircle className="h-4 w-4 shrink-0 text-santo-light" />
                <p className="text-[13px] font-bold text-slate-700">{item}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-[13px] leading-[1.9] text-slate-500">
            Aceitamos candidaturas de estrangeiros com visto de trabalho válido.
            Não hesite em nos contactar.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <p className="mb-2 text-[11px] font-black tracking-[0.25em] text-santo-light">
            EMPRESA
          </p>
          <h2 className="mb-8 text-2xl font-black tracking-wider text-slate-900">
            Informações da Empresa
          </h2>
          <div className="overflow-hidden rounded border border-slate-200">
            <table className="w-full">
              <tbody>
                {[
                  { label: "Nome da Empresa", value: "SANTO Co., Ltd." },
                  { label: "Negócio", value: "Serviços de Pessoal / Emprego Temporário" },
                  { label: "Endereço", value: "Japão (detalhes disponíveis mediante solicitação)" },
                  { label: "Telefone", value: "000-000-0000" },
                ].map((item, i) => (
                  <tr key={item.label} className={i % 2 === 0 ? "bg-white" : "bg-santo-gray"}>
                    <th className="w-48 border-r border-slate-200 px-6 py-4 text-left text-[13px] font-black tracking-wider text-santo-navy">
                      {item.label}
                    </th>
                    <td className="px-6 py-4 text-[13px] text-slate-600">{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-santo-navy py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <p className="mb-3 text-[11px] font-black tracking-[0.25em] text-santo-accent">CONTATO</p>
          <h2 className="mb-4 text-2xl font-black tracking-wider text-white">Fale Conosco</h2>
          <p className="mx-auto mb-10 max-w-md text-[13px] leading-[1.9] text-slate-400">
            Entre em contato conosco para consultas sobre empregos ou serviços de pessoal.
          </p>
          <div className="flex flex-col items-center justify-center gap-5 sm:flex-row">
            <LinkButton href="/contact" size="xl" className="bg-white text-santo-navy hover:bg-slate-100">
              Formulário de Contato
              <ArrowRight className="h-4 w-4" />
            </LinkButton>
            <div className="flex flex-col items-center">
              <p className="text-[10px] font-bold tracking-widest text-slate-500">TEL</p>
              <a href="tel:000-000-0000" className="text-2xl font-black tracking-wider text-white">000-000-0000</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
