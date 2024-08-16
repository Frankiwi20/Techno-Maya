import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    <img src={`${process.env.PUBLIC_URL}/Techno_Maya.jpg`} alt="Tech Maya Logo" className="navbar-logo-img" />
                    <span className="navbar-logo-text">Techno Maya</span>
                </Link>
                <div className="navbar-toggle" onClick={toggleSidebar}>
                    <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className={isOpen ? "navbar-menu active" : "navbar-menu"}>
                    <li className="navbar-item">
                        <Link to="/services" className="navbar-link" onClick={toggleSidebar}>Services</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/clients" className="navbar-link" onClick={toggleSidebar}>Clients</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/pricing" className="navbar-link" onClick={toggleSidebar}>Pricing</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/portfolio" className="navbar-link" onClick={toggleSidebar}>Portfolio</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/testimonials" className="navbar-link" onClick={toggleSidebar}>Testimonials</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/about" className="navbar-link" onClick={toggleSidebar}>About Us</Link>
                    </li>
                </ul>
                <Link to="/contact" className="navbar-button">
                    Contact Us
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
