import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Megaphone } from "lucide-react";
import { useTranslation } from "react-i18next";
import { getNews } from "../services/newsService";
import type { NewsItem } from "../types/news_type";
import NewsCard from "../components/news/NewsCard";
import NewsSkeleton from "../components/news/NewsSkeleton";
import Pagination from "../components/common/Pagination";
import NewsCategoryFilter, { type FilterCategory } from "../components/news/NewsCategoryFilter";

const CACHE_KEY = "cached_news";
const ITEMS_PER_PAGE = 2; // News on one page

export default function News() {
    const { t } = useTranslation();
    const [selectedCategory, setSelectedCategory] = useState<FilterCategory>("all");
    const [searchParams, setSearchParams] = useSearchParams();

    const [news, setNews] = useState<NewsItem[]>(() => {
        try {
            const cached = localStorage.getItem(CACHE_KEY);
            return cached ? (JSON.parse(cached) as NewsItem[]) : [];
        } catch {
            return [];
        }
    });


    const [loading, setLoading] = useState(news.length === 0);

    useEffect(() => {
        void getNews()
            .then((data) => {
                setNews(data);
                localStorage.setItem(CACHE_KEY, JSON.stringify(data));
            })
            .finally(() => setLoading(false));
    }, []);



    const sortedNews = useMemo(() => {
        return [...news].sort((a, b) => {
            const pinnedA = Boolean(a.is_pinned);
            const pinnedB = Boolean(b.is_pinned);

            if (pinnedA && !pinnedB) return -1;
            if (!pinnedA && pinnedB) return 1;

            return (
                new Date(b.created_at).getTime() -
                new Date(a.created_at).getTime()
            );
        });
    }, [news]);

    const filteredNews = useMemo(() => {
        if (selectedCategory === "all") return sortedNews;
        return sortedNews.filter((item) => item.news_type === selectedCategory);
    }, [sortedNews, selectedCategory]);

    // Pages
    const totalPages = Math.max(1, Math.ceil(filteredNews.length / ITEMS_PER_PAGE));
    const rawPage = Number(searchParams.get("page")) || 1;
    const currentPage = Math.min(Math.max(1, rawPage), totalPages);

    const paginatedNews = useMemo(() => {
        const start = (currentPage - 1) * ITEMS_PER_PAGE;
        return filteredNews.slice(start, start + ITEMS_PER_PAGE);
    }, [filteredNews, currentPage]);

    function handlePageChange(page: number) {
        if (page === 1) {
            searchParams.delete("page");
            setSearchParams(searchParams);
        } else {
            setSearchParams({ page: String(page) });
        }

        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function handleCategoryChange(category: FilterCategory) {
        setSelectedCategory(category);
        if (searchParams.has("page")) {
            searchParams.delete("page");
            setSearchParams(searchParams);
        }
    }


    return (
        <div className="min-h-screen bg-slate-100">
            <div className="mx-auto max-w-7xl px-4 py-8">
                <h1 className="mb-8 flex items-center gap-3 text-4xl font-bold text-[#002b87] md:text-5xl">
                    <Megaphone size={42} />
                    {t("news")}
                </h1>

                <NewsCategoryFilter selected={selectedCategory} onChange={handleCategoryChange} />

                {loading ? (
                    <NewsSkeleton />
                ) : filteredNews.length === 0 ? (
                    <div className="rounded-3xl bg-white p-10 text-center text-slate-500 shadow">
                        {t("noNews")}
                    </div>
                ) : (
                    <>
                        <div className="space-y-6">
                            {paginatedNews.map((item) => (
                                <NewsCard key={item.id} item={item} />
                            ))}
                        </div>

                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={handlePageChange}
                        />
                    </>
                )}
            </div>
        </div>
    );
}
