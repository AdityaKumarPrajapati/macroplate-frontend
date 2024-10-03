import React, { useState } from 'react';
import { InputField } from '../../../../../_metronic/utilityComponents/InputField';

interface PersonalInfoProps {
    checkoutData: Record<string, string>;
    setCheckoutData: React.Dispatch<React.SetStateAction<Record<string, string>>>;
    validationErrors: Record<string, string | null>;
    setValidationErrors: React.Dispatch<React.SetStateAction<Record<string, string | null>>>;
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({ checkoutData, setCheckoutData, validationErrors, setValidationErrors }) => {
    const [passwordData, setPasswordData] = useState({
        password: '',
        confirmPassword: '',
    });

    const handlePersonalInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        let formattedValue = value;
        if (name === 'phone') {
            const x = value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
            formattedValue = !x?.[2] ? x?.[1] || '' : `(${x[1]}) ${x[2]}${x[3] ? '-' + x[3] : ''}`;
        }

        if (name === 'password' || name === 'confirmPassword') {
            setPasswordData((prev) => ({ ...prev, [name]: formattedValue }));

            // Password validation
            if (name === 'password' && formattedValue.length < 6) {
                setValidationErrors((prev) => ({ ...prev, password: 'The password should be at least 6 characters.' }));
            } else if (name === 'confirmPassword' && formattedValue !== passwordData.password) {
                setValidationErrors((prev) => ({ ...prev, confirmPassword: 'Passwords do not match.' }));
            } else {
                setValidationErrors((prev) => ({ ...prev, [name]: null }));
            }
        } else {
            setCheckoutData((prev) => ({ ...prev, [name]: formattedValue }));
            setValidationErrors((prev) => ({ ...prev, [name]: null }));
        }
    };

    return (
        <div className="personalInfoWrapper">
            <p className="marginZero personalInfoText">PERSONAL INFO</p>
            <div className="step2InputBoxContainerWrapper">
                <InputField
                    placeHolder="First Name"
                    value={checkoutData.firstName || ''}
                    onChange={handlePersonalInfo}
                    validationError={validationErrors.firstName}
                    wrapperClass="personalInfoContainer"
                    name="firstName"
                    type="text"
                />
                <InputField
                    placeHolder="Last Name"
                    value={checkoutData.lastName || ''}
                    onChange={handlePersonalInfo}
                    validationError={validationErrors.lastName}
                    wrapperClass="personalInfoContainer"
                    name="lastName"
                    type="text"
                />
            </div>
            <div className="step2InputBoxContainerWrapper">
                <InputField
                    placeHolder="Password"
                    wrapperClass="personalInfoContainer"
                    name="password"
                    type="password"
                    value={passwordData.password}
                    onChange={handlePersonalInfo}
                    validationError={validationErrors.password}
                />
                <InputField
                    placeHolder="Confirm Password"
                    wrapperClass="personalInfoContainer"
                    type="password"
                    name="confirmPassword"
                    value={passwordData.confirmPassword}
                    onChange={handlePersonalInfo}
                    validationError={validationErrors.confirmPassword}
                />
            </div>
            <div className="step2InputBoxContainerWrapper">
                <InputField
                    placeHolder="Phone"
                    value={checkoutData.phone || ''}
                    onChange={handlePersonalInfo}
                    validationError={validationErrors.phone}
                    wrapperClass="personalInfoContainer phoneNumberContainer"
                    name="phone"
                    id="phone"
                    type="text"
                />
            </div>
        </div>
    );
};

export default PersonalInfo;
