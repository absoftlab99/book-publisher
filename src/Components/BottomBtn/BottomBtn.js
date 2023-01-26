import React from 'react';
import { Link } from 'react-router-dom';

const BottomBtn = () => {
    return (
        <div>
            <div className="btm-nav lg:hidden bg-primary z-30">
                <button className='flex'>
                    <Link className='text-lg'><i class="fa-solid fa-store"></i></Link>
                    <label className='text-sm'>Shop</label>
                </button>
                <button className='flex active'>
                    <Link className='text-lg'><i class="fa-solid fa-heart-circle-check"></i></Link>
                    <label className='text-sm'>Wishlist</label>
                </button>
                <button className='flex'>
                    <Link className='text-lg'><i class="fa-solid fa-cart-plus"></i></Link>
                    <label className='text-sm'>Cart</label>
                </button>
                <button className='flex'>
                    <Link className='text-lg'><i class="fa-solid fa-store"></i></Link>
                    <label className='text-sm'>My Account</label>
                </button>
            </div>
        </div>
    );
};

export default BottomBtn;