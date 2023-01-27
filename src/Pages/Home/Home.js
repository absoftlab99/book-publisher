import React from 'react';
import BookCard from '../../Components/BookCard/BookCard';
import Slider from '../../Components/Slider/Slider';

const Home = () => {
    return (
        <div className=''>
            <div className="lg:px-12">
                <Slider></Slider>
            </div>
            <div className="px-6 lg:px-12">
                <BookCard></BookCard>
            </div>

        </div>
    );
};

export default Home;