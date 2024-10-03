import React from 'react';
import { BreakfastContentData } from '../../../../../_metronic/assets/dataContentObjects/BreakfastContent';
import { MealSelectionWrapper } from '../utilityComponents/MealSelectionWrapper';
import { RadioButton } from '../../../../../_metronic/utilityComponents/RadioButton';
// import styles from '../../css/BreakfastSelection.module.css'; // Import CSS module

interface BreakfastSelectionProps {
    checkoutData: any; // Replace with the actual type for checkoutData
    setCheckoutData: React.Dispatch<React.SetStateAction<any>>;
    validationError: string | null;
    setValidationErrors: React.Dispatch<React.SetStateAction<Record<string, string | null>>>;
}

const BreakfastSelection: React.FC<BreakfastSelectionProps> = ({ checkoutData, setCheckoutData, validationError, setValidationErrors }) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedValue = e.target.value;
        setCheckoutData(prev => ({ ...prev, breakfastSelection: selectedValue }));
        setValidationErrors(prev => ({ ...prev, breakfastSelection: null }));
    };

    return (
        <div className="mealSelectionWrapper">
            {validationError && <p className="error-text marginZero">{validationError}</p>}
            <MealSelectionWrapper
                dataObj={BreakfastContentData}
                headetText='WOULD YOU LIKE BREAKFAST AS ONE MEAL?'
                inputComponent={<RadioButton name="breakfastSelection" />}
                onChange={handleChange}
                checkedValues={checkoutData.breakfastSelection} // Single selected value
            />
        </div>
    );
}

export { BreakfastSelection };
