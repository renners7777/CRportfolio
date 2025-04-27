import React, { useState } from 'react';
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
                {/* Change the link to a button or styled span */}
                <button type="button" onClick={openModal} className="privacy-link">
                    Privacy Policy
                </button>
                {/* Remove the old inline policy display logic if it exists here */}
            </div>
            {/* Render the modal, passing state and close function */}
            <PrivacyPolicyModal isOpen={isModalOpen} onClose={closeModal} />
        </footer>
    );
};

export default Footer;