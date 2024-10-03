// types/checkoutData.ts
import { basePlanAmount } from '../config/basePlanAmount'; // Adjust the path as needed

export type PlanKey = keyof typeof basePlanAmount;

export interface CheckoutData {
    vanityName?: PlanKey;
    snackProtein?: number;
    proteinSmoothy?: number;
    juice?: number;
    coffee?: number;
    mealPerDay: number;
    programLength: number;
}
