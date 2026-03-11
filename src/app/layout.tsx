import type { Metadata } from "next";
import { Zen_Kaku_Gothic_New, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const zenKaku = Zen_Kaku_Gothic_New({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "株式会社サントー | 人材派遣",
    template: "%s | 株式会社サントー",
  },
  description:
    "株式会社サントーは、人材派遣を通じて求職者と企業をつなぐ人材サービス会社です。お仕事をお探しの方、人材をお探しの企業様、お気軽にご相談ください。",
  keywords: ["人材派遣", "求人", "派遣会社", "サントー", "求職"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${zenKaku.variable} ${inter.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
