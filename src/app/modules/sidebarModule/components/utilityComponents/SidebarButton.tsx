// src/components/SideBar/components/SidebarButton/SidebarButton.tsx
import React from 'react';
import { Link } from "react-router-dom";
// import styles from './SidebarButton.module.css'; // Update import path as needed
import './styles/SidebarButton.css'
import { Button } from 'react-bootstrap';

interface SidebarButtonProps {
    onCheckoutClick: () => void;
    text: string;
    currentPage?: number;
}

const SidebarButton: React.FC<SidebarButtonProps> = ({ onCheckoutClick, text, currentPage }) => {
    return (
        <div className="sideBarContinueBtnContainer">
            <Button variant="dark" onClick={onCheckoutClick}>{text}</Button>
            {
                currentPage && currentPage === 3 &&
                <p className="marginZero tNcCondition">By clicking Place Order you agree to the <Link to='#' className="termsLink">Terms & Conditions.</Link></p>
            }
        </div>
    );
};

export { SidebarButton };
