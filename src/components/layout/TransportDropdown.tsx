import { NavLink } from "react-router-dom";
import { ChevronDown, Bus } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

type Props = {
    onNavigate?: () => void;
};

export default function TransportDropdown({
                                              onNavigate,
                                          }: Props) {

    const { t } = useTranslation();
    const location = useLocation();

    const isTransportActive =
        location.pathname === "/transport" ||
        location.pathname === "/transport-wrzesnia";

    return (
        <div className="group relative">
            <button
                    className={`
                    flex
                    items-center
                    gap-1
                    font-medium
                    text-[#002b87]
                    transition
                    hover:text-[#ff6b00]
                    ${
                        isTransportActive
                            ? "text-[#ff6b00]"
                            : "text-[#002b87]"
                    }`}
            >
                <Bus size={16} />

                {t("transport")}

                <ChevronDown
                    size={16}
                    className="
                        transition-transform
                        group-hover:rotate-180
                    "
                />
            </button>

            <div
                className="
                    invisible
                    absolute
                    flex flex-col
                    left-0
                    top-full
                    z-50
                    mt-2
                    min-w-[230px]
                    rounded-2xl
                    bg-white
                    p-2
                    shadow-xl
                    opacity-0
                    transition-all
                    group-hover:visible
                    group-hover:opacity-100
                "
            >

                <NavLink
                    to="/transport"
                    onClick={onNavigate}
                    className="
                        flex
                        items-center
                        gap-2
                        rounded-xl
                        px-4
                        py-3
                        transition
                        hover:bg-slate-100
                    "
                >
                    🚌 Poznań / Swarzędz
                </NavLink>

                <NavLink
                    to="/transport-wrzesnia"
                    onClick={onNavigate}
                    className="
                        flex
                        items-center
                        gap-2
                        rounded-xl
                        px-4
                        py-3
                        transition
                        hover:bg-slate-100
                    "
                >
                    🚌 Września i okolice
                </NavLink>
            </div>
        </div>
    );
}
