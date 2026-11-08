// import {useEffect, useState,} from "react";
//
// import { supabase } from "../services/supabase";
//
// import type {NewsItem,} from "../types/news_type";
//
// import toast from "react-hot-toast";
//
// import {useTranslation
// } from "react-i18next";
//
// export default function AdminNews() {
//     const { t } = useTranslation();
//
//     const [news, setNews] = useState<NewsItem[]>([]);
//
//     const [editingId, setEditingId] = useState<string | null>(null);
//
//
//     const [titleUk, setTitleUk] = useState("");
//
//     const [contentUk, setContentUk] = useState("");
//
//     const [titlePl, setTitlePl] = useState("");
//
//     const [contentPl, setContentPl] = useState("");
//
//     const [titleRu, setTitleRu] = useState("");
//
//     const [contentRu, setContentRu] = useState("");
//
//     const [titleEn, setTitleEn] = useState("");
//
//     const [contentEn, setContentEn] = useState("");
//
//     const [newsType, setNewsType] = useState("important");
//
//     const [isPinned, setIsPinned] = useState(false);
//
//     const [newsDate, setNewsDate] =
//         useState(
//             new Date()
//                 .toISOString()
//                 .split("T")[0]
//         );
//
//     useEffect(() => {
//         loadNews();
//     }, []);
//
//     async function loadNews() {
//
//         const {data, error,} =
//             await supabase
//                 .from("news")
//                 .select("*")
//                 .order(
//                     "news_date",
//                     {
//                         ascending: false,
//                     }
//                 );
//
//         if (!error && data) {
//             setNews(
//                 data as NewsItem[]
//             );
//         }
//     }
//
//     function clearForm() {
//         setEditingId(null);
//
//         setTitleUk("");
//         setContentUk("");
//
//         setTitlePl("");
//         setContentPl("");
//
//         setTitleRu("");
//         setContentRu("");
//
//         setTitleEn("");
//         setContentEn("");
//
//         setIsPinned(false);
//     }
//
//     async function handleSave() {
//
//         if (
//             !titleUk ||
//             !titlePl ||
//             !titleRu ||
//             !titleEn
//         ) {
//             toast.error(
//                 "⚠ Fill all titles"
//             );
//             return;
//         }
//
//         const payload = {
//
//             title_uk: titleUk,
//             title_pl: titlePl,
//             title_ru: titleRu,
//             title_en: titleEn,
//
//             content_uk: contentUk,
//             content_pl: contentPl,
//             content_ru: contentRu,
//             content_en: contentEn,
//
//             news_type: newsType,
//             news_date: newsDate,
//
//             is_pinned: isPinned,
//             published: true,
//         };
//
//         let error;
//
//         if (editingId) {
//             const result =
//                 await supabase
//                     .from("news")
//                     .update(payload)
//                     .eq(
//                         "id",
//                         editingId
//                     );
//
//             error = result.error;
//         } else {
//             const result =
//                 await supabase
//                     .from("news")
//                     .insert([
//                         payload
//                     ]);
//             error = result.error;
//         }
//
//         if (error) {
//             toast.error(error.message);
//             return;
//         }
//
//         if (!error) {
//             toast.success(
//                 editingId
//                     ? "✅ News updated"
//                     : "✅ News published"
//             );
//
//             setEditingId(null);
//             clearForm();
//
//             window.scrollTo({
//                 top: 0,
//                 behavior: "smooth",
//             });
//
//             await loadNews();
//         }
//     }
//
//     async function handleDelete(id: string) {
//         const confirmed =
//             confirm(
//                 "Delete news?"
//             );
//
//         if (!confirmed) {return;}
//
//         await supabase
//             .from("news")
//             .delete()
//             .eq(
//                 "id",
//                 id
//             );
//
//         toast.success(t("newsDeleted"));
//
//         await loadNews();
//     }
//
//     async function togglePin(item: NewsItem) {
//         const { error } =
//             await supabase
//                 .from("news")
//                 .update({is_pinned: !item.is_pinned,})
//                 .eq("id", item.id);
//
//         if (error) {
//             toast.error(error.message);
//             return;
//         }
//
//         toast.success(
//             item.is_pinned
//                 ? "📌 News unpinned"
//                 : "📌 News pinned"
//         );
//
//         await loadNews();
//     }
//
//     function handleEdit(
//         item: NewsItem
//     ) {
//
//         setEditingId(item.id);
//
//         setNewsType(item.news_type);
//
//         setNewsDate(item.news_date);
//
//         setIsPinned(item.is_pinned);
//
//         setTitleUk(item.title_uk);
//
//         setContentUk(item.content_uk);
//
//         setTitlePl(item.title_pl);
//
//         setContentPl(item.content_pl);
//
//         setTitleRu(item.title_ru);
//
//         setContentRu(item.content_ru);
//
//         setTitleEn(item.title_en);
//
//         setContentEn(item.content_en);
//
//         window.scrollTo({
//             top: 0,
//             behavior: "smooth",
//         });
//     }
//
//     async function logout() {
//
//         await supabase.auth.signOut();
//
//         toast.success("👋 Logged out");
//
//         setTimeout(() => {
//             window.location.href =
//                 "/admin";
//         }, 500);
//     }
//
//     return (
//         <div
//             className="min-h-screen bg-slate-100">
//             <div
//                 className="mx-auto max-w-6xl px-4 py-8 " >
//                 <div
//                     className="mb-8   flex  items-center  justify-between " >
//                     <h1
//                         className="text-4xl    font-bold   text-[#002b87] ">
//                          {t("adminNews")}
//                     </h1>
//
//                     <button
//                         onClick={logout}
//                         className="rounded-xl bg-red-500 px-5   py-3 text-white     transition   hover:bg-red-600" >
//                         {t("logout")}
//                     </button>
//                 </div>
//
//                 <div
//                     className="  rounded-3xl bg-white p-8       shadow-lg  " >
//                     {editingId && (
//                             <div className=" mb-4   rounded-xl bg-blue-100 p-4  font-medium text-blue-700  ">
//                                 ✏️ Editing existing news
//                             </div>
//                         )
//                     }
//                     <div
//                         className="  grid    gap-4 " >
//                         <select
//                             value={newsType}
//                             onChange={e => setNewsType(e.target.value)}
//                             className="rounded-xl   border  p-3 " >
//                             <option value="important">
//                                 Important
//                             </option>
//
//                             <option value="transport">
//                                 Transport
//                             </option>
//
//                             <option value="vacation">
//                                 Vacation
//                             </option>
//
//                             <option value="absence">
//                                 Absence
//                             </option>
//
//                             <option value="contact">
//                                 Contact
//                             </option>
//
//                             <option value="schedule">
//                                 Schedule
//                             </option>
//                         </select>
//
//                         <input
//                             type="date"
//                             value={
//                                 newsDate
//                             }
//                             onChange={
//                                 e =>
//                                     setNewsDate(
//                                         e.target.value
//                                     )
//                             }
//                             className="    rounded-xl     border     p-3 "
//                         />
//                         <input
//                             placeholder="UA title"
//                             value={titleUk}
//                             onChange={e => setTitleUk(e.target.value)}
//                             className="  rounded-xl   border   p-3   "   />
//
//                         <textarea
//                             rows={5}
//                             placeholder="UA content"
//                             value={contentUk}
//                             onChange={e => setContentUk(e.target.value)}
//                             className="   rounded-xl  border   p-3  "
//                         />
//
//                         <input
//                             placeholder="PL title"
//                             value={titlePl}
//                             onChange={e =>
//                                     setTitlePl(e.target.value)
//                             }
//                             className=" rounded-xl border p-3"
//                         />
//
//                         <textarea
//                             rows={5}
//                             value={contentPl}
//                             onChange={
//                                 e => setContentPl(e.target.value)
//                             }
//                             className=" rounded-xl border p-3"
//                         />
//
//                         <input
//                             placeholder="RU title"
//                             value={titleRu}
//                             onChange={e => setTitleRu(e.target.value)
//                             }
//                             className="  rounded-xl  border p-3 "
//                         />
//
//                         <textarea
//                             rows={5}
//                             value={contentRu}
//                             onChange={e => setContentRu(e.target.value)}
//                             className="rounded-xl  border  p-3  "
//                         />
//
//                         <input
//                             placeholder="EN title"
//                             value={titleEn}
//                             onChange={e => setTitleEn(e.target.value)}
//                             className=" rounded-xl    border p-3 " />
//
//                         <textarea rows={5} value={contentEn}
//                             onChange={e => setContentEn(e.target.value)}
//                             className="rounded-xl  border  p-3 "
//                         />
//
//                         <label className=" flex   items-center  gap-3 " >
//                             <input
//                                 type="checkbox"
//                                 checked={isPinned}
//                                 onChange={(e) =>
//                                     setIsPinned(
//                                         e.target.checked
//                                     )
//                                 }
//                             />
//                             📌 Pin news
//                         </label>
//
//                         <button onClick={handleSave}
//                             className=" rounded-xl   bg-[#002b87]    py-4   text-white"  >
//                             {
//                                 editingId ? "Update News" : "Publish"
//                             }
//                         </button>
//                     </div>
//                 </div>
//
//                 <h2 className="mt-12  mb-6   text-3xl font-bold text-[#002b87]">
//                     {t("newsList")}
//                 </h2>
//
//                 <div className=" space-y-4 ">
//                     {news.map(
//                         item => (
//
//                             <div key={item.id}
//                                 className=" rounded-2xl  bg-white  p-6  shadow" >
//                                 <div className=" flex items-center justify-between ">
//                                     <div>
//
//                                         <h3 className="text-xl   font-bold">
//                                             {item.title_uk}
//                                         </h3>
//
//                                         <p className="text-sm  text-gray-500">
//                                             {item.news_date}
//                                         </p>
//
//                                     </div>
//
//                                     {item.is_pinned && (
//                                         <div>
//                                             📌
//                                         </div>
//                                     )}
//                                 </div>
//
//                                 <div className="mt-4  flex gap-3 ">
//                                     <button
//                                         onClick={() => togglePin(item)}
//                                         className=" rounded-lg  bg-orange-500 px-4 py-2 text-white">
//                                         {item.is_pinned ? "Unpin" : "Pin"}
//                                     </button>
//
//                                     <button
//                                         onClick={() => handleEdit(item)}
//                                         className=" rounded-lg bg-blue-500 px-4  py-2  text-white "  >
//                                         Edit
//                                     </button>
//
//                                     <button
//                                         onClick={() => handleDelete(item.id)}
//                                         className="rounded-lg  bg-red-500  px-4  py-2 text-white  " >
//                                         Delete
//                                     </button>
//                                 </div>
//                             </div>
//                         )
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// }

