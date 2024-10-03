import React from "react";
import { MealSelectionWrapper } from "../utilityComponents/MealSelectionWrapper";
import { AddonContentData } from "../../../../../_metronic/assets/dataContentObjects/AddonContent";
import { Counter } from "../../../../../_metronic/utilityComponents/Counter";

// Define types for props
interface CheckoutData {
    [key: string]: number; // Assuming that checkoutData contains numerical values for each add-on
}

interface Props {
    checkoutData: CheckoutData;
    setCheckoutData: React.Dispatch<React.SetStateAction<CheckoutData>>;
}

const AddOnSelection: React.FC<Props> = ({ checkoutData, setCheckoutData }) => {
    const handleCountChange = (name: string, newCount: number) => {
        setCheckoutData(prev => ({
            ...prev,
            [name]: newCount
        }));
    };

    return (
        <div className="mealSelectionWrapper">
            <MealSelectionWrapper
                dataObj={AddonContentData}
                headetText="ADD ONS"
                // Pass Counter directly as the component and handle value passing
                inputComponent={
                    <Counter
                        onChange={handleCountChange}
                    />
                }
                onChange={handleCountChange}
                checkedValues={[]} // No checked values in this context
                componentType="counter"
                checkoutData={checkoutData}  // Make sure to pass checkoutData here
            />
        </div>
    );
};

export { AddOnSelection };
