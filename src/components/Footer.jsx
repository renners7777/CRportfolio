import React, { useState } from 'react';
import '../styles/css/Footer.css';
import PrivacyPolicyContent from './PrivacyPolicyContent'; // Import the new component

const Footer = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <>
            <footer className="footer">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} Chris Renshaw. All rights reserved.</p>
                    <p>
                        <button onClick={toggleModal} className="privacy-policy-button">
                            Privacy Policy
                        </button>
                    </p>
                </div>
            </footer>

            {isModalOpen && (
                <div className="modal-backdrop" onClick={toggleModal}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <h2>Privacy Policy</h2>
                        {/* Render the separate component here */}
                        <PrivacyPolicyContent />
                        <button onClick={toggleModal}>Close</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Footer;