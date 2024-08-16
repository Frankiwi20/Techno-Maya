import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    <img src={`${process.env.PUBLIC_URL}/Techno_Maya.jpg`} alt="Tech Maya Logo" className="navbar-logo-img" />
                    <span className="navbar-logo-text">Techno Maya</span> {/* Wrap the text with a span */}
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
    );
};

export default Navbar;
