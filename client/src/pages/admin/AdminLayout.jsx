import { Outlet, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Sidebar } from "./components/Sidebar";
// import { Footer } from "./components/Footer";

export const AdminLayout = () =>{
    return (
        <>
            <Helmet>
                {location.pathname === "/admin" ? <title>Dashboard</title> : ""}

            </Helmet>

            <div class="flex overflow-hidden bg-white pt-16">
            <Sidebar />

                <Outlet />
            </div>
            {/* <Footer /> */}
        </>
    )
}