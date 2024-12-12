import React, { createContext, useState, useContext, ReactNode } from 'react';
import { CheckoutData } from '../../app/interfaceProps/dataInterface';

// Define the type for the SidebarContext
interface SidebarContextProps {
    isSidebarOpen: boolean;
    checkoutData: CheckoutData;
    toggleSidebar: () => void;
    closeSidebar: () => void;
    setCheckoutData: (data: any) => void;
}

// Create the context with an empty default value
const SidebarContext = createContext<SidebarContextProps | undefined>(undefined);

// Custom hook to use the SidebarContext
export const useSidebar = () => {
    const context = useContext(SidebarContext);
    if (!context) {
        throw new Error('useSidebar must be used within a SidebarProvider');
    }
    return context;
};

// Define the type for the SidebarProvider props
interface SidebarProviderProps {
    children: ReactNode;
}

// SidebarProvider component to manage the sidebar state
export const SidebarProvider: React.FC<SidebarProviderProps> = ({ children }) => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
    const closeSidebar = () => setSidebarOpen(false);

    const getInitialData = () => {
        if (typeof window !== 'undefined') {
            const savedData = localStorage.getItem('checkoutData');
            return savedData
                ? JSON.parse(savedData)
                : {
                    vanityName: '',
                    mealPerDay: '2',
                    programLength: '5',
                    breakfast: null,
                    dietary: [],
                    allergies: [],
                    allergyNotes: 'allergyNotes',
                    snackProtein: 0,
                    snackPrice: 0,
                    snackPlanId: 'snacks-1-5',
                    proteinSmoothy: 0,
                    proteinSmoothyPrice: 0,
                    proteinSmoothyPlanId: '',
                    juice: 0,
                    juicePrice: 0,
                    juicePlanId: 'v2-cold-pressed-juice-4-5',
                    coffee: 0,
                    coffeePrice: 0,
                    coffeePlanId: '',
                    email: '',
                    zipCode: '',
                    firstName: '',
                    lastName: '',
                    phone: '',
                    address: '',
                    suite: '',
                    city: '',
                    state: '',
                    deliveryNotes: '',
                    firstDeliveryDate: 'Monday, Dec 23, 2024',
                    billingAddress: '',
                    billingSuite: '',
                    billingCity: '',
                    billingState: '',
                    billingZipCode: '',
                    planId: 'v4-trad-2-5',
                    stripeToken: '',
                    invitationCode: '',
                    invitationReferralCode: '',
                    planAmount: 0,
                    carbs: '',
                    protein: '',
                    fat: '',
                    googleAddress: 'googleAddress',
                    acceptTnc: true,
                    // couponCode: '',
                    couponValue: 0.00,
                    remainingCreditBalance: 0.00,
                    subTotalAmount: 0.00,
                    totalAmount: 0.00,
                    dailyDeliveryFee: 0.00,
                    deliveryAmount: 0,
                    // discountCouponAmount: 0,
                    // discountCouponName: '',
                    // discountCouponType: '',
                    isCouponApplied: false,
                    totalAmountAfterDiscount: 0,
                    cityNameByZipCode: null
                };
        }
        return {};
    };

    const [checkoutData, setCheckoutData] = useState(getInitialData);

    return (
        <SidebarContext.Provider value={{ isSidebarOpen, checkoutData, toggleSidebar, closeSidebar, setCheckoutData }}>
            {children}
        </SidebarContext.Provider>
    );
};
