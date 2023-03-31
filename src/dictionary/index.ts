import { createI18n } from "vue-i18n";

const messages = {
  ru: {
    changeLanguage: "Сменить язык",
    avaliableLanguages: ["Английский", "Русский"],
    back: "Назад",
  },
  eng: {
    changeLanguage: "Change language",
    avaliableLanguages: ["English", "Russian"],
    back: "Back",
  },
};

const i18n = createI18n({
  legacy: false,
  locale: "ru",
  messages,
});

export default i18n;
