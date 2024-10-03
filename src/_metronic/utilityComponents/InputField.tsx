import React from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './styles/InputField.css';

// Define types for props
interface InputFieldProps {
    placeHolder: string;
    value: any;
    name?: string;
    id?: string;
    type?: 'text' | 'email' | 'password' | 'number' | 'textarea'; // Define allowed types
    wrapperClass?: string;
    onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    validationError?: string;
}

const InputField: React.FC<InputFieldProps> = ({
    placeHolder,
    value,
    name,
    id,
    type,
    wrapperClass,
    onChange,
    validationError
}) => {
    return (
        <div className={wrapperClass}>
            <InputGroup className="">
                <Form.Control
                    placeholder={placeHolder}
                    aria-label=""
                    aria-describedby=""
                    value={value}
                    onChange={onChange}
                    name={name}
                    id={id}
                    type={type}
                    as={type === 'textarea' ? 'textarea' : 'input'} // Conditionally render as textarea if type is 'textarea'
                />
                <Form.Label htmlFor={id}>{placeHolder}</Form.Label>
            </InputGroup>
            {validationError && <p className="error-text">{validationError}</p>}
        </div>
    );
}

export { InputField };
