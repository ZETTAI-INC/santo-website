"use client";

import { useState } from "react";
import { Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Page Header */}
      <section className="relative overflow-hidden bg-santo-navy">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#0f2b4a_0%,#1a4f8b_60%,#0f2b4a_100%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="mb-2 text-[11px] font-black tracking-[0.25em] text-santo-accent">
            CONTACT
          </p>
          <h1 className="text-3xl font-black tracking-wider text-white sm:text-4xl">
            お問い合わせ
          </h1>
          <div className="mt-4 h-0.5 w-12 bg-santo-accent" />
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Contact Info */}
            <div>
              <p className="mb-6 text-[11px] font-black tracking-[0.25em] text-santo-light">
                INFO
              </p>
              <div className="space-y-0">
                {[
                  {
                    icon: Phone,
                    label: "お電話",
                    value: "000-000-0000",
                    href: "tel:000-000-0000",
                    large: true,
                  },
                  {
                    icon: Mail,
                    label: "メール",
                    value: "info@santo-hp.co.jp",
                  },
                  {
                    icon: Clock,
                    label: "営業時間",
                    value: "月〜金 9:00〜18:00",
                    note: "※土日祝日休み",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-4 border-b border-slate-100 py-5 last:border-0"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-santo-sky">
                      <item.icon className="h-5 w-5 text-santo-blue" />
                    </div>
                    <div>
                      <p className="mb-1 text-[10px] font-black tracking-[0.15em] text-slate-400">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-lg font-black tracking-wider text-santo-navy"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-[13px] font-bold text-slate-700">
                          {item.value}
                        </p>
                      )}
                      {item.note && (
                        <p className="mt-0.5 text-[11px] text-slate-400">
                          {item.note}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="rounded border-2 border-green-200 bg-green-50 p-10 text-center">
                  <h2 className="mb-3 text-xl font-black tracking-wider text-green-800">
                    送信ありがとうございます
                  </h2>
                  <p className="text-[13px] leading-[1.8] text-green-700">
                    お問い合わせを受け付けました。担当者より折り返しご連絡いたします。
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <p className="text-[13px] text-slate-500">
                    以下のフォームに必要事項をご記入の上、送信してください。
                    <span className="font-bold text-red-500"> *</span>
                    は必須項目です。
                  </p>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <Label
                        htmlFor="name"
                        className="mb-2 text-[12px] font-black tracking-wider"
                      >
                        お名前
                        <span className="text-red-500"> *</span>
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        required
                        placeholder="山田 太郎"
                        className="h-11"
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="company"
                        className="mb-2 text-[12px] font-black tracking-wider"
                      >
                        会社名
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        placeholder="株式会社○○"
                        className="h-11"
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <Label
                        htmlFor="email"
                        className="mb-2 text-[12px] font-black tracking-wider"
                      >
                        メールアドレス
                        <span className="text-red-500"> *</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="example@email.com"
                        className="h-11"
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="phone"
                        className="mb-2 text-[12px] font-black tracking-wider"
                      >
                        電話番号
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="000-000-0000"
                        className="h-11"
                      />
                    </div>
                  </div>

                  <div>
                    <Label
                      htmlFor="type"
                      className="mb-2 text-[12px] font-black tracking-wider"
                    >
                      お問い合わせ種別
                      <span className="text-red-500"> *</span>
                    </Label>
                    <select
                      id="type"
                      name="type"
                      required
                      className="flex h-11 w-full rounded border border-input bg-background px-3 py-2 text-[13px] ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <option value="">選択してください</option>
                      <option value="jobseeker">お仕事をお探しの方</option>
                      <option value="employer">人材をお探しの企業様</option>
                      <option value="other">その他</option>
                    </select>
                  </div>

                  <div>
                    <Label
                      htmlFor="message"
                      className="mb-2 text-[12px] font-black tracking-wider"
                    >
                      お問い合わせ内容
                      <span className="text-red-500"> *</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      placeholder="お問い合わせ内容をご記入ください"
                    />
                  </div>

                  <div className="rounded bg-santo-gray p-5">
                    <label className="flex items-start gap-3 text-[13px] text-slate-600">
                      <input
                        type="checkbox"
                        required
                        className="mt-1 rounded border-slate-300"
                      />
                      <span>
                        <a href="#" className="font-bold text-santo-blue underline">
                          プライバシーポリシー
                        </a>
                        に同意の上、送信してください。
                      </span>
                    </label>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="h-12 w-full bg-santo-navy px-8 text-sm font-black tracking-wider hover:bg-santo-blue sm:w-auto"
                  >
                    <Send className="h-4 w-4" />
                    送信する
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
