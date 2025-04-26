import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa'; // Or any icon you prefer
import '../styles/css/BackToTopButton.css'; // Create this CSS file

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    const toggleVisibility = () => {
        if (window.scrollY > 300) { // Show after scrolling 300px
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Set up scroll listener
    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    // Scroll smoothly to top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className="back-to-top">
            {isVisible && (
                <button onClick={scrollToTop} aria-label="Scroll to top">
                    <FaArrowUp />
                </button>
            )}
        </div>
    );
};

export default BackToTopButton;