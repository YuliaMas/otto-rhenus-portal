import { useTranslation } from "react-i18next";

import {
    AlertTriangle,
    FileText,
    CircleHelp,
    ExternalLink,
    UserX,
    ShieldAlert
} from "lucide-react";

const absenceFormUrl =
    "https://forms.cloud.microsoft/e/nc8WDNaT2v";

export default function Absence() {

    const { t } = useTranslation();

    const rules = t("absenceRules", {
        returnObjects: true,
    }) as string[];

    const instructions = t(
        "absenceInstructions",
        {
            returnObjects: true,
        }
    ) as string[];

    const norms = t(
        "absenceNorms",
        {
            returnObjects: true,
        }
    ) as string[];

    return (
        <div className="min-h-screen bg-slate-100">

            <div className="mx-auto max-w-7xl px-4 py-8">

                <h1 className="mb-8 text-4xl font-bold text-[#002b87]">
                    ❌ {t("absenceTitle")}
                </h1>

                {/* ATTENTION */}

                <div
                    className="
                        mb-8
                        rounded-2xl
                        border-l-8
                        border-red-500
                        bg-red-50
                        p-6
                    "
                >

                    <div className="mb-3 flex items-center gap-3">

                        <AlertTriangle
                            className="text-red-600"
                        />

                        <h2
                            className="
                                text-xl
                                font-bold
                                text-red-700
                            "
                        >
                            {t("absenceImportant")}
                        </h2>

                    </div>

                    <p className="text-gray-700">
                        {t("absenceImportantText")}
                    </p>

                </div>

                {/* FORMS BUTTON */}

                <div
                    className="
                        mb-8
                        rounded-2xl
                        bg-white
                        p-6
                        shadow
                    "
                >

                    <a
                        href={absenceFormUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            flex
                            flex-col
                            items-center

                            rounded-2xl
                            bg-red-500
                            p-6

                            text-white

                            transition-all
                            duration-300

                            hover:-translate-y-1
                            hover:bg-red-600
                            hover:shadow-xl
                        "
                    >

                        <UserX
                            size={40}
                            className="mb-3"
                        />

                        <span className="font-semibold">
                            {t("absenceFormButton")}
                        </span>

                        <ExternalLink
                            className="mt-2"
                            size={18}
                        />

                    </a>

                </div>

                {/* RULES */}

                <div
                    className="
                        mb-8
                        rounded-2xl
                        bg-white
                        p-6
                        shadow
                    "
                >

                    <div
                        className="
                            mb-5
                            flex
                            items-center
                            gap-3
                        "
                    >
                        <FileText
                            className="text-orange-500"
                        />
                        <h2 className="text-xl font-bold">
                            {t("absenceRulesTitle")}
                        </h2>
                    </div>

                    <ul className="space-y-3">
                        {rules.map((rule, index) => (
                            <li key={index}>
                                ✅ {rule}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* NORMS */}

                <div
                    className="
                        mb-8
                        rounded-2xl
                        border-l-8
                        border-red-600
                        bg-red-50
                        p-6
                    "
                >

                    <div
                        className="
                            mb-5
                            flex
                            items-center
                            gap-3
                        "
                    >

                        <ShieldAlert className="text-red-600"/>
                        <h2
                            className="
                                  text-xl
                                  font-bold
                                  text-red-700
                              "
                        >
                            {t("absenceNormsTitle")}
                        </h2>
                    </div>

                    <ul className="space-y-4">

                        {norms.map(
                            (item, index) => (
                                <li
                                    key={index}
                                    className="
                                        rounded-xl
                                        bg-white
                                        p-4
                                    "
                                >
                                    ⚠️ {item}
                                </li>
                            )
                        )}

                    </ul>

                </div>

                {/* Instructions */}

                <div
                    className="
                        rounded-2xl
                        bg-white
                        p-6
                        shadow
                    "
                >

                    <div
                        className="
                            mb-5
                            flex
                            items-center
                            gap-3
                        "
                    >

                        <CircleHelp
                            className="
                                text-orange-500
                            "
                        />

                        <h2 className="text-xl font-bold">
                            {t(
                                "absenceInstructionsTitle"
                            )}
                        </h2>

                    </div>

                    <ul className="space-y-3">

                        {instructions.map(
                            (
                                instruction,
                                index
                            ) => (
                                <li
                                    key={index}
                                >
                                    🔹 {instruction}
                                </li>
                            )
                        )}

                    </ul>

                </div>

            </div>

        </div>
    );
}
