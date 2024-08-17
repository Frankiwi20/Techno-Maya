import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MobileNavbar.css';

const MobileNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="mobile-navbar">
            <div className="mobile-navbar-container">
                <div className="mobile-navbar-logo">
                    <img src={`${process.env.PUBLIC_URL}/Techno_Maya.jpg`} alt="Tech Maya Logo" />
                    <span>Techno Maya</span>
                </div>
                <div className="mobile-navbar-toggle" onClick={toggleMenu}>
                    ☰ {/* Hamburger Icon */}
                </div>
            </div>
            <ul className={`mobile-navbar-menu ${isOpen ? 'open' : ''}`}>
                <li className="mobile-navbar-item">
                    <Link to="/services" onClick={toggleMenu}>Services</Link>
                </li>
                <li className="mobile-navbar-item">
                    <Link to="/clients" onClick={toggleMenu}>Clients</Link>
                </li>
                <li className="mobile-navbar-item">
                    <Link to="/pricing" onClick={toggleMenu}>Pricing</Link>
                </li>
                <li className="mobile-navbar-item">
                    <Link to="/portfolio" onClick={toggleMenu}>Portfolio</Link>
                </li>
                <li className="mobile-navbar-item">
                    <Link to="/testimonials" onClick={toggleMenu}>Testimonials</Link>
                </li>
                <li className="mobile-navbar-item">
                    <Link to="/about" onClick={toggleMenu}>About Us</Link>
                </li>
                <li className="mobile-navbar-item">
                    <Link to="/contact" onClick={toggleMenu}>Contact Us</Link>
                </li>
            </ul>
        </nav>
    );
};

export default MobileNavbar;
