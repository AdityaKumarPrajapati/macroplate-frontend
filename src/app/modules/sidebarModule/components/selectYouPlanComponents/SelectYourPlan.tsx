import React, { useState } from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import { SelectYourPlanContentData } from '../../../../../_metronic/assets/dataContentObjects/SelectYourPlanContentData';
import '../../styles/SelectYourPlan.css';
import SeeDetails from '../../../../pages/seeDetails/SeeDetails';

interface SelectYourPlanProps {
    checkoutData: any;
    setCheckoutData: React.Dispatch<React.SetStateAction<any>>;
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

const SelectYourPlan: React.FC<SelectYourPlanProps> = ({
    checkoutData, setCheckoutData, validationError, setValidationErrors
}) => {
    const [showDetails, setShowDetails] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const handleChange = (selectedValue: string) => {
        setCheckoutData((prev: any) => ({ ...prev, vanityName: selectedValue }));
        setValidationErrors((prev: any) => ({ ...prev, vanityName: null }));
    };

    const handleSeeDetailsClick = (plan: string) => {
        setSelectedPlan(plan);
        setShowDetails(true);
        const index = Object.keys(SelectYourPlanContentData).indexOf(plan);
        setActiveIndex(index);
    };

    const handleClose = () => setShowDetails(false);

    const chunkedData = chunkArray(Object.entries(SelectYourPlanContentData), 2);

    return (
        <>
            <div className="selectPlanImageWrapper">
                {validationError && <p className="error-text">{validationError}</p>}
                {chunkedData.map((chunk, chunkIndex) => (
                    <div key={chunkIndex} className="gy-4 selectYouPlanWrapper">
                        {chunk.map(([key, item]) => {
                            const isSelected = checkoutData.vanityName === item.dataValue;
                            const isUnselected = checkoutData.vanityName && checkoutData.vanityName !== item.dataValue;

                            return (
                                <Col key={key} className={ `planImageCardWrapper ${key == 'vegetarian' ? 'col-md-6' : ''}` }>
                                    <Card
                                        className={`checkoutCard ${
                                            isSelected ? 'border-success selected' : isUnselected ? 'unselected' : ''
                                        }`}
                                        onClick={() => handleChange(item.dataValue)}
                                    >
                                        <Card.Img
                                            variant="top"
                                            src={item.imageSource}
                                            alt={item.planName}
                                            className={isUnselected ? 'dimmed-image' : ''}
                                        />
                                        <Card.Body className="text-center">
                                            <Card.Title className="planName">{item.planName}</Card.Title>
                                            <Button
                                                variant="link"
                                                className="seeDetails"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleSeeDetailsClick(key);
                                                }}
                                            >
                                                See Details
                                            </Button>
                                        </Card.Body>
                                        {/* The Checkmark */}
                                        {isSelected && (
                                            <div className="selected-checkmark">
                                                <span className="checkmark-icon">✔</span>
                                            </div>
                                        )}
                                    </Card>
                                </Col>
                            );
                        })}
                    </div>
                ))}
            </div>
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
