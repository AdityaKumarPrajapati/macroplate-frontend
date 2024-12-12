export interface CheckoutData {
    vanityName: string;
    mealPerDay: string;
    programLength: string;
    breakfast: string;
    dietary: string[];
    allergies: string[];
    allergyNotes: string;

    snackProtein: number;
    snackPrice: number;
    snackPlanId: string;

    proteinSmoothy: number;
    proteinSmoothyPrice: number;
    proteinSmoothyPlanId: string;

    juice: number;
    juicePrice: number;
    juicePlanId: string;

    coffee: number;
    coffeePrice: number;
    coffeePlanId: string;

    email: string;
    zipCode: string;
    firstName: string;
    lastName: string;
    phone: string;
    address: string;
    suite: string;
    city: string;
    state: string;
    deliveryNotes: string;
    firstDeliveryDate: string;

    billingAddress: string;
    billingSuite: string;
    billingCity: string;
    billingState: string;
    billingZipCode: string;

    planId: string;
    stripeToken: string;
    invitationCode: string;
    invitationReferralCode: string;

    planAmount: number;
    carbs: string;
    protein: string;
    fat: string;
    googleAddress: string;

    marketingSource: string[];
    samecheck: string;
    isAddressSameCheckByUser: boolean;
    acceptTnc: boolean;

    couponCode: string;
    couponValue: number;
    remainingCreditBalance: number;
    subTotalAmount: number;
    totalAmount: number;
    dailyDeliveryFee: number;
    deliveryAmount: number;
    discountCouponAmount: number;
    discountCouponName: string;
    discountCouponType: string;
    isCouponApplied: boolean;
    totalAmountAfterDiscount: number;

    cityNameByZipCode: string | null;
}