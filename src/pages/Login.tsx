import { useState } from "react";
import { useTranslation } from "react-i18next";

import LanguageSwitcher
    from "../components/layout/LanguageSwitcher";

const SITE_PASSWORD = "OTTO2026";

export default function Login() {

    const { t } = useTranslation();

    const [password, setPassword] =
        useState("");

    const [error, setError] =
        useState(false);

    const handleLogin = () => {

        if (password === SITE_PASSWORD) {

            localStorage.setItem(
                "portal-auth",
                "true"
            );

            window.location.reload();

        } else {

            setError(true);

        }
    };

    return (

        <div
            className="
                flex
                min-h-screen
                items-center
                justify-center
                bg-slate-100
            "
        >
            <div
                className="
                    absolute
                    right-4
                    top-4
                "
            >
                <LanguageSwitcher />
            </div>

            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleLogin();
                }}
                className="
                    w-full
                    max-w-md
                    rounded-3xl
                    bg-white
                    p-8
                    shadow-xl
                "
            >
                <h1
                    className="
                        mb-2
                        text-center
                        text-4xl
                        font-bold
                        text-[#002b87]
                    "
                >
                    OTTO Work Force
                </h1>

                <p
                    className="
                        text-center
                        text-sm
                        text-gray-500
                    "
                >
                    {t("loginPortal")}
                </p>

                <p
                    className="
                        mb-6
                        mt-4
                        text-center
                        text-lg
                        text-gray-600
                    "
                >
                    {t("loginDescription")}
                </p>

                <input
                    type="password"
                    autoFocus
                    value={password}
                    onChange={(e) => {
                        setPassword(
                            e.target.value
                        );
                        if (error) {
                            setError(false);
                        }
                    }}
                    placeholder={t(
                        "loginPlaceholder"
                    )}
                    className="
                        mb-4
                        w-full
                        rounded-xl
                        border
                        p-3
                        transition
                        focus:border-[#002b87]
                        focus:outline-none
                    "
                />

                {error && (

                    <p
                        className="
                            mb-4
                            text-center
                            text-sm
                            text-red-500
                        "
                    >
                        {t("loginError")}
                    </p>

                )}

                <button
                    type="submit"
                    className="
                        w-full
                        rounded-xl
                        bg-[#002b87]
                        py-3
                        font-medium
                        text-white
                        transition
                        hover:bg-[#001f66]
                    "
                >
                    {t("loginButton")}
                </button>
            </form>
        </div>
    );
}
