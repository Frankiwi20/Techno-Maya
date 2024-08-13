import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import LandingPage from './Components/LandingPage';
import AboutUs from './Components/About'; // Import the AboutUs component
import Services from './Components/Services'
import Pricing from './Components/Pricing'
import Testimonial from './Components/Testimonials'
import Clients from './Components/Clients'
import Portfolio from './Components/Portfolio'
import './App.css';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/about" element={<AboutUs />} /> {/* AboutUs Route */}
                <Route path="/services" element={<Services/>}/>
                <Route path="/pricing" element={<Pricing/>}/>
                <Route path="testimonials" element={<Testimonial/>}/>
                <Route path="clients" element={<Clients/>}/>
                <Route path="portfolio" element={<Portfolio/>}/>
                {/* Add more routes here as you build additional pages */}
            </Routes>
        </Router>
    );
}

export default App;
