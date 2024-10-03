interface DietaryPreferencesContentItem {
    id: string;
    label: string;
    dataValue: string
}

export const DietaryPreferencesContentData: DietaryPreferencesContentItem[] = [
    { id: 'presetdietary1', label: 'Gluten Free', dataValue: 'gluten_free' },
    { id: 'presetdietary2', label: 'Dairy Free', dataValue: 'dairy_free' },
    { id: 'presetdietary3', label: 'Soy Free', dataValue: 'soy_free' },
    { id: 'presetdietary4', label: 'Nut Free', dataValue: 'nut_free' }
];