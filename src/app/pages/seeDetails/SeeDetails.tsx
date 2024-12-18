import React, { useState, useEffect } from 'react';
import { Offcanvas, Carousel, Card, Button } from 'react-bootstrap';
import { MealPlanContent, MealPlan } from '../../../_metronic/assets/dataContentObjects/MealPlanContent';
import { PrevArrowSvg } from '../../../_metronic/utilityComponents/PrevArrowSvg';
import { NextArrowSvg } from '../../../_metronic/utilityComponents/NextArrowSvg';
import './styles/SeeDetails.css';
import { useSidebar } from '../../../_metronic/context/SidebarContext';

interface SeeDetailsProps {
    planName: string;
    show: boolean;
    onClose: () => void;
    activeIndex: number;
}

const SeeDetails: React.FC<SeeDetailsProps> = ({ show, onClose, activeIndex }) => {
    const [currentActiveIndex, setCurrentActiveIndex] = useState<number>(activeIndex);
    const { setCheckoutData } = useSidebar();

    const handleSelect = (selectedIndex: number) => {
        setCurrentActiveIndex(selectedIndex);
    };

    useEffect(() => {
        setCurrentActiveIndex(activeIndex);
    }, [activeIndex]);

    const planDetails = Object.values(MealPlanContent);

    const handleGetStarted = (vanityName: string) => {
        if (vanityName) {
            // Update checkoutData
            setCheckoutData((prevData: any) => {
                const updatedData = { ...prevData, vanityName };
                localStorage.setItem("checkoutData", JSON.stringify(updatedData));
                return updatedData;
            });
            onClose();
        }
    };

    return (
        <Offcanvas show={show} onHide={onClose} placement="end" backdrop={false} style={{ maxWidth: '554px', width: '100%' }} scroll>
            {/* <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                    {planDetails[currentActiveIndex]?.header.toUpperCase() || ''}
                </Offcanvas.Title>
            </Offcanvas.Header> */}
            <Offcanvas.Body className='height100'>
                <div className="carousel-wrapper position-relative">
                    <Carousel
                        activeIndex={currentActiveIndex}
                        onSelect={handleSelect}
                        indicators={false}
                        interval={null}
                        className='height100'
                        prevIcon={
                            <PrevArrowSvg
                                className="custom-prev position-absolute top-50 translate-middle-y seeDetailsArrow"
                                onClick={() => handleSelect((currentActiveIndex - 1 + planDetails.length) % planDetails.length)}
                                color='#000'
                            />
                        }
                        nextIcon={
                            <NextArrowSvg
                                className="custom-next position-absolute top-50 translate-middle-y seeDetailsArrow"
                                onClick={() => handleSelect((currentActiveIndex + 1) % planDetails.length)}
                                color='#000'
                            />
                        }
                    >
                        {planDetails.map((item, index) => (
                            <Carousel.Item key={index} className='height100'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none" onClick={onClose} className="close-btn position-absolute">
                                    <path d="M1 12.3637L11.0499 1" stroke="#292D32" strokeWidth="0.831563" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M11.0499 12.3637L1 1" stroke="#292D32" strokeWidth="0.831563" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <Card>
                                    <Card.Img variant="top" src={item.mealImg} alt={item.header} />
                                    <Card.Body className="seeDetailsCardBody" style={{ background: '#fff' }}>
                                        <Card.Title className='seeDetailsCardHeader text-center'>{item.header}</Card.Title>
                                        <Card.Text className='seeDetailsDesc text-center'>{item.desc}</Card.Text>
                                        <div className='seeDetailsItemContainer'>
                                            <Card.Text className='marginZero'>Lunch / Dinner</Card.Text>
                                            <div className="nutritionsPlan d-flex justify-content-between">
                                                {Object.entries(item.lunch).map(([nutrient, value]) => (
                                                    <div className="nutrientBoxPlan" key={nutrient}>
                                                        <div className="nutritionDescPlan">{nutrient}</div>
                                                        <div className="nutritionValuePlan">{value}</div>
                                                    </div>
                                                ))}
                                            </div>
                                            <Card.Text className='marginZero'>Breakfast</Card.Text>
                                            <div className="nutritionsPlan d-flex justify-content-between">
                                                {Object.entries(item.breakfast).map(([nutrient, value]) => (
                                                    <div className="nutrientBoxPlan" key={nutrient}>
                                                        <div className="nutritionDescPlan">{nutrient}</div>
                                                        <div className="nutritionValuePlan">{value}</div>
                                                    </div>
                                                ))}
                                            </div>
                                            <Card.Text className='marginZero text-center avgMacroText'>Average Macronutrient Content</Card.Text>
                                            <Button
                                                variant="dark"
                                                size="lg"
                                                className='seeDetailsGetStartedBtn'
                                                onClick={() => handleGetStarted(item.dataValue)}
                                            >
                                                GET STARTED
                                            </Button>
                                        </div>
                                    </Card.Body>

                                </Card>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default SeeDetails;
