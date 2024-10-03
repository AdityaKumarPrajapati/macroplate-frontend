import React from "react";
import './styles/CheckboxButton.css'
import Form from 'react-bootstrap/Form';

// Define prop types for the component
interface CheckboxButtonProps {
    id?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    checked?: boolean;
    label?: string;  // Label is optional
}

const CheckboxButton: React.FC<CheckboxButtonProps> = ({ id, value, onChange, checked, label }) => {
    return (
        <div className="checkBoxContainer">
            <Form.Check
                type="checkbox"
                id={id}
                value={value}
                className="customCheckboxBtn"
                onChange={onChange}
                checked={checked}
            />
            {label && <Form.Check.Label className="formLabel">{label}</Form.Check.Label>}
        </div>
    );
}

export { CheckboxButton };
