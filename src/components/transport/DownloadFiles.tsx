import {
    Download,
    FileSpreadsheet
} from "lucide-react";
import {useTranslation} from "react-i18next";

export default function DownloadFiles() {
    const { t } = useTranslation();
    return (
        <div className="mb-8 grid gap-4 md:grid-cols-2">

            <a
                href="../../assets/files/Rozklad_autobus_POZNAN.xlsx"
                download
                className="
                    flex
                    items-center
                    justify-between
                    rounded-2xl
                    bg-white
                    p-5
                    shadow
                    transition

                    hover:-translate-y-1
                    hover:shadow-lg
                "
            >
                <div className="flex items-center gap-3">

                    <FileSpreadsheet
                        className="text-green-600"
                    />

                    <div className="font-semibold">
                        {t("transportPoznanTitle")}
                    </div>

                    <div className="text-sm text-gray-500">
                        {t("downloadExcel")}
                    </div>

                </div>

                <Download />
            </a>

            <a
                href="../../assets/files/Rozklad_Września_okolice.xlsx"
                download
                className="
                    flex
                    items-center
                    justify-between
                    rounded-2xl
                    bg-white
                    p-5
                    shadow
                    transition

                    hover:-translate-y-1
                    hover:shadow-lg
                "
            >
                <div className="flex items-center gap-3">

                    <FileSpreadsheet
                        className="text-green-600"
                    />

                    <div className="font-semibold">
                        {t("transportWrzesniaTitle")}
                    </div>

                    <div className="text-sm text-gray-500">
                        {t("downloadExcel")}
                    </div>

                </div>

                <Download />
            </a>

        </div>
    );
}
