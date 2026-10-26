// // import { NavLink } from "react-router-dom";
// // import logo from "./../../assets/images/logo-otto.png";
// //
// // export default function Header() {
// //     return (
// //         <header className="header">
// //             <div className="header-container">
// //                 <div className="logo-section">
// //                     <img
// //                         src={logo}
// //                         alt="OTTO Work Force"
// //                         className="logo"
// //                     />
// //                     <h2>OTTO Work Force</h2>
// //                     <span>Rhenus Employee Portal</span>
// //
// //                 </div>
// //
// //                 <nav className="navigation">
// //                     <NavLink to="/">Головна</NavLink>
// //                     <NavLink to="/news">Новини</NavLink>
// //                     <NavLink to="/vacation">Відпустка</NavLink>
// //                     <NavLink to="/absence">Прогули</NavLink>
// //                     <NavLink to="/contacts">Контакти</NavLink>
// //                 </nav>
// //
// //                 <div className="languages">
// //                     <button>UA</button>
// //                     <button>PL</button>
// //                     <button>RU</button>
// //                     <button>EN</button>
// //                 </div>
// //             </div>
// //         </header>
// //     );
// // }
//
// // import { useState } from "react";
// // import { NavLink } from "react-router-dom";
// // import { Menu, X } from "lucide-react";
// //
// // import logo from "../../assets/images/logo-otto.png";
// //
// // export default function Header() {
// //     const [open, setOpen] = useState(false);
// //     const closeMenu = () => setOpen(false);
// //
// //     const navLinkClass = ({ isActive }: { isActive: boolean }) =>
// //         `font-medium transition-colors ${
// //             isActive
// //                 ? "text-orange-500"
// //                 : "text-blue-900 hover:text-orange-500"
// //         }`;
// //     const mobileNavClass = ({ isActive }: { isActive: boolean }) =>
// //         `py-3 font-medium ${
// //             isActive
// //                 ? "text-orange-500"
// //                 : "text-blue-900"
// //         }`;
// //
// //     return (
// //         <header className="sticky top-0 z-50 border-b-4 border-orange-500 bg-white shadow-md">
// //             <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
// //
// //                 <div className="flex items-center gap-3">
// //
// //                     <img
// //                         src={logo}
// //                         alt="OTTO Work Force"
// //                         className="h-12 w-auto"
// //                     />
// //
// //                     <div className="hidden md:block">
// //                         <h1 className="font-bold text-blue-900">
// //                             Employee Portal
// //                         </h1>
// //
// //                         <p className="text-sm text-gray-500">
// //                             Rhenus Poznań
// //                         </p>
// //                     </div>
// //
// //                 </div>
// //
// //                 <nav className="hidden md:flex items-center gap-6">
// //
// //                     <NavLink className={navLinkClass} to="/">
// //                         Головна
// //                     </NavLink>
// //
// //                     <NavLink className={navLinkClass} to="/news">
// //                         Новини
// //                     </NavLink>
// //
// //                     <NavLink className={navLinkClass} to="/vacation">
// //                         Відпустка
// //                     </NavLink>
// //
// //                     <NavLink className={navLinkClass} to="/absence">
// //                         Прогули
// //                     </NavLink>
// //
// //                     <NavLink className={navLinkClass} to="/contacts">
// //                         Контакти
// //                     </NavLink>
// //
// //                 </nav>
// //
// //                 <div className="hidden gap-2 md:flex">
// //
// //                     <button className="rounded bg-blue-900 px-3 py-1 text-white">
// //                         UA
// //                     </button>
// //
// //                     <button className="rounded border px-3 py-1">
// //                         PL
// //                     </button>
// //
// //                     <button className="rounded border px-3 py-1">
// //                         RU
// //                     </button>
// //
// //                     <button className="rounded border px-3 py-1">
// //                         EN
// //                     </button>
// //
// //                 </div>
// //
// //                 <button
// //                     onClick={() => setOpen(!open)}
// //                     className="md:hidden"
// //                 >
// //                     {open ? <X /> : <Menu />}
// //                 </button>
// //
// //             </div>
// //
// //             {open && (
// //                 <div className="border-t bg-white md:hidden">
// //
// //                     <nav className="flex flex-col p-4">
// //
// //                         <NavLink
// //                             className={mobileNavClass}
// //                             to="/" onClick={closeMenu}
// //
// //                         >
// //                             Головна
// //                         </NavLink>
// //
// //                         <NavLink
// //                             className={mobileNavClass}
// //                             to="/news" onClick={closeMenu}
// //                         >
// //                             Новини
// //                         </NavLink>
// //
// //                         <NavLink
// //                             className={mobileNavClass}
// //                             to="/vacation" onClick={closeMenu}
// //                         >
// //                             Відпустка
// //                         </NavLink>
// //
// //                         <NavLink
// //                             className={mobileNavClass}
// //                             to="/absence" onClick={closeMenu}
// //                         >
// //                             Прогули
// //                         </NavLink>
// //
// //                         <NavLink
// //                             className={mobileNavClass}
// //                             to="/contacts" onClick={closeMenu}
// //                         >
// //                             Контакти
// //                         </NavLink>
// //
// //                     </nav>
// //
// //                 </div>
// //             )}
// //         </header>
// //     );
// // }
//
// import { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { Menu, X } from "lucide-react";
// import { useTranslation } from "react-i18next";
// import logo from "../../assets/images/logo-otto.png";
// import { menuItems } from "../../data/menuItems";
// import LanguageSwitcher from "./LanguageSwitcher";
// import TransportDropdown from "./TransportDropdown";
//
//
// export default function Header() {
//     const [open, setOpen] = useState(false);
//
//     const { t } = useTranslation();
//
//     // const changeLanguage = (lng: string) => {
//     //     i18n.changeLanguage(lng);
//     //     setOpen(false);
//     // };
//
//     const closeMenu = () => {
//         setOpen(false);
//     };
//
//     const navClass = ({ isActive }: { isActive: boolean }) =>
//         `font-medium transition-colors ${
//             isActive
//                 ? "text-[#ff6b00]"
//                 : "text-[#002b87] hover:text-[#ff6b00]"
//         }`;
//
//     return (
//         <header className="sticky top-0 z-50 border-b-4 border-[#ff6b00] bg-white shadow-md">
//
//             <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
//
//                 <div className="flex items-center gap-3">
//
//                     <img
//                         src={logo}
//                         alt="OTTO Work Force"
//                         className="h-12"
//                     />
//
//                     <div className="hidden md:block">
//                         <h1 className="font-bold text-[#002b87]">
//                             {t("portalTitle")}
//                         </h1>
//
//                         <p className="text-xs text-gray-500">
//                             {t("portalSubtitle")}
//                         </p>
//                     </div>
//
//                 </div>
//
//                 <nav className="hidden items-center gap-6 md:flex">
//
//                     {menuItems.map(item => (
//                         <NavLink
//                             key={item.path}
//                             to={item.path}
//                             className={navClass}
//                         >
//                             {t(item.title)}
//                         </NavLink>
//                     ))}
//
//                     <TransportDropdown />
//
//                 </nav>
//
//                 {/*<div className="hidden gap-2 md:flex">*/}
//
//                 {/*    {["ua", "pl", "ru", "en"].map(lang => (*/}
//                 {/*        <button*/}
//                 {/*            key={lang}*/}
//                 {/*            onClick={() => changeLanguage(lang)}*/}
//                 {/*            className="rounded border px-2 py-1 text-sm hover:bg-slate-100"*/}
//                 {/*        >*/}
//                 {/*            {lang.toUpperCase()}*/}
//                 {/*        </button>*/}
//                 {/*    ))}*/}
//
//                 {/*</div>*/}
//
//                 <LanguageSwitcher />
//
//                 <button
//                     onClick={() => setOpen(!open)}
//                     className="md:hidden"
//                 >
//                     {open ? <X /> : <Menu />}
//                 </button>
//
//                 <button
//                     onClick={() => {
//                         localStorage.removeItem("portal-auth");
//                         window.location.reload();
//                     }}
//                     className="
//         rounded-lg
//         bg-red-500
//         px-3
//         py-2
//         text-white
//
//     "
//                 >
//                     {t("logout")}
//                 </button>
//
//             </div>
//
//             {open && (
//                 <div className="border-t bg-white md:hidden">
//
//                     <div className="flex flex-col p-4">
//
//                         {menuItems.map(item => (
//                             <NavLink
//                                 key={item.path}
//                                 to={item.path}
//                                 onClick={closeMenu}
//                                 className={navClass}
//                             >
//                                 {t(item.title)}
//                             </NavLink>
//                         ))}
//                         {/*<TransportDropdown />*/}
//                         <div className="mt-3">
//
//                             <div
//                                 className="
//                                             mb-2
//                                             text-sm
//                                             font-semibold
//                                             text-gray-500
//                                         "
//                             >
//                                 🚌 {t("transport")}
//                             </div>
//
//                             <NavLink
//                                 to="/transport"
//                                 onClick={closeMenu}
//                                 className={navClass}
//                             >
//                                 Poznań / Swarzędz
//                             </NavLink>
//                             <br/>
//                             <NavLink
//                                 to="/transport-wrzesnia"
//                                 onClick={closeMenu}
//                                 className={navClass}
//                             >
//                                 Września i okolice
//                             </NavLink>
//
//                         </div>
//                         {/*<div className="mt-4 flex gap-2">*/}
//
//                         {/*    {["ua", "pl", "ru", "en"].map(lang => (*/}
//                         {/*        <button*/}
//                         {/*            key={lang}*/}
//                         {/*            onClick={() => changeLanguage(lang)}*/}
//                         {/*            className="rounded border px-3 py-1"*/}
//                         {/*        >*/}
//                         {/*            {lang.toUpperCase()}*/}
//                         {/*        </button>*/}
//                         {/*    ))}*/}
//
//                         {/*</div>*/}
//
//                         <LanguageSwitcher
//                             mobile
//                             onSelect={closeMenu}
//                         />
//                     </div>
//
//                 </div>
//             )}
//         </header>
//     );
// }

