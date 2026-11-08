// type Props = {
//     active: "uk" | "pl" | "ru" | "en";
//
//     onChange: (lang: "uk" | "pl" | "ru" | "en") => void;
// };
//
// export default function LanguageTabs({active, onChange,}: Props) {
//
//     const tabs = ["uk", "pl", "ru", "en",];
//
//     return (
//         <div className="mb-4 flex  gap-2">
//             {tabs.map(tab => (
//                 <button
//                     key={tab}
//                     onClick={() =>
//                         onChange(tab as typeof active)
//                     }
//                     className={` rounded-xl px-4 py-2  font-medium
//                         ${active === tab
//                             ? "bg-[#002b87] text-white"
//                             : "bg-slate-200"
//                          }
//                     `}
//                 >
//                     {tab.toUpperCase()}
//                 </button>
//             ))}
//         </div>
//     );
// }

export type LangCode = "uk" | "pl" | "ru" | "en";

type Props = {
    active: LangCode;
    onChange: (lang: LangCode) => void;
};

export default function LanguageTabs({ active, onChange }: Props) {
    const tabs: LangCode[] = ["uk", "pl", "ru", "en"];

    return (
        <div className="mb-4 flex gap-2">
            {tabs.map((tab) => (
                <button
                    key={tab}
                    type="button"
                    onClick={() => onChange(tab)}
                    className={`rounded-xl px-4 py-2 font-medium transition ${
                        active === tab
                            ? "bg-[#002b87] text-white"
                            : "bg-slate-200 text-slate-700 hover:bg-slate-300"
                    }`}
                >
                    {tab.toUpperCase()}
                </button>
            ))}
        </div>
    );
}
