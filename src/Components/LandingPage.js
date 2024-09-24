import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import './LandingPage.css';

const LandingPage = () => {

    useEffect(() => {
        // Initialize particles.js for background particle effect
        window.particlesJS('particles-js', {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: '#B2AC88' },
                shape: { type: 'circle', stroke: { width: 0, color: '#000000' } },
                opacity: { value: 0.5, random: false, anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false } },
                size: { value: 3, random: true, anim: { enable: false, speed: 40, size_min: 0.1, sync: false } },
                line_linked: { enable: true, distance: 150, color: '#ff5722', opacity: 0.4, width: 1 },
                move: { enable: true, speed: 6, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false, attract: { enable: false, rotateX: 600, rotateY: 1200 } },
            },
            interactivity: {
                detect_on: 'canvas',
                events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true },
                modes: {
                    grab: { distance: 400, line_linked: { opacity: 1 } },
                    bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
                    repulse: { distance: 200, duration: 0.4 },
                    push: { particles_nb: 4 },
                    remove: { particles_nb: 2 },
                },
            },
            retina_detect: true,
        });
    }, []);

    return (
        <>
            <div id="particles-js"></div>
            <motion.div
                className="home-container"
                initial={{ opacity: 0 }}  // Fade in effect for the entire container
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <header className="home-header">
                    {/* Typewriter effect for the main tagline */}
                    <Typewriter
                        options={{
                            strings: ['Bridging cultural significance with modern web solutions'],  // Text to type
                            autoStart: true,
                            loop: true,  // No looping, plays once
                            delay: 50,  // Faster typing speed
                        }}
                    />

                    {/* Typewriter effect for the paragraph */}
                    <Typewriter
                        options={{
                            strings: ['Empowering your digital presence with a blend of technology and cultural heritage.'],  // Text to type
                            autoStart: true,
                            loop: false,  // No looping, plays once
                            delay: 60,  // Speed of typing (slightly slower than tagline)
                        }}
                    />
                </header>

                <motion.div
                    className="home-content"
                    initial={{ x: '-100vw' }}  // Start from the left (off-screen)
                    animate={{ x: 0 }}  // Slide into view
                    transition={{ type: 'spring', stiffness: 50 }}  // Spring animation
                >
                    <div className="home-intro">
                        <p>Let us make the design decisions, so that you dont have to.</p>
                        <Link to="/services" className="cta-button">Explore Our Services</Link>
                    </div>

                    <motion.div
                        className="home-features"
                        initial={{ opacity: 0 }}  // Start invisible
                        animate={{ opacity: 1 }}  // Fade in
                        transition={{ delay: 0.5, duration: 1 }}  // Delayed fade-in effect
                    >
                        <div className="feature-item">
                            <h3>Innovative Web Design</h3>
                            <p>Our design team specializes in creating visually appealing and user-friendly websites that resonate with your target audience.</p>
                        </div>
                        <div className="feature-item">
                            <h3>Optimized Performance</h3>
                            <p>We ensure your website is optimized for speed and efficiency, resulting in lower bounce rates and higher engagement.</p>
                        </div>
                        <div className="feature-item">
                            <h3>24/7 Support</h3>
                            <p>Our support team is available around the clock, ensuring your website is always running smoothly.</p>
                            <Link to="/support" className="support-link">Contact Support</Link>
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </>
    );
};

export default LandingPage;
