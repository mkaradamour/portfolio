import { createContext, useContext } from "react";
import en from "./locales/en.json";
import ar from "./locales/ar.json";

export const locales = { en, ar };

// "/ar" and "/ar/..." are Arabic; everything else is English.
export const localeFromPath = (pathname) =>
  pathname === "/ar" || pathname.startsWith("/ar/") ? "ar" : "en";

export const LocaleContext = createContext("en");

const lookup = (dict, key) => key.split(".").reduce((o, k) => o?.[k], dict);

// t("hero.title"), t("contact.error", { email }) — falls back to English, then the key.
export function useT() {
  const locale = useContext(LocaleContext);
  const dict = locales[locale];
  const t = (key, vars) => {
    let value = lookup(dict, key) ?? lookup(en, key) ?? key;
    if (typeof value === "string" && vars) {
      value = value.replace(/\{(\w+)\}/g, (_, name) => vars[name] ?? "");
    }
    return value;
  };
  return { t, locale, dir: dict.dir };
}
