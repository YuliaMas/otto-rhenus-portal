import Login from "../../pages/Login";

type Props = {
    children: React.ReactNode;
};

export default function ProtectedRoute({
                                           children,
                                       }: Props) {
    const isAuthenticated =
        localStorage.getItem("portal-auth") === "true";

    if (!isAuthenticated) {
        return <Login />;
    }

    return <>{children}</>;
}
