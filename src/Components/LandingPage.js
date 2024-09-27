import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import './LandingPage.css';

const LandingPage = () => {
    const [showIntro, setShowIntro] = useState(false);
    const [showFeatures, setShowFeatures] = useState(false);

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
                            loop: false,  // No looping, plays once
                            delay: 50,  // Faster typing speed
                            onComplete: () => setShowIntro(true),  // Show intro content after typing completes
                        }}
                    />
                </header>

                {showIntro && (
                    <motion.div
                        className="home-content"
                        initial={{ x: '-100vw' }}  // Start from the left (off-screen)
                        animate={{ x: 0 }}  // Slide into view
                        transition={{ type: 'spring', stiffness: 50 }}  // Spring animation
                    >
                        <div className="home-intro">
                            <Typewriter
                                options={{
                                    strings: ['Let us make the design decisions, so that you dont have to.'],  // Text to type
                                    autoStart: true,
                                    loop: false,
                                    delay: 60,  // Speed of typing for the intro content
                                    onComplete: () => setShowFeatures(true),  // Show features content after typing completes
                                }}
                            />
                            <Link to="/services" className="cta-button">Explore Our Services</Link>
                        </div>
                    </motion.div>
                )}

                {showFeatures && (
                    <motion.div
                        className="home-features"
                        initial={{ opacity: 0 }}  // Start invisible
                        animate={{ opacity: 1 }}  // Fade in
                        transition={{ delay: 0.5, duration: 1 }}  // Delayed fade-in effect
                    >
                        <div className="feature-item">
                            <Typewriter
                                options={{
                                    strings: ['Innovative Web Design'],
                                    autoStart: true,
                                    loop: false,
                                    delay: 60,  // Typing speed for feature title
                                }}
                            />
                            <Typewriter
                                options={{
                                    strings: ['Our design team specializes in creating visually appealing and user-friendly websites that resonate with your target audience.'],
                                    autoStart: true,
                                    loop: false,
                                    delay: 70,  // Typing speed for feature description
                                }}
                            />
                        </div>

                        <div className="feature-item">
                            <Typewriter
                                options={{
                                    strings: ['Optimized Performance'],
                                    autoStart: true,
                                    loop: false,
                                    delay: 60,
                                }}
                            />
                            <Typewriter
                                options={{
                                    strings: ['We ensure your website is optimized for speed and efficiency, resulting in lower bounce rates and higher engagement.'],
                                    autoStart: true,
                                    loop: false,
                                    delay: 70,
                                }}
                            />
                        </div>

                        <div className="feature-item">
                            <Typewriter
                                options={{
                                    strings: ['24/7 Support'],
                                    autoStart: true,
                                    loop: false,
                                    delay: 60,
                                }}
                            />
                            <Typewriter
                                options={{
                                    strings: ['Our support team is available around the clock, ensuring your website is always running smoothly.'],
                                    autoStart: true,
                                    loop: false,
                                    delay: 70,
                                }}
                            />
                            <Link to="/support" className="support-link">Contact Support</Link>
                        </div>
                    </motion.div>
                )}
            </motion.div>
        </>
    );
};

export default LandingPage;
