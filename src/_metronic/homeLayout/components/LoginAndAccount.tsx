import { Link } from "react-router-dom";
import { useAuth } from "../../../app/modules/auth";
import { useSidebar } from "../../context/SidebarContext";

const LoginAndAccount = () => {
    const {logout, currentUser} = useAuth();
    const { toggleSidebar } = useSidebar();
    return (
        <nav className="navbar">
            <div className="nav-container">
                <ul className="nav-menu">
                    {currentUser ? (
                        <>
                            <li className="nav-item">
                                <a className="nav-links" onClick={logout}>LOG OUT</a>
                            </li>
                            <li className="nav-item">
                                <Link to="/admin/dashboard" className="getStartedBtn">Account</Link>
                            </li>
                        </>
                    ) : (
                        <>
                            <li className="nav-item">
                                <Link to="/auth" className="nav-links">LOG IN</Link>
                            </li>
                            <li className="nav-item">
                                <button className="getStartedBtn" onClick={toggleSidebar}>GET STARTED</button>
                                {/* <button className="getStartedBtn">GET STARTED</button> */}
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    );
}

export { LoginAndAccount }