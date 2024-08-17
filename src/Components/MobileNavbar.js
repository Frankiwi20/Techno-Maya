import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MobileNavbar.css';

const MobileNavbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="mobile-navbar">
            <div className="mobile-navbar-header">
                <Link to="/" className="mobile-navbar-logo">
                    Techno Maya
                </Link>
                <button className="mobile-navbar-toggle" onClick={toggleMenu}>
                    ☰
                </button>
            </div>
            {menuOpen && (
                <ul className="mobile-navbar-menu">
                    <li>
                        <Link to="/services" onClick={toggleMenu}>Services</Link>
                    </li>
                    <li>
                        <Link to="/clients" onClick={toggleMenu}>Clients</Link>
                    </li>
                    <li>
                        <Link to="/pricing" onClick={toggleMenu}>Pricing</Link>
                    </li>
                    <li>
                        <Link to="/portfolio" onClick={toggleMenu}>Portfolio</Link>
                    </li>
                    <li>
                        <Link to="/testimonials" onClick={toggleMenu}>Testimonials</Link>
                    </li>
                    <li>
                        <Link to="/about" onClick={toggleMenu}>About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact" onClick={toggleMenu}>Contact Us</Link>
                    </li>
                </ul>
            )}
        </nav>
    );
};

export default MobileNavbar;

