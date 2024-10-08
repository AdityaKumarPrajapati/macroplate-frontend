import { Route, Routes, Outlet } from "react-router-dom";
import { NavBarComponents } from "../../_metronic/homeLayout/components/NavBarComponents";
import { HomePage } from "../pages/homePage/HomePage";
import { OurApproach } from "../pages/ourApproach/OurApproach";
import { HowItWorks } from "../pages/howItWorks/HowItWorks";

const HomePageRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<NavBarComponents />}>
                <Route index element={<HomePage />} />
                <Route path="our-approach" element={<OurApproach />} />
                <Route path="how-it-works" element={<HowItWorks />} />
            </Route>
        </Routes>
    );
};

export { HomePageRoutes };
