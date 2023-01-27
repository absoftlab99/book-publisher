import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import cover1 from '../../assets/banner1.png'
import cover2 from '../../assets/banner2.png'
import cover3 from '../../assets/banner3.png'

const Slider = () => {
    return (
        <div className='lg:pt-0 lg:rounded-2xl overflow-hidden'>
            <Carousel
            autoPlay={true}
            infiniteLoop={true}
            stopOnHover={true}
            swipeable={true}
            useKeyboardArrows={true}
            showStatus={false}
            showThumbs={false}
            >
                <div>
                    <img src={cover1} alt=''/>
                </div>
                <div>
                    <img src={cover2} alt=''/>
                </div>
                <div>
                    <img src={cover3} alt=''/>
                </div>
            </Carousel>
        </div>
    );
};

export default Slider;