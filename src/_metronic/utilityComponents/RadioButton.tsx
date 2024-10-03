import React from "react";
import './styles/RadioButton.css';
import Form from 'react-bootstrap/Form';

// Define types for props
interface RadioButtonProps {
    name?: string;
    id: string;
    value: string;
    label?: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    checked: boolean;
}

const RadioButton: React.FC<RadioButtonProps> = ({
    name,
    id,
    value,
    label,
    onChange,
    checked
}) => {
    return (
        <Form.Check
            type="radio"
            name={name}
            id={id}
            value={value} // Ensure the value is set for each radio button
            className="customRadioBtn"
            onChange={onChange}
            checked={checked}
            label={label}
        />
    );
}

export { RadioButton };
