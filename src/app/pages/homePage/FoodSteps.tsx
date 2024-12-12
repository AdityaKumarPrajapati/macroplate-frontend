// import { ChoosePlanSvg } from "../../../_metronic/utilityComponents/choosePlanSvg";
// import { HeatAndEnjoySvg } from "../../../_metronic/utilityComponents/heatAndEnjoySvg";
// import { WeDeliverSvg } from "../../../_metronic/utilityComponents/weDeliverSvg";
// import { WePrepSvg } from "../../../_metronic/utilityComponents/wePrepSvg";
import { ChoosePlanSvg } from '../../../_metronic/utilityComponents/ChoosePlanSvg';
import { HeatAndEnjoySvg } from '../../../_metronic/utilityComponents/HeatAndEnjoySvg';
import { WeDeliverSvg } from '../../../_metronic/utilityComponents/WeDeliverSvg';
import { WePrepSvg } from '../../../_metronic/utilityComponents/WePrepSvg';
import './styles/FoodSteps.css'

const FoodSteps = () => {
    return (
        <div className="foodStepsContainer">
            <div className="foodStepsWrapper container">
                    <span className="lineBullets"></span>
                <div className="foodStepsLine">
                    <div className="iconDetailContainer">
                        <div className="iconContainer">
                            <ChoosePlanSvg />
                            <p className="marginZero paddingZero">CHOOSE A PLAN</p>
                        </div>
                    </div>

                    <div className="iconDetailContainer">
                        <div className="iconContainer">
                            <WePrepSvg />
                            <p className="marginZero paddingZero">WE PREP</p>
                        </div>
                    </div>

                    <div className="iconDetailContainer">
                        <div className="iconContainer">
                            <WeDeliverSvg />
                            <p className="marginZero paddingZero">WE DELIVER</p>
                        </div>
                    </div>

                    <div className="iconDetailContainer">
                        <div className="iconContainer">
                            <HeatAndEnjoySvg />
                            <p className="marginZero paddingZero">HEAT & ENJOY</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { FoodSteps }