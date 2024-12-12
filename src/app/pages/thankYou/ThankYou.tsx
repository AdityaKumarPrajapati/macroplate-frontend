import React from 'react';
import './styles/ThankYou.css';

const ThankYou: React.FC = () => {
    return (
        <div className='container thankYouContainer paddingZero'>
            <h1>Thank You for Your Order!</h1>
            <p>Your order has been successfully placed. We appreciate your business.</p>
        </div>
    );
};

export default ThankYou;