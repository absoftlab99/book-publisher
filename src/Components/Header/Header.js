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
                <div className="flex bg-primary">
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
            <div className="navbar bg-primary lg:hidden pb-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li tabIndex={0}>
                                <Link className="justify-between">
                                    <i class="fa-solid fa-border-all"></i> Menu
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </Link>
                                <ul className="p-2 bg-base-100">
                                    <li><Link><i class="fa-solid fa-house"></i>Home</Link></li>
                                    <li><Link><i class="fa-solid fa-book"></i>All Books</Link></li>
                                    <li><Link><i class="fa-solid fa-scroll"></i>Send Manuscript</Link></li>
                                    <li><Link><i class="fa-solid fa-book-medical"></i>Publish Book</Link></li>
                                    <li><Link><i class="fa-solid fa-feather-pointed"></i>Authors</Link></li>
                                    <li><Link><i class="fa-solid fa-address-card"></i>About Us</Link></li>
                                    <li><Link><i class="fa-solid fa-blog"></i>Blog</Link></li>
                                </ul>
                            </li>
                            <li tabIndex={1}>
                                <Link className="justify-between">
                                    <i class="fa-solid fa-coins"></i> Category
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </Link>
                                <ul className="p-2 bg-base-100">
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
                            </li>
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
                        <i class="fa-solid fa-cart-plus"></i>
                    </button>
                    <button className="btn btn-ghost btn-circle">
                        <p>৳ 200</p>
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Header;