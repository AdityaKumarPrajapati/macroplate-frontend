interface AddonContentItem {
    id: string;
    label: string;
    name: string;
    price: string;
}


export const AddonContentData: AddonContentItem[] = [
    { id: 'snackInputId', label: 'Protein Snacks', name: 'snackProtein', price: '$3 ea.'},
    { id: 'smoothyInputId', label: 'Protein Smoothie', name: 'proteinSmoothy', price: '$7 ea.'},
    { id: 'juiceInputId', label: 'Cold Pressed Juice', name: 'juice', price: '$7.25 ea.'},
    { id: 'coffeeInputId', label: 'Cold Brew Coffee', name: 'coffee', price: '$4 ea.'}
];
