import React from "react";
import { IngrediantExclusionsContentData } from "../../../../../_metronic/assets/dataContentObjects/IngrediantExclusionsContent";
import AccordionComponent from "../../../../../_metronic/utilityComponents/AccordionComponent";
import { MealSelectionWrapper } from "../utilityComponents/MealSelectionWrapper";
import { InputField } from "../../../../../_metronic/utilityComponents/InputField";
// import styles from "@/styles/DietaryExclusions.module.css";
import '../../styles/DietaryExclusions.css'
import { CheckoutData } from "../../../../interfaceProps/dataInterface";

// Define the CheckoutData type
// interface CheckoutData {
//     allergies: string[];
//     dietary: string[];
//     allergyNotes?: string;
// }

interface DietaryExclusionsProps {
    checkoutData: CheckoutData;
    setCheckoutData: React.Dispatch<React.SetStateAction<CheckoutData>>;
}

const DietaryExclusions: React.FC<DietaryExclusionsProps> = ({ checkoutData, setCheckoutData }) => {
    // Define the type for acc, which is a map of dataValue to label
    const valueToLabelMap = IngrediantExclusionsContentData.reduce((acc: any, category: any) => {
        Object.values(category).flat().forEach((item: any) => {
            acc[item.dataValue] = item.label;
        });
        return acc;
    }, {} as Record<string, string>);  // Initialize acc as an empty object with the correct type

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedValue = e.target.value;
        setCheckoutData((prev: CheckoutData) => {
            const isSelected = prev.allergies.includes(selectedValue);
            const newPreferences = isSelected
                ? prev.allergies.filter(item => item !== selectedValue)
                : [...prev.allergies, selectedValue];
            return { ...prev, allergies: newPreferences };
        });
    };

    const handleAllergyNotesChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const allergyNotes = e.target.value;
        setCheckoutData((prev: CheckoutData) => ({ ...prev, allergyNotes }));
    };

    const selectedLabels = checkoutData.allergies.map(value => valueToLabelMap[value] || value);

    return (
        <div className="mealSelectionWrapper dietaryExclusionsWrapper">
            <MealSelectionWrapper
                dataObj={IngrediantExclusionsContentData}
                headetText='INDIVIDUAL INGREDIENT EXCLUSIONS'
                inputComponent={<AccordionComponent />}
                onChange={handleChange}
                componentType='accordion'
                checkoutData={checkoutData}
            />
            <InputField
                placeHolder='Meal Preferences'
                value={checkoutData.allergyNotes}
                onChange={handleAllergyNotesChange}
                wrapperClass='mealPreferenceTextareaWrapper'
                id='food_preferences'
                type='textarea'
            />
            <span className="selectedAllergyLabels">
                {selectedLabels.join(', ')}
            </span>
        </div>
    );
};

export { DietaryExclusions };
