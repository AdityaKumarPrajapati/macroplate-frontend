import React from "react";
import Image from 'next/image';
import { useSidebar } from "../../../_metronic/context/SidebarContext";
import Icon1 from '../../../../public/images/createdbychefs_1.png'
import Icon2 from '../../../../public/images/portioncontrolled_1.png'
import Icon3 from '../../../../public/images/locallysourced_1.png'
import Icon4 from '../../../../public/images/dailydelivery_1.png'
// Import global CSS or convert to CSS module
import './styles/Nutritionist.css'; // Use global CSS or convert to CSS modules

// Updated image paths from the public folder
const Nutritionist = () => {
    const { toggleSidebar } = useSidebar();

    return (
        <section className="nutritionWrapper">
            <div className="nutritionContainer">
                <div className="nutritionContentContainer container">
                    <div className="personalChefContainer">
                        <div className="personalChefContentContainer">
                            <div className="personalChefContentSection1">
                                <p className="marginZero presonalChefText">Personal Chef meets Nutritionist.</p>
                                <button onClick={toggleSidebar}>GET STARTED</button>
                            </div>

                            <div className="personalChefContentSection2">
                                <div className="personalChefIconSection">
                                    {/* Use Next.js Image component for optimized images */}
                                    {/* <Image className="personalChefIconImage" src="/images/createdbychefs_1.png" alt="Created by Chef" width={50} height={50} /> */}
                                    <img className="personalChefIconImage" src={Icon1}></img>
                                    <p className="marginZero personalChefIconText">CREATED BY CHEF</p>
                                </div>

                                <div className="personalChefIconSection">
                                    {/* <Image className="personalChefIconImage" src="/images/portioncontrolled_1.png" alt="Portion Controlled" width={50} height={50} /> */}
                                    <img className="personalChefIconImage" src={Icon2}></img>
                                    <p className="marginZero personalChefIconText">PORTION CONTROLLED</p>
                                </div>

                                <div className="personalChefIconSection">
                                    {/* <Image className="personalChefIconImage" src="/images/locallysourced_1.png" alt="Locally Sourced" width={50} height={50} /> */}
                                    <img className="personalChefIconImage" src={Icon3}></img>
                                    <p className="marginZero personalChefIconText">LOCALLY SOURCED</p>
                                </div>

                                <div className="personalChefIconSection">
                                    {/* <Image className="personalChefIconImage" src="/images/dailydelivery_1.png" alt="Daily Delivery" width={50} height={50} /> */}
                                    <img className="personalChefIconImage" src={Icon4}></img>
                                    <p className="marginZero personalChefIconText">DAILY DELIVERY</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export { Nutritionist };
