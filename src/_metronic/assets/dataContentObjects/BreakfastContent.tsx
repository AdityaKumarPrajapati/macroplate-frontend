interface BreakfastContentItem {
    id: string;
    label: string;
    dataValue: string
}

export const BreakfastContentData: BreakfastContentItem[] = [
    { id: 'breakfastIdYes', label: 'Yes', dataValue: 'yes' },
    { id: 'breakfastIdNo', label: 'No', dataValue: 'no' }
];