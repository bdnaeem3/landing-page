import React from 'react';

// Page Partials
import Navbar from '../partials/Navbar';
import Slider from '../partials/Slider'
import Features from '../partials/Features'
import Services from '../partials/Services'
import Footer from '../partials/Footer'

export default () => {
    return (
        <main>
            <Navbar/>
            <Slider/>
            <Features/>
            <Services/>
            <Footer/>
        </main>
    )
}