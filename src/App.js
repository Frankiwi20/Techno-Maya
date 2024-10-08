import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import MobileNavbar from './Components/MobileNavbar';
import LandingPage from './Components/LandingPage';
import AboutUs from './Components/About';
import Services from './Components/Services';
import Pricing from './Components/Pricing';
import Testimonial from './Components/Testimonials';
import Clients from './Components/Clients';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';  // Import the Contact component
import './App.css';

function App() {
    return (
        <Router>
            <Navbar />  {/* Desktop Navbar */}
            <MobileNavbar />  {/* Mobile Navbar */}
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/services" element={<Services />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/testimonials" element={<Testimonial />} />
                <Route path="/clients" element={<Clients />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} /> {/* Add the Contact route */}
            </Routes>
        </Router>
    );
}

export default App;
