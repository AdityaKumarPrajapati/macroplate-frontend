import { Route, Routes, Outlet, Navigate } from "react-router-dom";
import { NavBarComponents } from "../../_metronic/homeLayout/components/NavBarComponents";
import { ActivePlanPage } from "../pages/user/activePlanPage";

const UserRoutes = () => {
    return (
        <Routes>
            {/* When the path is '/subscription', redirect to '/subscription/active-plans' */}
            <Route path="/" element={<NavBarComponents />}>
                <Route index element={<Navigate to="active-plans" />} />
                <Route path="active-plans" element={<ActivePlanPage />} />
            </Route>
        </Routes>
    );
};

export { UserRoutes };
