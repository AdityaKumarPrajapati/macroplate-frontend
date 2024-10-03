import React, { useEffect } from 'react';
import { DietaryPreferencesContentData } from '../../../../../_metronic/assets/dataContentObjects/DietaryPreferencesContent';
import { MealSelectionWrapper } from '../utilityComponents/MealSelectionWrapper';
import { CheckboxButton } from '../../../../../_metronic/utilityComponents/CheckboxButton';
import { dietaryPreferenceRules } from '../../../../rules/dietaryPreferenceRules';
// import styles from '../../css/DietaryPreferencesSelection.module.css'; // Import CSS module

// Define the type for checkoutData
interface CheckoutData {
    dietary: string[];
    allergies: string[];
    [key: string]: any; // This allows for additional properties if necessary
}

interface DietaryPreferencesSelectionProps {
    checkoutData: CheckoutData;
    setCheckoutData: React.Dispatch<React.SetStateAction<CheckoutData>>;
}

const DietaryPreferencesSelection: React.FC<DietaryPreferencesSelectionProps> = ({ checkoutData, setCheckoutData }) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedValue = e.target.value;
        setCheckoutData((prev: CheckoutData) => {
            const isSelected = prev.dietary.includes(selectedValue);
            const newPreferences = isSelected
                ? prev.dietary.filter((item: string) => item !== selectedValue)
                : [...prev.dietary, selectedValue];
            const updatedAllergies = updateAllergies(newPreferences);

            return {
                ...prev,
                dietary: newPreferences,
                allergies: updatedAllergies,
            };
        });
    };

    const updateAllergies = (preferences: string[]) => {
        let allergies: string[] = [];

        preferences.forEach(pref => {
            if (dietaryPreferenceRules[pref]) {
                allergies = [...allergies, ...dietaryPreferenceRules[pref]];
            }
        });

        return allergies;
    };

    useEffect(() => {
        const initialAllergies = updateAllergies(checkoutData.dietary);
        setCheckoutData(prev => ({
            ...prev,
            allergies: initialAllergies
        }));
    }, [checkoutData.dietary, setCheckoutData]);

    return (
        <div className='mealSelectionWrapper'>
            <MealSelectionWrapper
                dataObj={DietaryPreferencesContentData}
                headetText="PRE-SET DIETARY PREFERENCES"
                inputComponent={<CheckboxButton />}
                onChange={handleChange}
                checkedValues={checkoutData.dietary} // Array of selected values
            />
            {/* {validationError && <p className="error-text">{validationError}</p>} */}
        </div>
    );
}

export { DietaryPreferencesSelection };
