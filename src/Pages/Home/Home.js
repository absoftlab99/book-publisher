import React from 'react';
import BookCard from '../../Components/BookCard/BookCard';
import Slider from '../../Components/Slider/Slider';

const Home = () => {
    return (
        <div className='px-6 md:px-12'>
            <Slider></Slider>
            <BookCard></BookCard>
        </div>
    );
};

export default Home;