import type { NewsItem } from "../../types/news_type";
import AdminNewsCard from "./AdminNewsCard";

type Props = {
    news: NewsItem[];
    onEdit: (item: NewsItem) => void;
    onDelete: (id: string) => void;
    onTogglePin: (item: NewsItem) => void;
};

export default function AdminNewsList({ news, onEdit, onDelete, onTogglePin }: Props) {
    if (news.length === 0) {
        return <p className="text-center text-slate-500">No news found.</p>;
    }

    return (
        <div className="grid gap-4">
            {news.map((item) => (
                <AdminNewsCard
                    key={item.id}
                    item={item}
                    onEdit={onEdit}
                    onDelete={onDelete}
                    onTogglePin={onTogglePin}
                />
            ))}
        </div>
    );
}
