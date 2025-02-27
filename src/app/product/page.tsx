"use client"

import { useState } from "react";

export default function ProductPage() {
    const [color, setColor] = useState("Black");
    const [material, setMaterial] = useState("Plastic");
    const [quantity, setQuantity] = useState(1);

    const colors = ["Black", "Green", "Blue", "Red"];
    const materials = ["Plastic", "Wood"];

    return (
        <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-xl grid grid-cols-1 md:grid-cols-2 gap-8">

            <div className="flex justify-center items-center">
                <img
                    src={"/m7.webp"}
                    alt={'Smart Home '}
                    className="rounded-lg shadow-lg max-w-full h-auto"
                />
            </div>


            <div>

                <span className="text-xs bg-gray-200 px-2 py-1 rounded-md">Voice Command</span>
                <h1 className="text-3xl font-bold mt-4">Smart Home Speaker</h1>
                <p className="text-xl font-semibold mt-1 text-gray-800">$82.00</p>
                <p className="text-sm text-gray-600 mt-2">Tax included. <a href="#" className="text-blue-600 hover:text-blue-800">Shipping</a> calculated at checkout.</p>


                <div className="flex items-center mt-3">
                    <span className="text-yellow-500">★★★★☆</span>
                    <span className="ml-2 text-gray-600">4.0</span>
                </div>


                <p className="text-gray-700 mt-4">
                    A smart home speaker is a voice-activated device designed to perform various tasks, control smart home devices, and offer high-quality audio playback.
                </p>
                <a href="#" className="text-blue-600 font-semibold mt-2 inline-block hover:text-blue-800">Read more</a>


                <div className="mt-6">
                    <p className="font-semibold text-gray-700">Color: {color}</p>
                    <div className="flex gap-3 mt-2">
                        {colors.map((c) => (
                            <button
                                key={c}
                                className={`w-10 h-10 rounded-full border-2 transition duration-200 ease-in-out ${color === c ? "border-black" : "border-transparent"}`}
                                style={{ backgroundColor: c.toLowerCase() }}
                                onClick={() => setColor(c)}
                            />
                        ))}
                    </div>
                </div>


                <div className="mt-6">
                    <p className="font-semibold text-gray-700">Material: {material}</p>
                    <div className="flex gap-3 mt-2">
                        {materials.map((m) => (
                            <button
                                key={m}
                                className={`px-4 py-2 border rounded-lg transition duration-200 ease-in-out ${material === m ? "border-black bg-gray-100 font-semibold" : "border-gray-400"}`}
                                onClick={() => setMaterial(m)}
                            >
                                {m}
                            </button>
                        ))}
                    </div>
                </div>


                <div className="mt-6">
                    <p className="font-semibold text-gray-700">Quantity</p>
                    <div className="flex items-center mt-2">
                        <button
                            className="px-4 py-2 border rounded-lg bg-gray-200 hover:bg-gray-300 transition"
                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        >
                            -
                        </button>
                        <span className="mx-4 text-lg font-medium">{quantity}</span>
                        <button
                            className="px-4 py-2 border rounded-lg bg-gray-200 hover:bg-gray-300 transition"
                            onClick={() => setQuantity(quantity + 1)}
                        >
                            +
                        </button>
                    </div>
                </div>


                <div className="flex gap-4 mt-8">
                    <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-200">
                        Add to cart
                    </button>
                    <button className="flex-1 bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-700 transition duration-200">
                        Buy it now
                    </button>
                </div>
            </div>
        </div>


    );
}

