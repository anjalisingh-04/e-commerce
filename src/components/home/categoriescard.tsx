'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AccordionUsage from './accordion';

const categorie = [
  { name: 'Security Devices', image: '/doorbells.webp' },
  { name: 'Climate Control', image: '/thermostat.webp' },
  { name: 'Wearable Tech', image: '/watch.webp' },
  { name: 'Surveillance', image: '/camera.webp' },
  { name: 'Audio Systems', image: '/speakers.webp' },
];

export function CategoryGrid() {
  return (
    <>
      <div className=" outer-box-categories">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {categorie.map((category) => (
            <div
              key={category.name}
              className="categoriescade-outer"
            >
              <Link href="/filter" className="category-image-container">
                <Image
                  src={category.image}
                  alt={category.name}
                  width={100}
                  height={100}
                  className="object-contain" />
              </Link>
              <p>{category.name}</p>
            </div>
          ))}
        </div>
      </div>
      {/* <Infocard /> */}
      <BestSeller />
      <AutoSolution />
      <BrandCard />
      <PromoSection />
    </>
  );
}







const Infocard = () => {
  return (
    <><div className="outer-infocard-container">

      <div className="inner-infocard-box">
        <h2>
          A Key That Works Everywhere
        </h2>

        <p>
          Auto-Unlock detects when you arrive and unlocks the door. Enable Auto-Lock to lock when the door closes.
        </p>

        <p>
          Welcome home to an even smarter home. Upgrade your deadbolt with the all-new August Wi-Fi Smart Lock, a lock so smart, it simplifies your daily life and the way your family lives. With built-in WiFi, our lock requires no additional bridge to connect.
        </p>

        <Link
          href="/shop"
          className=""
        >
          Shop Now
        </Link>
      </div>

      <div className="">
        <Image
          src="/scroll-01.webp"
          alt="Scroll preview"
          width={500}
          height={300}
          className="rounded-lg" />
      </div>
    </div>
    </>
  );
};



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

          <h2>Bestsellers</h2>
          <p className="info">Browse the best of our favorite sale styles and brands.</p>


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


    </>
  )
};

const AutoSolution = () => {

  return (

    <>

      <div className="auto-solution-container">
        <div className="auto-solution-content">

          <div className="auto-solution-text">
            <p className="section-title">THE FUTURE OF MEMORY</p>
            <h3 className="main-heading">The Perfect Automation Solution for Your Home</h3>
            <p className="description">
              Smart bulbs are a simple way to add automation to your home. You can control them using your smartphone or voice commands.
            </p>
          </div>


          <div className="auto-solution-image">
            <img className="solution-img" src="/image-with-text-s3.webp" alt="Smart Automation" />
          </div>
        </div>
      </div>

    </>
  )
}


const cards = [
  { name: "Connex" },
  { name: "DRIFLY" },
  { name: "Primus" },
  { name: "ROUS" },
  { name: "sphere" },
  { name: "noise" }
]


const BrandCard = () => {

  return (
    <>
      <div className="outer-brandcard">

        <h2>Shop by Brands</h2>
        <p className="info">Add a short description for this section</p>

        <div className="brandname">
          {cards.map((card, index) => (
            <div key={index} className="brand-item">
              <p>{card.name}</p>
            </div>
          ))}
        </div>

      </div>

    </>
  )

}




const PromoSection = () => {
  return (
    <section className="promo-section">
      <div className="content">
        <span className="badge">Badge Heading</span>
        <h2>Don,t miss a thing.</h2>
        <p>
          See, hear, and speak to visitors in real-time from anywhere on your phone or tablet.
        </p>

        <div className="features">
          <div className="feature-item">
            <AccordionUsage />
            {/* <h3>Record and capture</h3>
            <p>Get instant alerts for anyone who approaches, even if they don,t press the doorbell.</p> */}
          </div>
          {/* <hr />
          <div className="feature-text">Rich notifications</div>
          <div className="feature-text">Smoke alarm detection</div> */}
        </div>
      </div>

      <div className="image-container">
        <Image
          src="/m-tab1.webp"
          alt="Product"
          width={450}
          height={300}
        />
      </div>
    </section>

  );
};















