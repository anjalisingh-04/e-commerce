import Image from "next/image";

const simp = [

    {
        image: "/p7-1_4830ca7f-d3c3-485e-a907-a75417fd3eae.webp",
        rating: 4.5,
        reviews: 1200,
        name: "ADEPT HOME",
        description: "Colorful Smart Led Bulb",
        isNew: true,

    },
    {
        image: "/p5-1_0ee0d553-4d62-42d0-b889-21fbbb9b879a.webp",
        rating: 4.3,
        reviews: 2300,
        name: "EVO SPHERE",
        description: "Radius  Portable Project ",

    },
    {
        image: "/p9-1.webp",
        rating: 4.0,
        reviews: 1100,
        name: "CONNECTIO",
        description: "Minimal Gray Pixel",

    },
];

const simple = [

    {
        image: "/p8-1.webp",
        rating: 4.5,
        reviews: 1200,
        name: "CIRRUS HOME",
        description: "Orange Smart Band",

    },
    {
        image: "/smart home speaker.webp",
        rating: 4.3,
        reviews: 2300,
        name: "ELEMENT SYNC",
        description: "Smart Home Speaker ",

    },
    {
        image: "/speakers.webp",
        rating: 4.0,
        reviews: 1100,
        name: "SPEAKER",
        description: "Collections Speaker",
        isNew: true,
    },
];

const products = [

    {
        image: "/blue dot.webp",
        rating: 4.5,
        reviews: 1200,
        name: "CLEAR LINK",
        description: "speaker",
        isNew: true,
    },
    {
        image: "/home control.webp",
        rating: 4.3,
        reviews: 2300,
        name: "GREEN LINK",
        description: "smart home control ",

    },
    {
        image: "/indoor wifi.webp",
        rating: 4.0,
        reviews: 1100,
        name: "DRIFLY",
        description: "Indoor WiFi",

    },
];

export default function ProductGrid() {
    return (
        <><div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-4 ">
            {products.map((product, index) => (
                <div key={index} className="product-card">
                    {product.isNew && <span className="product-badge">NEW</span>}
                    <Image
                        src={product.image}
                        alt={product.name}
                        width={300}
                        height={200}
                        className="product-image" />
                    <div className="product-info">
                        <h3 className="product-title">{product.name}</h3>
                        <p className="product-description">{product.description}</p>

                        <button className="product-button">Add to Cart</button>
                    </div>
                </div>
            ))}
        </div>
            <Simpl />
            <Simp />
        </>
    );
}


const Simpl = () => {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-6 ">
                {simple.map((product, index) => (
                    <div key={index} className="product-card">
                        {product.isNew && <span className="product-badge">NEW</span>}
                        <Image
                            src={product.image}
                            alt={product.name}
                            width={300}
                            height={200}
                            className="product-image"
                        />
                        <div className="product-info">
                            <h3 className="product-title">{product.name}</h3>
                            <p className="product-description">{product.description}</p>

                            <button className="product-button">Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )




}



const Simp = () => {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-6 ">
                {simp.map((product, index) => (
                    <div key={index} className="product-card">
                        {product.isNew && <span className="product-badge">NEW</span>}
                        <Image
                            src={product.image}
                            alt={product.name}
                            width={300}
                            height={200}
                            className="product-image"
                        />
                        <div className="product-info">
                            <h3 className="product-title">{product.name}</h3>
                            <p className="product-description">{product.description}</p>

                            <button className="product-button">Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )




}

