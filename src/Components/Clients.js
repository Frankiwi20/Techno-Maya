import React from 'react';
import { motion } from 'framer-motion';
import './Clients.css'; // Import the CSS file for styling

const Clients = () => {
    return (
        <div className="clients-wrapper">
            <div className="clients-container">
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Our Clients
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    We are proud to have worked with a diverse range of clients, helping them achieve their goals through our innovative web solutions. Below you will find a gallery of our clients that we have had the pleasure to work with.
                </motion.p>
                <motion.div
                    className="clients-gallery"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <p className="coming-soon">Client gallery coming soon...</p>
                </motion.div>
            </div>
        </div>
    );
};

export default Clients;
