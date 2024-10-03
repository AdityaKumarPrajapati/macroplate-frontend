import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import './styles/TextAreaField.css';

interface TextAreaFieldProps {
    wrapperClass?: string;
    value: string;
    name: string;
    id: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    placeHolder: string;
}

const TextAreaField: React.FC<TextAreaFieldProps> = ({ wrapperClass, value, name, id, onChange, placeHolder }) => {
    return (
        <div className={`textAreaInputContainer ${wrapperClass || ''}`}>
            <InputGroup>
                <Form.Control
                    as="textarea"
                    aria-label="With textarea"
                    value={value}
                    onChange={onChange}
                    name={name}
                    id={id}
                    placeholder={placeHolder}
                />
            </InputGroup>
        </div>
    );
};

export default TextAreaField;
