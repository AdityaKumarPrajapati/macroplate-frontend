// src/components/SideBar/components/SideBarCheckoutButton/SideBarCheckoutButton.tsx
import React from 'react';
import Button from 'react-bootstrap/Button';
import { getTotalAmount } from '../../../../../_metronic/utils/priceUtils';
// import { CheckoutData } from '../../../../../_metronic/types/checkoutData';
import '../utilityComponents/styles/SideBarCheckoutButton.css';
import { CheckoutData } from '../../../../interfaceProps/dataInterface';

interface SideBarCheckoutButtonProps {
    onCheckoutClick: () => void;
    checkoutData: CheckoutData; // Use CheckoutData type here
}

const SideBarCheckoutButton: React.FC<SideBarCheckoutButtonProps> = ({ onCheckoutClick, checkoutData }) => {
    // Compute the total amount once to avoid multiple function calls
    const totalAmount = getTotalAmount(checkoutData); // No need for `{ checkoutData }`

    return (
        <div className="SideBarStep1CheckoutBtnContainer">
            <Button variant="dark" onClick={onCheckoutClick}>
                CHECKOUT
                {/* Only show the total amount if it's greater than 0 */}
                {parseFloat(totalAmount) !== 0.00 && (
                    <span className="totalPrice"> | {totalAmount}</span>
                )}
            </Button>
        </div>
    );
};

export { SideBarCheckoutButton };
