import React from "react";
import { InputField } from "./InputField";
import { Button } from "react-bootstrap";
import './styles/CouponCodeInput.css';

// No props needed for this component
const CouponCodeInput: React.FC = () => {
    return (
        <div className="couponCodeWrapper">
            <InputField
                placeHolder='Enter Your Promo or Gift Code'
                wrapperClass='promoCodeWrapper'
                name='promoCode'
                type='text'
            />
            <Button className="promoCodeApplyBtn" variant="dark">Apply</Button>
        </div>
    );
}

export { CouponCodeInput };
