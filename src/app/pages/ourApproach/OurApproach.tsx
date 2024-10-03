import { OurApproachTitle } from './OurApproachTitle';
import { OurApproachContetntData } from '../../../_metronic/assets/dataContentObjects/ourPageDataContent';
import { Nutritionist } from '../homePage/Nutritionist';
import './styles/OurApproach.css';
import { FaqAccordionWrapper } from '../../../_metronic/utilityComponents/FaqAccordionWrapper';
import { homePageFaqContentData } from '../../../_metronic/assets/dataContentObjects/homePageFaqContent';

const OurApproach = () => {
    return (
        <div className="">
            <OurApproachTitle />

            {Object.entries(OurApproachContetntData).map(([key, item], index) => (
                <div key={key} className={`${key} container`}>
                    <div className={item.imageClassName}>
                        <h3 className="imageText marzingZero paddingZero">{item.imageTitle}</h3>
                    </div>
                    <div className="sustainableContent">
                        <div className="sustainableLeft">
                            <p className="sustainableLeftText marginZero paddingZero">
                                {item.leftText}
                            </p>
                        </div>
                        <div className="sustainableRight marginZero paddingZero">
                            {item.rightText}
                        </div>
                    </div>
                </div>
            ))}

            <div className="ourApproachTittle">
                <h2 className="marginZero paddingZero ourApproachHeading">Nutrition Philosophy</h2>
                <div className="ourApproachDescription marginZero paddingZero">
                    <p className="marginZero paddingZero">We believe in a whole foods, nutrient rich and flexible diet.</p>
                    <p className="marginZero paddingZero">It’s not so much the foods you should avoid, it’s more about the foods you must consume for optimal health and performance.</p>
                </div>
            </div>
            <div className="nutritionPillarsWrapper container">
                <h2 className="marginZero paddingZero nutritionPillarsHeading">MacroPlate Nutrition Pillars</h2>

                <div className="leftBoxCard">
                    <div className="leftBox marzingZero paddingZero">
                        <div className="leftBoxContent">
                            <div className="leftBoxPiller">
                                <div className="leftBoxInnerText1">Moderation <span>over</span> Restriction</div>
                                <div className="leftBoxInnerText2">Focus on the foods you should consume rather than foods you should avoid. We believe in a balanced approach to eating by prioritizing moderation rather than restrictive diets. This approach fosters a sustainable and positive relationship with food.</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <FaqAccordionWrapper dataObj={homePageFaqContentData} />
            <Nutritionist />
        </div>
    );
}

export { OurApproach };
