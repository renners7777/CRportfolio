import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { SiPeerlist } from 'react-icons/si';
import '../styles/css/Header.css';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // URLs for social links & Calendly
    const githubUrl = 'https://github.com/renners7777';
    const peerlistUrl = 'https://peerlist.io/renners7777';
    const calendlyUrl = 'https://calendly.com/chrisrenshaw79/make-money-training-ai';

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
                <div className="logo">
                    Chris Renshaw | Independent AI Model Trainer & Contractor
                </div>
            </div>

            {/* Bottom Row */}
            <div className="header-bottom-row">
                <div className="container header-container">
                    {/* Navigation */}
                    <nav>
                        <ul className={isMobileMenuOpen ? 'active' : ''}>
                            <li><NavLink to="/" onClick={closeMobileMenu} className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
                            <li><NavLink to="/blog" onClick={closeMobileMenu} className={({ isActive }) => isActive ? 'active' : ''}>Blog</NavLink></li>
                            <li><NavLink to="/contact" onClick={closeMobileMenu} className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink></li>
                        </ul>
                    </nav>

                    {/* Social & Booking Icons Section */}
                    <div className="social-icons-header" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <a
                            href={calendlyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="header-cta-btn"
                            style={{
                                backgroundColor: 'var(--primary-color)',
                                color: '#ffffff',
                                padding: '6px 14px',
                                borderRadius: '4px',
                                fontSize: '0.85rem',
                                fontWeight: '600',
                                textDecoration: 'none'
                            }}
                        >
                            Book AI Session
                        </a>
                        <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile"><FaGithub /></a>
                        <a href={peerlistUrl} target="_blank" rel="noopener noreferrer" aria-label="Peerlist Profile"><SiPeerlist /></a>
                    </div>

                    {/* Mobile Nav Toggle */}
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
                </div>
            </div>
        </header>
    );
};

export default Header;