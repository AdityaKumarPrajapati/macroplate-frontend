import React, { useState, useImperativeHandle, forwardRef, Ref } from 'react';
import { useStripe, useElements, CardNumberElement, CardExpiryElement, CardCvcElement } from '@stripe/react-stripe-js';
import '../../styles/CardDetails.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import axios from 'axios';

// Define the options for the Stripe Card Elements
const CARD_ELEMENT_OPTIONS = {
    style: {
        base: {
            color: '#000',
            fontSize: '16px',
            fontSmoothing: 'antialiased',
            '::placeholder': {
                color: '#aab7c4',
            },
            backgroundColor: '#ffffff',
            borderColor: '#e0e0e0',
        },
        invalid: {
            color: '#fa755a',
            iconColor: '#fa755a',
        },
    },
};

// Define the prop types for the component
interface CardDetailsProps {
    onSubmit: (token: any | null) => void;
    checkoutData: any;
    setCheckoutData: any;
}

// Use forwardRef to expose the handleSubmit method to the parent component
const CardDetails = forwardRef<{
    handleSubmit: () => Promise<void>;
}, CardDetailsProps>(({ onSubmit, checkoutData, setCheckoutData }, ref: Ref<{ handleSubmit: () => Promise<void> }>) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardBrand, setCardBrand] = useState<string>('');

    // Handle changes in the card number element and set the card brand
    const handleCardChange = (event: any) => {
        if (event.brand) {
            setCardBrand(event.brand);
        }
    };

    // Handle form submission and create a token using Stripe
    const handleSubmit = async () => {
        if (!stripe || !elements) {
            return;
        }

        const cardNumberElement = elements.getElement(CardNumberElement);
        if (!cardNumberElement) return;

        const { token, error } = await stripe.createToken(cardNumberElement);

        if (error) {
            console.error(error.message);
        } else {
            console.log('----tokennn---', token);
            await setCheckoutData((prev: any) => ({
                ...prev,
                stripeToken: token?.id
            }));
            onSubmit(token); // Pass the token back to the parent component
            console.log(checkoutData, "setCheckoutData")
            try {
                // checkoutData.firstDeliveryDate = 'Monday, Dec 23, 2024';
                // checkoutData.snackPlanId = 'snacks-1-5';
                // checkoutData.juicePlanId = 'v2-cold-pressed-juice-4-5';
                // console.log(checkoutData, "setCheckoutData1")

                const res = await axios.post('http://localhost:8000/api/signup', {
                    ...checkoutData,
                    stripeToken: token?.id,
                });
                console.log(res, "API RESPONSE")
                // setResponse(res.data.message); // Handle success response
            } catch (error) {
                console.error(error);
                console.log('An error occurred');
            }

        }
    };

    // Expose the handleSubmit function to the parent component via ref
    useImperativeHandle(ref, () => ({
        handleSubmit
    }));

    // Get the correct icon class based on the card brand
    const getBrandIconClass = (brand: string): string => {
        switch (brand) {
            case 'visa':
                return 'fab fa-cc-visa';
            case 'mastercard':
                return 'fab fa-cc-mastercard';
            case 'amex':
                return 'fab fa-cc-amex';
            case 'discover':
                return 'fab fa-cc-discover';
            default:
                return '';
        }
    };

    return (
        <div className="card-details-wrapper">
            <p className='marginZero personalInfoText'>CARD INFO</p>

            <div className="card-details-container">
                <div className="card-number-container">
                    <CardNumberElement
                        id="card-number"
                        options={CARD_ELEMENT_OPTIONS}
                        onChange={handleCardChange}
                        className="card-number"
                    />
                    {cardBrand && (
                        <i
                            className={`card-brand-icon ${getBrandIconClass(cardBrand)}`}
                            aria-hidden="true"
                        ></i>
                    )}
                </div>
                <div className="expiry-cvc-container">
                    <CardExpiryElement
                        id="card-expiry"
                        options={CARD_ELEMENT_OPTIONS}
                        className="expiry"
                    />
                    <CardCvcElement
                        id="card-cvc"
                        options={CARD_ELEMENT_OPTIONS}
                        className="cvc"
                    />
                </div>
            </div>
        </div>
    );
});

export { CardDetails };
