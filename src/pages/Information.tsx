import { useTranslation } from "react-i18next";
// import {Building2} from "lucide-react";

const shifts = [
    ["D", "06:00 - 18:00"],
    ["N", "18:00 - 06:00"],
    ["P", "10:00 - 22:00"],
    ["R", "08:00 - 20:00"],
    ["Z", "20:00 - 08:00"],
    ["S", "14:00 - 02:00"],
    ["I", "06:00 - 14:00"],
    ["II", "14:00 - 22:00"],
    ["III", "22:00 - 06:00"],
    ["IV", "18:00 - 02:00"],
];

export default function Information() {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen bg-slate-100">

            <div className="mx-auto max-w-7xl px-4 py-8">

                <h1 className="mb-8 text-4xl font-bold text-[#002b87]">
                    ℹ️ {t("infoTitle")}
                </h1>

                {/* LAST CHANGES */}

                <div className="mb-8 rounded-2xl bg-orange-50 p-6">

                    <h2 className="mb-4 text-2xl font-bold text-orange-700">
                        📢 {t("importantUpdates")}
                    </h2>

                    <ul className="space-y-3">

                        <li>
                            ✅ {t("transportUpdate")}
                        </li>

                        <li>
                            ✅ {t("jesionowaUpdate")}
                        </li>

                        <li>
                            ✅ {t("wrzesniaUpdate")}
                        </li>

                    </ul>

                </div>

                {/* SHIFTS */}

                <div className="mb-8 rounded-2xl bg-white p-6 shadow">

                    <h2 className="mb-5 text-2xl font-bold">
                        🕓 {t("shiftTitle")}
                    </h2>

                    <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">

                        {shifts.map(([name, time]) => (

                            <div
                                key={name}
                                className="
                                    rounded-xl
                                    bg-slate-100
                                    p-4
                                "
                            >

                                <div className="font-bold">
                                    {name}
                                </div>

                                <div>
                                    {time}
                                </div>

                            </div>

                        ))}

                    </div>

                </div>

                {/* Useful Information */}

                <div
                    className="
                        rounded-2xl
                        bg-white
                        p-6
                        shadow
                    "
                >

                    <h2 className="mb-5 text-2xl font-bold">

                        📋 {t("objectRules")}

                    </h2>

                    <ul className="space-y-3">

                        <li>
                            ✅ {t("redShirt")}
                        </li>

                        <li>
                            ✅ {t("absenceNotice")}
                        </li>

                        <li>
                            ✅ {t("vacationNotice")}
                        </li>

                        <li>
                            ✅ {t("salaryInfo")}
                        </li>

                        <li>
                            ✅ {t("advanceInfo")}
                        </li>

                    </ul>

                </div>

                {/* myOTTO */}

                <div className="mb-8 rounded-2xl bg-blue-50 p-6">

                    <h2 className="mb-4 text-2xl font-bold text-[#002b87]">
                        📱 {t("myOttoTitle")}
                    </h2>

                    <p className="mb-3">
                        {t("myOttoDescription")}
                    </p>

                    <p>
                        {t("myOttoLogin")}
                    </p>

                    <a
                        href="https://www.myotto.pl"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            mt-4
                            inline-block

                            rounded-xl
                            bg-[#002b87]

                            px-5
                            py-3

                            text-white
                        "
                    >
                        myOTTO
                    </a>

                </div>

                {/* Adres */}

                <div
                    className="
                        mt-8
                        rounded-2xl
                        bg-white
                        p-6
                        shadow
                        flex center justify-center
                    "
                >
                        <div>
                            <h2
                                className="
                                    mb-5 text-2xl font-bold
                                "
                            >
                                🏭 Rhenus Swarzędz
                            </h2>

                            <ul className="space-y-3">

                                <li>ul. Rabowicka 61-71,
                                    62-020 Jasin </li>

                                <li>ul. Rabowicka 77,
                                    62-020 Jasin </li>
                            </ul>
                        </div>

                </div>


            </div>

        </div>
    );
}
