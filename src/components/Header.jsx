// filepath: /home/chris/Documents/CRportfolio/src/components/Header.jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'; // Import common icons
import { SiPeerlist } from "react-icons/si"; // Import Peerlist icon
import '../styles/css/Header.css';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // URLs for social links (replace # with actual URLs)
    const linkedinUrl = 'https://www.linkedin.com/in/chris-renshaw-renners7777/';
    const githubUrl = 'https://github.com/renners7777';
    const twitterUrl = 'https://x.com/renners7777';
    const peerlistUrl = 'https://peerlist.io/renners7777';

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <header className="site-header">
            <div className="container header-container"> {/* Add a class for flex layout */}
                <div className="site-title">
                    <NavLink to="/">Chris Renshaw</NavLink>
                </div>

                {/* Navigation */}
                <nav className={`main-navigation ${isMobileMenuOpen ? 'is-open' : ''}`}>
                    <ul>
                        <li><NavLink to="/" onClick={closeMobileMenu} className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
                        <li><NavLink to="/services" onClick={closeMobileMenu} className={({ isActive }) => isActive ? 'active' : ''}>Services</NavLink></li>
                        <li><NavLink to="/portfolio" onClick={closeMobileMenu} className={({ isActive }) => isActive ? 'active' : ''}>Portfolio</NavLink></li>
                        <li><NavLink to="/contact" onClick={closeMobileMenu} className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink></li>
                    </ul>
                </nav>

                {/* Social Icons Section */}
                <div className="social-icons-header">
                    <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                        <FaLinkedin />
                    </a>
                    <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                        <FaGithub />
                    </a>
                    <a href={twitterUrl} target="_blank" rel="noopener noreferrer" aria-label="Twitter Profile">
                        <FaTwitter />
                    </a>
                    <a href={peerlistUrl} target="_blank" rel="noopener noreferrer" aria-label="Peerlist Profile">
                        <SiPeerlist />
                    </a>
                </div>

                {/* Mobile Nav Toggle - Moved after social icons for potential layout reasons */}
                <button
                    type="button"
                    className="mobile-nav-toggle"
                    aria-label="Toggle navigation"
                    aria-expanded={isMobileMenuOpen}
                    onClick={toggleMobileMenu}
                >
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                </button>

            </div>
        </header>
    );
};

export default Header;