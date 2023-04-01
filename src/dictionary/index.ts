import { createI18n } from "vue-i18n";

const messages = {
  ru: {
    changeLanguage: "Сменить язык",
    avaliableLanguages: ["Английский", "Русский"],
    back: "Назад",
    id: "Идентификатор",
    text: "Текст",
    phone: "Телефон",
    type: "Тип",
    selectColHide: "Выберите колонки для скрытия:",
  },
  eng: {
    changeLanguage: "Change language",
    avaliableLanguages: ["English", "Russian"],
    back: "Back",
    id: "Id",
    text: "text",
    phone: "Phone",
    type: "Type",
    selectColHide: "Select columns to hide:",
  },
};

const i18n = createI18n({
  legacy: false,
  locale: "ru",
  messages,
});

export default i18n;
