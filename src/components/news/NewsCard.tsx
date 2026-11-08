import { Pin } from "lucide-react";
import { useTranslation } from "react-i18next";
import type { NewsItem } from "../../types/news_type";
import { newsIcons } from "../../data/newsIcons";
import { getLocalizedNews } from "../../utils/getLocalizedNews";

type Props = {
    item: NewsItem;
};

export default function NewsCard({ item }: Props) {
    const { i18n } = useTranslation();
    const localized = getLocalizedNews(item, i18n.language);
    const icon = newsIcons[item.news_type] || "📢";
    const isPinned = Boolean(item.is_pinned);

    return (
        <article
            className={`overflow-hidden rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl ${
                isPinned ? "border-l-8 border-[#ff6b00]" : ""
            }`}
        >
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-3">
                    <h2 className="text-2xl font-bold text-[#002b87] md:text-3xl">
                        {icon} {localized.title}
                    </h2>

                    {isPinned && (
                        <span className="flex items-center gap-1 rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-700">
                            <Pin size={14} />
                            PIN
                        </span>
                    )}
                </div>

                <time className="text-sm font-medium text-slate-500">
                    {item.news_date}
                </time>
            </div>

            <p className="whitespace-pre-line text-lg leading-relaxed text-slate-700">
                {localized.content}
            </p>
        </article>
    );
}
