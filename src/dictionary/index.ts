import { createI18n, I18n } from "vue-i18n";

const messages = {
  ru: {
    changeLanguage: "Сменить язык",
    back: "Назад",
    id: "Идентификатор",
    text: "Текст",
    phone: "Телефон",
    type: "Тип",
    selectColHide: "Выберите колонки для скрытия:",
    russian: "Русский",
    english: "Английский",
  },
  eng: {
    changeLanguage: "Change language",
    back: "Back",
    id: "Id",
    text: "text",
    phone: "Phone",
    type: "Type",
    selectColHide: "Select columns to hide:",
    russian: "Russian",
    english: "English",
  },
};

const i18n = createI18n({
  legacy: false,
  locale: "ru",
  messages,
});

export default i18n;
