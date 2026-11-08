import {useEffect, useState,} from "react";
import type {ReactNode} from "react";
import {Navigate} from "react-router-dom";
import {supabase,} from "../services/supabase";

type Props = { children: ReactNode; };

export default function AdminRoute({children,}: Props) {

    const [loading, setLoading,] = useState(true);

    const [authorized, setAuthorized,] = useState(false);

    useEffect(() => {

        async function checkUser() {

            const {data: {user,},} = await supabase.auth.getUser();

            if (!user) {
                setAuthorized(false);
                setLoading(false);
                return;
            }

            const {data, error,} =
                await supabase
                    .from("admin_users")
                    .select("id")
                    .eq("id", user.id)
                    .single();

            if (!error && data) {
                setAuthorized(true);
            }
            else {setAuthorized(false);}
            setLoading(false);
        }

        checkUser();

    }, []);

    if (loading) {
        return (
            <div className="flex min-h-screen  items-center justify-center  text-xl">
                Loading...
            </div>

        );
    }

    if (!authorized) {
        return (
            <Navigate to="/admin"
                replace
            />
        );
    }

    return (
        <>
            {children}
        </>
    );
}
