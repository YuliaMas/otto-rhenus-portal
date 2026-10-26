//
// import { useTranslation } from "react-i18next";
//
// type Props = {
//     mobile?: boolean;
//     onSelect?: () => void;
// };
//
// export default function LanguageSwitcher({
//                                              mobile = false,
//                                              onSelect,
//                                          }: Props) {
//
//     const { i18n } = useTranslation();
//
//     const languages = [
//         {
//             code: "ua",
//             label: "UA",
//         },
//         {
//             code: "pl",
//             label: "PL",
//         },
//         {
//             code: "ru",
//             label: "RU",
//         },
//         {
//             code: "en",
//             label: "EN",
//         },
//     ];
//
//     const handleLanguageChange = (language: string) => {
//
//         i18n.changeLanguage(language);
//
//         localStorage.setItem(
//             "language",
//             language
//         );
//
//         onSelect?.();
//     };
//
//     return (
//         <div
//             className={
//                 mobile
//                     ? "mt-6 flex flex-wrap gap-2"
//                     : "hidden items-center gap-3 lg:flex"
//             }
//         >
//             {languages.map((language) => {
//
//                 const active =
//                     i18n.language === language.code;
//
//                 return (
//                     <button
//                         key={language.code}
//                         onClick={() =>
//                             handleLanguageChange(
//                                 language.code
//                             )
//                         }
//                         className={`
//                             flex
//                             h-12
//                             w-16
//                             items-center
//                             justify-center
//
//                             rounded-xl
//
//                             text-sm
//                             font-semibold
//
//                             transition-all
//                             duration-200
//
//                             ${
//                             active
//                                 ? "bg-[#002b87] text-white shadow-md"
//                                 : "border border-slate-300 bg-white text-slate-700 hover:bg-slate-100"
//                         }
//                         `}
//                     >
//                         {language.label}
//                     </button>
//                 );
//             })}
//         </div>
//     );
// }
import {ChevronDown} from "lucide-react";
import { useTranslation } from "react-i18next";
import {
    useEffect,
    useRef,
    useState
} from "react";

type Props = {
    mobile?: boolean;
    onSelect?: () => void;
};

export default function LanguageSwitcher({
                                             mobile = false,
                                             onSelect,
                                         }: Props) {

    const { i18n } = useTranslation();
    const [open, setOpen] = useState(false);
    const dropdownRef =
        useRef<HTMLDivElement>(null);
    useEffect(() => {

        const handleClickOutside = (
            event: MouseEvent
        ) => {

            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(
                    event.target as Node
                )
            ) {
                setOpen(false);
            }
        };

        document.addEventListener(
            "mousedown",
            handleClickOutside
        );

        return () => {
            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );
        };

    }, []);

    const languages = [
        {
            code: "ua",
            label: "UA",
        },
        {
            code: "pl",
            label: "PL",
        },
        {
            code: "ru",
            label: "RU",
        },
        {
            code: "en",
            label: "EN",
        },
    ];

    const currentLanguage =
        languages.find(
            lang =>
                lang.code === i18n.language
        ) || languages[0];

    const changeLanguage = (
        code: string
    ) => {

        i18n.changeLanguage(code);

        localStorage.setItem(
            "language",
            code
        );

        setOpen(false);

        onSelect?.();
    };

    if (mobile) {

        return (
            <div className="mt-4">
                <div className="mb-2 font-semibold">
                    🌍 Language
                </div>

                <div className="space-y-2">

                    {languages.map(lang => (

                        <button
                            key={lang.code}
                            onClick={() =>
                                changeLanguage(
                                    lang.code
                                )
                            }
                            className="
                                block
                                w-full
                                rounded-xl
                                border
                                p-3
                                text-left
                            "
                        >
                            {lang.label}
                        </button>

                    ))}

                </div>
            </div>
        );
    }

    return (
        <div
            ref={dropdownRef}
            className="relative"
        >
            <button
                onClick={() =>
                    setOpen(!open)
                }
                className="
                    flex
                    h-12
                    min-w-[100px]
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    border
                    bg-white
                    px-4
                    font-medium
                    hover:text-[#ff6b00]
                "
            >

                {/*<Globe size={18} />*/}
                <span>🌍</span>
                {currentLanguage.code.toUpperCase()}

                <ChevronDown size={16} />

            </button>

            {open && (

                <div
                    className="
                        absolute
                        right-0
                        top-full
                        z-50
                        min-w-[80px]
                        rounded-xl
                        flex flex-col
                        items-center
                        bg-white
                        shadow-xl

                    "
                >
                    {languages.map(lang => (
                        <button
                            key={lang.code}
                            onClick={() =>
                                changeLanguage(lang.code)
                            }
                            className="
                                block
                                w-medium
                                px-6
                                py-2
                                hover:bg-slate-100
                                rounded-xl
                            "
                        >
                            {lang.label}
                        </button>

                    ))}

                </div>

            )}

        </div>
    );
}
