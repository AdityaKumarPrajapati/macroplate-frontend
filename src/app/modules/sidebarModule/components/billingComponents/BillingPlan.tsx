import React, { useRef, useState } from 'react';
import { CardDetails } from './CardDetails';
import { ReviewPage } from './ReviewPage';
import DeliveryInfo from '../shippingComponents/DeliveryInfo';
import { SidebarButton } from '../utilityComponents/SidebarButton';
import '../../styles/BillingPlan.css';
import { useNavigate } from 'react-router-dom';
import { useSidebar } from '../../../../../_metronic/context/SidebarContext';

interface BillingPlanProps {
    checkoutData: any;
    setCheckoutData: React.Dispatch<React.SetStateAction<any>>;
    validationErrors: Record<string, string | null>;
    setValidationErrors: React.Dispatch<React.SetStateAction<Record<string, string | null>>>;
    currentPage: number;
}

const BillingPlan: React.FC<BillingPlanProps> = ({
    checkoutData,
    setCheckoutData,
    validationErrors,
    setValidationErrors,
    currentPage,
}) => {
    const cardDetailsRef = useRef<any>(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { closeSidebar } = useSidebar();

    const handleTokenSubmission = (token: any) => {
        console.log('Received token:', token);
    };

    const handlePlaceOrder = async () => {
        if (cardDetailsRef.current) {
            setLoading(true);
            await cardDetailsRef.current.handleSubmit();
            setLoading(false);
            navigate('/thank-you');
            closeSidebar();
        }
    };

    return (
        <div className='billingPlanPageContainer'>
            <ReviewPage
                checkoutData={checkoutData}
                setCheckoutData={setCheckoutData}
            />
            <CardDetails
                ref={cardDetailsRef}
                onSubmit={handleTokenSubmission}
                checkoutData={checkoutData}
                setCheckoutData={setCheckoutData}
            />
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
                text={loading ? <span className='loader'></span> : 'PLACE ORDER'}
                currentPage={currentPage}
            />
        </div>
    );
};

export { BillingPlan };