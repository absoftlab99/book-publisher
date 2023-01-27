import React from 'react';

const Flow = () => {
    return (
        <div>
            <div className="grid grid-cols-8 gap-4 my-6 items-center">
                <div className="col-span-4 lg:col-span-2 bg-primary p-5 rounded-md">
                    <p className='text-3xl md:text-5xl'><i class="fa-solid fa-truck-fast"></i></p>
                    <h2 className='text-md md:text-2xl'>Free Shipping</h2>
                </div>
                <div className="col-span-4 lg:col-span-2 bg-primary p-5 rounded-md">
                    <p className='text-3xl md:text-5xl'><i class="fa-solid fa-ticket"></i></p>
                    <h2 className='text-md md:text-2xl'>7/24 Support</h2>
                </div>
                <div className="col-span-4 lg:col-span-2 bg-primary p-5 rounded-md">
                    <p className='text-3xl md:text-5xl'><i class="fa-sharp fa-solid fa-credit-card"></i></p>
                    <h2 className='text-md md:text-2xl'>Online Payment</h2>
                </div>
                <div className="col-span-4 lg:col-span-2 bg-primary p-5 rounded-md">
                    <p className='text-3xl md:text-5xl'><i class="fa-solid fa-truck-ramp-box"></i></p>
                    <h2 className='text-md md:text-2xl'>Fast Delivery</h2>
                </div>
            </div>
        </div>
    );
};

export default Flow;