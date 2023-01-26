import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className='px-12 py-4 hidden lg:block'>
                <div className="navbar bg-base-100 gap-4 p-0">
                    <div className="flex">
                        <Link className="">
                            <img className='h-12 w-50' src="https://notebookprokash.com/wp-content/uploads/2022/12/Untitled-1-1-1.png" alt="" />
                        </Link>
                    </div>
                    <div className="form-control w-full">
                        <input type="text" placeholder="Search &#xF002;" className="input input-bordered w-full" id='search' />
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

            {/* mobile menu  */}
            <div className="navbar bg-primary lg:hidden">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link>Homepage</Link></li>
                            <li><Link>Portfolio</Link></li>
                            <li><Link>About</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center">
                    <Link className="btn btn-ghost normal-case text-xl">
                        <img className='h-8 w-36' src="https://notebookprokash.com/wp-content/uploads/2022/12/Untitled-1-1-1.png" alt="" />
                    </Link>
                </div>
                <div className="navbar-end">
                    <button className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                    <button className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                            <span className="badge badge-xs badge-primary indicator-item"></span>
                        </div>
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Header;