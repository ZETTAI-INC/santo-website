#!/usr/bin/env node
/**
 * 企業ロゴ自動収集スクリプト (Yahoo検索版)
 */

import { writeFileSync, existsSync } from "fs";
import { execSync } from "child_process";

const companies = [
  { name: "日本エアー・フィルター株式会社", slug: "nippon_air_filter" },
  { name: "南関東日立物流サービス株式会社", slug: "minami_kanto_hitachi" },
  { name: "日本クラウンコルク株式会社", slug: "nippon_crown_cork" },
  { name: "多田プレス工業株式会社", slug: "tada_press" },
  { name: "株式会社武部鉄工所", slug: "takebe_tekko" },
  { name: "森工業株式会社", slug: "mori_kogyo" },
  { name: "キョーラク株式会社", slug: "kyoraku" },
  { name: "英宝総合株式会社", slug: "eiho_sogo" },
  { name: "日産車体マニュファクチュアリング株式会社", slug: "nissan_shatai_mfg" },
  { name: "平塚金属工業株式会社", slug: "hiratsuka_kinzoku" },
  { name: "旭ファイバーグラス株式会社", slug: "asahi_fiberglass" },
  { name: "高周波工業株式会社", slug: "koshuha_kogyo" },
  { name: "ファインツール・ジャパン株式会社", slug: "finetool_japan" },
  { name: "旭興業株式会社", slug: "asahi_kogyo" },
  { name: "三洋興産株式会社", slug: "sanyo_kosan" },
];

const OUT_DIR = "public/images/partners";
const succeeded = [];
const failed = [];

function fetchHTML(url) {
  try {
    return execSync(
      `curl -sL --max-time 10 --max-redirs 5 -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36" "${url}"`,
      { encoding: "utf-8", maxBuffer: 5 * 1024 * 1024 }
    );
  } catch {
    return null;
  }
}

function downloadImage(url, filepath) {
  try {
    execSync(
      `curl -sL --max-time 15 -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36" -o "${filepath}" "${url}"`,
      { encoding: "utf-8" }
    );
    const stat = execSync(`stat -f%z "${filepath}"`, { encoding: "utf-8" }).trim();
    return parseInt(stat) > 500;
  } catch {
    return false;
  }
}