// import AdminHeader
//     from "../components/admin/AdminHeader";
//
// import AdminNewsForm
//     from "../components/admin/AdminNewsForm";
//
// import AdminNewsList
//     from "../components/admin/AdminNewsList";
//
// export default function AdminNews() {
//
//     return (
//
//         <div className="min-h-screen bg-slate-100">
//
//             <div
//                 className="mx-auto max-w-6xl  px-4   py-8 "  >
//
//                 <AdminHeader />
//
//                 <AdminNewsForm />
//
//                 <AdminNewsList />
//
//             </div>
//
//         </div>
//
//     );
// }

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
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

export default function AdminNews() {
    const { t } = useTranslation();
    const [news, setNews] = useState<NewsItem[]>([]);
    const [editingItem, setEditingItem] = useState<NewsItem | null>(null);

    useEffect(() => {
        void loadNews();
    }, []);

    async function loadNews() {
        try {
            const data = await fetchAllNews();
            setNews(data);
        } catch (err) {
            const message = err instanceof Error ? err.message : "Failed to load news";
            toast.error(message);
        }

    }

    async function handleDelete(id: string) {
        if (!confirm("Delete news?")) return;
        try {
            await deleteNewsById(id);
            toast.success(t("newsDeleted"));
            await loadNews();
        } catch (err) {
            const message = err instanceof Error ? err.message : "Failed to delete news";
            toast.error(message);
        }

    }

    async function handleTogglePin(item: NewsItem) {
        try {
            await toggleNewsPin(item.id, item.is_pinned);
            toast.success(item.is_pinned ? "📌 News unpinned" : "📌 News pinned");
            await loadNews();
        } catch (err) {
            const message = err instanceof Error ? err.message : "Failed to pin news";
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

                <AdminNewsList
                    news={news}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                    onTogglePin={handleTogglePin}
                />
            </div>
        </div>
    );
}
