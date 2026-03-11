import type { Metadata } from "next";
import { ArrowRight, Phone, CheckCircle } from "lucide-react";
import { LinkButton } from "@/components/LinkButton";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "English | SANTO Co., Ltd.",
  description:
    "SANTO Co., Ltd. is a staffing agency in Japan. We connect job seekers with employers through our staffing services.",
};

export default function EnglishPage() {
  return (
    <>
      <PageHeader label="ENGLISH" title="SANTO Co., Ltd." />

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <p className="mb-2 text-[11px] font-black tracking-[0.25em] text-santo-light">
            ABOUT US
          </p>
          <h2 className="mb-6 text-2xl font-black tracking-wider text-slate-900">
            Staffing &amp; Human Resource Services
          </h2>
          <p className="mb-4 text-[15px] leading-[2.2] text-slate-600">
            SANTO Co., Ltd. is a staffing company based in Japan. We specialize
            in connecting job seekers with employers across various industries,
            including manufacturing, logistics, and office work.
          </p>
          <p className="text-[15px] leading-[2.2] text-slate-600">
            We are committed to providing reliable staffing solutions with
            personalized support for every worker and client.
          </p>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-santo-gray py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <p className="mb-2 text-[11px] font-black tracking-[0.25em] text-santo-light">
            FOR JOB SEEKERS
          </p>
          <h2 className="mb-8 text-2xl font-black tracking-wider text-slate-900">
            Looking for Work?
          </h2>
          <div className="space-y-3">
            {[
              "Jobs matched to your skills and preferences",
              "Full support from registration to employment",
              "Social insurance and paid leave available",
              "Multilingual support available",
              "No registration fee",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 border-l-2 border-santo-light bg-white p-4"
              >
                <CheckCircle className="h-4 w-4 shrink-0 text-santo-light" />
                <p className="text-[13px] font-bold text-slate-700">{item}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-[13px] leading-[1.9] text-slate-500">
            We welcome applications from foreign nationals with valid work
            permits. Please do not hesitate to contact us.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <p className="mb-2 text-[11px] font-black tracking-[0.25em] text-santo-light">
            COMPANY INFO
          </p>
          <h2 className="mb-8 text-2xl font-black tracking-wider text-slate-900">
            Company Information
          </h2>
          <div className="overflow-hidden rounded border border-slate-200">
            <table className="w-full">
              <tbody>
                {[
                  { label: "Company Name", value: "SANTO Co., Ltd." },
                  { label: "Business", value: "Staffing / Temporary Employment Services" },
                  { label: "Address", value: "Japan (details available upon request)" },
                  { label: "Phone", value: "000-000-0000" },
                ].map((item, i) => (
                  <tr key={item.label} className={i % 2 === 0 ? "bg-white" : "bg-santo-gray"}>
                    <th className="w-44 border-r border-slate-200 px-6 py-4 text-left text-[13px] font-black tracking-wider text-santo-navy">
                      {item.label}
                    </th>
                    <td className="px-6 py-4 text-[13px] text-slate-600">
                      {item.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-santo-navy py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <p className="mb-3 text-[11px] font-black tracking-[0.25em] text-santo-accent">
            CONTACT
          </p>
          <h2 className="mb-4 text-2xl font-black tracking-wider text-white">
            Contact Us
          </h2>
          <p className="mx-auto mb-10 max-w-md text-[13px] leading-[1.9] text-slate-400">
            Please feel free to reach out to us for job inquiries or staffing
            consultations.
          </p>
          <div className="flex flex-col items-center justify-center gap-5 sm:flex-row">
            <LinkButton href="/contact" size="xl" className="bg-white text-santo-navy hover:bg-slate-100">
              Contact Form
              <ArrowRight className="h-4 w-4" />
            </LinkButton>
            <div className="flex flex-col items-center">
              <p className="text-[10px] font-bold tracking-widest text-slate-500">TEL</p>
              <a href="tel:000-000-0000" className="text-2xl font-black tracking-wider text-white">
                000-000-0000
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
