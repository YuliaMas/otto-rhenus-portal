import type {
    NewsItem
} from "../types/news_type.ts";

export function getLocalizedNews(
    item: NewsItem,
    language: string
) {

    switch (language) {

        case "pl":

            return {
                title:
                item.title_pl,

                content:
                item.content_pl,
            };

        case "ru":

            return {
                title:
                item.title_ru,

                content:
                item.content_ru,
            };

        case "en":

            return {
                title:
                item.title_en,

                content:
                item.content_en,
            };

        default:

            return {
                title:
                item.title_uk,

                content:
                item.content_uk,
            };
    }
}
