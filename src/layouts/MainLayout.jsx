import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Header from "../components/Header.jsx";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function MainLayout() {
    const location = useLocation();
    const path = location.pathname;

    const shouldShowNavbar = !["/", "/login", "/signup"].includes(path);

    return (
        <>
            {shouldShowNavbar ? <Navbar /> : <Header />}
            <Outlet />
            <ToastContainer />
        </>
    );
}

export default MainLayout;
