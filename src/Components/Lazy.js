import React, { useState, useEffect, useRef } from 'react';

const LazyLoadWrapper = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.1, // Adjust this threshold as needed
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, []);

    return <div ref={ref}>{isVisible ? children : null}</div>;
};

export default LazyLoadWrapper;
