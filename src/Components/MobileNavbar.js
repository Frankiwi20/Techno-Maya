import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <>
            {/* Mobile Sidebar Toggle Button */}
            <button className="mobile-navbar-button" onClick={toggleSidebar}>
                ☰
            </button>

            {/* Sidebar for Mobile */}
            <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
                <button className="close-btn" onClick={toggleSidebar}>×</button>
                <ul>
                    <li><Link to="/" onClick={toggleSidebar}>Home</Link></li>
                    <li><Link to="/services" onClick={toggleSidebar}>Services</Link></li>
                    <li><Link to="/clients" onClick={toggleSidebar}>Clients</Link></li>
                    <li><Link to="/pricing" onClick={toggleSidebar}>Pricing</Link></li>
                    <li><Link to="/portfolio" onClick={toggleSidebar}>Portfolio</Link></li>
                    <li><Link to="/testimonials" onClick={toggleSidebar}>Testimonials</Link></li>
                    <li><Link to="/about" onClick={toggleSidebar}>About Us</Link></li>
                    <li><Link to="/contact" onClick={toggleSidebar}>Contact Us</Link></li>
                </ul>
            </div>

            {/* Desktop Navbar */}
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        <img src={`${process.env.PUBLIC_URL}/Techno_Maya.jpg`} alt="Tech Maya Logo" className="navbar-logo-img" />
                        <span className="navbar-logo-text">Techno Maya</span>
                    </Link>
                    <ul className="navbar-menu">
                        <li className="navbar-item">
                            <Link to="/services" className="navbar-link">Services</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/clients" className="navbar-link">Clients</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/pricing" className="navbar-link">Pricing</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/portfolio" className="navbar-link">Portfolio</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/testimonials" className="navbar-link">Testimonials</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/about" className="navbar-link">About Us</Link>
                        </li>
                    </ul>
                    <Link to="/contact" className="navbar-button">
                        Contact Us
                    </Link>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
