import React from "react";
import { MealSelectionWrapper } from "../utilityComponents/MealSelectionWrapper";
import { AddonContentData } from "../../../../../_metronic/assets/dataContentObjects/AddonContent";
import { Counter } from "../../../../../_metronic/utilityComponents/Counter";
import { coffeePrice, juicePrice, proteinSmoothyPrice, proteinSnackPrice } from "../../../../../_metronic/utils/priceUtils";
import { CheckoutData } from "../../../../interfaceProps/dataInterface";

// Define types for props
// interface CheckoutData {
//     [key: string]: number; // Assuming that checkoutData contains numerical values for each add-on
// }

interface Props {
    checkoutData: CheckoutData;
    setCheckoutData: React.Dispatch<React.SetStateAction<CheckoutData>>;
}

const AddOnSelection: React.FC<Props> = ({ checkoutData, setCheckoutData }) => {
    const calculateAddOnPrice = (name: string, count: number) => {
        switch (name) {
            case "juice":
                return juicePrice({ ...checkoutData, juice: count });
            case "coffee":
                return coffeePrice({ ...checkoutData, coffee: count });
            case "proteinSmoothy":
                return proteinSmoothyPrice({ ...checkoutData, proteinSmoothy: count });
            case "snackProtein":
                return proteinSnackPrice({ ...checkoutData, snackProtein: count });
            default:
                return 0;
        }
    };

    const handleCountChange = (name: string, newCount: number) => {
        const updatedCheckoutData = {
            ...checkoutData,
            [name]: newCount
        };
        const updatedPrice = calculateAddOnPrice(name, newCount);

        setCheckoutData({
            ...updatedCheckoutData,
            [`${name}Price`]: updatedPrice
        });
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
