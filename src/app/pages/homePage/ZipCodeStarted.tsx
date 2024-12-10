import React, { useState } from "react";
import { useSidebar } from "../../../_metronic/context/SidebarContext";

const ZipCodeStarted = () => {
    const [zipCode, setZipCode] = useState('');
    const { toggleSidebar, setCheckoutData } = useSidebar();

    const handleZipCodeChange = (e: any) => {
        setZipCode(e.target.value);
    }

    const handleZipCodeSubmit = (e) => {
        e.preventDefault();
        if (zipCode) {
            // Update checkoutData
            setCheckoutData((prevData: any) => {
                const updatedData = { ...prevData, zipCode };
                localStorage.setItem("checkoutData", JSON.stringify(updatedData));
                return updatedData;
            });
    
            // Toggle sidebar
            toggleSidebar();
        }
        toggleSidebar();
    }

    return (
        <form className="zipCodeWrapper" onSubmit={handleZipCodeSubmit}>
            <div className="zipCodeInputContainer">
                <input
                    type="text"
                    placeholder="Enter your ZIP code"
                    onChange={handleZipCodeChange}
                    required
                />
            </div>
            <button type="submit">GET STARTED</button>
        </form>
    );
};

export { ZipCodeStarted };
