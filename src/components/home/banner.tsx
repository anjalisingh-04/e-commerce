
"use client"


import Link from 'next/link';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';



const images = [
    {
        src: "/slide1.webp",
        alt: "Banner 1",
        url: "#",

    },
    {
        src: "/slide2.webp",
        alt: "Banner 2",
        url: "#",

    },

];

const HomeBanner = () => {
    return (

        <BannerWithCarousel />

    );
};

const BannerWithCarousel = () => {
    return (
        <div className="banner-outer">


            <Carousel>
                {images.map((item, index) => (
                    <Carousel.Item key={index}>
                        <Link href={item.url}>
                            <img src={item.src} alt={item.alt} />
                        </Link>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}

export default HomeBanner;
