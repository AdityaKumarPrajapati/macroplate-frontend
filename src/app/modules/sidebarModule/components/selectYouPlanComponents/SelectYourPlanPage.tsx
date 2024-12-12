// src/components/SideBar/components/SelectYourPlanPage/SelectYourPlanPage.tsx
import React from 'react';
import { SelectYourPlan } from './SelectYourPlan';
import { MealSelection } from './MealSelection';
import { InputField } from '../../../../../_metronic/utilityComponents/InputField';
import { CheckoutData } from '../../../../interfaceProps/dataInterface';

// Define types for checkoutData and validationErrors
// interface CheckoutData {
//     vanityName: string;
//     email: string;
//     zipCode: string;
//     [key: string]: any; // Add other properties as needed
// }

interface ValidationErrors {
    vanityName?: string;
    email?: string;
    zipCode?: string;
    [key: string]: any; // Add other properties as needed
}

interface SelectYourPlanPageProps {
    checkoutData: CheckoutData;
    setCheckoutData: React.Dispatch<React.SetStateAction<CheckoutData>>;
    validationErrors: ValidationErrors;
    setValidationErrors: React.Dispatch<React.SetStateAction<ValidationErrors>>;
}

const SelectYourPlanPage: React.FC<SelectYourPlanPageProps> = ({
    checkoutData,
    setCheckoutData,
    validationErrors,
    setValidationErrors,
}) => {
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const email = e.target.value;
        setCheckoutData((prev: CheckoutData) => ({
            ...prev,
            email,
        }));
        setValidationErrors((prev: ValidationErrors) => ({
            ...prev,
            email: null,
        }));
    };

    const handleZipCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const zipCode = e.target.value;
        setCheckoutData((prev: CheckoutData) => ({
            ...prev,
            zipCode,
        }));
        setValidationErrors((prev: ValidationErrors) => ({
            ...prev,
            zipCode: null,
        }));
    };

    return (
        <>
            <SelectYourPlan
                checkoutData={checkoutData}
                setCheckoutData={setCheckoutData}
                validationError={validationErrors.vanityName ?? ''}
                setValidationErrors={setValidationErrors}
            />
            <div className="mealDay">
                <MealSelection
                    checkoutData={checkoutData}
                    setCheckoutData={setCheckoutData}
                    validationErrors={validationErrors}
                    setValidationErrors={setValidationErrors}
                />
                <hr />
                <InputField
                    placeHolder='Email Address'
                    value={checkoutData.email || ''}
                    onChange={handleEmailChange}
                    validationError={validationErrors.email}
                    wrapperClass='selectEmailWrapper'
                    name='email'
                    id='email_field'
                    type='text'
                />
                <InputField
                    placeHolder='ZIP Code'
                    value={checkoutData.zipCode}
                    onChange={handleZipCodeChange}
                    validationError={validationErrors.zipCode}
                    wrapperClass='selectEmailWrapper'
                    name='zipCode'
                    id='zip_code_field' // Fixed the id here
                    type='text'
                />
            </div>
        </>
    );
};

export { SelectYourPlanPage };
