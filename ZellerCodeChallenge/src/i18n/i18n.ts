import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as RNLocalize from "react-native-localize";
import en from "locales/en.json";
import es from "locales/es.json";

const resources = {
  en: { translation: en },
  es: { translation: es },
} as const;

function detectLanguage() {
  const locales = RNLocalize.getLocales();
  const tag = locales?.[0]?.languageTag || "en";
  const base = tag.split("-")[0];
  return resources[base as keyof typeof resources] ? base : "en";
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: detectLanguage(),
    fallbackLng: "en",
    interpolation: { escapeValue: false },
    // react: { useSuspense: false } // optional in RN
  });

export default i18n;
