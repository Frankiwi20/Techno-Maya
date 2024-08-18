import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MobileNavbar.css';

const MobileNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const closeSidebar = () => {
        setIsOpen(false);
    };

    return (
        <>
            <nav className="mobile-navbar">
                <button className="mobile-navbar-toggle" onClick={toggleSidebar}>
                    &#9776; {/* Hamburger icon */}
                </button>
                <div className="mobile-navbar-logo-container">
                    <Link to="/" className="mobile-navbar-logo">
                        <img src={`${process.env.PUBLIC_URL}/Techno_Maya.jpg`} alt="Tech Maya Logo" />
                        <span>Techno Maya</span>
                    </Link>
                </div>
            </nav>
            <div className={`mobile-sidebar ${isOpen ? 'active' : ''}`}>
                <ul>
                    <li><Link to="/services" onClick={closeSidebar}>Services</Link></li>
                    <li><Link to="/clients" onClick={closeSidebar}>Clients</Link></li>
                    <li><Link to="/pricing" onClick={closeSidebar}>Pricing</Link></li>
                    <li><Link to="/portfolio" onClick={closeSidebar}>Portfolio</Link></li>
                    <li><Link to="/testimonials" onClick={closeSidebar}>Testimonials</Link></li>
                    <li><Link to="/about" onClick={closeSidebar}>About Us</Link></li>
                    <li><Link to="/contact" onClick={closeSidebar}>Contact Us</Link></li>
                </ul>
            </div>
            {/* Overlay that closes the sidebar when clicked */}
            {isOpen && <div className="mobile-sidebar-overlay" onClick={closeSidebar}></div>}
        </>
    );
};

export default MobileNavbar;
