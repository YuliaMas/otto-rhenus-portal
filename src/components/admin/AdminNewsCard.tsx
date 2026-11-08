import type { NewsItem } from "../../types/news_type";
import {useTranslation} from "react-i18next";
import { newsIcons } from "../../data/newsIcons";


type Props = {
    item: NewsItem;
    onEdit: (item: NewsItem) => void;
    onDelete: (id: string) => void;
    onTogglePin: (item: NewsItem) => void;
};

export default function AdminNewsCard({ item, onEdit, onDelete, onTogglePin }: Props) {
    const { t, i18n } = useTranslation();
    const lang = (i18n.language === "ua" ? "uk" : i18n.language) as "uk" | "pl" | "ru" | "en";
    const title = item[`title_${lang}`] || item.title_uk;
    const content = item[`content_${lang}`] || item.content_uk;

    return (
        <div className="flex flex-col justify-between gap-4 rounded-2xl bg-white p-6 shadow-sm md:flex-row md:items-center">
            <div>
                <div className="mb-1 flex items-center gap-2 text-sm text-slate-500">
                    <span className="rounded-md bg-slate-100 px-2 py-0.5 font-medium uppercase text-slate-700">
                        {/*{item.news_type} */}
                        {t(`type_${item.news_type}`)}

                    </span>
                    <span>{item.news_date}</span>
                    {item.is_pinned && (
                        <span className="font-semibold text-amber-600">📌 {t("pinnedBadge")}</span>
                    )}
                </div>

                {/*<h3 className="text-lg font-bold text-slate-800">{item.title_uk}</h3>*/}
                <h3 className="flex items-center gap-2 text-lg font-bold text-slate-800">
                    <span>{newsIcons[item.news_type]}</span>
                    <span>{title}</span>
                </h3>

                <p className="line-clamp-2 text-sm text-slate-600">{content}</p>
            </div>

            <div className="flex shrink-0 gap-2">
                <button
                    onClick={() => onTogglePin(item)}
                    className="rounded-xl bg-amber-100 px-3 py-2 text-sm font-medium text-amber-800 hover:bg-amber-200"
                >
                    {item.is_pinned ?  t("unpin") : t("pin")}
                </button>

                <button
                    onClick={() => onEdit(item)}
                    className="rounded-xl bg-blue-100 px-3 py-2 text-sm font-medium text-blue-800 hover:bg-blue-200"
                >
                    {t("edit")}
                </button>

                <button
                    onClick={() => onDelete(item.id)}
                    className="rounded-xl bg-red-100 px-3 py-2 text-sm font-medium text-red-700 hover:bg-red-200"
                >
                    {t("delete")}
                </button>
            </div>
        </div>
    );
}
