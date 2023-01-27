import React from 'react';
import BookCard from '../../Components/BookCard/BookCard';
import Category from '../../Components/Category/Category';
import Flow from '../../Components/Flow/Flow';
import Slider from '../../Components/Slider/Slider';

const Home = () => {
    return (
        <div className=''>
            <div className="lg:px-12">
                <Slider></Slider>
            </div>
            <div className="px-6 lg:px-12">
                <Flow></Flow>
                <div className="flex flex-col w-full border-opacity-50">
                    <div className="divider"><i class="fa-solid fa-book-open-reader"></i></div>
                </div>
                <div className='flex justify-between items-center '>
                    <h2 className='text-lg md:text-3xl font-bold'>New Published Book</h2>
                    <button className='btn btn-sm btn-accent'>View All<i class="fa-solid fa-angle-right ml-2"></i></button>
                </div>
                <BookCard></BookCard>
            </div>
            <div className='my-5 bg-primary py-8'>
                <div className='flex justify-between items-center px-6 lg:px-12'>
                    <h2 className='text-lg md:text-3xl font-bold'>Top Categories</h2>
                    <button className='btn btn-sm btn-accent'>View All<i class="fa-solid fa-angle-right ml-2"></i></button>
                </div>
                <Category></Category>
            </div>
        </div>
    );
};

export default Home;