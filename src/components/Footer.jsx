import React from 'react';
import './Footer.css'; // Assuming you have or will create Footer.css for styling

const Footer = () => {
    // Replace with the actual URL of your privacy policy
    const privacyPolicyUrl = "https://app.termly.io/dashboard/website/04f1e5ab-a2bc-4eb0-8cc9-19671efc854e/privacy-policy";

    return (
        <footer className="footer">
            <div className="container"> {/* Optional: Wrap in container for consistent padding */}
                <p>&copy; {new Date().getFullYear()} Chris Renshaw. All rights reserved.</p>
                <p>
                    {/* Use the variable holding the full URL */}
                    {/* Add target="_blank" and rel="noopener noreferrer" for external links */}
                    <a href={privacyPolicyUrl} target="_blank" rel="noopener noreferrer">Privacy Policy</a> |
                </p>
            </div>
        </footer>
    );
};

export default Footer;