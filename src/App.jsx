import React, { useEffect } from 'react'; 
import { Routes, Route } from 'react-router-dom';
import Lenis from 'lenis'; // Smooth scrolling library

// --- Layouts & Utilities ---
import SiteLayout from './components/layout/SiteLayout';
import SiteLayout2 from './components/layout/SiteLayout2';
import SiteLayout3 from './components/layout/SiteLayout3';
import ScrollToTop from './components/layout/ScrollTotop'

// --- General Page Imports ---
import HomePage from './components/pages/Home';
import AboutPage from './components/pages/About';
import ContactUs from './components/pages/ContactUs';

import FAQ from './components/pages/FAQ';
import Booking from './components/pages/Booking';
import Reviews from './components/pages/Reviews';
import ServicesPage from './components/pages/Services'; // Generic Services Overview

// --- Specific Service Page Imports (Matching Footer Links) ---
import HomeShifting from './components/pages/services/HomeShifting';
import OfficeShifting from './components/pages/services/OfficeShifting';
import CarTransport from './components/pages/services/CarTransport';
import BikeTransport from './components/pages/services/BikeTransport';
import LocalShifting from './components/pages/services/LocalShifting';
import LuggageShifting from './components/pages/services/LuggageShifting';
import LogisticShifting from './components/pages/services/LogisticShifting';
import IntercityShifting from './components/pages/services/IntercityShifting';

const App = () => {
    // 1. Lenis useEffect Hook (Smooth Scrolling)
    useEffect(() => {
        // 2. Initialize Lenis instance
        const lenis = new Lenis({
            duration: 1.2, // Adjust duration for scroll speed (default is 1.2)
            smooth: true,  
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Optional: Custom easing
        });

        // 3. Define the Animation Frame Loop
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        
        // 4. Start the loop
        requestAnimationFrame(raf);

        // 5. Cleanup function
        return () => lenis.destroy();
    }, []); // Empty dependency array ensures it runs once on mount

    // 6. Component rendering
    return (
        <>
        <ScrollToTop/>
        <Routes>
            <Route path="/" element={<SiteLayout><HomePage /></SiteLayout>} />
            <Route path="/about" element={<SiteLayout2><AboutPage /></SiteLayout2>} />
            
            {/* General Pages */}
            <Route path="/services" element={<SiteLayout><ServicesPage /></SiteLayout>} />
            <Route path="/contact" element={<SiteLayout2><ContactUs /></SiteLayout2>} />
            <Route path="/faq" element={<SiteLayout><FAQ /></SiteLayout>} />
            <Route path="/reviews" element={<SiteLayout><Reviews /></SiteLayout>} />
            <Route path="/booking" element={<SiteLayout3><Booking /></SiteLayout3>} />
            

            {/* Dedicated Service Pages (Matching Footer Links) */}
            <Route path="/home-shifting" element={<SiteLayout2><HomeShifting /></SiteLayout2>} />
            <Route path="/office-shifting" element={<SiteLayout2><OfficeShifting /></SiteLayout2>} />
            <Route path="/car-transport" element={<SiteLayout2><CarTransport /></SiteLayout2>} />
            <Route path="/bike-transport" element={<SiteLayout2><BikeTransport /></SiteLayout2>} />
            <Route path="/local-shifting" element={<SiteLayout2><LocalShifting /></SiteLayout2>} />
            <Route path="/luggage-shifting" element={<SiteLayout2><LuggageShifting /></SiteLayout2>} />
            <Route path="/logistic-shifting" element={<SiteLayout2><LogisticShifting /></SiteLayout2>} />
            <Route path="/intercity-shifting" element={<SiteLayout2><IntercityShifting /></SiteLayout2>} />
        </Routes>
        </>
    );
};

export default App;