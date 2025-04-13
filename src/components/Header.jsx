// filepath: /home/chris/Documents/CRportfolio/src/components/Header.jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; // Use NavLink for active class styling
import '../styles/css/Header.css'; // Import the cleaned CSS

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Optional: Close menu when a link is clicked (good UX)
    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        // Use .site-header
        <header className="site-header">
            <div className="container"> {/* Optional container for content width */}
                <div className="site-title"> {/* Example logo/title */}
                    <NavLink to="/">Chris Renshaw</NavLink>
                </div>

                {/* Use .mobile-nav-toggle */}
                <button
                    type="button"
                    // Use aria-label for accessibility
                    className="mobile-nav-toggle"
                    aria-label="Toggle navigation"
                    aria-expanded={isMobileMenuOpen}
                    onClick={toggleMobileMenu}
                >
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                </button>

                {/* Use .main-navigation and conditional .is-open */}
                <nav className={`main-navigation ${isMobileMenuOpen ? 'is-open' : ''}`}>
                    <ul>
                        {/* Use NavLink and closeMobileMenu onClick */}
                        <li><NavLink to="/" onClick={closeMobileMenu} className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
                        <li><NavLink to="/services" onClick={closeMobileMenu} className={({ isActive }) => isActive ? 'active' : ''}>Services</NavLink></li>
                        <li><NavLink to="/portfolio" onClick={closeMobileMenu} className={({ isActive }) => isActive ? 'active' : ''}>Portfolio</NavLink></li>
                        <li><NavLink to="/contact" onClick={closeMobileMenu} className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;