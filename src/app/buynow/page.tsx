

import HomeWrapper from "@/components/wrapper/Home";



export default function Buynow() {


    return (
        <>
            <HomeWrapper>
                <div className="product-buy-box">
                    <div className="inner-product-buy-box1">



                        <h2>Shopping Card</h2>
                        <p>Homepage / Clothing Categories / My Shopping Card</p>

                        <div className="login-a">
                            <div className="a-log-num">
                                <div className="a">
                                    {/* <p>a</p> */}
                                </div>

                                <div className="log-num">
                                    <p>LOGIN</p>
                                    <p className="mic">Michael Smith  +806-445-4453</p>
                                </div>
                            </div>
                            <div className="change-btn">
                                <button>CHANGE</button>
                            </div>

                        </div>

                        <div className="login-a">
                            <div className="a-log-num">
                                <div className="a">
                                    {/* <p>b</p> */}
                                </div>

                                <div className="log-num">
                                    <p>SHIPPING ADDRESS</p>
                                    <p className="mic">Brady Cooper,New Civil Colony, Salt Lake City,Utah </p>
                                    <p className="mic">United States,2971 Avenue.</p>
                                </div>
                            </div>
                            <div className="change-btn">
                                <button>CHANGE</button>
                            </div>

                        </div>

                        <div className="payment-debite">
                            <div className="payment-m">
                                <div className="a">
                                    {/* <p>b</p> */}
                                </div>
                                <p>PAYMENT METHODS</p>
                            </div>

                            <div className="debit-credit-card">
                                <div className="a"></div>
                                <div className="card-img-box">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-credit-card" viewBox="0 0 16 16">
                                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
                                        <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                                    </svg>
                                </div>
                                <p>Debit/Credit Card</p>
                            </div>
                            <div className="payment-form">
                                <label>Enter Card Number *</label>
                                <input type="text" className="card-number" />

                                <div className="valid-date">
                                    <div>
                                        <label>Valid Date</label>
                                        <div className="valid-date">
                                            <select>
                                                <option>MM</option>
                                            </select>
                                            <select>
                                                <option>YYYY</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label>CVV *</label>
                                        <input type="text" className="cvv-input" />
                                    </div>

                                    <button className="payment-button">Pay $117.00</button>
                                </div>

                                <p>Your card details would be securely saved for faster payments. Your CVV will not be stored</p>
                            </div>

                            <div className="debit-credit-card">
                                <div className="a"></div>
                                <div className="card-img-box">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-credit-card" viewBox="0 0 16 16">
                                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
                                        <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                                    </svg>
                                </div>
                                <p>Net Banking</p>
                            </div>

                            <div className="debit-credit-card">
                                <div className="a"></div>
                                <div className="card-img-box">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-wifi" viewBox="0 0 16 16">
                                        <path d="M15.384 6.115a.485.485 0 0 0-.047-.736A12.44 12.44 0 0 0 8 3C5.259 3 2.723 3.882.663 5.379a.485.485 0 0 0-.048.736.52.52 0 0 0 .668.05A11.45 11.45 0 0 1 8 4c2.507 0 4.827.802 6.716 2.164.205.148.49.13.668-.049" />
                                        <path d="M13.229 8.271a.482.482 0 0 0-.063-.745A9.46 9.46 0 0 0 8 6c-1.905 0-3.68.56-5.166 1.526a.48.48 0 0 0-.063.745.525.525 0 0 0 .652.065A8.46 8.46 0 0 1 8 7a8.46 8.46 0 0 1 4.576 1.336c.206.132.48.108.653-.065m-2.183 2.183c.226-.226.185-.605-.1-.75A6.5 6.5 0 0 0 8 9c-1.06 0-2.062.254-2.946.704-.285.145-.326.524-.1.75l.015.015c.16.16.407.19.611.09A5.5 5.5 0 0 1 8 10c.868 0 1.69.201 2.42.56.203.1.45.07.61-.091zM9.06 12.44c.196-.196.198-.52-.04-.66A2 2 0 0 0 8 11.5a2 2 0 0 0-1.02.28c-.238.14-.236.464-.04.66l.706.706a.5.5 0 0 0 .707 0l.707-.707z" />
                                    </svg>
                                </div>
                                <p>google/App wallet</p>
                            </div>

                        </div>


                    </div>

                    <div className="inner-product-buy-box2">
                        <div className="inner-product-order">
                            <h2>Your Order</h2>

                            <div className="product-size-box">
                                <div className="inner-product-size">
                                    <img className="product-size-img" src="/speakers.webp"></img>

                                    <div className="product-detils">
                                        <p>Smart Speaker</p>
                                        <div className="div">
                                            <p className="quantity">Quantity: 1</p>
                                            <p className="quantity">color: Black</p>
                                        </div>
                                        <p className="price">$48.20</p>

                                    </div>
                                </div>


                                <div className="inner-product-size">
                                    <img className="product-size-img" src="/blue dot.webp"></img>

                                    <div className="product-detils">
                                        <p>Smart Speaker</p>
                                        <div >
                                            <p className="quantity">Quantity: 1</p>
                                            <p className="quantity">color: Black</p>
                                        </div>
                                        <p className="price">$48.20</p>

                                    </div>
                                </div>

                            </div>

                            <div className="deliv-dis-box">
                                <div className="deliv">
                                    <p>Delivery</p>
                                    <div className="exp">
                                        <p className="pri">$20</p>
                                        <p>(Express)</p>
                                    </div>
                                </div>


                                <div className="deliv">
                                    <p>Discount</p>
                                    <div className="exp">
                                        <p className="pri">-$10</p>

                                    </div>
                                </div>
                            </div>


                            <div className="total">
                                <p>Total</p>
                                <p>$117,00</p>
                            </div>


                        </div>
                    </div>
                </div>

            </HomeWrapper>
        </>
    )
}
