import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import News from "../pages/News";
import Vacation from "../pages/Vacation";
import Absence from "../pages/Absence";
import Contacts from "../pages/Contacts";
import Transport from "../pages/Transport.tsx";
import TransportWrzesnia from "../pages/TransportWrzesnia.tsx";
import Information from "../pages/Information.tsx";
import NotFound from "../pages/NotFound.tsx";
import AdminNews from "../pages/AdminNews.tsx";
import AdminLogin from "../pages/AdminLogin.tsx";
import AdminRoute from "./AdminRoute.tsx";

export default function AppRoutes() {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/information" element={<Information />}/>
                <Route path="/news" element={<News />} />
                <Route path="/vacation" element={<Vacation />} />
                <Route path="/absence" element={<Absence />} />
                <Route path="/transport" element={<Transport />} />
                <Route path="/transport-wrzesnia" element={<TransportWrzesnia />}/>
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/admin" element={<AdminLogin />}/>
                <Route path="/admin/news"
                               element={
                                <AdminRoute>
                                    <AdminNews />
                                </AdminRoute>
                                 }
                />
                <Route path="*" element={<NotFound />}/>
            </Route>
        </Routes>
    );
}
