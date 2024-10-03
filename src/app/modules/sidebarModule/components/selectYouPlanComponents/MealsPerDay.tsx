// src/components/SideBar/components/MealsPerDay.tsx
import React from 'react';
import { MealPerDayContentData } from '../../../../../_metronic/assets/dataContentObjects/MealPerDayContent';
import { MealSelectionWrapper } from '../utilityComponents/MealSelectionWrapper';
import { RadioButton } from '../../../../../_metronic/utilityComponents/RadioButton';
// import styles from '../../css/MealsPerDay.module.css'; // Use CSS Modules

interface MealsPerDayProps {
    checkoutData: {
        mealPerDay: string; // Assuming it's a string; adjust type as needed
    };
    setCheckoutData: React.Dispatch<React.SetStateAction<any>>;
    validationError: string | null;
    setValidationErrors: React.Dispatch<React.SetStateAction<Record<string, string | null>>>;
}

const MealsPerDay: React.FC<MealsPerDayProps> = ({ checkoutData, setCheckoutData, validationError, setValidationErrors }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedValue = e.target.value; // Capture the selected value
        setCheckoutData((prev: any) => ({ ...prev, mealPerDay: selectedValue })); // Update the selected value
        setValidationErrors((prev: any) => ({ ...prev, mealPerDay: null })); // Clear error if selected
    };

    return (
        <div className='mealSelectionWrapper'>
            <MealSelectionWrapper
                dataObj={MealPerDayContentData}
                headetText="MEALS PER DAY"
                inputComponent={<RadioButton name="mealsPerDay" />}
                onChange={handleChange}
                checkedValues={checkoutData.mealPerDay} // Pass the current selected value (not an array)
            />
            {validationError && <p className='error-text'>{validationError}</p>}
        </div>
    );
};

export { MealsPerDay };
