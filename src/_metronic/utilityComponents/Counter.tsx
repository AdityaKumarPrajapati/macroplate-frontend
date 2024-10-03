import React, { useState, useEffect } from "react";
import './styles/Counter.css';

interface CounterProps {
    id?: string;
    inputName?: any;
    value?: number;
    onChange: (name: string, value: number) => void;
}

const Counter: React.FC<CounterProps> = ({ id, inputName, value = 0, onChange }) => {
    const [count, setCount] = useState<number>(value);

    useEffect(() => {
        setCount(value);
    }, [value]);

    const Increment = () => {
        const newCount = count + 1;
        setCount(newCount);
        onChange(inputName, newCount);  // Notify parent of the change
    };

    const Decrement = () => {
        const newCount = count > 0 ? count - 1 : 0;
        setCount(newCount);
        onChange(inputName, newCount);  // Notify parent of the change
    };

    return (
        <div>
            <div className="quantity">
                <a href="#" className="quantity__minus" onClick={Decrement}><span>-</span></a>
                <input name={inputName} type="text" className="quantity__input" value={count} readOnly />
                <a href="#" className="quantity__plus" onClick={Increment}><span>+</span></a>
            </div>
            <p className="marginZero priceLabel">Per Day</p>
        </div>
    );
};

export { Counter };
