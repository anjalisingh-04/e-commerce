
"use client"

import Link from "next/link";
import { useState } from "react";



const Footer = () => {

    const [email, setEmail] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    return (
        <>
            <footer className="footer-continer">
                <div className="main-wrapper">


                    <div className="in-footer-continer">

                        <div>
                            <h2>VISION</h2>
                            <p className='p1'>Elevate your home<br></br> with smart technology.</p>
                        </div>

                        <div >
                            <h3>Company</h3>

                            <ul className="ul">
                                <Link href="#">
                                    Wholesale
                                </Link>

                                <Link href="#">
                                    Become a retailer
                                </Link>

                                <Link href="#">
                                    Corporate Orders
                                </Link>

                                <Link href="#">
                                    Affiliates
                                </Link>

                                <Link href="#">
                                    Gift cards
                                </Link>

                                <Link href="#">
                                    Contact
                                </Link>

                            </ul>

                        </div>


                        <div>
                            <h3 >Resources</h3>
                            <ul className="ul">

                                <Link href="#">
                                    About
                                </Link>

                                <Link href="#">
                                    Blog
                                </Link>

                                <Link href="#">
                                    Careers
                                </Link>

                                <Link href="#">
                                    Find a store
                                </Link>

                                <Link href="#">
                                    Press
                                </Link>

                                <Link href="#">
                                    Support
                                </Link>

                                <Link href="#">
                                    Privacy
                                </Link>


                            </ul>
                        </div>


                        <div>
                            <h3>Subscribe to our newsletter</h3>
                            <p>Sign up for our newsletter and receive 10% off your first order!</p>
                            <div className="search-btn">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="bg-gray-800 text-white p-2 flex-grow outline-none"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <button className="bg-gray-700 px-4  text-white hover:bg-gray-600">^</button>
                            </div>
                            <div className="mt-2 flex items-center">
                                <input
                                    type="checkbox"
                                    id="subscribe"
                                    className="mr-2"
                                    checked={isChecked}
                                    onChange={() => setIsChecked(!isChecked)}
                                />
                                <label htmlFor="subscribe" className="text">
                                    I agree to receiving marketing emails and special deals
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="footer-s2">
                        <p>© 2025 Vision - Main, All rights reserved. <span className="underline">Powered by Shopify</span></p>
                        <div className="flex space-x-4 mt-2 md:mt-0">

                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}



export default Footer