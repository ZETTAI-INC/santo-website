import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["ja", "en", "zh", "es", "pt"],
  defaultLocale: "ja",
  localePrefix: "always",
});
