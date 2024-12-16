import React, { useState, useEffect } from 'react';
import { Offcanvas, Carousel } from 'react-bootstrap';
import { SelectYourPlanContentData } from '../../../_metronic/assets/dataContentObjects/SelectYourPlanContentData';
// import { SelectYourPlanContentData } from '../../../../../_metronic/assets/dataContentObjects/SelectYourPlanContentData';

interface SeeDetailsProps {
    planName: string | null;
    show: boolean;
    onClose: () => void;
    activeIndex: number;
}

const SeeDetails: React.FC<SeeDetailsProps> = ({ planName, show, onClose, activeIndex }) => {
    const [currentActiveIndex, setCurrentActiveIndex] = useState<number>(activeIndex);
    const [currentPlanName, setCurrentPlanName] = useState<string | null>(planName);

    const handleSelect = (selectedIndex: number) => {
        setCurrentActiveIndex(selectedIndex); // Update active index when carousel slides change
    };

    // Update the current plan name whenever the activeIndex changes
    useEffect(() => {
        const planDetails = Object.values(SelectYourPlanContentData);
        setCurrentPlanName(planDetails[currentActiveIndex]?.planName || null); // Update the plan name
    }, [currentActiveIndex]);

    useEffect(() => {
        setCurrentActiveIndex(activeIndex); // Sync activeIndex prop when the parent updates it
    }, [activeIndex]);

    const planDetails = Object.values(SelectYourPlanContentData);

    return (
        <Offcanvas show={show} onHide={onClose} placement="end" backdrop={false} style={{ maxWidth: '554px', width: '100%' }}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>{currentPlanName ? currentPlanName.toUpperCase() : ''} Plan Details</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Carousel activeIndex={currentActiveIndex} onSelect={handleSelect} indicators={false}>
                    {planDetails.map((item, index) => (
                        <Carousel.Item key={index}>
                            <img className="d-block w-100" src={item.imageSource} alt={item.planName} />
                            <Carousel.Caption>
                                <h5>{item.planName}</h5>
                                <p>{`Description for ${item.planName}`}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default SeeDetails;
