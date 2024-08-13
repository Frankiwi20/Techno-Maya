import React from 'react';
import { motion } from 'framer-motion';
import './Testimonials.css'; // Import the CSS file for styling

const Testimonial = () => {
    return (
        <div className="testimonial-wrapper">
            <motion.div
                className="testimonial-container"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}  // Full opacity for visibility
                transition={{ duration: 1 }}
            >
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    Testimonials
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.7 }}
                >
                    Our clients love the work we do! Stay tuned for more updates and hear what they have to say.
                </motion.p>
                <motion.p
                    className="coming-soon"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.8 }} // Slightly greyed out text
                    transition={{ duration: 1, delay: 0.9 }}
                >
                    Coming Soon...
                </motion.p>
            </motion.div>
        </div>
    );
};

export default Testimonial;
