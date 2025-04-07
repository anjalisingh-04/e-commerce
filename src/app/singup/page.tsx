"use client"

import React, { useState } from 'react'

const sign = () => {



    return (
        <div>
            <div className="signup-page-div">
                <div className="vison">
                    <div className="vision-text">
                        <h6>Hi, Welcome to</h6>
                        <h1>VISION</h1>
                    </div>
                </div>
                <h3>Sign Up Now</h3>

                <form className='form'>

                    <div className="num-box">
                        <label className='lab'>Email</label>
                        <br></br>
                        <input type='email' className='num' required >
                        </input>
                    </div>


                    <div className="num-box">
                        <label className='lab'>Password</label>
                        <br></br>
                        <input type='password' className='num' required>
                        </input>
                    </div>

                    <div className="checkbox">
                        <input type='checkbox'></input>
                        <label>By continuing, you agree to <span>Vision</span>  Terms of Use and Privacy<br></br> Policy.</label>
                    </div>

                    <button className='btn-otp'>Send OTP</button>

                </form>
            </div>
        </div>
    )
}

export default sign


