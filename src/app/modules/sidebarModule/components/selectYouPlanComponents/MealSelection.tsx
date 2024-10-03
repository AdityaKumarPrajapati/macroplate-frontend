import React from 'react';
import { MealsPerDay } from './MealsPerDay';
import { ProgramLength } from './ProgramLength';
import { BreakfastSelection } from './BreakfastSelection';
import { DietaryPreferencesSelection } from './DietaryPreferencesSelection';
import { AddOnSelection } from './AddOnSelection';
import { DietaryExclusions } from './DietaryExclusions';
// import styles from '../../css/MealSelection.module.css'; // Import CSS modules

interface MealSelectionProps {
    checkoutData: any; // Adjust this type based on your checkoutData structure
    setCheckoutData: React.Dispatch<React.SetStateAction<any>>;
    validationErrors: Record<string, string | null>;
    setValidationErrors: React.Dispatch<React.SetStateAction<Record<string, string | null>>>;
}

const MealSelection: React.FC<MealSelectionProps> = ({ checkoutData, setCheckoutData, validationErrors, setValidationErrors }) => {
    return (
        <div className='mealDaySelectionContainer'>
            <MealsPerDay
                checkoutData={checkoutData}
                setCheckoutData={setCheckoutData}
                validationError={validationErrors.mealsPerDay}
                setValidationErrors={setValidationErrors}
            />
            <hr />
            <ProgramLength
                checkoutData={checkoutData}
                setCheckoutData={setCheckoutData}
                validationError={validationErrors.programLength}
                setValidationErrors={setValidationErrors}
            />
            <hr />
            <BreakfastSelection
                checkoutData={checkoutData}
                setCheckoutData={setCheckoutData}
                validationError={validationErrors.breakfastSelection}
                setValidationErrors={setValidationErrors}
            />
            <hr />
            <DietaryPreferencesSelection
                checkoutData={checkoutData}
                setCheckoutData={setCheckoutData}
            // Uncomment and add validation if needed
            // validationError={validationErrors.dietaryPreferences}
            // setValidationErrors={setValidationErrors}
            />
            <hr />
            <DietaryExclusions
                checkoutData={checkoutData}
                setCheckoutData={setCheckoutData}
            />
            <hr />
            <AddOnSelection
                checkoutData={checkoutData}
                setCheckoutData={setCheckoutData}
            />
        </div>
    );
};

export { MealSelection };
