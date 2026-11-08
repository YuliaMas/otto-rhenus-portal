import { useState } from "react";
import toast from "react-hot-toast";
import type { NewsItem, NewsType } from "../../types/news_type";
import { createNews, updateNews } from "../../services/adminNewsService";
import LanguageTabs, { type LangCode } from "./LanguageTabs";
import {useTranslation} from "react-i18next";
import { newsIcons } from "../../data/newsIcons";

type Props = {
    editingItem: NewsItem | null;
    onCancelEdit: () => void;
    onSaved: () => Promise<void>;
};

export default function AdminNewsForm({ editingItem, onCancelEdit, onSaved }: Props) {
    const [activeLang, setActiveLang] = useState<LangCode>("uk");

    const { t } = useTranslation();

    const [titles, setTitles] = useState<Record<LangCode, string>>({
        uk: editingItem?.title_uk ?? "",
        pl: editingItem?.title_pl ?? "",
        ru: editingItem?.title_ru ?? "",
        en: editingItem?.title_en ?? "",
    });

    const [contents, setContents] = useState<Record<LangCode, string>>({
        uk: editingItem?.content_uk ?? "",
        pl: editingItem?.content_pl ?? "",
        ru: editingItem?.content_ru ?? "",
        en: editingItem?.content_en ?? "",
    });

    const [newsType, setNewsType] = useState<NewsType>(editingItem?.news_type ?? "important");
    const [isPinned, setIsPinned] = useState(editingItem?.is_pinned ?? false);
    const [newsDate, setNewsDate] = useState(
        editingItem?.news_date ?? new Date().toISOString().split("T")[0]
    );
    const [saving, setSaving] = useState(false);

    function resetForm() {
        setTitles({ uk: "", pl: "", ru: "", en: "" });
        setContents({ uk: "", pl: "", ru: "", en: "" });
        setNewsType("important");
        setIsPinned(false);
        setNewsDate(new Date().toISOString().split("T")[0]);
    }

    async function handleSubmit() {
        if (!titles.uk || !titles.pl || !titles.ru || !titles.en) {
            toast.error("⚠ Fill all titles (UK, PL, RU, EN)");
            return;
        }

        setSaving(true);
        try {
            const payload = {
                title_uk: titles.uk,
                title_pl: titles.pl,
                title_ru: titles.ru,
                title_en: titles.en,
                content_uk: contents.uk,
                content_pl: contents.pl,
                content_ru: contents.ru,
                content_en: contents.en,
                news_type: newsType,
                news_date: newsDate,
                is_pinned: isPinned,
                published: true,
            };

            if (editingItem) {
                await updateNews(editingItem.id, payload);
                toast.success("✅ News updated");
                onCancelEdit();
            } else {
                await createNews(payload);
                toast.success("✅ News published");
                resetForm();
            }

            await onSaved();
        } catch (err) {
            const message = err instanceof Error ? err.message : "Error saving news";
            toast.error(message);
        } finally {
            setSaving(false);
        }
    }

    return (
        <div className="mb-8 rounded-3xl bg-white p-8 shadow-lg">
            {editingItem && (
                <div className="mb-4 flex items-center justify-between rounded-xl bg-blue-100 p-4 font-medium text-blue-700">
                    <span>✏️ Editing existing news</span>
                    <button
                        type="button"
                        onClick={onCancelEdit}
                        className="text-sm underline hover:text-blue-900"
                    >
                        Cancel
                    </button>
                </div>
            )}

            <div className="mb-6 grid gap-4 md:grid-cols-3">
                <select
                    value={newsType}
                    onChange={(e) => setNewsType(e.target.value as NewsType)}
                    className="rounded-xl border p-3"
                >
                    <option value="important">{newsIcons.important} {t("type_important")}</option>
                    <option value="transport">{newsIcons.transport} {t("type_transport")}</option>
                    <option value="vacation">{newsIcons.vacation} {t("type_vacation")}</option>
                    <option value="absence">{newsIcons.absence} {t("type_absence")}</option>
                    <option value="contact">{newsIcons.contact} {t("type_contact")}</option>
                    <option value="schedule">{newsIcons.schedule} {t("type_schedule")}</option>
                    <option value="other">{newsIcons.other} {t("type_other")}</option>
                </select>

                <input
                    type="date"
                    value={newsDate}
                    onChange={(e) => setNewsDate(e.target.value)}
                    className="rounded-xl border p-3"
                />

                <label className="flex cursor-pointer items-center gap-2 rounded-xl border p-3">
                    <input
                        type="checkbox"
                        checked={isPinned}
                        onChange={(e) => setIsPinned(e.target.checked)}
                        className="h-5 w-5"
                    />
                    <span className="font-medium">📌 {t("pinNews")}</span>
                </label>
            </div>

            <LanguageTabs active={activeLang} onChange={setActiveLang} />

            <div className="grid gap-4">
                <input
                    type="text"
                    placeholder={`${t("titlePlaceholder")} (${activeLang.toUpperCase()})`}
                    value={titles[activeLang]}
                    onChange={(e) =>
                        setTitles({ ...titles, [activeLang]: e.target.value })
                    }
                    className="rounded-xl border p-3"
                />

                <textarea
                    rows={4}
                    placeholder={`${t("contentPlaceholder")} (${activeLang.toUpperCase()})`}
                    value={contents[activeLang]}
                    onChange={(e) =>
                        setContents({ ...contents, [activeLang]: e.target.value })
                    }
                    className="rounded-xl border p-3"
                />
            </div>

            <button
                type="button"
                disabled={saving}
                onClick={handleSubmit}
                className="mt-6 rounded-xl bg-[#002b87] px-6 py-3 font-semibold text-white transition hover:bg-blue-900 disabled:opacity-50"
            >
                {saving ? t("saving") : editingItem ? t("updateNews") : t("publishNews")}

            </button>
        </div>
    );
}
