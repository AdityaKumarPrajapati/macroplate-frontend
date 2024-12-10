import bannerImage from '../../../../public/images/bnr_img.png'
import Image from 'next/image';
import { ZipCodeStarted } from './ZipCodeStarted';
import './styles/ZipCodeStarted.css'

const HomePageBanner = () => {
    return (
        <div className="homePageBannerWrapper">
            <div className="bannerImage">
                {/* Next.js optimized image component */}
                {/* <img src={bannerImage} alt="Banner" /> */}
                <picture>
                    {/* <source srcSet="/images/testimonial1.webp" type="image/webp" /> */}
                    <source srcSet={bannerImage} type="image/jpeg" />
                    <img
                        src={bannerImage}
                        alt="Customer Review"
                        loading="lazy"
                        decoding="async"
                        className="responsive-image"
                    />
                </picture>
            </div>
            <div className="bannerContent">
                <div className="bannerContentContainer">
                    <div>
                        <p className="title-white marginZero title-banner homePageBanner">
                            Award-winning Chefs
                        </p>
                        <p className="title-white marginZero title-banner homePageBanner">
                            Health Driven Menus
                        </p>
                        <p className="title-white marginZero title-banner homePageBanner">
                            Delivered Fresh Daily
                        </p>
                    </div>
                    <ZipCodeStarted />
                </div>
            </div>
        </div>
    );
};

export { HomePageBanner };