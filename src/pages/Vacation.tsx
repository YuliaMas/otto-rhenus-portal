// import {
//     Calendar,
//     FileText,
//     CircleHelp,
//     ExternalLink
// } from "lucide-react";
//
// import {
//     vacationRules,
//     vacationFaq
// } from "../data/vacationRules";
//
// export default function Vacation() {
//
//     const formUrl =
//         "ТУТ_БУДЕ_MICROSOFT_FORM";
//
//     return (
//         <div className="min-h-screen bg-slate-100">
//
//
//             <div className="mx-auto max-w-7xl px-4 py-8">
//
//                 <h1
//                     className="
//                         mb-8
//                         text-4xl
//                         font-bold
//                         text-[#002b87]
//                     "
//                 >
//                     🏖️ Відпустки
//                 </h1>
//
//                 {/* Форма */}
//
//                 <div
//                     className="
//                         mb-8
//                         rounded-2xl
//                         bg-white
//                         p-6
//                         shadow
//                     "
//                 >
//
//                     <div className="flex items-center gap-3">
//
//                         <Calendar
//                             className="text-orange-500"
//                         />
//
//                         <h2
//                             className="text-xl font-bold"
//                         >
//                             Подати заявку
//                         </h2>
//
//                     </div>
//
//                     <p className="mt-4 text-gray-600">
//                         Для подачі заявки використайте форму.
//                     </p>
//
//                     <a
//                         href={formUrl}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="
//                             mt-5
//                             inline-flex
//                             items-center
//                             gap-2
//
//                             rounded-xl
//                             bg-[#002b87]
//                             px-5
//                             py-3
//
//                             text-white
//
//                             transition
//                             hover:bg-blue-800
//                         "
//                     >
//
//                         Подати заявку
//
//                         <ExternalLink
//                             size={18}
//                         />
//
//                     </a>
//
//                 </div>
//
//                 {/* Правила */}
//
//                 <div
//                     className="
//                         mb-8
//                         rounded-2xl
//                         bg-white
//                         p-6
//                         shadow
//                     "
//                 >
//
//                     <div
//                         className="
//                             mb-4
//                             flex
//                             items-center
//                             gap-3
//                         "
//                     >
//                         <FileText
//                             className="text-orange-500"
//                         />
//
//                         <h2
//                             className="text-xl font-bold"
//                         >
//                             Правила надання відпусток
//                         </h2>
//
//                     </div>
//
//                     <ul
//                         className="
//                             space-y-3
//                             text-gray-700
//                         "
//                     >
//
//                         {vacationRules.map(rule => (
//
//                             <li key={rule}>
//                                 ✅ {rule}
//                             </li>
//
//                         ))}
//
//                     </ul>
//
//                 </div>
//
//                 {/* FAQ */}
//
//                 <div
//                     className="
//                         rounded-2xl
//                         bg-white
//                         p-6
//                         shadow
//                     "
//                 >
//
//                     <div
//                         className="
//                             mb-4
//                             flex
//                             items-center
//                             gap-3
//                         "
//                     >
//
//                         <CircleHelp
//                             className="text-orange-500"
//                         />
//
//                         <h2
//                             className="text-xl font-bold"
//                         >
//                             Часті запитання
//                         </h2>
//
//                     </div>
//
//                     <div className="space-y-6">
//
//                         {vacationFaq.map(item => (
//
//                             <div
//                                 key={item.question}
//                             >
//
//                                 <h3
//                                     className="
//                                         mb-2
//                                         font-semibold
//                                     "
//                                 >
//                                     {item.question}
//                                 </h3>
//
//                                 <p
//                                     className="
//                                         text-gray-600
//                                     "
//                                 >
//                                     {item.answer}
//                                 </p>
//
//                             </div>
//
//                         ))}
//
//                     </div>
//
//                 </div>
//
//             </div>
//
//         </div>
//     );
// }
import { useTranslation } from "react-i18next";
import {
    Calendar,
    FileText,
    CircleHelp,
    ExternalLink,
    AlertTriangle
} from "lucide-react";

const vacationFormUrl =
    "https://forms.cloud.microsoft/e/uRzfY2dJWG?origin=lprLink";

const absenceFormUrl =
    "https://forms.cloud.microsoft/e/nc8WDNaT2v";

export default function Vacation() {
    const { t } = useTranslation();

    const rules = t("vacationRules", {
        returnObjects: true,
    }) as string[];

    const instructions = t(
        "vacationInstructions",
        {
            returnObjects: true,
        }
    ) as string[];

    return (
        <div className="min-h-screen bg-slate-100">

            <div className="mx-auto max-w-7xl px-4 py-8">

                <h1 className="mb-8 text-4xl font-bold text-[#002b87]">
                    🏖️ {t("vacationTitle")}
                </h1>

                <div
                    className="
                            mb-8
                            rounded-2xl
                            border-l-8
                            border-green-500
                            bg-green-50
                            p-6
                        "
                >
                    <h2
                        className="
                            mb-3
                            text-xl
                            font-bold
                            text-green-700
                        "
                    >
                        ℹ️ {t("vacationNormInfoTitle")}
                    </h2>

                    <p>
                        {t("vacationNormInfoText")}
                    </p>

                </div>

                <div
                    className="
                        mb-8
                        rounded-2xl
                        border-l-8
                        border-orange-500
                        bg-orange-50
                        p-6
                    "
                >

                    <div className="mb-3 flex items-center gap-3">

                        <AlertTriangle
                            className="
                                text-orange-600
                            "
                        />

                        <h2
                            className="
                                text-xl
                                font-bold
                                text-orange-700
                            "
                        >
                            {t(
                                "vacationImportant"
                            )}
                        </h2>

                    </div>

                    <p className="text-gray-700">
                        {t(
                            "vacationImportantText"
                        )}
                    </p>

                </div>

                <div
                    className="
                        mb-8
                        grid
                        gap-4
                        md:grid-cols-2
                    "
                >

                    <a
                        href={vacationFormUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            rounded-2xl
                            bg-[#002b87]
                            p-6
                            text-center
                            text-white

                            transition-all
                            hover:-translate-y-1
                            hover:shadow-xl
                        "
                    >

                        <Calendar
                            className="
                                mx-auto
                                mb-3
                            "
                        />

                        {t(
                            "vacationFormButton"
                        )}

                    </a>

                    <a
                        href={absenceFormUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            rounded-2xl
                            bg-orange-500
                            p-6
                            text-center
                            text-white

                            transition-all
                            hover:-translate-y-1
                            hover:shadow-xl
                        "
                    >

                        <ExternalLink
                            className="
                                mx-auto
                                mb-3
                            "
                        />

                        {t(
                            "absenceFormButton"
                        )}

                    </a>

                </div>

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
                            className="
                                text-orange-500
                            "
                        />

                        <h2
                            className="
                                text-xl
                                font-bold
                            "
                        >
                            {t(
                                "vacationRulesTitle"
                            )}
                        </h2>

                    </div>

                    <ul className="space-y-3">

                        {rules.map(
                            (rule, index) => (
                                <li
                                    key={index}
                                >
                                    ✅ {rule}
                                </li>
                            )
                        )}

                    </ul>

                </div>

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

                        <h2
                            className="
                                text-xl
                                font-bold
                            "
                        >
                            {t(
                                "vacationInstructionsTitle"
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
