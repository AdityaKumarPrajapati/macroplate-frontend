import bannerImage from '../../../../public/images/bnr_img.png'
import Image from 'next/image';
import { ZipCodeStarted } from './ZipCodeStarted';
import './styles/ZipCodeStarted.css'

const HomePageBanner = () => {
    return (
        <div className="homePageBannerWrapper">
            <div className="bannerImage">
                {/* Next.js optimized image component */}
                <img src={bannerImage} alt="Banner" />
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