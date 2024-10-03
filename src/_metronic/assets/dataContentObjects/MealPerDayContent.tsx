// Define a type for the MealPerDay content items
interface MealPerDayContentItem {
    id: string;
    label: string;
    dataValue: string;
}

// Export the MealPerDayContentData with the defined type
export const MealPerDayContentData: MealPerDayContentItem[] = [
    { id: 'mealPerDayId2', label: '2 MEALS', dataValue: '2' },
    { id: 'mealPerDayId3', label: '3 MEALS', dataValue: '3' },
    { id: 'mealPerDayId4', label: '4 MEALS', dataValue: '4' },
    { id: 'mealPerDayId5', label: '5 MEALS', dataValue: '5' }
];
