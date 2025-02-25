"use client"
import { useState } from 'react';
import Marquee from "react-fast-marquee";
import { CategoryGrid } from './categoriescard';




const products = [
    {
        id: 1,
        name: 'Smart Home Speaker - Variant Image Set',
        brand: 'ELEMENT SYNC',
        price: 82.0,
        image: '/smart home speaker.webp',
        category: 'Speakers',
    },
    {
        id: 2,
        name: 'Indoor WiFi Smart Camera Pan & Tilt',
        brand: 'DRIFLY',
        price: 46.5,
        image: '/indoor wifi.webp',
        category: 'Cameras',
    },
    {
        id: 3,
        name: 'Blue Dot (3rd Gen) Smart Speaker',
        brand: 'CLEAR LINK',
        price: 48.2,
        image: '/blue dot.webp',
    },
    {
        id: 4,
        name: 'Door Wood Smart Lock with Connect',
        brand: 'BANDROLL',
        price: 164.5,
        image: '/wood smart.webp',

    },
];


const categories = ['All', 'Speakers'];

const BestSeller = () => {

    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredProducts =
        selectedCategory === 'All'
            ? products
            : products.filter((product) => product.category === selectedCategory);

    return (
        <>
            <section className="product-card">
                <div className="outer-card">
                    <div className="div">
                        <div className="div1">
                            <h2>Bestsellers</h2>
                            <p className="info">Browse the best of our favorite sale styles and brands.</p>
                        </div>
                        <div className="div2">
                            <div className="btn-box">
                                {categories.map((category) => (
                                    <button
                                        key={category}
                                        className={`px-5 py-2 rounded-full text-sm font-medium border transition-all ${selectedCategory === category
                                            ? 'bg-blue-600 text-white shadow-md'
                                            : 'border-gray-300 text-gray-700 hover:bg-gray-200'
                                            }`}
                                        onClick={() => setSelectedCategory(category)}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>

                        </div>

                    </div>


                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                        {filteredProducts.map((product) => (
                            <div key={product.id} className="p-6 shadow-lg rounded-lg  transition-shadow">
                                <img src={product.image} alt={product.name} />
                                <div className="product-info">
                                    <h3>{product.brand}</h3>
                                    <p >{product.name}</p>
                                    <p className='price'>${product.price.toFixed(2)}</p>
                                </div>

                            </div>
                        ))}
                    </div>


                </div>

            </section>

            <Automate />
            <CategoryGrid />

        </>
    )
}

const Automate = () => {
    return (
        <div className="outer-box">

            <h2>Automate your life</h2>
            <p className="info">Enjoy huge, limited-time deals on select devices so you'll never miss a moment this <br></br> holiday season and beyond.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div className="image1">

                    <img src="/img1.jpg" alt="Main Device" className="mt-6 w-full rounded-lg" />
                </div>


                <div className="inner-box2">

                    <div className="inner-box-img1">
                        <img src="/img2.png" alt="Security Cameras" />
                    </div>

                    <div className="inner-box3">
                        <div className="remote">
                            Remotely manage all of your connected devices
                        </div>
                        <div className="smartwatches">
                            <span>Good Hybrid Smartwatches</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );

};


export default BestSeller;



