import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  ru: {
    translation: {
      heroTitle: "Натуральные продукты прямо с наших полей",
      heroText: "Мука, кукуруза, свекла и крупы — полезно, натурально и честно.",
      productsBtn: "Наши продукты",
      moreBtn: "Узнать больше",

      hectares: "Гектаров полей",
      workers: "Сотрудников",
      experience: "Лет опыта",
      harvest: "Тонн урожая",

      productsTitle: "Наши продукты",
      sugar: "Сахар",
      corn: "Кукуруза",
      wheat: "Пшеница",
      beet: "Свекла",

      sugarText: "Высококачественный сахар",
      cornText: "Золотистая кукуруза отборного качества",
      wheatText: "Высококачественная пшеница",
      beetText: "Сладкая и сочная столовая свекла",

      more: "Подробнее",

      aboutTitle: "О нас",
      aboutText: "«ТАЗАЖАН» — семейное хозяйство...",

      aboutBtn: "Подробнее о компании",

      contacts: "Контакты"
    }
  },

  kg: {
    translation: {
      heroTitle: "Табигый продуктылар биздин талаадан",
      heroText: "Ун, жүгөрү, кызылча жана дан азыктары — пайдалуу жана табигый.",
      productsBtn: "Биздин продукциялар",
      moreBtn: "Көбүрөөк билүү",

      hectares: "Гектар жер",
      workers: "Кызматкерлер",
      experience: "Жылдык тажрыйба",
      harvest: "Тонна түшүм",

      productsTitle: "Биздин продукциялар",
      sugar: "Шекер",
      corn: "Жүгөрү",
      wheat: "Буудай",
      beet: "Кызылча",

      sugarText: "Жогорку сапаттагы шекер",
      cornText: "Тандалган алтын жүгөрү",
      wheatText: "Жогорку сапаттагы буудай",
      beetText: "Таттуу жана ширелүү кызылча",

      more: "Кененирээк",

      aboutTitle: "Биз жөнүндө",
      aboutText: "«ТАЗАЖАН» — үй-бүлөлүк чарба...",

      aboutBtn: "Компания жөнүндө",

      contacts: "Байланыш"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "ru",
    fallbackLng: "ru",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;