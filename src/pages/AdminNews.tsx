import toast from "react-hot-toast";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import type { NewsItem } from "../types/news_type";
import {
    deleteNewsById,
    fetchAllNews,
    toggleNewsPin,
} from "../services/adminNewsService";
import AdminHeader from "../components/admin/AdminHeader";
import AdminNewsForm from "../components/admin/AdminNewsForm";
import AdminNewsList from "../components/admin/AdminNewsList";
import NewsCategoryFilter, { type FilterCategory } from "../components/news/NewsCategoryFilter";
import Pagination from "../components/common/Pagination";

const ADMIN_ITEMS_PER_PAGE = 2;    // pages

export default function AdminNews() {
    const { t } = useTranslation();
    const [news, setNews] = useState<NewsItem[]>([]);
    const [editingItem, setEditingItem] = useState<NewsItem | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<FilterCategory>("all");
    const [currentPage, setCurrentPage] = useState(1);

    const loadNews = useCallback(async () => {
        try {
            const data = await fetchAllNews();
            setNews(data);
        } catch (err) {
            const message = err instanceof Error ? err.message : "Failed to load news";
            toast.error(message);
        }
    }, []);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        void loadNews();
    }, [loadNews]);


    const filteredNews = useMemo(() => {
        if (selectedCategory === "all") return news;
        return news.filter((item) => item.news_type === selectedCategory);
    }, [news, selectedCategory]);

    const totalPages = Math.max(1, Math.ceil(filteredNews.length / ADMIN_ITEMS_PER_PAGE));
    const safePage = Math.min(currentPage, totalPages);

    const paginatedNews = useMemo(() => {
        const start = (safePage - 1) * ADMIN_ITEMS_PER_PAGE;
        return filteredNews.slice(start, start + ADMIN_ITEMS_PER_PAGE);
    }, [filteredNews, safePage]);

    function handleCategoryChange(category: FilterCategory) {
        setSelectedCategory(category);
        setCurrentPage(1);
    }

    async function handleDelete(id: string) {
        if (!confirm(t("confirmDelete"))) return;
        try {
            await deleteNewsById(id);
            toast.success(t("newsDeleted"));
            await loadNews();
        } catch (err) {
            const message = err instanceof Error ? err.message : "Error deleting news";
            toast.error(message);
        }
    }

    async function handleTogglePin(item: NewsItem) {
        try {
            await toggleNewsPin(item.id, item.is_pinned);
            toast.success(item.is_pinned ? "📌 News unpinned" : "📌 News pinned");
            await loadNews();
        } catch (err) {
            const message = err instanceof Error ? err.message : "Error updating pin";
            toast.error(message);
        }
    }

    function handleEdit(item: NewsItem) {
        setEditingItem(item);
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return (
        <div className="min-h-screen bg-slate-100">
            <div className="mx-auto max-w-6xl px-4 py-8">
                <AdminHeader />

                <AdminNewsForm
                    key={editingItem?.id ?? "new"}
                    editingItem={editingItem}
                    onCancelEdit={() => setEditingItem(null)}
                    onSaved={loadNews}
                />

                <NewsCategoryFilter
                    selected={selectedCategory}
                    onChange={handleCategoryChange}
                />

                <AdminNewsList
                    news={paginatedNews}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                    onTogglePin={handleTogglePin}
                />

                <Pagination
                    currentPage={safePage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                />
            </div>
        </div>
    );
}
