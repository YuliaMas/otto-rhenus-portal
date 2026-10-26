import { news } from "../data/news";
import {useTranslation} from "react-i18next";


export default function News() {
    const { t } = useTranslation();
    return (
        <div className="min-h-screen bg-slate-100">

            <div className="mx-auto max-w-7xl px-4 py-8">

                <h1 className="mb-8 text-4xl font-bold text-[#002b87]">
                    📢 {t("news")}
                </h1>

                <div className="space-y-6">

                    {news.map((item) => (

                        <article
                            key={item.id}
                            className="
                                    rounded-2xl
                                    bg-white
                                    p-6
                                    shadow
                                    transition-all
                                    duration-300
                                    hover:-translate-y-1
                                    hover:shadow-xl
                                "
                        >

                            <div
                                className="
                                            mb-3
                                            flex
                                            items-center
                                            justify-between
                                        "
                            >

                                <h2
                                    className="
                                            text-xl
                                            font-bold
                                            text-[#002b87]
                                        "
                                >
                                    {item.title}
                                </h2>

                                <span
                                    className="
                                            rounded-full
                                            bg-orange-100
                                            px-3
                                            py-1
                                            text-sm
                                            font-medium
                                            text-orange-700
                                                    "
                                            >
                                    {item.date}
                                </span>
                            </div>

                            <p
                                className="
                                        whitespace-pre-line
                                        leading-7
                                        text-slate-700
                                    "
                            >
                                {item.content}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}
