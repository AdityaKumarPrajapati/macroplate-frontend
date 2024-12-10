import React, { createContext, useState, useContext, ReactNode } from 'react';
import { checkoutData } from '../../app/interfaceProps/dataInterface';

// Define the type for the SidebarContext
interface SidebarContextProps {
    isSidebarOpen: boolean;
    checkoutData: checkoutData;
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
                    breakfastSelection: null,
                    dietary: [],
                    allergies: [],
                    allergyNotes: '',
                    snackProtein: 0,
                    proteinSmoothy: 0,
                    juice: 0,
                    coffee: 0,
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
                    firstDeliveryDate: '',
                    billingAddress: '',
                    billingSuite: '',
                    billingCity: '',
                    billingState: '',
                    billingZipCode: '',
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
