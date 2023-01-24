import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='px-12 py-4 hidden md:block'>
            <div className="navbar bg-base-100 gap-6">
                <div className="flex">
                    <Link className="">
                        <img className='h-12 w-50' src="https://notebookprokash.com/wp-content/uploads/2022/12/Untitled-1-1-1.png" alt="" />
                    </Link>
                </div>
                <div className="form-control w-full">
                    <input type="text" placeholder="Search &#xF002;" className="input input-bordered w-full" id='search'/>
                </div>
                <Link className='btn'><i class="fa-solid fa-user-tie mr-2"></i>Login/Register</Link>
                <div className='gap-4'>
                    <div className="indicator">
                        <span className="indicator-item badge badge-primary">9</span>
                        <button className="border rounded-full btn"><i class="fa-regular fa-heart text-normal"></i></button>
                    </div>
                    <div className="indicator">
                        <span className="indicator-item badge badge-accent">9</span>
                        <button className="border rounded-full btn"><i class="fa-solid fa-dolly"></i></button>
                    </div>
                </div>
            </div>
            <div className="flex bg-neutral">
                <div className="dropdown dropdown-hover">
                    <label tabIndex={0} className="btn m-1"><i class="fa-solid fa-bars pr-2"></i> BROWSE CATEGORIES <i class="fa-solid fa-angle-down ml-3"></i></label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-neutral rounded-box w-56">
                        <li><Link className='py-1'><i class="fa-solid fa-book"></i> Novel</Link></li>
                        <li><Link className='py-1'><i class="fa-solid fa-book"></i>Statistics</Link></li>
                        <li><Link className='py-1'><i class="fa-solid fa-book"></i>Mathematics</Link></li>
                        <li><Link className='py-1'><i class="fa-solid fa-book"></i>Poem</Link></li>
                        <li><Link className='py-1'><i class="fa-solid fa-book"></i>Politics</Link></li>
                        <li><Link className='py-1'><i class="fa-solid fa-book"></i>Science</Link></li>
                        <li><Link className='py-1'><i class="fa-solid fa-book"></i>Drama</Link></li>
                        <li><Link className='py-1'><i class="fa-solid fa-book"></i>Magazine</Link></li>
                        <li><Link className='py-1'><i class="fa-solid fa-book"></i>Encyclopedia</Link></li>
                        <li><Link className='py-1'><i class="fa-solid fa-book"></i>History</Link></li>
                        <li><Link className='py-1'><i class="fa-solid fa-book"></i>English</Link></li>
                        <li><Link className='py-1'><i class="fa-solid fa-book"></i>Technology</Link></li>
                    </ul>
                </div>
                <div className='flex justify-center'>
                    <ul className="menu menu-horizontal px-1">
                        <li><Link><i class="fa-solid fa-house"></i>Home</Link></li>
                        <li><Link><i class="fa-solid fa-book"></i>All Books</Link></li>
                        <li><Link><i class="fa-solid fa-scroll"></i>Submit Manuscript</Link></li>
                        <li><Link><i class="fa-solid fa-book-medical"></i>Publish Book</Link></li>
                        <li><Link><i class="fa-solid fa-feather-pointed"></i>Authors</Link></li>
                        <li><Link><i class="fa-solid fa-address-card"></i>About Us</Link></li>
                        <li><Link><i class="fa-solid fa-blog"></i>Blog</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;