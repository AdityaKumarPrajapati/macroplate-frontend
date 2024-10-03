import Image from "next/image";
import Ready1 from '../../../../public/images/ready1.png'; // Move images to the public folder
import Ready2 from '../../../../public/images/ready2.png';
import Ready3 from '../../../../public/images/ready3.png';
import './styles/ReadyEatComponent.css'; // Global CSS import (or use CSS Modules if preferred)

const ReadyEatComponent = () => {
    return (
        <div className="container readyEatContainer">
            <p className="readyEatText marginZero">READY TO EAT. STOP ANYTIME.</p>
            <div className="wrapper">
                <div className="readyEatSections">
                    <div className="imageSection">
                        {/* Use Next.js Image component for optimized image loading */}
                        {/* <Image src={ready3} alt="Ready3" layout="responsive" /> */}
                        <img src={Ready3} alt="Ready3" />
                    </div>
                    <div className="contentSection">
                        <p className="marginZero mealTitle">OUTSTANDING, BALANCED FOOD</p>
                        <p className="marginZero mealContent">
                            Delicious options created by award-winning LA-based chefs using only
                            locally-grown California ingredients.
                        </p>
                    </div>
                </div>

                <div className="readyEatSections">
                    <div className="imageSection">
                        {/* <Image src={ready2} alt="Ready2" layout="responsive" /> */}
                        <img src={Ready2} alt="Ready2" />
                    </div>
                    <div className="contentSection">
                        <p className="marginZero mealTitle">PERSONAL CHEF MEETS NUTRITIONIST</p>
                        <p className="marginZero mealContent">
                            Each plan is based around your health goals. and designed alongside nutritionists
                            and personal trainers.
                        </p>
                    </div>
                </div>

                <div className="readyEatSections">
                    <div className="imageSection">
                        {/* <Image src={ready1} alt="Ready1" layout="responsive" /> */}
                        <img src={Ready1} alt="Ready1" />
                    </div>
                    <div className="contentSection">
                        <p className="marginZero mealTitle">DELIVERED DAILY TO YOUR DOOR</p>
                        <p className="marginZero mealContent">
                            We are the only meal company offering daily delivery because we believe in raising
                            the standards.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { ReadyEatComponent };
