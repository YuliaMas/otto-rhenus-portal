import { useState } from "react";

const SITE_PASSWORD = "OTTO2026";

export default function Login() {
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const handleLogin = () => {
        if (password === SITE_PASSWORD) {
            localStorage.setItem("portal-auth", "true");
            window.location.reload();
        } else {
            setError(true);
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-slate-100">

            <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">

                <h1 className="mb-6 text-center text-2xl font-bold text-[#002b87]">
                    OTTO Work Force
                </h1>

                <p className="mb-4 text-center text-gray-500">
                    Введіть код доступу
                </p>

                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Пароль"
                    className="mb-4 w-full rounded-xl border p-3"
                />
                {error && (
                    <p className="mb-3 text-red-500">
                        Невірний пароль
                    </p>
                )}
                <button
                    onClick={handleLogin}
                    className="
                        w-full
                        rounded-xl
                        bg-[#002b87]
                        py-3
                        text-white
                    "
                >
                    Увійти
                </button>
            </div>
        </div>
    );
}
