// import { news } from "../data/news";
// import {useTranslation} from "react-i18next";
//
//
// export default function News() {
//     const { t } = useTranslation();
//     return (
//         <div className="min-h-screen bg-slate-100">
//
//             <div className="mx-auto max-w-7xl px-4 py-8">
//
//                 <h1 className="mb-8 text-4xl font-bold text-[#002b87]">
//                     📢 {t("news")}
//                 </h1>
//
//                 <div className="space-y-6">
//
//                     {news.map((item) => (
//
//                         <article
//                             key={item.id}
//                             className="
//                                     rounded-2xl
//                                     bg-white
//                                     p-6
//                                     shadow
//                                     transition-all
//                                     duration-300
//                                     hover:-translate-y-1
//                                     hover:shadow-xl
//                                 "
//                         >
//
//                             <div
//                                 className="
//                                             mb-3
//                                             flex
//                                             items-center
//                                             justify-between
//                                         "
//                             >
//
//                                 <h2
//                                     className="
//                                             text-xl
//                                             font-bold
//                                             text-[#002b87]
//                                         "
//                                 >
//                                     {item.title}
//                                 </h2>
//
//                                 <span
//                                     className="
//                                             rounded-full
//                                             bg-orange-100
//                                             px-3
//                                             py-1
//                                             text-sm
//                                             font-medium
//                                             text-orange-700
//                                                     "
//                                             >
//                                     {item.date}
//                                 </span>
//                             </div>
//
//                             <p
//                                 className="
//                                         whitespace-pre-line
//                                         leading-7
//                                         text-slate-700
//                                     "
//                             >
//                                 {item.content}
//                             </p>
//                         </article>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }
//
// import {
//     useEffect,
//     useState
// } from "react";
//
// import {
//     useTranslation
// } from "react-i18next";
//
// import {
//     Megaphone
// } from "lucide-react";
//
// import {
//     getNews
// } from "../services/newsService";
//
// import {
//     getLocalizedNews
// } from "../utils/getLocalizedNews";
//
// import type {
//     NewsItem
// } from "../types/news";
//
// export default function News() {
//
//     const { t, i18n } =
//         useTranslation();
//
//     const [news, setNews] =
//         useState<NewsItem[]>([]);
//
//     const [loading, setLoading] =
//         useState(true);
//
//     useEffect(() => {
//
//         getNews()
//             .then(setNews)
//             .finally(() =>
//                 setLoading(false)
//             );
//
//     }, []);
//
//     if (loading) {
//
//         return (
//
//             <div
//                 className="
//                     flex
//                     justify-center
//
//                     py-16
//                 "
//             >
//                 Loading...
//             </div>
//
//         );
//     }
//
//     return (
//
//         <div
//             className="
//                 min-h-screen
//
//                 bg-slate-100
//
//                 px-4
//                 py-8
//             "
//         >
//
//             <div
//                 className="
//                     mx-auto
//                     max-w-7xl
//                 "
//             >
//
//                 <h1
//                     className="
//                         mb-8
//
//                         flex
//                         items-center
//                         gap-4
//
//                         text-5xl
//                         font-bold
//
//                         text-[#002b87]
//                     "
//                 >
//                     <Megaphone
//                         size={42}
//                     />
//                     {t("newsTitle")}
//                 </h1>
//
//                 <div
//                     className="
//                         space-y-8
//                     "
//                 >
//
//                     {news.map(item => {
//
//                         const localized =
//                             getLocalizedNews(
//                                 item,
//                                 i18n.language
//                             );
//
//                         return (
//
//                             <article
//                                 key={item.id}
//                                 className="
//                                     overflow-hidden
//
//                                     rounded-3xl
//
//                                     bg-white
//
//                                     p-8
//
//                                     shadow-lg
//
//                                     transition-all
//                                     duration-300
//
//                                     hover:shadow-xl
//                                 "
//                             >
//
//                                 <div
//                                     className="
//                                         mb-6
//
//                                         flex
//                                         flex-wrap
//
//                                         items-center
//                                         justify-between
//
//                                         gap-4
//                                     "
//                                 >
//
//                                     <h2
//                                         className="
//                                             text-3xl
//                                             font-bold
//
//                                             text-[#002b87]
//                                         "
//                                     >
//                                         {
//                                             localized.title
//                                         }
//                                     </h2>
//
//                                     <div
//                                         className="
//                                             rounded-full
//
//                                             bg-orange-100
//
//                                             px-5
//                                             py-2
//
//                                             text-lg
//                                             font-medium
//
//                                             text-orange-700
//                                         "
//                                     >
//                                         {
//                                             new Date(
//                                                 item.created_at
//                                             )
//                                                 .toLocaleDateString()
//                                         }
//                                     </div>
//
//                                 </div>
//
//                                 <div
//                                     className="
//                                         whitespace-pre-line
//
//                                         text-xl
//
//                                         leading-10
//
//                                         text-slate-700
//                                     "
//                                 >
//                                     {
//                                         localized.content
//                                     }
//                                 </div>
//
//                             </article>
//
//                         );
//                     })}
//
//                 </div>
//
//             </div>
//
//         </div>
//
//     );
// }

