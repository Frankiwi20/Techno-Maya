import React from 'react';
import './Services.css';

const Services = () => {
    return (
        <div className="services-wrapper">
            <div className="services-container">
                <header className="services-header">
                    <h1>Elevate Your Online Presence!</h1>
                    <p>Enhancing your digital presence with tailored solutions that drive results and reflect your unique brand identity.</p>
                </header>
                <div className="services-list">
                    <div className="service-item">
                        <h2>Optimizing Websites</h2>
                        <p>We analyze your website’s performance, including load times, mobile responsiveness, and user interface design.
                            Our team implements strategies to improve speed, usability, and overall efficiency, ensuring your site delivers an exceptional user experience.</p>
                    </div>
                    <div className="service-item">
                        <h2>Bringing Websites Up to Current Standards</h2>
                        <p>We ensure your website adheres to the latest web standards, making it compatible across all devices and browsers.
                            This includes upgrading your site's security protocols, integrating the latest technologies, and refining the design to meet modern expectations.</p>
                    </div>
                    <div className="service-item">
                        <h2>Comprehensive Service</h2>
                        <p>Our comprehensive service combines website optimization and modernization, offering a complete overhaul that enhances both
                            performance and aesthetics. From backend improvements to frontend design enhancements, we revamp your website to meet today’s
                            performance and design expectations.</p>
                    </div>
                </div>
                <div className="future-services">
                    <div className="future-service-item">
                        <h2>Special Service: Web Hosting Guidance</h2>
                        <p>Coming Soon: We are partnering with leading web hosting companies to help you find the best hosting solution for your needs.
                            This service will include personalized consultations to choose the right plan and provider, ensuring your website has the best possible
                            infrastructure for success.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
