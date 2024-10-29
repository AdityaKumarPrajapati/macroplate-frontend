import { useSidebar } from '../../../_metronic/context/SidebarContext';
import { SidebarHeaderActiveState } from '../../../_metronic/utilityComponents/SidebarHeaderActiveState';
import { SidebarHeaderCompletedState } from '../../../_metronic/utilityComponents/SidebarHeaderCompletedState';
import { SidebarHeaderInactiveState } from '../../../_metronic/utilityComponents/SidebarHeaderInactiveState';

// Importing CSS (if using CSS Modules)
// import styles from '@/styles/SideBarHeader.module.css'; // Adjust the path as necessary
import './styles/SideBarHeader.css'

interface SideBarHeaderProps {
    currentPage: number;
}

const SideBarHeader: React.FC<SideBarHeaderProps> = ({ currentPage }) => {
    const { toggleSidebar } = useSidebar();

    return (
        <div className="sideBarHeaderWrapper">
            <div className="sideBarHeaderContainer">
                <div className="statusBar">
                    {(currentPage === 1) ? <SidebarHeaderActiveState /> : <SidebarHeaderCompletedState />}
                    <p className="marginZero statusBarHeadetText">SELECT A PLAN</p>
                </div>
                <p className="marginZero">_</p>
                <div className="statusBar">
                    {(currentPage === 1) ? <SidebarHeaderInactiveState /> : (currentPage === 2 ? <SidebarHeaderActiveState /> : <SidebarHeaderCompletedState />)}
                    <p className="marginZero statusBarHeadetText">DELIVERY</p>
                </div>
                <p className="marginZero">_</p>
                <div className="statusBar">
                    {(currentPage === 3) ? <SidebarHeaderActiveState /> : <SidebarHeaderInactiveState />}
                    <p className="marginZero statusBarHeadetText">CHECKOUT</p>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none" onClick={toggleSidebar} className="toprightCloseIconCheckout">
                <path d="M1 12.3637L11.0499 1" stroke="#292D32" strokeWidth="0.831563" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M11.0499 12.3637L1 1" stroke="#292D32" strokeWidth="0.831563" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>
    );
};

export { SideBarHeader };
