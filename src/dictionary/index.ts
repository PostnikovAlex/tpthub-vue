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
  },
  eng: {
    changeLanguage: "Change language",
    back: "Back",
    id: "Id",
    text: "text",
    phone: "Phone",
    type: "Type",
    selectColHide: "Select columns to hide:",
  },
};

interface ILangObject {
  value: string;
  label: string;
}

export const AVAILABLE_LANGUAGES: Array<ILangObject> = [
  { value: "eng", label: "English" },
  { value: "ru", label: "Русский" },
];

interface I18nLocale {
  locale: string;
  messages: any;
}

const i18n: I18n<I18nLocale> = createI18n({
  legacy: false,
  locale: "ru",
  messages,
});

export default i18n;
