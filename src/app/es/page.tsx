import type { Metadata } from "next";
import { ArrowRight, Phone, CheckCircle } from "lucide-react";
import { LinkButton } from "@/components/LinkButton";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Español | SANTO Co., Ltd.",
  description:
    "SANTO Co., Ltd. es una empresa de servicios de personal en Japón. Conectamos a los buscadores de empleo con los empleadores.",
};

export default function SpanishPage() {
  return (
    <>
      <PageHeader label="ESPAÑOL" title="SANTO Co., Ltd." />

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <p className="mb-2 text-[11px] font-black tracking-[0.25em] text-santo-light">
            SOBRE NOSOTROS
          </p>
          <h2 className="mb-6 text-2xl font-black tracking-wider text-slate-900">
            Servicios de Recursos Humanos y Reclutamiento
          </h2>
          <p className="mb-4 text-[15px] leading-[2.2] text-slate-600">
            SANTO Co., Ltd. es una empresa de servicios de personal con sede en
            Japón. Nos especializamos en conectar a los buscadores de empleo con
            empleadores en diversas industrias, incluyendo manufactura,
            logística y trabajo de oficina.
          </p>
          <p className="text-[15px] leading-[2.2] text-slate-600">
            Estamos comprometidos a proporcionar soluciones confiables de
            personal con apoyo personalizado para cada trabajador y cliente.
          </p>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-santo-gray py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <p className="mb-2 text-[11px] font-black tracking-[0.25em] text-santo-light">
            PARA CANDIDATOS
          </p>
          <h2 className="mb-8 text-2xl font-black tracking-wider text-slate-900">
            ¿Buscando Trabajo?
          </h2>
          <div className="space-y-3">
            {[
              "Trabajos adaptados a sus habilidades y preferencias",
              "Soporte completo desde el registro hasta el empleo",
              "Seguro social y vacaciones pagadas disponibles",
              "Soporte multilingüe disponible",
              "Sin tarifa de registro",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 border-l-2 border-santo-light bg-white p-4">
                <CheckCircle className="h-4 w-4 shrink-0 text-santo-light" />
                <p className="text-[13px] font-bold text-slate-700">{item}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-[13px] leading-[1.9] text-slate-500">
            Aceptamos solicitudes de extranjeros con permiso de trabajo válido.
            No dude en contactarnos.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <p className="mb-2 text-[11px] font-black tracking-[0.25em] text-santo-light">
            EMPRESA
          </p>
          <h2 className="mb-8 text-2xl font-black tracking-wider text-slate-900">
            Información de la Empresa
          </h2>
          <div className="overflow-hidden rounded border border-slate-200">
            <table className="w-full">
              <tbody>
                {[
                  { label: "Nombre", value: "SANTO Co., Ltd." },
                  { label: "Negocio", value: "Servicios de Personal / Empleo Temporal" },
                  { label: "Dirección", value: "Japón (detalles disponibles bajo solicitud)" },
                  { label: "Teléfono", value: "0463-24-1722" },
                ].map((item, i) => (
                  <tr key={item.label} className={i % 2 === 0 ? "bg-white" : "bg-santo-gray"}>
                    <th className="w-44 border-r border-slate-200 px-6 py-4 text-left text-[13px] font-black tracking-wider text-santo-navy">
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
          <p className="mb-3 text-[11px] font-black tracking-[0.25em] text-santo-accent">CONTACTO</p>
          <h2 className="mb-4 text-2xl font-black tracking-wider text-white">Contáctenos</h2>
          <p className="mx-auto mb-10 max-w-md text-[13px] leading-[1.9] text-slate-400">
            No dude en comunicarse con nosotros para consultas sobre empleo o servicios de personal.
          </p>
          <div className="flex flex-col items-center justify-center gap-5 sm:flex-row">
            <LinkButton href="/contact" size="xl" className="bg-white text-santo-navy hover:bg-slate-100">
              Formulario de Contacto
              <ArrowRight className="h-4 w-4" />
            </LinkButton>
            <div className="flex flex-col items-center">
              <p className="text-[10px] font-bold tracking-widest text-slate-500">TEL</p>
              <a href="tel:0463-24-1722" className="text-2xl font-black tracking-wider text-white">0463-24-1722</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
