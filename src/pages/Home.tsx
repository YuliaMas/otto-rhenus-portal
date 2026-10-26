// import { Link } from "react-router-dom";
// import {
//     Newspaper,
//     Plane,
//     UserX,
//     Bus,
//     Phone
// } from "lucide-react";
//
// const cards = [
//     {
//         title: "Новини",
//         icon: Newspaper,
//         link: "/news"
//     },
//     {
//         title: "Відпустка",
//         icon: Plane,
//         link: "/vacation"
//     },
//     {
//         title: "Прогули",
//         icon: UserX,
//         link: "/absence"
//     },
//     {
//         title: "Автобус",
//         icon: Bus,
//         link: "/transport"
//     },
//     {
//         title: "Контакти",
//         icon: Phone,
//         link: "/contacts"
//     }
// ];
//
// export default function Home() {
//     return (
//         <div className="min-h-screen bg-slate-100">
//
//             <section className="mx-auto max-w-7xl px-6 py-10">
//
//                 <h1 className="mb-3 text-4xl font-bold text-blue-900">
//                     OTTO Work Force
//                 </h1>
//
//                 <p className="mb-8 text-gray-600">
//                     {/*Інформаційний портал працівників Rhenus Polznań.*/}
//                 </p>
//
//                 <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
//
//                     {cards.map((card) => {
//                         const Icon = card.icon;
//
//                         return (
//                             <Link
//                                 key={card.title}
//                                 to={card.link}
//                                 className="rounded-xl bg-white p-6 shadow transition hover:-translate-y-1 hover:shadow-lg"
//                             >
//                                 <Icon
//                                     size={40}
//                                     className="mb-4 text-orange-500"
//                                 />
//
//                                 <h3 className="font-semibold">
//                                     {card.title}
//                                 </h3>
//                             </Link>
//                         );
//                     })}
//
//                 </div>
//
//             </section>
//
//         </div>
//     );
// }
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
    Newspaper,
    Plane,
    UserX,
    Bus,
    BusFront,
    Phone,
    Info
} from "lucide-react";

export default function Home() {
    const { t } = useTranslation();

    const cards = [
        {
            title: t("information"),
            icon: Info,
            link: "/information"
        },
        {
            title: t("news"),
            icon: Newspaper,
            link: "/news"
        },
        {
            title: t("vacation"),
            icon: Plane,
            link: "/vacation"
        },
        {
            title: t("absence"),
            icon: UserX,
            link: "/absence"
        },
        {
            title: "Transport Poznań",
            icon: Bus,
            link: "/transport"
        },
        {
            title: "Transport Września",
            icon: BusFront,
            link: "/transport-wrzesnia"
        },
        {
            title: t("contacts"),
            icon: Phone,
            link: "/contacts"
        }
    ];

    return (
        <div className="min-h-screen bg-slate-100">
            {/* HERO */}

            <section className="bg-gradient-to-r from-[#002b87] to-[#0052cc] text-white flex items-center justify-center ">
                <div className="mx-auto max-w-4xl px-6 py-10">

                    <h1 className="mb-4 text-3xl font-bold">
                        {t("heroTitle")}
                    </h1>

                    <p className="max-w-3xl text-lg text-blue-100">
                        {t("heroDescription")}
                    </p>

                </div>
            </section>

            {/* CARDS */}

            <section className="mx-auto max-w-7xl px-6 py-10">

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

                    {cards.map((card) => {
                        const Icon = card.icon;

                        return (
                            <Link
                                key={card.title}
                                to={card.link}
                                className="
                                    group
                                    rounded-2xl
                                    bg-white
                                    p-6
                                    shadow
                                    transition-all
                                    duration-300
                                    hover:-translate-y-2
                                    hover:shadow-2xl
                                    hover:ring-2
                                    hover:ring-orange-500
                                "
                            >
                                <Icon
                                    size={40}
                                    className="
                                        mb-4
                                        text-orange-500
                                        transition-transform
                                        duration-300
                                        group-hover:scale-110
                                        group-hover:rotate-6
                                    "
                                />

                                <h3 className="font-semibold">
                                    {card.title}
                                </h3>
                            </Link>
                        );
                    })}

                </div>
            </section>
        </div>
    );
}
