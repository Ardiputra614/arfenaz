import Aos from "aos";
import { NavbarPage } from "./header/Navbar";
import TopNav from "./header/TopNav";
import { useEffect } from "react";
import Footer from "../footer/Footer";

const HomeLayout = ({ children }) => {
    useEffect(() => {
        Aos.init();
    }, []);
    return (
        <>
            <TopNav />

            <NavbarPage />
            <div>{children}</div>
            <Footer />
        </>
    );
};

export default HomeLayout;
