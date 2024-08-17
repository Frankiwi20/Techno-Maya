import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import MobileNavbar from './Components/MobileNavbar'; // Import Mobile Navbar
import LandingPage from './Components/LandingPage';
import AboutUs from './Components/About';
import Services from './Components/Services';
import Pricing from './Components/Pricing';
import Testimonial from './Components/Testimonials';
import Clients from './Components/Clients';
import Portfolio from './Components/Portfolio';
import './App.css';

function App() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <Router basename="/Techno-Maya">
            {isMobile ? <MobileNavbar /> : <Navbar />}
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/services" element={<Services />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/testimonials" element={<Testimonial />} />
                <Route path="/clients" element={<Clients />} />
                <Route path="/portfolio" element={<Portfolio />} />
            </Routes>
        </Router>
    );
}

export default App;
