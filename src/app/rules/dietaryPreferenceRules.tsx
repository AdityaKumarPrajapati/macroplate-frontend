// Define a type for dietary preferences
interface DietaryPreferenceRules {
    [preference: string]: string[];
}

// Export the dietaryPreferenceRules object with the defined type
export const dietaryPreferenceRules: DietaryPreferenceRules = {
    'gluten_free': ['wheat'],
    'dairy_free': ['cheese', 'yogurt'],
    'soy_free': ['teriyaki', 'edamame', 'soy_sauce'],
    'nut_free': ['almonds', 'pecans', 'pistachios', 'cashews', 'peanuts', 'walnuts']
};
