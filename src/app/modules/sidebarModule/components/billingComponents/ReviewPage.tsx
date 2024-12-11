import React, { useEffect } from 'react';
import {
    getTotalAmount,
    mealPlanPrice,
    proteinSnackPrice,
    proteinSmoothyPrice,
    juicePrice,
    coffeePrice,
    getTotalAmountWithDeliveryFeeAndDiscount
} from '../../../../../_metronic/utils/priceUtils';
import '../../styles/ReviewPage.css'
import { TotalAmountCalculationWrapper } from '../../../../../_metronic/utilityComponents/TotalAmountCalculationWrapper';
import { CouponCodeInput } from '../../../../../_metronic/utilityComponents/CouponCodeInput';

interface CheckoutData {
    vanityName: string;
    mealPerDay: number;
    programLength: number;
    snackProtein?: boolean;
    proteinSmoothy?: boolean;
    juice?: boolean;
    coffee?: boolean;
}

interface ReviewPageProps {
    checkoutData: any;
    setCheckoutData: React.Dispatch<React.SetStateAction<any>>;
}

const ReviewPage: React.FC<ReviewPageProps> = ({ checkoutData, setCheckoutData }) => {
    const mealPlanPriceData = mealPlanPrice(checkoutData);
    const subTotalAmount = getTotalAmount(checkoutData);
    const totalAmountWithDeliveryFee = getTotalAmountWithDeliveryFeeAndDiscount(subTotalAmount, checkoutData.programLength, 6.80, 0);

    useEffect(() => {
        setCheckoutData((prev: any) => ({
            ...prev,
            subTotalAmount: parseFloat(subTotalAmount),
            totalAmount: totalAmountWithDeliveryFee
        }))
    }, [subTotalAmount, totalAmountWithDeliveryFee, setCheckoutData]);

    return (
        <div className="reviewScreenWrapperContainer">
            <div className="summaryContainer">
                <p className="marginZero">Summary</p>
            </div>

            <div className="calculationWrapper">
                <div className="reviewPageContainer">
                    <div className="reviewPageContentBox">
                        <div className="reviewContentTitleContainer">
                            <p className="reviewTitletext marginZero">Meal Plan</p>
                        </div>
                        <div className="reviewPlanContentConatiner">
                            <p className="reviewPlanContent marginZero">
                                {checkoutData.vanityName} - {checkoutData.mealPerDay} Per Day - {checkoutData.programLength} Days
                            </p>
                            <p className="reviewPlanContentPrice marginZero">${mealPlanPriceData}</p>
                        </div>
                    </div>

                    <hr />

                    {checkoutData.snackProtein !== 0 && (
                        <>
                            <div className="reviewPageContentBox">
                                <div className="reviewContentTitleContainer">
                                    <p className="reviewTitletext marginZero">Snack Plan</p>
                                </div>
                                <div className="reviewPlanContentConatiner">
                                    <p className="reviewPlanContent marginZero">
                                        Snacks - {checkoutData.mealPerDay} Per Day - {checkoutData.programLength} Days
                                    </p>
                                    <p className="reviewPlanContentPrice marginZero">${proteinSnackPrice(checkoutData)}</p>
                                </div>
                            </div>
                            <hr />
                        </>
                    )}

                    {checkoutData.proteinSmoothy !== 0 && (
                        <>
                            <div className="reviewPageContentBox">
                                <div className="reviewContentTitleContainer">
                                    <p className="reviewTitletext marginZero">Protein Smoothie</p>
                                </div>
                                <div className="reviewPlanContentConatiner">
                                    <p className="reviewPlanContent marginZero">
                                        Smoothies - {checkoutData.mealPerDay} Per Day - {checkoutData.programLength} Days
                                    </p>
                                    <p className="reviewPlanContentPrice marginZero">${proteinSmoothyPrice(checkoutData)}</p>
                                </div>
                            </div>
                            <hr />
                        </>
                    )}

                    {checkoutData.juice !== 0 && (
                        <>
                            <div className="reviewPageContentBox">
                                <div className="reviewContentTitleContainer">
                                    <p className="reviewTitletext marginZero">Cold Pressed Juice</p>
                                </div>
                                <div className="reviewPlanContentConatiner">
                                    <p className="reviewPlanContent marginZero">
                                        Juices - {checkoutData.mealPerDay} Per Day - {checkoutData.programLength} Days
                                    </p>
                                    <p className="reviewPlanContentPrice marginZero">${juicePrice(checkoutData)}</p>
                                </div>
                            </div>
                            <hr />
                        </>
                    )}

                    {checkoutData.coffee !== 0 && (
                        <>
                            <div className="reviewPageContentBox">
                                <div className="reviewContentTitleContainer">
                                    <p className="reviewTitletext marginZero">Cold Brew Coffee</p>
                                </div>
                                <div className="reviewPlanContentConatiner">
                                    <p className="reviewPlanContent marginZero">
                                        Coffees - {checkoutData.mealPerDay} Per Day - {checkoutData.programLength} Days
                                    </p>
                                    <p className="reviewPlanContentPrice marginZero">${coffeePrice(checkoutData)}</p>
                                </div>
                            </div>
                            <hr />
                        </>
                    )}
                </div>

                <div className="totalAmountAndCouponCodeWrapper">
                    <TotalAmountCalculationWrapper
                        subtotalAmount={subTotalAmount}
                        checkoutData={checkoutData}
                        dailyDeliveryFee="6.80"
                        totalAmount={totalAmountWithDeliveryFee}
                    />
                    <CouponCodeInput />
                </div>
            </div>
        </div>
    );
};

export { ReviewPage };
