import React from 'react';
import { motion } from 'framer-motion';
import './Portfolio.css'; // Import the CSS file for styling

const Portfolio = () => {
    return (
        <div className="portfolio-wrapper">
            <motion.div
                className="portfolio-container"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}  // Smooth animation
                transition={{ duration: 1 }}
            >
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    Portfolio
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.7 }}
                >
                    I'm excited to be working on my first professional project, a custom website for a client to showcase and sell cake designs. This project will soon be featured here, alongside other upcoming work as I continue to build my portfolio.
                </motion.p>
                <motion.div
                    className="portfolio-preview"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.8 }} // Slightly greyed out effect
                    transition={{ duration: 1, delay: 0.9 }}
                >
                    <p className="coming-soon">Portfolio projects coming soon...</p>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Portfolio;
