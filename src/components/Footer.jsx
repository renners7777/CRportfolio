import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/css/Footer.css';
import PrivacyPolicyModal from './PrivacyPolicyModal';

const Footer = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container footer-content" style={{ textAlign: 'center', padding: '30px 20px' }}>
                <p style={{ margin: '0 0 15px', fontSize: '0.85rem', opacity: 0.75, maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
                    <strong>Disclaimer:</strong> All opinions, content, code, and projects published on this site are expressed solely in a personal, independent capacity by Chris Renshaw. They do not represent, express, reflect, or bind any current or former employer, local authority, or public body.
                </p>

                <p style={{ margin: '0 0 15px' }}>&copy; {currentYear} Chris Renshaw. All rights reserved.</p>
                <div className="footer-links" style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                    <Link to="/" className="footer-link">Home</Link>
                    <Link to="/blog" className="footer-link">Blog</Link>
                    <Link to="/contact" className="footer-link">Contact</Link>
                    <button type="button" onClick={openModal} className="privacy-link">
                        Privacy Policy
                    </button>
                </div>
            </div>
            <PrivacyPolicyModal isOpen={isModalOpen} onClose={closeModal} />
        </footer>
    );
};

export default Footer;