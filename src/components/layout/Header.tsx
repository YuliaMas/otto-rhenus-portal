import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";

import logo from "../../assets/images/logo-otto.svg";

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
