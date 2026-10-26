import { useTranslation } from "react-i18next";

export default function Footer() {

    const { t } = useTranslation();

    return (
        <footer
            className="
                border-t
                bg-white
                py-6
                text-center
                text-sm
                text-slate-600
            "
        >

            <p   className=" text-gray-500 ">
                © 2026 {t("footerPortal")}
            </p>

            <p className="mt-2  text-sm  text-gray-400">
                {t("footerDeveloped")}
            </p>

        </footer>
    );
}
