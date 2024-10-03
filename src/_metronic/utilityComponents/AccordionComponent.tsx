// components/AccordionComponent.js

import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { MealSelectionWrapper } from '../../app/modules/sidebarModule/components/utilityComponents/MealSelectionWrapper';
import { CheckboxButton } from './CheckboxButton';

interface AccordionComponentProps {
    data: any; // Replace `any` with the actual type
    checked: boolean;
    checkoutData: any; // Replace `any` with the actual type
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const AccordionComponent: React.FC<AccordionComponentProps> = ({ data, checked, checkoutData, onChange }) => {
    return (
        <Accordion defaultActiveKey={[]} alwaysOpen>
            {data && Object.keys(data).map((category, index) => {
                // Count the number of selected values for the current category
                const selectedCount = checkoutData.allergies.filter((item: any) =>
                    data[category].some((option: any) => option.dataValue === item)
                ).length;

                return (
                    <Accordion.Item eventKey={index.toString()} key={index}>
                        <Accordion.Header>
                            {category} {selectedCount !== 0 && <span className="accordion-header-count">{selectedCount}</span>}
                        </Accordion.Header>
                        <Accordion.Body>
                            <MealSelectionWrapper
                                dataObj={data[category]}
                                inputComponent={<CheckboxButton />}
                                onChange={onChange}
                                checkedValues={checkoutData.allergies}
                                checkoutData={checkoutData}
                            />
                        </Accordion.Body>
                    </Accordion.Item>
                );
            })}
        </Accordion>
    );
};

export default AccordionComponent;
