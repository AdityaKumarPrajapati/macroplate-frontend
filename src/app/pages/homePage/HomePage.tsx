import { homePageFaqContentData } from '../../../_metronic/assets/dataContentObjects/homePageFaqContent';
import { FaqAccordionWrapper } from '../../../_metronic/utilityComponents/FaqAccordionWrapper';
import { CustomerImage } from './CustomerImage';
import { CustomerSay } from './CustomerSay';
import { FoodSteps } from './FoodSteps';
import { HomePageBanner } from './HomePageBanner';
import { HomePageMealPlanSlider } from './HomePageMealPlanSlider';
import { MealPlanSliderDesc } from './MealPlanSliderDesc';
import { Nutritionist } from './Nutritionist';
import { ReadyEatComponent } from './ReadyEatComponent';
import './styles/Home.css'

const HomePage = () => {
    return (
        <>
            <div className="home">
                <HomePageBanner />
                <ReadyEatComponent />
                <CustomerSay />
                <div className="mealPlanHowItWorksContainer">
                    <MealPlanSliderDesc />
                    <HomePageMealPlanSlider />
                </div>
                <CustomerImage />
                <FoodSteps />
                <FaqAccordionWrapper dataObj={homePageFaqContentData} />
                <Nutritionist />
            </div>
        </>
    );
}

export { HomePage };
