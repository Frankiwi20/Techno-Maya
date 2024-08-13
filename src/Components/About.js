import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import './About.css'; // Import the CSS file for styling

const AboutUs = () => {
    return (
        <div className="about-wrapper">  {/* Apply the .about-wrapper class */}
            <div className="about-container">
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    About Us
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Mission:
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    Here at Techno Maya, we are dedicated to bridging the existing digital divide by making the web more accessible and
                    user-friendly for the Spanish-speaking community. We are passionate about bringing websites up to
                    current standards, ensuring they are modern, intuitive, and culturally resonant. Our work is driven
                    by a commitment to leveraging UX principles to create digital experiences that cater to diverse
                    audiences.
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    Future Goals:
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    As we expand into Guatemala, we look forward to working closely with local businesses to
                    enhance their online presence and support their growth in the digital landscape. At Techno Maya, we
                    believe in the power of technology to connect, empower, and uplift communities, and we are excited to
                    be part of that journey.
                </motion.p>
            </div>
        </div>
    );
};

export default AboutUs;

