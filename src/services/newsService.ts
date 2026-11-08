import { supabase }
    from "./supabase";
import type {NewsItem} from "../types/news_type.ts";

export async function getNews() {

    const { data, error } =
        await supabase
            .from("news")
            .select("*")
            .eq("published", true)
            .order(
                "created_at",
                { ascending: false }
            );

    if (error) {
        console.error(error);
        return [];
    }

    return data  as NewsItem[];
}
