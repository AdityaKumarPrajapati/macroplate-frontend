import girlImage1 from '../../../../public/images/girl_btm_img.png'
import girlImage2 from '../../../../public/images/girl_btm_img2.png'
import './styles/CustomerImage.css'

const CustomerImage = () => {
    return (
        <div className="customerImageContainer">
            <div className='container paddingZero customerImageContainerWrapper'>
            <div className="customerImageWrapper">
                <div className='customerImage customerImage1'>
                    <img src={girlImage1} alt="girlImage" />
                </div>
            </div>
            <div className="customerImageWrapper">
                <div className='customerImage customerImage2'>
                    <img src={girlImage2} alt="girlImage" />
                </div>
            </div>
            </div>
        </div>
    );
}

export { CustomerImage }