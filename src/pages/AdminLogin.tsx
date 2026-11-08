import { useState } from "react";
import { supabase } from "../services/supabase";

export default function AdminLogin() {

    const [email, setEmail] =
        useState("");

    const [password, setPassword] =
        useState("");

    async function handleLogin() {

        const { error } =
            await supabase.auth.signInWithPassword({
                email,
                password,
            });

        if (error) {

            alert(
                error.message
            );

            return;
        }

        window.location.href =
            "/admin/news";
    }

    return (

        <div
            className="
                flex
                min-h-screen
                items-center
                justify-center
            "
        >

            <div
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
                        mb-6
                        text-3xl
                        font-bold
                    "
                >
                    Admin Login
                </h1>

                <input
                    placeholder="Email"
                    value={email}
                    onChange={(e) =>
                        setEmail(
                            e.target.value
                        )
                    }
                    className="
                        mb-4
                        w-full
                        rounded-xl
                        border
                        p-3
                    "
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) =>
                        setPassword(
                            e.target.value
                        )
                    }
                    className="
                        mb-4
                        w-full
                        rounded-xl
                        border
                        p-3
                    "
                />

                <button
                    onClick={
                        handleLogin
                    }
                    className="
                        w-full

                        rounded-xl

                        bg-[#002b87]

                        py-3

                        text-white
                    "
                >
                    Login
                </button>

            </div>

        </div>

    );
}
