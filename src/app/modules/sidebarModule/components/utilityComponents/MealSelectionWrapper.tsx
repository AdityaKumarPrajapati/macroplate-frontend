import React, { ReactElement } from "react";
import './styles/MealSelectionWrapper.css';

// Define types for props
// interface DataItem {
//     id: string;
//     dataValue?: string;
//     name?: string;
//     label: string;
//     price?: string;
//     count?: number;
// }

interface MealSelectionWrapperProps {
    dataObj: any;
    headetText?: string;
    inputComponent: ReactElement;
    onChange: (event: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLButtonElement>) => void;
    checkedValues: string[] | string | null;
    componentType?: 'counter' | 'accordion' | 'default';
    checkoutData: { [key: string]: any }; // Dynamic object structure for checkoutData
}

const MealSelectionWrapper: React.FC<MealSelectionWrapperProps> = ({
    dataObj,
    headetText,
    inputComponent,
    onChange,
    checkedValues,
    componentType = 'default',
    checkoutData
}) => {
    return (
        <div className="mealSelectionContentContainer">
            {headetText && (
                <div className={`mealSelectionContentText ${componentType === 'counter' ? 'addonSelectionContentText' : ''}`}>
                    <p className="marginZero">{headetText}</p>
                </div>
            )}
            <div className="mealSelectionContentData">
                {componentType === 'accordion' && (
                    <p className="marginZero dietaryExclisionsContentDesc">
                        Macro Plate prides itself on our extremely customizable meals. Check any foods you don't want included in your meal.
                    </p>
                )}
                {dataObj.map((item: any) => (
                    <div className={`radioBtnContainer ${componentType === 'accordion' ? 'radioBtnAccordionContainer' : ''}`} key={item?.id}>
                        {React.cloneElement(inputComponent, {
                            key: `input-${item?.id}`, // Add unique key for inputComponent
                            id: item?.id,
                            value: componentType === 'counter' ? (checkoutData[item?.name!] || 0) : item?.dataValue, // Pass dataValue as the value
                            onChange: onChange,
                            checked: componentType !== 'accordion' && Array.isArray(checkedValues)
                                ? checkedValues.includes(item?.dataValue!)
                                : checkedValues === item?.dataValue, // Handle both single and multiple selections
                            count: componentType === 'counter' ? item.count : undefined,
                            inputName: componentType === 'counter' ? item?.name : undefined,
                            data: componentType === 'accordion' ? item : undefined,
                            checkoutData: componentType === 'accordion' ? checkoutData : undefined,
                        })}
                        <div className="labelContainer">
                            <label
                                htmlFor={item?.id}
                                className={`mealSelectionLabel ${componentType === 'counter' ? 'addonLabel' : ''}`}
                            >
                                {item?.label}
                            </label>
                            {componentType === 'counter' && <label className="addonLabel">{item?.price}</label>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export { MealSelectionWrapper };
