'use client';

import Image from 'next/image';

const promotions = [
    {
        title: 'Up to 50% off on accessories',
        link: '#',
        image: '/promotion-1.avif',
    },
    {
        title: 'Use automation to save energy',
        link: '#',
        image: '/promotion-2.avif',
    },
    {
        title: 'Enjoy a greater level of home security',
        link: '#',
        image: '/promotion-3.avif',
    },
];

export default function PromoSection() {
    return (
        <div className="promo-card">
            <div className="inner-promo-card">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {promotions.map((promo, index) => (
                        <div key={index} className="inner-promo-card2">
                            <div className="image-box ">
                                <Image src={promo.image} alt={promo.title} width={100} height={100} className="object-cover" />
                            </div>
                            <div>
                                <h3>{promo.title}</h3>
                                <a href={promo.link} >Shop now &rarr;</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

