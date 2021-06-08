import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import keyboardImage from '../images/keyboard_ad.jpg';
import makeupImage from '../images/makeup_ad.jpg';
import maskImage from '../images/mask_ad.jpg';

const Offers = () => {
    return (
        <Carousel 
        autoPlay={true} 
        infiniteLoop={true}
        interval={3000}
        stopOnHover={true}
        swipeable={false}
        showThumbs={false}
        showArrows={false}
        showStatus={false}
        width="100%"
        >
            <div>
                <img src={keyboardImage} alt="keyboard-ad" />
            </div>
            <div>
                <img src={makeupImage} alt="makeup-ad" />
            </div>
            <div>
                <img src={maskImage} alt="mask-ad" />
            </div>
        </Carousel>
    )
}

export default Offers;
