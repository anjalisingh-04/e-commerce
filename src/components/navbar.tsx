

'use client';

import Link from 'next/link';
import { SetStateAction, useState } from 'react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    const [dropdownOpen, setDropdownOpen] = useState(null);

    const toggleDropdown = (menu: any) => {
        setDropdownOpen(dropdownOpen === menu ? null : menu);
    };



    return (
        <header >


            <nav className="nav">
                <div className="main-wrapper">

                    <div className="top-nav-s">
                        <Link href='' className='th'>Contact +918372000000</Link>
                        <Link href="" className='th'>Trak Order  |  Help Center</Link>
                    </div>

                    <div className='nav-s1'>


                        <div className="md:hidden flex items-center space-x-4">
                            <button onClick={toggleMenu} className="text-gray-700">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </button>
                        </div>

                        <div className="logo-name">
                            <span className="text-black">VISI</span>
                            <span className="text-yellow-400">O</span>
                            <span className="text-black">N</span>
                        </div>

                        <div className="nav-s1-box1">
                            <div className="hidden md:flex space-x-8 text-gray-700 text-sm">
                                <Link href="Features" className=" fe">Features</Link>
                                <Link href="Shop" className="fe ">Shop</Link>
                                <Link href="Doorbells" className="fe">Doorbells</Link>
                                <Link href="Security" className=" fe">Security</Link>
                                <Link href="Accessories" className="fe">Accessories</Link>

                            </div>
                        </div>



                        <div className='nav-s1-box2'>
                            <input
                                type="text"
                                placeholder="Search for anything"
                                className="search"
                            />


                            <div className="icons">


                                <Link href="bag" className='icon-im'>   <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi-bag" viewBox="0 0 16 16">
                                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                                </svg>

                                </Link>


                                <Link href="profile" className='icon-im'> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi-person-circle" viewBox="0 0 16 16">
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                    <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                                </svg>

                                </Link>


                                <Link href="wishlist" className='icon-im'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                                    </svg>
                                </Link>


                            </div>

                        </div>



                    </div>


                    <div className="nav-s2">
                        <div className="hidden md:flex space-x-8 text-gray-700 text-sm ">

                            <div className="relative">
                                <button className="nav-s2-url">What's New</button>
                                <div className="dropdown-menu">

                                    <div className="drop">
                                        <div className="s2-div1">
                                            <label>NEW</label>

                                            <ul className="s2-url">

                                                <Link href="#" className="">
                                                    Tira Picks : Whats Next For 2025
                                                </Link>

                                                <Link href="#" className="">
                                                    New in makeup
                                                </Link>

                                                <Link href="#" className="">
                                                    New in skin
                                                </Link>

                                                <Link href="#" className="">
                                                    New in hair
                                                </Link>

                                                <Link href="#" className="">
                                                    New in fragrance
                                                </Link>

                                                <Link href="#" className="">
                                                    New in bath & body
                                                </Link>

                                                <Link href="#" className="">
                                                    New in men
                                                </Link>

                                                <Link href="#" className="">
                                                    New in mom & baby
                                                </Link>

                                                <Link href="#" className="">
                                                    New in wellness
                                                </Link>

                                            </ul>

                                        </div>


                                        <div className="s2-div2">
                                            <label>NEW</label>

                                            <ul className="s2-url">

                                                <Link href="#" className="">
                                                    Tira Picks : Whats Next For 2025
                                                </Link>

                                                <Link href="#" className="">
                                                    New in makeup
                                                </Link>

                                                <Link href="#" className="">
                                                    New in skin
                                                </Link>

                                                <Link href="#" className="">
                                                    New in hair
                                                </Link>

                                                <Link href="#" className="">
                                                    New in fragrance
                                                </Link>

                                                <Link href="#" className="">
                                                    New in bath & body
                                                </Link>

                                                <Link href="#" className="">
                                                    New in men
                                                </Link>

                                                <Link href="#" className="">
                                                    New in mom & baby
                                                </Link>

                                                <Link href="#" className="">
                                                    New in wellness
                                                </Link>

                                            </ul>
                                        </div>


                                        <div className="s2-img-div">
                                            <img src="/camera.webp" alt="" />
                                        </div>

                                    </div>



                                </div>




                            </div>

                            <div className="relative">
                                <button className="nav-s2-url">Skin</button>
                                <div className="dropdown-menu">
                                    <Link href="#">Moisturizers</Link>
                                    <Link href="#">Serums</Link>
                                    <Link href="#">Face Wash</Link>
                                </div>
                            </div>

                            <Link href="#" className='nav-s2-url'>Men</Link>
                            <Link href="#" className='nav-s2-url'>Wellness</Link>
                            <Link href="#" className='nav-s2-url'>Minis</Link>
                            <Link href="#" className='nav-s2-url'>Homegrown</Link>
                            <Link href="#" className='nav-s2-url'>Hair</Link>
                            <Link href="#" className='nav-s2-url'>Fragrance</Link>
                            <Link href="#" className='nav-s2-url'>Mom & Baby</Link>
                            <Link href="#" className='nav-s2-url'>Tools & Appliances</Link>
                        </div>
                    </div>


                </div>


            </nav>

            {isMenuOpen && (
                <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4 text-gray-700">
                    <Link href="" className='nav-s2-url'>What's New</Link>
                    <Link href="" className='nav-s2-url'>Skin</Link>
                    <Link href="" className='nav-s2-url'>Men</Link>
                    <Link href="" className='nav-s2-url'>Wellness</Link>
                    <Link href="" className='nav-s2-url'>Minis</Link>
                    <Link href="" className='nav-s2-url'>Homegrown</Link>
                    <Link href="" className='nav-s2-url'>Hair</Link>
                    <Link href="" className='nav-s2-url'>Fragrance</Link>
                    <Link href="" className='nav-s2-url'>Mom & Baby</Link>
                    <Link href="" className='nav-s2-url'>Tools & Appliances</Link>
                    <Link href="#" className="block hover:text-black">Features</Link>
                    <Link href="#" className="block hover:text-black">Shop</Link>
                    <Link href="#" className="block hover:text-black">Doorbells</Link>
                    <Link href="#" className="block hover:text-black">Security</Link>
                    <Link href="#" className="block hover:text-black">Accessories</Link>
                    <Link href="#" className="block hover:text-black">Journal</Link>
                </div>
            )}
        </header>
    );
}

