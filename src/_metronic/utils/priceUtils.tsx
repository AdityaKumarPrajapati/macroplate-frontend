// utils/priceUtils.ts
import { basePlanAmount, addonPrice } from '../config/basePlanAmount';
import { CheckoutData } from '../../app/interfaceProps/dataInterface';

export const getTotalAmount = (checkoutData: CheckoutData): string => {
    let totalAmount = 0;

    // Base plan amount calculation
    if (checkoutData.vanityName) {
        totalAmount += mealPlanPrice(checkoutData);
    }

    // Add-on calculations
    if (checkoutData.snackProtein) {
        totalAmount += proteinSnackPrice(checkoutData);
    }

    if (checkoutData.proteinSmoothy) {
        totalAmount += proteinSmoothyPrice(checkoutData);
    }

    if (checkoutData.juice) {
        totalAmount += juicePrice(checkoutData);
    }

    if (checkoutData.coffee) {
        totalAmount += coffeePrice(checkoutData);
    }

    // Return the total amount formatted to always show two decimal places
    return totalAmount.toFixed(2);
}

export const mealPlanPrice = (checkoutData: CheckoutData): any => {
    if (checkoutData.vanityName) {
        return (basePlanAmount[checkoutData.vanityName].price *
            (parseInt(checkoutData.mealPerDay) * parseInt(checkoutData.programLength)) / 100);
    }
}

export const proteinSnackPrice = (checkoutData: CheckoutData): any => {
    if (checkoutData.snackProtein) {
        return (checkoutData.snackProtein * addonPrice.snackProtein.price *
            parseInt(checkoutData.programLength) / 100);
    }
}

export const proteinSmoothyPrice = (checkoutData: CheckoutData): any => {
    if (checkoutData.proteinSmoothy) {
        return (checkoutData.proteinSmoothy * addonPrice.proteinSmoothy.price *
            parseInt(checkoutData.programLength) / 100);
    }
}

export const juicePrice = (checkoutData: CheckoutData): any => {
    if (checkoutData.juice) {
        return (checkoutData.juice * addonPrice.juice.price *
            parseInt(checkoutData.programLength) / 100);
    }
}

export const coffeePrice = (checkoutData: CheckoutData): any => {
    if (checkoutData.coffee) {
        return (checkoutData.coffee * addonPrice.coffee.price *
            parseInt(checkoutData.programLength) / 100);
    }
}

export const getTotalAmountWithDeliveryFeeAndDiscount = (
    subTotalAmount: string,
    programLength: number,
    dailyDeliveryFee: any,
    discount: number
): number => {
    return parseFloat(subTotalAmount) + (parseFloat(dailyDeliveryFee) * programLength);
}
