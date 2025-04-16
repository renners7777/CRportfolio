// filepath: /home/chris/Documents/CRportfolio/src/components/Header.jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { SiPeerlist } from "react-icons/si";
import '../styles/css/Header.css';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // URLs for social links
    const linkedinUrl = 'https://www.linkedin.com/in/chris-renshaw-409a2023b/';
    const githubUrl = 'https://github.com/chrisrenshaw66';
    const twitterUrl = 'https://twitter.com/chrisrenshaw66';
    const peerlistUrl = 'https://peerlist.io/chrisrenshaw';

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <header className="site-header">
            {/* Top Row */}
            <div className="header-top-row">
                Chris Renshaw, Freelance Software Engineer
            </div>

            {/* Bottom Row - Contains the previous layout */}
            <div className="header-bottom-row">
                <div className="container header-container"> {/* Use existing container for flex */}
                    {/* Site Title Removed From Here */}

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
                        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile"><FaLinkedin /></a>
                        <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile"><FaGithub /></a>
                        <a href={twitterUrl} target="_blank" rel="noopener noreferrer" aria-label="Twitter Profile"><FaTwitter /></a>
                        <a href={peerlistUrl} target="_blank" rel="noopener noreferrer" aria-label="Peerlist Profile"><SiPeerlist /></a>
                    </div>

                    {/* Mobile Nav Toggle */}
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
                </div> {/* End .header-container */}
            </div> {/* End .header-bottom-row */}
        </header>
    );
};

export default Header;