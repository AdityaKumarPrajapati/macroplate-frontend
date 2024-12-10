import React, { useEffect, useState } from 'react';
import { useSidebar } from '../../../_metronic/context/SidebarContext';
import { SideBarHeader } from './SideBarHeader';
import { SelectYourPlanPage } from './components/selectYouPlanComponents/SelectYourPlanPage';
import { SideBarCheckoutButton } from './components/utilityComponents/SideBarCheckoutButton';
import { BackButtonSvg } from '../../../_metronic/utilityComponents/BackButtonSvg';
import { SidebarButton } from './components/utilityComponents/SidebarButton';
import { ShippingPlan } from './components/shippingComponents/ShippingPlan';
import { BillingPlan } from './components/billingComponents/BillingPlan';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

// Load your Stripe public key
const stripePromise = loadStripe('pk_test_pndCOLy4iBu4IWLtmiIiPGF5');

// Next.js doesn't require a leading './' in CSS imports. Use global CSS and module-based CSS in Next.js
// import styles from '../styles/Sidebar.module.css';
// import planStyles from '../styles/SelectYourPlan.module.css'; // Assuming the CSS file is placed in `styles`

import './styles/Sidebar.css'
import './styles/SelectYourPlan.css'

const SidebarMain: React.FC = () => {
    const { isSidebarOpen, closeSidebar, checkoutData, setCheckoutData } = useSidebar();
    const [currentPage, setCurrentPage] = useState(1);
    const [validationErrors, setValidationErrors] = useState<Record<string, string | null>>({});

    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Save checkoutData to localStorage whenever it changes
            localStorage.setItem('checkoutData', JSON.stringify(checkoutData));
        }
    }, [checkoutData]);

    const isValidEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validateSelections = () => {
        const errors: Record<string, string | null> = {};
        if (currentPage === 1) {
            errors.vanityName = checkoutData.vanityName ? null : 'Please Select Your Plan';
            errors.mealPerDay = checkoutData.mealPerDay ? null : 'Please select meals per day';
            errors.programLength = checkoutData.programLength ? null : 'Please select a program length';
            errors.breakfastSelection = checkoutData.breakfastSelection ? null : 'Please select a breakfast option';
            errors.email = checkoutData.email
                ? isValidEmail(checkoutData.email)
                    ? null
                    : 'Please enter a valid email address'
                : 'Please enter your email address';
            errors.zipCode = checkoutData.zipCode ? null : 'Please enter your ZIP code';
        } else if (currentPage === 2) {
            errors.firstName = checkoutData.firstName ? null : 'Please enter your First Name';
            errors.lastName = checkoutData.lastName ? null : 'Please enter your Last Name';
            errors.phone = checkoutData.phone ? null : 'Please Enter Your Phone Number';
            errors.address = checkoutData.address ? null : 'Please Enter Your Address';
            errors.city = checkoutData.city ? null : 'Please Enter Your City';
            errors.state = checkoutData.state ? null : 'Please Enter Your State';
            errors.zipCode = checkoutData.zipCode ? null : 'Please enter your ZIP code';
        }
        return errors;
    };


    const handleCheckoutClick = (nextPage: number) => {
        const errors = validateSelections();
        // console.log('---nextPage---', nextPage, errors);
        // if (Object.keys(errors).length > 0) {
        //     console.log('11111');
        //     setValidationErrors(errors);
        // } else {
        // console.log('222222');
        setValidationErrors({});
        setCurrentPage(nextPage); // Proceed to next page
        // }
        console.log('----currentPage---', currentPage)
    };

    return (
        <>
            <div className={`overlay ${isSidebarOpen ? 'open' : 'closed'}`} onClick={closeSidebar}></div>
            <div className={`sidebarWrapper ${isSidebarOpen ? 'open' : 'closed'}`}>
                <SideBarHeader
                    currentPage={currentPage}
                />
                {currentPage === 1 && (
                    <div className='step1Wrapper'>
                        <div className='step-1'>
                            <SelectYourPlanPage
                                checkoutData={checkoutData}
                                setCheckoutData={setCheckoutData}
                                validationErrors={validationErrors}
                                setValidationErrors={setValidationErrors}
                            />
                        </div>
                        <SideBarCheckoutButton
                            onCheckoutClick={() => handleCheckoutClick(2)}
                            checkoutData={checkoutData}
                        />
                    </div>
                )}
                {currentPage === 2 && (
                    <div className='step2Wrapper'>
                        <BackButtonSvg
                            pageNumber={currentPage - 1}
                            setCurrentPage={setCurrentPage}
                        />
                        <div className='shippingPlanContainer'>
                            <div className='step-2'>
                                <ShippingPlan
                                    checkoutData={checkoutData}
                                    setCheckoutData={setCheckoutData}
                                    validationErrors={validationErrors}
                                    setValidationErrors={setValidationErrors}
                                    currentPage={currentPage}
                                />
                            </div>
                            <SidebarButton onCheckoutClick={() => handleCheckoutClick(3)} text='CONTINUE TO CHECKOUT' />
                        </div>
                    </div>
                )}
                {currentPage === 3 && (
                    <div className='step3Wrapper'>
                        <BackButtonSvg
                            pageNumber={currentPage - 1}
                            setCurrentPage={setCurrentPage}
                        />
                        <div>
                            <Elements stripe={stripePromise}>
                                <BillingPlan
                                    checkoutData={checkoutData}
                                    setCheckoutData={setCheckoutData}
                                    validationErrors={validationErrors}
                                    setValidationErrors={setValidationErrors}
                                    currentPage={currentPage}
                                />
                            </Elements>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export { SidebarMain };
