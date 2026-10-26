// import { useMemo, useState } from "react";
// import {
//     Bus,
//     MapPin,
//     ExternalLink,
//     Search,
//     Download
// } from "lucide-react";
//
// import { transportRoutes } from "../data/transportRoutes";
//
// function getNextDeparture(times: string[]) {
//     const now = new Date();
//
//     const currentMinutes =
//         now.getHours() * 60 +
//         now.getMinutes();
//
//     return times.find((time) => {
//         const [h, m] = time
//             .split(":")
//             .map(Number);
//
//         return h * 60 + m > currentMinutes;
//     });
// }
//
// export default function Transport() {
//     const [search, setSearch] = useState("");
//
//     const filteredRoutes = useMemo(() => {
//         return transportRoutes
//             .map((route) => ({
//                 ...route,
//                 stops: route.stops.filter((stop) =>
//                     stop.name
//                         .toLowerCase()
//                         .includes(search.toLowerCase())
//                 )
//             }))
//             .filter((route) => route.stops.length > 0);
//     }, [search]);
//
//     return (
//         <div className="min-h-screen bg-slate-100">
//
//             <div className="mx-auto max-w-7xl px-4 py-8">
//
//                 <div className="mb-8">
//
//                     <h1 className="mb-2 text-3xl font-bold text-[#002b87] md:text-4xl">
//                         🚌 Транспорт до Rhenus
//                     </h1>
//
//                     <p className="text-gray-600">
//                         Виберіть свою зупинку та відкрийте її в Google Maps.
//                     </p>
//
//                 </div>
//
//                 {/* Excel */}
//
//                 <div className="mb-8 rounded-2xl bg-white p-5 shadow">
//
//                     <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
//
//                         <div>
//
//                             <h2 className="font-semibold text-[#002b87]">
//                                 Повний розклад автобусів
//                             </h2>
//
//                             <p className="text-sm text-gray-500">
//                                 Excel файл для завантаження
//                             </p>
//
//                         </div>
//
//                         <a
//                             href="../assets/files/Rozklad_autobus_POZNAN.xlsx"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="
//                                 inline-flex
//                                 items-center
//                                 gap-2
//                                 rounded-xl
//                                 bg-[#002b87]
//                                 px-4
//                                 py-3
//                                 text-white
//                                 transition
//                                 hover:bg-blue-800
//                             "
//                         >
//                             <Download size={18} />
//                             Excel
//                         </a>
//
//                     </div>
//
//                 </div>
//
//                 {/* Пошук */}
//
//                 <div className="relative mb-8">
//
//                     <Search
//                         className="
//                             absolute
//                             left-4
//                             top-1/2
//                             -translate-y-1/2
//                             text-slate-400
//                         "
//                         size={20}
//                     />
//
//                     <input
//                         type="text"
//                         placeholder="Пошук зупинки..."
//                         value={search}
//                         onChange={(e) =>
//                             setSearch(e.target.value)
//                         }
//                         className="
//                             w-full
//                             rounded-2xl
//                             border
//                             border-slate-200
//                             bg-white
//                             py-3
//                             pl-12
//                             pr-4
//                             shadow-sm
//                             outline-none
//
//                             focus:border-[#002b87]
//                         "
//                     />
//
//                 </div>
//
//                 {/* Маршрути */}
//
//                 <div className="space-y-6">
//
//                     {filteredRoutes.map((route) => (
//
//                         <div
//                             key={route.route}
//                             className="
//                                 rounded-2xl
//                                 bg-white
//                                 p-5
//                                 shadow
//                             "
//                         >
//
//                             <div className="mb-5 flex items-center gap-3">
//
//                                 <Bus
//                                     className="text-orange-500"
//                                     size={26}
//                                 />
//
//                                 <h2 className="text-xl font-bold text-[#002b87]">
//                                     {route.route}
//                                 </h2>
//
//                             </div>
//
//                             <div className="grid gap-4">
//
//                                 {route.stops.map((stop) => {
//
//                                     const nextDeparture =
//                                         getNextDeparture(
//                                             stop.times
//                                         );
//
//                                     return (
//                                         <a
//                                             key={stop.name}
//                                             href={stop.url}
//                                             target="_blank"
//                                             rel="noopener noreferrer"
//                                             className="
//                                                 group
//                                                 rounded-2xl
//                                                 border
//                                                 border-slate-200
//                                                 p-4
//
//                                                 transition-all
//                                                 duration-300
//
//                                                 hover:-translate-y-1
//                                                 hover:border-orange-400
//                                                 hover:bg-orange-50
//                                                 hover:shadow-lg
//                                             "
//                                         >
//
//                                             {nextDeparture && (
//
//                                                 <div
//                                                     className="
//                                                         mb-3
//                                                         inline-block
//                                                         rounded-full
//                                                         bg-green-100
//                                                         px-3
//                                                         py-1
//                                                         text-xs
//                                                         font-semibold
//                                                         text-green-700
//                                                     "
//                                                 >
//                                                     Наступний рейс:
//                                                     {" "}
//                                                     {nextDeparture}
//                                                 </div>
//
//                                             )}
//
//                                             <div
//                                                 className="
//                                                     mb-3
//                                                     flex
//                                                     items-center
//                                                     justify-between
//                                                 "
//                                             >
//
//                                                 <div
//                                                     className="
//                                                         flex
//                                                         items-center
//                                                         gap-3
//                                                     "
//                                                 >
//
//                                                     <MapPin
//                                                         size={20}
//                                                         className="
//                                                             text-orange-500
//                                                             transition-transform
//
//                                                             group-hover:scale-125
//                                                         "
//                                                     />
//
//                                                     <span
//                                                         className="
//                                                             font-semibold
//                                                             text-slate-800
//                                                         "
//                                                     >
//                                                         {stop.name}
//                                                     </span>
//
//                                                 </div>
//
//                                                 <ExternalLink
//                                                     size={18}
//                                                     className="
//                                                         text-slate-400
//                                                     "
//                                                 />
//
//                                             </div>
//
//                                             <div
//                                                 className="
//                                                     flex
//                                                     flex-wrap
//                                                     gap-2
//                                                 "
//                                             >
//
//                                                 {stop.times.map(
//                                                     (time) => (
//
//                                                         <span
//                                                             key={time}
//                                                             className="
//                                                                 rounded-full
//                                                                 bg-blue-100
//                                                                 px-3
//                                                                 py-1
//
//                                                                 text-xs
//                                                                 font-medium
//                                                                 text-blue-900
//                                                             "
//                                                         >
//                                                             {time}
//                                                         </span>
//
//                                                     )
//                                                 )}
//
//                                             </div>
//
//                                         </a>
//                                     );
//                                 })}
//
//                             </div>
//
//                         </div>
//
//                     ))}
//
//                 </div>
//
//             </div>
//
//         </div>
//     );
// }
import TransportLayout from "../components/transport/TransportLayout";
import { transportRoutes } from "../data/transportRoutes";

import { useTranslation } from "react-i18next";

export default function Transport() {

    const { t } = useTranslation();

    return (
        <TransportLayout
            title={`🚌 ${t("transportPoznanTitle")}`}
            routes={transportRoutes}
        />
    );
}
