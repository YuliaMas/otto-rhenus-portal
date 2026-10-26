import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import ua from "../locales/ua/translation.json";
import pl from "../locales/pl/translation.json";
import ru from "../locales/ru/translation.json";
import en from "../locales/en/translation.json";

i18n.use(initReactI18next).init({

    resources: {
        ua: {
            translation: ua
        },
        pl: {
            translation: pl
        },
        ru: {
            translation: ru
        },
        en: {
            translation: en
        }
    },

    lng: localStorage.getItem("language") || "ua",

    fallbackLng: "en",

    interpolation: {
        escapeValue: false
    }
});

export default i18n;
