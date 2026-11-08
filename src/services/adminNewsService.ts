import { supabase } from "./supabase";
import type { NewsItem, NewsType } from "../types/news_type";

export type NewsPayload = {
    title_uk: string;
    title_pl: string;
    title_ru: string;
    title_en: string;
    content_uk: string;
    content_pl: string;
    content_ru: string;
    content_en: string;
    news_type: NewsType;
    news_date: string;
    is_pinned: boolean;
    published: boolean;
};

export async function fetchAllNews(): Promise<NewsItem[]> {
    const { data, error } = await supabase
        .from("news")
        .select("*")
        .order("news_date", { ascending: false });

    if (error) throw error;
    return (data as NewsItem[]) || [];
}

export async function createNews(payload: NewsPayload) {
    const { error } = await supabase.from("news").insert([payload]);
    if (error) throw error;
}

export async function updateNews(id: string, payload: NewsPayload) {
    const { error } = await supabase.from("news").update(payload).eq("id", id);
    if (error) throw error;
}

export async function deleteNewsById(id: string) {
    const { error } = await supabase.from("news").delete().eq("id", id);
    if (error) throw error;
}

export async function toggleNewsPin(id: string, currentPinned: boolean) {
    const { error } = await supabase
        .from("news")
        .update({ is_pinned: !currentPinned })
        .eq("id", id);

    if (error) throw error;
}