import {
    useEffect,
    useMemo,
    useState,
} from "react";

import {
    Megaphone,
    Pin,
} from "lucide-react";

import {
    useTranslation,
} from "react-i18next";

import {
    getNews,
} from "../services/newsService";

import {
    getLocalizedNews,
} from "../utils/getLocalizedNews";

import type {
    NewsItem,
} from "../types/news_type.ts";

export default function News() {
    const icons = {
        transport: "🚌",
        vacation: "🏖️",
        absence: "❌",
        contact: "📞",
        important: "📢",
        schedule: "📋",
        other: "ℹ️",
    };

    const {
        t,
        i18n,
    } = useTranslation();

    const [news, setNews] =
        useState<NewsItem[]>([]);

    const [loading, setLoading] =
        useState(true);

    useEffect(() => {

        getNews()
            .then(setNews)
            .finally(() =>
                setLoading(false)
            );

    }, []);

    const sortedNews =
        useMemo(() => {

            return [...news].sort(
                (a, b) => {

                    const pinnedA =
                        Boolean(
                            a.is_pinned
                        );

                    const pinnedB =
                        Boolean(
                            b.is_pinned
                        );

                    if (
                        pinnedA &&
                        !pinnedB
                    ) {
                        return -1;
                    }

                    if (
                        !pinnedA &&
                        pinnedB
                    ) {
                        return 1;
                    }

                    return (
                        new Date(
                            b.created_at
                        ).getTime() -
                        new Date(
                            a.created_at
                        ).getTime()
                    );
                }
            );

        }, [news]);

    if (loading) {
        return (
            <div
                className="
                    flex
                    justify-center
                    py-16
                    text-xl
                "
            >
                Loading...
            </div>
        );
    }

    return (

        <div
            className="
                min-h-screen
                bg-slate-100
            "
        >

            <div
                className="
                    mx-auto
                    max-w-7xl
                    px-4
                    py-8
                "
            >

                <h1
                    className="
                        mb-8

                        flex
                        items-center
                        gap-3

                        text-5xl
                        font-bold

                        text-[#002b87]
                    "
                >
                    <Megaphone
                        size={42}
                    />

                    {t("news")}
                </h1>

                {sortedNews.length === 0 && (

                    <div
                        className="
                            rounded-3xl
                            bg-white
                            p-10
                            text-center
                            text-slate-500
                            shadow
                        "
                    >
                        No news found
                    </div>

                )}

                <div
                    className="
                        space-y-6
                    "
                >

                    {sortedNews.map(
                        (item) => {

                            const localized =
                                getLocalizedNews(
                                    item,
                                    i18n.language
                                );

                            const icon =
                                icons[
                                    item.news_type as keyof typeof icons
                                    ] || "📢";

                            const isPinned =
                                Boolean(
                                    item.is_pinned
                                );

                            return (

                                <article
                                    key={
                                        item.id
                                    }
                                    className={`
                                        overflow-hidden

                                        rounded-3xl

                                        bg-white

                                        p-8

                                        shadow-lg

                                        transition-all
                                        duration-300

                                        hover:shadow-xl

                                        ${
                                        isPinned
                                            ? "border-l-8 border-[#ff6b00]"
                                            : ""
                                    }
                                    `}
                                >

                                    <div
                                        className="
                                            mb-6

                                            flex
                                            flex-wrap

                                            items-center
                                            justify-between

                                            gap-4
                                        "
                                    >

                                        <div
                                            className="
                                                flex
                                                items-center
                                                gap-3
                                            "
                                        >

                                            <h2
                                                className="
                                                    text-3xl
                                                    font-bold

                                                    text-[#002b87]
                                                "
                                            >
                                                {icon}{" "}
                                                {
                                                    localized.title
                                                }
                                            </h2>

                                            {isPinned && (

                                                <span
                                                    className="
                                                        flex
                                                        items-center
                                                        gap-1

                                                        rounded-full

                                                        bg-orange-100

                                                        px-3
                                                        py-1

                                                        text-sm

                                                        font-medium

                                                        text-orange-700
                                                    "
                                                >
                                                    <Pin
                                                        size={
                                                            14
                                                        }
                                                    />
                                                    PIN
                                                </span>

                                            )}

                                        </div>

                                        <span
                                            className="
                                                rounded-full

                                                bg-orange-100

                                                px-4
                                                py-2

                                                text-sm
                                                font-medium

                                                text-orange-700
                                            "
                                        >
                                            {
                                                new Date(
                                                    item.news_date ||
                                                    item.created_at
                                                )
                                                    .toLocaleDateString()
                                            }
                                        </span>

                                    </div>

                                    <div
                                        className="
                                            whitespace-pre-line

                                            leading-8

                                            text-slate-700
                                        "
                                    >
                                        {
                                            localized.content
                                        }
                                    </div>

                                </article>

                            );
                        }
                    )}

                </div>

            </div>

        </div>
    );
}
