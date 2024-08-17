import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MobileNavbar.css';

const MobileNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className="mobile-navbar">
                <Link to="/" className="mobile-navbar-logo">
                    <img src={`${process.env.PUBLIC_URL}/Techno_Maya.jpg`} alt="Tech Maya Logo" />
                    <span>Techno Maya</span>
                </Link>
                <button className="mobile-navbar-toggle" onClick={toggleSidebar}>
                    &#9776; {/* Hamburger icon */}
                </button>
            </nav>
            <div className={`mobile-sidebar ${isOpen ? 'active' : ''}`}>
                <ul>
                    <li><Link to="/services" onClick={toggleSidebar}>Services</Link></li>
                    <li><Link to="/clients" onClick={toggleSidebar}>Clients</Link></li>
                    <li><Link to="/pricing" onClick={toggleSidebar}>Pricing</Link></li>
                    <li><Link to="/portfolio" onClick={toggleSidebar}>Portfolio</Link></li>
                    <li><Link to="/testimonials" onClick={toggleSidebar}>Testimonials</Link></li>
                    <li><Link to="/about" onClick={toggleSidebar}>About Us</Link></li>
                    <li><Link to="/contact" onClick={toggleSidebar}>Contact Us</Link></li>
                </ul>
            </div>
        </>
    );
};

export default MobileNavbar;
