import React from 'react';

const Category = () => {
    return (
        <div>
            <div className='p-5 grid grid-cols-8 gap-4 md:gap-24 px-12'>
                <div className="col-span-4 lg:col-span-2 btn btn-neutral rounded-md py-4">
                    <h2>Science</h2>
                </div>
                <div className="col-span-4 lg:col-span-2 btn btn-neutral rounded-md py-4">
                    <h2>Politics</h2>
                </div>
                <div className="col-span-4 lg:col-span-2 btn btn-neutral rounded-md py-4">
                    <h2>Religion</h2>
                </div>
                <div className="col-span-4 lg:col-span-2 btn btn-neutral rounded-md py-4">
                    <h2>Novel</h2>
                </div>
            </div>
            <div className='grid grid-cols-8 gap-4 md:gap-24 px-12'>
                <div className="col-span-4 lg:col-span-2 btn btn-neutral rounded-md py-4">
                    <h2>Geography</h2>
                </div>
                <div className="col-span-4 lg:col-span-2 btn btn-neutral rounded-md py-4">
                    <h2>Drama</h2>
                </div>
                <div className="col-span-4 lg:col-span-2 btn btn-neutral rounded-md py-4">
                    <h2>Biography</h2>
                </div>
                <div className="col-span-4 lg:col-span-2 btn btn-neutral rounded-md py-4">
                    <h2>History</h2>
                </div>
            </div>
        </div>
    );
};

export default Category;