// filepath: /home/chris/Documents/CRportfolio/src/components/Header.jsx
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom'; // Use NavLink for active styling
import '../styles/css/Header.css'; // Import the CSS file

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State to track menu

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen); // Function to toggle the state
    };

    return (
        <header className="site-header">
            <div className="container">
                <h1><Link to="/">Chris Renshaw</Link></h1>

                {/* Hamburger Button (only visible on mobile via CSS) */}
                <button
                    type="button"
                    className="mobile-nav-toggle"
                    aria-label="Toggle navigation"
                    aria-expanded={isMobileMenuOpen} // For accessibility
                    onClick={toggleMobileMenu} // Attach the toggle function
                >
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                </button>

                {/* Navigation Links Container */}
                {/* Add a conditional class based on the state */}
                <nav className={`main-navigation ${isMobileMenuOpen ? 'is-open' : ''}`}>
                    <ul>
                        <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
                        <li><NavLink to="/portfolio" className={({ isActive }) => isActive ? 'active' : ''}>Portfolio</NavLink></li>
                        <li><NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink></li>
                        <li><NavLink to="/skills" className={({ isActive }) => isActive ? 'active' : ''}>Skills</NavLink></li>
                        <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;