import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/css/Footer.css';
import PrivacyPolicyModal from './PrivacyPolicyModal'; // Import the modal component

const Footer = () => {
    const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container footer-content">
                <p>&copy; {currentYear} Chris Renshaw. All rights reserved.</p>
                <div className="footer-links" style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                    <Link to="/products" className="footer-link">Products</Link>
                    <button type="button" onClick={openModal} className="privacy-link">
                        Privacy Policy
                    </button>
                </div>
            </div>
            {/* Render the modal, passing state and close function */}
            <PrivacyPolicyModal isOpen={isModalOpen} onClose={closeModal} />
        </footer>
    );
};

export default Footer;