
"use client"


import HomeWrapper from "@/components/wrapper/Home"

import { useState } from 'react';

const menwo = [
    { name: "Men" },
    { name: "Women" },
    { name: "Boys" },
    { name: "Girls" }
]


const categories = [
    { name: "Casual Shoes", count: 26944 },
    { name: "Sports Shoes", count: 15213 },
    { name: "Formal Shoes", count: 12013 },
    { name: "Boots", count: 3748 },
    { name: "Flats", count: 311 }
]

const brands = [
    { name: "FAUSTO", count: 1891 },
    { name: "Puma", count: 1551 },
    { name: "Sparx", count: 1304 },
    { name: "Bxxy", count: 1299 },
    { name: "Roadster", count: 1239 },
    { name: "Campus", count: 1198 },
    { name: "ADIDAS", count: 1188 },
    { name: "ABROS", count: 1071 }
]

const color = [

    { name: "black", count: 39815 },
    { name: "White", count: 16056 },
    { name: "Brown", count: 11723 },
    { name: "Gray", count: 10541 },
    { name: "Tan", count: 9223 },
    { name: "Blue", count: 8448 },
    { name: "Beige", count: 7558 }

]


const discount = [
    { name: "10% and above" },
    { name: "20% and above" },
    { name: "30% and above" },
    { name: "40% and above" },
    { name: "50% and above" },
    { name: "60% and above" },
    { name: "70% and above" },
    { name: "80% and above" },
    { name: "90% and above" }
]



export default function filter() {
    const [sortBy, setSortBy] = useState('Recommended');

    return (


        <>
            <HomeWrapper>
                <div className="top-container">


                    <nav className="ho-fo-ac">
                        <span>Home</span> /
                        <span> Footwear</span> /
                        <span className="active"> Shoes For Men</span>
                    </nav>

                    <h1>
                        Shoes For Men <span className="subtext">- 58,832 items</span>
                    </h1>

                    <div className="filters-container">
                        <div className="filters">
                            <span className="active">Filters</span>
                        </div>

                        <div className="filter-options">
                            <span>Bundles ▼</span>
                            <span>Country of Origin ▼</span>
                            <span>Size ▼</span>
                        </div>

                        <div className="sort-dropdown">
                            <span>Sort by:</span>
                            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                                <option>Recommended</option>
                                <option>Newest</option>
                                <option>Price: Low to High</option>
                                <option>Price: High to Low</option>
                            </select>
                        </div>
                    </div>

                </div>



                <div className="container">


                    <div className="container-1">
                        <div className="filter-box">
                            <div className="menwo">
                                {menwo.map((item, index) => (
                                    <label key={index} >
                                        <input type="checkbox" name="category" value={item.name} />
                                        {item.name}
                                    </label>
                                ))}
                            </div>
                            <div className="categories">
                                <h5>CATEGORIES</h5>
                                {categories.map((category, index) => (
                                    <label key={index} className="category-item">
                                        <input type="checkbox" value={category.name} /> {category.name} <span>({category.count})</span>
                                    </label>
                                ))}
                            </div>

                            <div className="brand">
                                <h5>BRAND</h5>
                                {brands.map((brand, index) => (
                                    <label key={index} className="brand.item">
                                        <input type="checkbox" value={brand.name} />{brand.name} <span>({brand.count})</span>
                                    </label>
                                ))}
                            </div>
                            <div className="price"></div>
                            <div className="color">
                                <h5>COLORS</h5>
                                {color.map((c, index) => (
                                    <label key={index} className="color-item">
                                        <input type="checkbox" value={c.name} /> {c.name} <span>({c.count})</span>
                                    </label>
                                ))}
                            </div>
                            <div className="dis-range">
                                <h5>Discount Range
                                </h5>
                                {discount.map((item, index) => (
                                    <label key={index} >
                                        <input type="checkbox" name="category" value={item.name} />
                                        {item.name}
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>


                    <div className="container2">

                    </div>

                </div>

            </HomeWrapper>

        </>

    )

}