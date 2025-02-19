import React from 'react'
import Navbar from '../navbar'
import Footer from '../footer'

const HomeWrapper = ({ children }: any) => {
    return (
        <>
            <Navbar />
            <div className="main-wrapper">

                {children}
            </div>
            <Footer />

        </>
    )
}

export default HomeWrapper
