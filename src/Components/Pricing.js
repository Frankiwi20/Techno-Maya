import React from 'react';
import { motion } from 'framer-motion';
import './Pricing.css'; // Import the CSS file for styling

const Pricing = () => {
    return (
        <div className="pricing-wrapper">
            <div className="pricing-container">
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Flexible and Competitive Pricing
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Commitment to Your Success
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    At Techno Maya, we believe in offering flexible pricing plans that cater to the unique needs of each of our clients. Our pricing is competitive, ensuring you receive the best value for your investment while achieving your business goals.
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    We are committed to your success, and we work closely with you to ensure our services align with your budget and objectives. Whether you're a small business or a large enterprise, our goal is to provide solutions that fit your needs and drive results.
                </motion.p>

                <div className="pricing-contact">
                    <motion.h3
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        Contact Our Sales Team
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                    >
                        For a free quote and to learn more about our pricing options, please contact our sales team at <a href="mailto:sales@tech-maya.com">sales@tech-maya.com</a>.
                    </motion.p>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
