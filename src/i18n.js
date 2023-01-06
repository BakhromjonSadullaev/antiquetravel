import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    debug: true,
    fallbackLng: "en",
    resources: {
      en: {
        translation: {
          Home: "Home",
          AboutUs: "About Us",
          Tours: "Tours",
          Hotels: "Hotels",
          Transportation: "Transportation",
          Destination: "Destination",
          Services: "Services",
          Staff: "Staff",
          PhotoGallery: "PhotoGallery",
        },
      },
      de: {
        translation: {
          Home: "Zuhause",
          AboutUs: "über uns",
          Tours: "Touren",
          Hotels: "Hotels",
          Transportation: "Transport",
          Destination: "Ziel",
          Services: "Dienstleistungen",
          Staff: "das Personal",
          PhotoGallery: "Fotogallerie",
        },
      },
      ru: {
        translation: {
          Home: "Главная",
          AboutUs: "O нас",
          Tours: "Экскурсии",
          Hotels: "Отели",
          Transportation: "Транспорт",
          Destination: "Место Hазначения",
          Services: "Услуги",
          Staff: "Персонал",
          PhotoGallery: "Фотогалерея",
        },
      },
    },
  });
