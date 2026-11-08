import { useTranslation } from "react-i18next";
import type { NewsType } from "../../types/news_type";
import { newsIcons } from "../../data/newsIcons";

export type FilterCategory = "all" | NewsType;

type Props = {
    selected: FilterCategory;
    onChange: (category: FilterCategory) => void;
};

const CATEGORIES: NewsType[] = [
    "important",
    "transport",
    "vacation",
    "absence",
    "contact",
    "schedule",
    "other",
];

export default function NewsCategoryFilter({ selected, onChange }: Props) {
    const { t } = useTranslation();

    return (
        <div className="mb-6 flex flex-wrap gap-2">
            <button
                type="button"
                onClick={() => onChange("all")}
                className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
                    selected === "all"
                        ? "bg-[#002b87] text-white shadow-sm"
                        : "bg-white text-slate-700 shadow-sm hover:bg-slate-200"
                }`}
            >
                {t("allCategories", "All")}
            </button>

            {CATEGORIES.map((cat) => (
                <button
                    key={cat}
                    type="button"
                    onClick={() => onChange(cat)}
                    className={`flex items-center gap-1.5 rounded-xl px-4 py-2 text-sm font-semibold transition ${
                        selected === cat
                            ? "bg-[#002b87] text-white shadow-sm"
                            : "bg-white text-slate-700 shadow-sm hover:bg-slate-200"
                    }`}
                >
                    <span>{newsIcons[cat]}</span>
                    <span>{t(`type_${cat}`)}</span>
                </button>
            ))}
        </div>
    );
}
