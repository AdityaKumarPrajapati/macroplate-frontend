// src/components/SideBar/components/BillingPage/BillingPlan.tsx
import React, { useRef } from 'react';
import { CardDetails } from './CardDetails';
import { ReviewPage } from './ReviewPage';
import DeliveryInfo from '../shippingComponents/DeliveryInfo';
import { SidebarButton } from '../utilityComponents/SidebarButton';
// import styles from '../../css/BillingPlan.module.css'; // Update import path as needed
import '../../styles/BillingPlan.css'

interface BillingPlanProps {
    checkoutData: any; // Replace `any` with a more specific type if available
    setCheckoutData: React.Dispatch<React.SetStateAction<any>>; // Update `any` with the specific type of the state
    validationErrors: Record<string, string | null>; // Update with specific validation error types if available
    setValidationErrors: React.Dispatch<React.SetStateAction<Record<string, string | null>>>; // Update with the specific type
    currentPage: number;
}

const BillingPlan: React.FC<BillingPlanProps> = ({
    checkoutData,
    setCheckoutData,
    validationErrors,
    setValidationErrors,
    currentPage,
}) => {
    const cardDetailsRef = useRef<any>(null); // Replace `any` with the actual type if available

    const handleTokenSubmission = (token: any) => {
        // Perform any necessary actions with the token here (e.g., sending to backend)
        console.log('Received token:', token);
    };

    const handlePlaceOrder = () => {
        if (cardDetailsRef.current) {
            cardDetailsRef.current.handleSubmit();
        }
    };

    return (
        <div className='billingPlanPageContainer'>
            <ReviewPage checkoutData={checkoutData} />
            <CardDetails ref={cardDetailsRef} onSubmit={handleTokenSubmission} />
            <DeliveryInfo
                checkoutData={checkoutData}
                setCheckoutData={setCheckoutData}
                validationErrors={validationErrors}
                setValidationErrors={setValidationErrors}
                currentPage={currentPage}
                headerText='BILLING ADDRESS'
            />
            <SidebarButton
                onCheckoutClick={handlePlaceOrder}
                text='PLACE ORDER'
                currentPage={currentPage}
            />
        </div>
    );
};

export { BillingPlan };
