import {useEffect, useState} from "react";

import {getNews} from "../services/newsService";

import type {NewsItem} from "../types/news_type.ts";

export function useNews() {

    const [news, setNews] =
        useState<NewsItem[]>([]);

    const [loading, setLoading] =
        useState(true);

    useEffect(() => {

        getNews()
            .then(data => {
                setNews(data);
            })
            .finally(() => {
                setLoading(false);
            });

    }, []);

    return {
        news,
        loading
    };
}
