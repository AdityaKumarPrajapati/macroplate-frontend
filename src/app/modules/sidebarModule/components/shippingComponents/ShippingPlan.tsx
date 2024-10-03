// src/components/SideBar/components/ShippingPage/ShippingPlan.tsx
import React from 'react';
import PersonalInfo from './PersonalInfo';
import DeliveryInfo from './DeliveryInfo';
// import styles from '../../css/ShippingPlan.module.css'; // Update import path as needed
import '../../styles/ShippingPlan.css'

interface ShippingPlanProps {
    checkoutData: any; // Replace `any` with a more specific type if available
    setCheckoutData: React.Dispatch<React.SetStateAction<any>>; // Update `any` with the specific type of the state
    validationErrors: Record<string, string | null>; // Update with specific validation error types if available
    setValidationErrors: React.Dispatch<React.SetStateAction<Record<string, string | null>>>; // Update with the specific type
    currentPage: number;
}

const ShippingPlan: React.FC<ShippingPlanProps> = ({
    checkoutData,
    setCheckoutData,
    validationErrors,
    setValidationErrors,
    currentPage,
}) => {
    return (
        <div className='shippingPlanWrapper'>
            <PersonalInfo
                checkoutData={checkoutData}
                setCheckoutData={setCheckoutData}
                validationErrors={validationErrors}
                setValidationErrors={setValidationErrors}
            />
            <DeliveryInfo
                checkoutData={checkoutData}
                setCheckoutData={setCheckoutData}
                validationErrors={validationErrors}
                setValidationErrors={setValidationErrors}
                currentPage={currentPage}
                headerText='DELIVERY INFO'
            />
        </div>
    );
};

export { ShippingPlan };