function extractLogoUrl(html, baseUrl) {
  const candidates = [];

  // og:image
  const ogMatch = html.match(/<meta[^>]*property=["']og:image["'][^>]*content=["']([^"']+)["']/i)
    || html.match(/<meta[^>]*content=["']([^"']+)["'][^>]*property=["']og:image["']/i);
  if (ogMatch) candidates.push(ogMatch[1]);

  // class/id/altにlogo含むimg
  const logoImgs = html.matchAll(/<img[^>]*(?:class|id|alt)=["'][^"']*logo[^"']*["'][^>]*src=["']([^"']+)["']/gi);
  for (const m of logoImgs) candidates.push(m[1]);

  // srcにlogoを含むimg
  const srcLogos = html.matchAll(/<img[^>]*src=["']([^"']*logo[^"']*\.(?:png|jpg|jpeg|svg|webp)[^"']*)["']/gi);
  for (const m of srcLogos) candidates.push(m[1]);

  // header内の最初のimg
  const headerMatch = html.match(/<header[^>]*>[\s\S]*?<img[^>]*src=["']([^"']+)["']/i);
  if (headerMatch) candidates.push(headerMatch[1]);

  // h1内のimg
  const h1Match = html.match(/<h1[^>]*>[\s\S]*?<img[^>]*src=["']([^"']+)["']/i);
  if (h1Match) candidates.push(h1Match[1]);

  // apple-touch-icon
  const appleIcon = html.match(/<link[^>]*rel=["']apple-touch-icon["'][^>]*href=["']([^"']+)["']/i);
  if (appleIcon) candidates.push(appleIcon[1]);

  return candidates.map(url => {
    if (url.startsWith("http")) return url;
    if (url.startsWith("//")) return "https:" + url;
    if (url.startsWith("/")) return baseUrl + url;
    return baseUrl + "/" + url;
  });
}

/**
 * Yahoo Japan検索で公式サイトURLを取得
 */
function searchYahoo(companyName) {
  try {
    const query = encodeURIComponent(companyName);
    const html = fetchHTML(`https://search.yahoo.co.jp/search?p=${query}`);
    if (!html) return null;

    // Yahoo検索結果からURLを抽出
    // Yahoo JapanはリンクをリダイレクトURLでラップするが、data-属性やcite要素にURLがある
    const urls = [];

    // <a>タグのhrefから直接URLを取得
    const directUrls = html.matchAll(/href="(https?:\/\/[^"]+)"/g);
    for (const m of directUrls) {
      const url = m[1];
      if (
        !url.includes("yahoo.") &&
        !url.includes("google.") &&
        !url.includes("youtube.") &&
        !url.includes("wikipedia.") &&
        !url.includes("facebook.") &&
        !url.includes("twitter.") &&
        !url.includes("amazon.") &&
        !url.includes("rakuten.") &&
        !url.includes("bing.")
      ) {
        urls.push(url);
      }
    }

    // cite要素からURLを取得（検索結果の表示URL）
    const citeUrls = html.matchAll(/<cite[^>]*>(https?:\/\/[^<]+)<\/cite>/g);
    for (const m of citeUrls) {
      urls.unshift(m[1].replace(/<[^>]+>/g, "").trim());
    }

    // 最もそれらしいURLを返す（.co.jp, .jp を優先）
    const jpUrl = urls.find(u => u.match(/\.co\.jp|\.jp|\.com/) && !u.includes("search"));
    return jpUrl || urls[0] || null;
  } catch {
    return null;
  }
}

// メイン処理
console.log("=== 企業ロゴ収集スクリプト (Yahoo検索版) ===\n");

for (const company of companies) {
  const filepath = `${OUT_DIR}/${company.slug}.png`;
  console.log(`[${company.name}]`);

  if (existsSync(filepath)) {
    console.log("  → 取得済み（スキップ）\n");
    succeeded.push(company.name);
    continue;
  }

  // Yahoo検索で公式サイトを探す
  console.log("  Yahoo検索中...");
  const siteUrl = searchYahoo(company.name);

  if (!siteUrl) {
    console.log("  → 公式サイトが見つかりませんでした\n");
    failed.push({ name: company.name, reason: "公式サイト未発見" });
    continue;
  }

  let origin;
  try {
    origin = new URL(siteUrl).origin;
  } catch {
    console.log(`  → URLの解析に失敗: ${siteUrl}\n`);
    failed.push({ name: company.name, reason: "URL解析失敗", url: siteUrl });
    continue;
  }
  console.log(`  公式サイト: ${origin}`);

  // サイトのHTMLを取得
  console.log("  ページを解析中...");
  const html = fetchHTML(origin);
  if (!html) {
    console.log("  → ページの取得に失敗\n");
    failed.push({ name: company.name, reason: "ページ取得失敗", url: origin });
    continue;
  }

  // ロゴURLを抽出
  const logoUrls = extractLogoUrl(html, origin);

  if (logoUrls.length === 0) {
    // フォールバック: favicon
    console.log("  ロゴ未検出。faviconを試行...");
    const faviconUrl = `${origin}/favicon.ico`;
    if (downloadImage(faviconUrl, filepath)) {
      console.log("  → favicon を取得\n");
      succeeded.push(company.name + " (favicon)");
    } else {
      console.log("  → 取得失敗\n");
      failed.push({ name: company.name, reason: "ロゴ未検出", url: origin });
    }
    execSync("sleep 1");
    continue;
  }

  // 候補を順番に試す
  let downloaded = false;
  for (const logoUrl of logoUrls.slice(0, 5)) {
    const shortUrl = logoUrl.length > 80 ? logoUrl.substring(0, 77) + "..." : logoUrl;
    console.log(`  試行: ${shortUrl}`);
    if (downloadImage(logoUrl, filepath)) {
      console.log("  → 成功!\n");
      succeeded.push(company.name);
      downloaded = true;
      break;
    }
  }

  if (!downloaded) {
    console.log("  → すべて失敗\n");
    failed.push({ name: company.name, reason: "ダウンロード失敗", url: origin, candidates: logoUrls.length });
  }

  execSync("sleep 1");
}

// 結果レポート
console.log("\n=== 結果 ===");
console.log(`成功: ${succeeded.length}社`);
succeeded.forEach(name => console.log(`  ✓ ${name}`));
console.log(`\n失敗: ${failed.length}社`);
failed.forEach(f => console.log(`  ✗ ${f.name} (${f.reason}${f.url ? ` - ${f.url}` : ""})`));

if (failed.length > 0) {
  const report = failed.map(f => `${f.name}\t${f.reason}\t${f.url || ""}`).join("\n");
  writeFileSync(`${OUT_DIR}/failed.txt`, report);
  console.log(`\n失敗リストを ${OUT_DIR}/failed.txt に保存しました`);
}
