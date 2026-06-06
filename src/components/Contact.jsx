import React from 'react';
import '../styles/css/Contact.css';

const Contact = () => {
    return (
        <section className="contact-section container" id="contact">
            <h2>Contact Me</h2>
            <p className="contact-intro">
                Interested in Stroke Survivor Companion, a Planning Center Online AI product, or another idea? Email me directly or book a meeting below.
            </p>

            <div className="contact-details-layout" style={{ marginTop: '2rem', paddingTop: '0' }}>
                <div className="contact-details-column">
                    <h3>Reach out by email</h3>
                    <p>
                        <a href="mailto:CRSoftwareEngineer@outlook.com">CRSoftwareEngineer@outlook.com</a>
                    </p>
                    <p>
                        I’m happy to discuss pre-launch product plans, app strategy, or custom AI integration ideas.
                    </p>
                </div>

                <div className="calendly-details-column">
                    <h3>Book a meeting</h3>
                    <p>Schedule time quickly to review your concept, roadmap, or integration needs.</p>
                    <p style={{ marginTop: '24px' }}>
                        <a
                            href="https://calendly.com/chrisrenshaw79-06al/30min"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="calendly-link-button"
                        >
                            Book via Calendly
                        </a>
                    </p>
                </div>
            </div>

            <div className="contact-details-layout" style={{ marginTop: '3rem', borderTop: '1px solid #444', paddingTop: '2rem' }}>
                <div className="contact-details-column">
                    <h3>Other ways to connect</h3>
                    <p>
                        GitHub: <a href="https://github.com/renners7777" target="_blank" rel="noopener noreferrer">GitHub Profile</a>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
