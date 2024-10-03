import Image from 'next/image';
import customerSayImg from '../../../../public/images/testimonial1.png'; // Place the image in the public folder
import './styles/CustomerSay.css'; // Use global CSS or convert to CSS modules

const CustomerSay = () => {
    return (
        <section className="customerSayContainer">
            <div className="customerImageSection">
                {/* Use the Next.js Image component for optimized loading */}
                {/* <Image src={customerSayImg} alt="Customer Review" layout="responsive" /> */}
                <img src={customerSayImg} alt="Banner" />
            </div>

            <div className="customerReviewSection">
                {/* Add review content here */}
            </div>
        </section>
    );
}

export { CustomerSay };
