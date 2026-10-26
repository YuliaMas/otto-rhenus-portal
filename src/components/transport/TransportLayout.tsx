import { useMemo, useState } from "react";
import type {
    TransportRoute,
    TransportStop
} from "../../types/transport";

import DownloadFiles from "./DownloadFiles";
import {useTranslation} from "react-i18next";

type Props = {
    title: string;
    routes: TransportRoute[];
};

export default function TransportLayout({
                                            title,
                                            routes,
                                        }: Props) {
    const [search, setSearch] = useState("");
    const { t } = useTranslation();

    const filteredRoutes = useMemo(() => {
        return routes
            .map(route => ({
                ...route,
                stops: route.stops.filter(stop =>
                    stop.name
                        .toLowerCase()
                        .includes(
                            search.toLowerCase()
                        )
                )
            }))
            .filter(route =>
                route.stops.length > 0
            );
    }, [routes, search]);

    return (
        <div className="min-h-screen bg-slate-100">

            <div className="mx-auto max-w-7xl px-4 py-8">

                <h1
                    className="
                        mb-6
                        text-4xl
                        font-bold
                        text-[#002b87]
                    "
                >
                    {title}
                </h1>

                <DownloadFiles />

                <input
                    value={search}
                    onChange={(e) =>
                        setSearch(e.target.value)
                    }
                    placeholder={t("searchStop")}
                    className="
                        mb-8
                        w-full
                        rounded-xl
                        border
                        bg-white
                        p-4
                    "
                />
                {filteredRoutes.map(route => (

                    <div
                        key={route.route}
                        className="
                            mb-6
                            rounded-2xl
                            bg-white
                            p-5
                            shadow
                        "
                    >

                        <h2
                            className="
                                mb-4
                                text-xl
                                font-bold
                                text-[#002b87]
                            "
                        >
                            {route.route}
                        </h2>

                        <div
                            className="
                                grid
                                gap-3
                                md:grid-cols-2
                            "
                        >

                            {route.stops.map(
                                (stop: TransportStop) => (

                                    <a
                                        key={stop.name}
                                        href={stop.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
                                            rounded-xl
                                            border
                                            p-4

                                            transition

                                            hover:border-orange-400
                                            hover:bg-orange-50
                                        "
                                    >

                                        <div
                                            className="
                                                mb-2
                                                font-semibold
                                            "
                                        >
                                            📍 {stop.name}
                                        </div>

                                        <div
                                            className="
                                                flex
                                                flex-wrap
                                                gap-2
                                            "
                                        >

                                            {stop.times.map(
                                                (
                                                    time: string
                                                ) => (
                                                    <span
                                                        key={time}
                                                        className="
                                                            rounded-full
                                                            bg-blue-100
                                                            px-3
                                                            py-1
                                                            text-xs
                                                        "
                                                    >
                                                        {time}
                                                    </span>
                                                )
                                            )}

                                        </div>

                                    </a>

                                )
                            )}

                        </div>

                    </div>

                ))}
            </div>
        </div>
    );
}
