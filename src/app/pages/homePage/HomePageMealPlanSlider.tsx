import React from "react";
import Slider from "react-slick";
import Image from 'next/image'; // Use Next.js Image component
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrowSvg } from "../../../_metronic/utilityComponents/NextArrowSvg";
import { PrevArrowSvg } from "../../../_metronic/utilityComponents/PrevArrowSvg";
import { MealPlanContent } from "../../../_metronic/assets/dataContentObjects/MealPlanContent";
import './styles/HomePageMealPlanSlider.css'; // Use CSS Modules for scoped styling
import { useSidebar } from "../../../_metronic/context/SidebarContext";

const HomePageMealPlanSlider = () => {
    const { toggleSidebar, checkoutData, setCheckoutData } = useSidebar();

    const selectVanity = (event: React.MouseEvent<HTMLButtonElement>) => {
        const vanityName = event.currentTarget.getAttribute("data-value");
        if (vanityName) {
            // Update checkoutData
            setCheckoutData((prevData: any) => {
                const updatedData = { ...prevData, vanityName };
                localStorage.setItem("checkoutData", JSON.stringify(updatedData));
                return updatedData;
            });
    
            // Toggle sidebar
            toggleSidebar();
        }
    };
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        nextArrow: <NextArrowSvg color = '#292D32' />,
        prevArrow: <PrevArrowSvg color = '#292D32' />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="slider-container container">
            <Slider {...settings}>
                {Object.keys(MealPlanContent).map((planKey) => {
                    const plan: any = MealPlanContent[planKey as keyof typeof MealPlanContent];
                    return (
                        <div className="homeMealPlanContainer" key={planKey}>
                            <div className="headerPlanSection">
                                <p className="headerPlan marginZero">{plan.header}</p>
                            </div>
                            <div className="top">
                                <div className="imagePlanSection">
                                    {/* <Image className='homeMealImage' src={plan.mealImg} alt={`${plan.header} Plan Image`} /> */}
                                    <img className="homeMealImage" src={plan.mealImg} alt={`${plan.header} Plan Image`} />
                                </div>
                                <div className="descriptionPlanSection">
                                    <p className="descriptionPlan marginZero">
                                        {plan.desc}
                                    </p>
                                </div>
                            </div>

                            <div className="bottom">
                                <div className="planContentSection">
                                    <div className="planContents">
                                        <div className="lunchDinnerSection">
                                            <div className="sectionContentsHeaderMeal"><span>Lunch / Dinner</span></div>
                                            <div className="nutritionsPlan d-flex justify-content-between">
                                                {Object.keys(plan.lunch).map((nutrient) => (
                                                    <div className="nutrientBoxPlan" key={nutrient}>
                                                        <div className="nutritionDescPlan">{nutrient}</div>
                                                        <div className="nutritionValuePlan">{plan.lunch[nutrient]}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="breakFastSection">
                                            <div className="sectionContentsHeaderMeal"><span>Breakfast</span></div>
                                            <div className="nutritionsPlan d-flex justify-content-between">
                                                {Object.keys(plan.breakfast).map((nutrient) => (
                                                    <div className="nutrientBoxPlan" key={nutrient}>
                                                        <div className="nutritionDescPlan">{nutrient}</div>
                                                        <div className="nutritionValuePlan">{plan.breakfast[nutrient]}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="sectionMacroDesc"><i>Average macronutrient content</i></div>
                                    </div>
                                </div>
                            </div>

                            <div className="planGetStartedSection">
                                <button
                                    type="button"
                                    className="d-flex justify-content-center startPlanBtn"
                                    data-value={plan.dataValue}
                                    onClick={selectVanity}
                                >
                                    GET STARTED
                                </button>
                            </div>
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
}

export { HomePageMealPlanSlider };
