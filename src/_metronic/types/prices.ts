// types/prices.ts
export interface Plan {
    price: number;
}

export interface Addon {
    price: number;
}

export interface BasePlanAmount {
    [key: string]: Plan;
}

export interface AddonPrice {
    [key: string]: Addon;
}
