// export type NewsItem = {
//     id: string;
//
//     created_at: string;
//
//     news_date?: string;
//
//     news_type?: string;
//
//     is_pinned?: boolean;
//
//     icon?: string;
//
//     published: boolean;
//
//     title_uk: string;
//     title_pl: string;
//     title_ru: string;
//     title_en: string;
//
//     content_uk: string;
//     content_pl: string;
//     content_ru: string;
//     content_en: string;
// };

export type NewsType =
    | "transport"
    | "vacation"
    | "absence"
    | "contact"
    | "important"
    | "schedule"
    | "other";

export type NewsItem = {
    id: string;

    created_at: string;

    news_date: string;

    news_type: NewsType;

    is_pinned: boolean;

    published: boolean;

    title_uk: string;
    title_pl: string;
    title_ru: string;
    title_en: string;

    content_uk: string;
    content_pl: string;
    content_ru: string;
    content_en: string;
};
