import React, { useState } from 'react';
import { SelectYourPlanContentData } from '../../../../../_metronic/assets/dataContentObjects/SelectYourPlanContentData';
import { RadioButton } from '../../../../../_metronic/utilityComponents/RadioButton';
import '../../styles/SelectYourPlan.css'
import SeeDetails from '../../../../pages/seeDetails/SeeDetails';

interface SelectYourPlanProps {
    checkoutData: any; // Replace `any` with a more specific type
    setCheckoutData: React.Dispatch<React.SetStateAction<any>>; // Replace `any` with the specific type
    validationError: string | null;
    setValidationErrors: React.Dispatch<React.SetStateAction<Record<string, string | null>>>;
}

const chunkArray = <T,>(array: T[], chunkSize: number): T[][] => {
    const result: T[][] = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        result.push(array.slice(i, i + chunkSize));
    }
    return result;
};

const SelectYourPlan: React.FC<SelectYourPlanProps> = ({ checkoutData, setCheckoutData, validationError, setValidationErrors }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedValue = e.target.value;
        setCheckoutData((prev: any) => ({ ...prev, vanityName: selectedValue }));
        setValidationErrors((prev: any) => ({ ...prev, vanityName: null }));
    };

    const [showDetails, setShowDetails] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const handleSeeDetailsClick = (plan: string) => {
        setSelectedPlan(plan);
        setShowDetails(true);
        const index = Object.keys(SelectYourPlanContentData).indexOf(plan);  // Find the index of the selected plan
        setActiveIndex(index);
    };

    const handleClose = () => setShowDetails(false);

    const chunkedData = chunkArray(Object.entries(SelectYourPlanContentData), 2);

    return (
        <>
            <div className="selectPlanImageWrapper">
                {validationError && <p className="error-text">{validationError}</p>}
                {
                    chunkedData.map((chunk, chunkIndex) => (
                        <div key={chunkIndex} className="selectYouPlanWrapper">
                            {chunk.map(([key, item], itemIndex) => (
                                <div key={itemIndex} className="planImageCardWrapper">
                                    <div className={`checkoutCard ${checkoutData.vanityName === item?.dataValue ? 'selected' : checkoutData.vanityName === '' ? '' : 'notSelected'}`}>
                                        <figure className="marginZero selectPlanFigure">
                                            <img src={item?.imageSource} alt={item?.planName} className={`${checkoutData.vanityName === item?.dataValue ? 'selected' : checkoutData.vanityName === '' ? '' : 'notSelected'}`} />
                                            <div className="formCheck">
                                                <RadioButton
                                                    name='vanity'
                                                    id={item?.id}
                                                    value={item?.dataValue}
                                                    onChange={handleChange}
                                                    checked={Array.isArray(checkoutData.vanityName)
                                                        ? checkoutData.vanityName.includes(item?.dataValue)
                                                        : checkoutData.vanityName === item?.dataValue}
                                                    label=''
                                                />
                                            </div>
                                        </figure>
                                        <div className="cardDetails">
                                            <p className="marginZero planName">{item?.planName}</p>
                                            <a
                                                href="#"
                                                onClick={() => handleSeeDetailsClick(key)}
                                                className="seeDetails"
                                            >
                                                see details
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))
                }
            </div>
            {/* Reusable Plan Details Carousel */}
            <SeeDetails
                planName={selectedPlan}
                show={showDetails}
                onClose={handleClose}
                activeIndex={activeIndex}
            />
        </>
    );
};

export { SelectYourPlan };
