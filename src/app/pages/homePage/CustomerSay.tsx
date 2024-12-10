import React, { useRef } from 'react';
import customerSayImg from '../../../../public/images/testimonial1.png'; // Place the image in the public folder
import './styles/CustomerSay.css'; // Use global CSS or convert to CSS modules
import { CustomerSayContent } from '../../../_metronic/assets/dataContentObjects/CustomerSayContent';
import { NextArrowSvg } from '../../../_metronic/utilityComponents/NextArrowSvg';
import { PrevArrowSvg } from '../../../_metronic/utilityComponents/PrevArrowSvg';
import Slider from 'react-slick';

const CustomerSay = () => {
    const sliderRef = useRef<Slider | null>(null);

    const next = () => sliderRef.current?.slickNext();
    const previous = () => sliderRef.current?.slickPrev();

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
    };

    return (
        <section className="customerSayContainer">
            <div className="customerImageSection">
                <picture>
                    {/* <source srcSet="/images/testimonial1.webp" type="image/webp" /> */}
                    <source srcSet={customerSayImg} type="image/jpeg" />
                    <img
                        src={customerSayImg}
                        alt="Customer Review"
                        loading="lazy"
                        decoding="async"
                        className="responsive-image"
                    />
                </picture>
            </div>

            <div className="customerReviewSection">
                <div className="customerSayHeader">
                    <p>What Our</p>
                    <p>Customers Say</p>
                </div>

                <div className="customerSliderWrapper">
                    <Slider ref={sliderRef} {...settings}>
                        {CustomerSayContent.map((review, index) => (
                            <div className="customer-slider-wrapper" key={index}>
                                <div className="review-item">
                                    <div className="star-rating">
                                        {[...Array(5)].map((_, i) => (
                                            <React.Fragment key={i}>
                                                <input
                                                    type="radio"
                                                    id={`${5 - i}-stars`}
                                                    name={`rating-${index}`}
                                                    value={5 - i}
                                                    checked={review.stars === 5 - i}
                                                    readOnly
                                                />
                                                <label htmlFor={`${5 - i}-stars`} className="star">
                                                    &#9733;
                                                </label>
                                            </React.Fragment>
                                        ))}
                                    </div>
                                    <div className="customer-review">
                                        <div className="customer-review-title title-white">
                                            {review.review}
                                        </div>
                                    </div>
                                    <p className="customer-name">{review.author}</p>
                                </div>
                            </div>
                        ))}
                    </Slider>

                    <div className='customerSayArrowsWrapper'>
                        <PrevArrowSvg color='#fff' onClick={previous} />
                        <NextArrowSvg color='#fff' onClick={next} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export { CustomerSay };
