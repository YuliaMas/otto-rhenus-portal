import { useTranslation } from "react-i18next";
import { supabase } from "../../services/supabase";
import toast from "react-hot-toast";

export default function AdminHeader() {
    const { t } = useTranslation();

    async function handleLogout() {
        await supabase.auth.signOut();
        toast.success("👋 Logged out");
        setTimeout(() => {
            window.location.href = "/admin";
        }, 500);
    }

    return (
        <div className="mb-8 flex items-center justify-between">
            <h1 className="text-4xl font-bold text-[#002b87]">
                {t("adminNews")}
            </h1>

            <button
                onClick={handleLogout}
                className="rounded-xl bg-red-500 px-5 py-3 text-white transition hover:bg-red-600"
            >
                {t("logout")}
            </button>
        </div>
    );
}
