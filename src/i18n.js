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
          PhotoGallery: "Photo Gallery",
          UsefulLinks: "Useful Links",
          infoUsefulLinks: "Feel the safety and hospitality",
          Weather: "Weather",
          HotelBooking: "Hotel Booking",
          BankRate: "Bank Rate",
          TrainBooking: "Train Booking",
          FlightBooking: "Flight Booking",
          OnlinePayment: "Online Payment",
          PortalofUzbekistan: "Portal of Uzbekistan",
          MinistryofForeignAffairs: "Ministry of Foreign Affairs",
          AssociationofPrivateTourismAgencies:
            "Association of Private Tourism Agencies",
          usefulInformation: "Useful Information",
          faq1title: "Uzbekistan. Safe travel GUARANTEED",
          faq1text1:
            "New times require new security solutions. The threat of the spread of coronavirus continues to be relevant and negatively affect physical and emotional health. Now, before any trip, the traveler involuntarily thinks about precautions and sanitary standards. How can we avoid the negative impact of the pandemic and still maintain the desire to travel? There is a way out! Namely, trust the professionals and special services responsible for the safety of each tourist. For these purposes we have developed a system of safe tourism Uzbekistan. Safe travel GUARANTEED, which complies with all sanitary standards that meet international standards.",
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
          UsefulLinks: "handige links",
          infoUsefulLinks: "Voel de veiligheid en gastvrijheid",
          Weather: "Weer",
          HotelBooking: "Hotelboeking",
          BankRate: "Banktarief",
          TrainBooking: "Trein boeken",
          FlightBooking: "Vluchtboeking",
          OnlinePayment: "Online betaling",
          PortalofUzbekistan: "Portaal van Oezbekistan",
          MinistryofForeignAffairs: "Ministerie van Buitenlandse Zaken",
          AssociationofPrivateTourismAgencies:
            "Vereniging van particuliere toerismebureaus",
          usefulInformation: "Bruikbare informatie",
          faq1title: "Oezbekistan. Veilig reizen GEGARANDEERD",
          faq1text1: (
            <p>
              "Nieuwe tijden vragen om nieuwe beveiligingsoplossingen. De
              dreiging van de verspreiding van het coronavirus blijft relevant
              en negatief fysieke en emotionele gezondheid beïnvloeden. Nu, voor
              elke reis, de reiziger denkt onwillekeurig na over
              voorzorgsmaatregelen en sanitair normen. Hoe kunnen we de
              negatieve gevolgen van de pandemie vermijden en toch de wens om te
              reizen behouden? Er is een uitweg! Vertrouw namelijk op de
              verantwoordelijke professionals en speciale diensten voor de
              veiligheid van elke toerist. Voor deze doeleinden hebben we
              ontwikkelde een systeem van veilig toerisme "Oezbekistan. Veilig
              reizen GEGARANDEERD", die voldoet aan alle sanitaire normen die
              voldoen aan internationale normen."
            </p>
          ),
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
          UsefulLinks: "Полезные ссылки",
          infoUsefulLinks: "Почувствуйте безопасность и гостеприимство",
          Weather: "Погода",
          HotelBooking: "Бронирование отеля",
          BankRate: "Банковский курс",
          TrainBooking: "Бронирование поездов",
          FlightBooking: "Бронирование авиабилетов",
          OnlinePayment: "Онлайн платеж",
          PortalofUzbekistan: "Портал Узбекистана",
          MinistryofForeignAffairs: "Министерство иностранных дел",
          AssociationofPrivateTourismAgencies:
            "Ассоциация частных туристических агентств",
          usefulInformation: "Полезная информация",
          faq1title: "«Узбекистан. Безопасное путешествие ГАРАНТИРОВАНО»",
          faq1text1: (
            <p>
              «Новые времена требуют новых решений в области безопасности.
              Угроза распространения коронавируса продолжает оставаться
              актуальной и негативно влиять на физическое и эмоциональное
              здоровье. Сейчас перед любой поездкой путешественник невольно
              задумывается о мерах предосторожности и санитарных нормах. Как
              избежать негативного воздействия пандемии и при этом сохранить
              желание путешествовать?Выход есть!А именно довериться
              профессионалам и специальным службам, отвечающим за безопасность
              каждого туриста.Для этих целей мы разработали систему безопасного
              туризма Узбекистан.Безопасное путешествие ГАРАНТИРОВАНО, который
              соответствует всем санитарным нормам, соответствующим
              международным стандартам.»,
            </p>
          ),
          faq1text2:
            "По сути, такая система подразумевает строгое соблюдение санитарных  норм. и гигиенические мероприятия по борьбе с COVID-19 в Узбекистане. Все туристические объекты, соответствующая инфраструктура и общественные места должны получить специальное разрешение или сертификат на продолжение деятельности. К таким объектам относятся: средства размещения (гостиницы, гостевые дома, общежития и др.), все пункты госграницы, авиа, ж/д и автомобильные станции, объекты материального культурного наследия, музеи, театры и другие объекты культуры",
        },
      },
    },
  });