import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";

import logo from "../../assets/images/logo-otto.png";

import { menuItems } from "../../data/menuItems";

import LanguageSwitcher from "./LanguageSwitcher";
import TransportDropdown from "./TransportDropdown";

export default function Header() {

    const [open, setOpen] = useState(false);
    const { t } = useTranslation();
    const closeMenu = () => {
        setOpen(false);
    };
    const navClass = ({isActive,}: { isActive: boolean; }) =>
        `whitespace-nowrap
           text-[15px]
           font-medium
           transition-colors
           ${
        isActive
            ? "text-[#ff6b00]"
            : "text-[#002b87] hover:text-[#ff6b00]"
    }`;

    return (
        <header
            className="
                sticky
                top-0
                z-50
                border-b-4
                border-[#ff6b00]
                bg-white
                shadow-md
            "
        >
            <div
                className="
                    mx-auto
                    flex
                    max-w-[1700px]
                    items-center
                    justify-between
                    gap-4
                    px-4
                    py-3
                "
            >

                {/* LOGO */}

                <div
                    className="
                        flex
                        shrink-0
                        items-center
                        gap-3
                    "
                >
                    <NavLink to="/">
                        <img
                            src={logo}
                            alt="OTTO Work Force"
                            className="h-14"
                        />
                    </NavLink>
                    <div
                        className="
                            hidden
                            xl:block
                        "
                    >
                        <h1
                            className="
                                whitespace-nowrap
                                text-xl
                                font-bold
                                text-[#002b87]
                            "
                        >
                            {t("portalTitle")}
                        </h1>
                        <p
                            className="
                                text-sm
                                text-gray-500
                            "
                        >
                            {t("portalSubtitle")}
                        </p>
                    </div>
                </div>

                {/* DESKTOP MENU */}

                <nav
                    className="
                        hidden
                        flex-1
                        items-center
                        justify-center
                        gap-6
                        lg:flex
                    "
                >
                    {menuItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={navClass}
                        >
                            {t(item.title)}
                        </NavLink>
                    ))}

                    <TransportDropdown />
                </nav>

                {/* RIGHT BLOCK */}

                <div
                    className="
                        hidden
                        items-center
                        gap-3
                        lg:flex
                    "
                >

                    <LanguageSwitcher />

                    <button
                        onClick={() => {
                            localStorage.removeItem(
                                "portal-auth"
                            );
                            window.location.reload();
                        }}
                        className="
                            flex
                            h-12
                            min-w-[115px]
                            items-center
                            justify-center
                            rounded-xl
                            bg-red-500
                            px-4
                            font-medium
                            text-white
                            transition
                            hover:bg-red-600
                        "
                    >
                        {t("logout")}
                    </button>
                </div>

                {/* MOBILE BUTTON */}

                <button
                    className="lg:hidden"
                    onClick={() =>
                        setOpen(!open)
                    }
                >
                    {open ? <X /> : <Menu />}
                </button>
            </div>

            {/* MOBILE MENU */}

            {open && (
                <div
                    className="
                        border-t
                        bg-white
                        lg:hidden
                    "
                >
                    <div
                        className="
                            flex
                            flex-col
                            p-4
                        "
                    >
                        {menuItems.map(
                            (item) => (
                                <NavLink
                                    key={item.path}
                                    to={item.path}
                                    onClick={closeMenu}
                                    className={navClass}
                                >
                                    {t(item.title)}
                                </NavLink>
                            )
                        )}

                        <div
                            className="mt-4"
                        >
                            <div
                                className="
                                    mb-2
                                    text-sm
                                    font-semibold
                                    text-gray-500
                                "
                            >
                                🚌 {t("transport")}
                            </div>

                            <NavLink
                                to="/transport"
                                onClick={closeMenu}
                                className={navClass}
                            >
                                Poznań / Swarzędz
                            </NavLink>
                            <br/>
                            <NavLink
                                to="/transport-wrzesnia"
                                onClick={closeMenu}
                                className={navClass}
                            >
                                Września i okolice
                            </NavLink>

                        </div>

                        <LanguageSwitcher
                            mobile
                            onSelect={closeMenu}
                        />

                        <button
                            onClick={() => {
                                localStorage.removeItem(
                                    "portal-auth"
                                );
                                window.location.reload();
                            }}
                            className="
                                mt-4
                                rounded-xl
                                bg-red-500
                                py-3
                                text-white
                            "
                        >
                            {t("logout")}
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
}
