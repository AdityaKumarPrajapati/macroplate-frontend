import React from 'react';
import { ProgramLengthContentData } from '../../../../../_metronic/assets/dataContentObjects/ProgramLengthContent';
import { MealSelectionWrapper } from '../utilityComponents/MealSelectionWrapper';
import { RadioButton } from '../../../../../_metronic/utilityComponents/RadioButton';
// import styles from '../../css/ProgramLength.module.css'; // Import CSS module

interface ProgramLengthProps {
    checkoutData: any; // Update with the actual type of checkoutData
    setCheckoutData: React.Dispatch<React.SetStateAction<any>>;
    validationError: string | null;
    setValidationErrors: React.Dispatch<React.SetStateAction<Record<string, string | null>>>;
}

const ProgramLength: React.FC<ProgramLengthProps> = ({ checkoutData, setCheckoutData, validationError, setValidationErrors }) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedValue = e.target.value;
        setCheckoutData(prev => ({ ...prev, programLength: selectedValue }));
        setValidationErrors(prev => ({ ...prev, programLength: null }));
    };

    return (
        <div className='mealSelectionWrapper'>
            <MealSelectionWrapper
                dataObj={ProgramLengthContentData}
                headetText='PROGRAM LENGTH'
                inputComponent={<RadioButton name="programLength" />}
                onChange={handleChange}
                checkedValues={checkoutData.programLength}  // Single selected value
            />
            {validationError && <p className='error-text'>{validationError}</p>}
        </div>
    );
};

export { ProgramLength };
