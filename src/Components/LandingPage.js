import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './LandingPage.css';

const LandingPage = () => {

    useEffect(() => {
        // Initialize particles.js
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
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <header className="home-header">
                    <h1>Techno Maya</h1>
                    <p>Bridging cultural significance with modern web solutions</p>
                </header>
                <motion.div
                    className="home-content"
                    initial={{ x: '-100vw' }}
                    animate={{ x: 0 }}
                    transition={{ type: 'spring', stiffness: 50 }}
                >
                    <div className="home-intro">
                        <p>Empowering your digital presence with a blend of technology and cultural heritage.</p>
                        <Link to="/services" className="cta-button">Explore Our Services</Link>
                    </div>
                    <motion.div
                        className="home-features"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                    >
                        <div className="feature-item">
                            <h3>Innovative Web Design</h3>
                            <p>Our design team specializes in creating visually appealing and user-friendly websites that not only look great but also resonate with your target audience. We blend modern aesthetics with cultural elements to ensure your website stands out while maintaining a deep connection with your audience.</p>
                        </div>
                        <div className="feature-item">
                            <h3>Optimized Performance</h3>
                            <p>In the fast-paced digital world, performance is key. We ensure your website is optimized for speed and efficiency, resulting in lower bounce rates and higher user engagement. From image compression to server-side optimizations, we cover all aspects to deliver a seamless user experience.</p>
                        </div>
                        <div className="feature-item">
                            <h3>24/7 Support</h3>
                            <p>We understand that your website is a crucial part of your business, which is why our support team is available around the clock. Whether it's a minor tweak or an urgent fix, we're here to assist you anytime, ensuring your website is always up and running smoothly.</p>
                            <Link to="/support" className="support-link">Contact Support</Link>
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </>
    );
};

export default LandingPage;
