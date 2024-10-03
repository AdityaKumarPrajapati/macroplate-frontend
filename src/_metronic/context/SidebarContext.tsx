import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define the type for the SidebarContext
interface SidebarContextProps {
    isSidebarOpen: boolean;
    toggleSidebar: () => void;
    closeSidebar: () => void;
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

    return (
        <SidebarContext.Provider value={{ isSidebarOpen, toggleSidebar, closeSidebar }}>
            {children}
        </SidebarContext.Provider>
    );
};
