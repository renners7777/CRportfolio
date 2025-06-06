import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { SiPeerlist } from "react-icons/si";
import '../styles/css/Header.css';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // URLs for social links
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
        <header className="header">
            {/* Top Row */}
            <div className="header-top-row">
                {/* Step 4: Wrap text in a div with class "logo" */}
                <div className="logo">
                    Chris Renshaw, Freelance Software Engineer
                </div>
            </div>

            {/* Bottom Row - Contains the previous layout */}
            <div className="header-bottom-row">
                <div className="container header-container"> {/* Use existing container for flex */}
                    {/* Site Title Removed From Here */}

                    {/* Navigation */}
                    {/* Step 3: Remove conditional class from nav */}
                    <nav>
                        {/* Step 3: Add conditional 'active' class to ul */}
                        <ul className={isMobileMenuOpen ? 'active' : ''}>
                            <li><NavLink to="/" onClick={closeMobileMenu} className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
                            <li><NavLink to="/services" onClick={closeMobileMenu} className={({ isActive }) => isActive ? 'active' : ''}>Services</NavLink></li>
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

                    {/* Mobile Nav Toggle - Ensure class is "menu-toggle" (already correct) */}
                    <button
                        type="button"
                        className="menu-toggle"
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