// config/basePlanAmount.ts
import { BasePlanAmount, AddonPrice } from '../types/prices';

// config/basePlanAmount.ts
export const basePlanAmount: BasePlanAmount = {
    trad: { price: 1400 },
    hp: { price: 1600 },
    paleo: { price: 1500 },
    paleolite: { price: 1400 },
    vegetarian: { price: 1400 },
};

export const addonPrice: AddonPrice = {
    snackProtein: { price: 300 },
    proteinSmoothy: { price: 700 },
    juice: { price: 725 },
    coffee: { price: 400 },
};
