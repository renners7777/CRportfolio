import React from 'react';
import Disclaimer from './Disclaimer';
import '../styles/css/Contact.css';

const Contact = () => {
    const calendlyUrl = 'https://calendly.com/chrisrenshaw79/make-money-training-ai';

    return (
        <section className="contact-section container" id="contact">
            <h2>Contact & AI Consultation</h2>
            <p className="contact-intro">
                Interested in AI model training, RLHF dataset curation, independent contracting opportunities, or technical evaluation? Reach out via email or schedule a meeting directly.
            </p>

            <div className="contact-details-layout" style={{ marginTop: '2rem', paddingTop: '0' }}>
                <div className="contact-details-column">
                    <h3>Reach out by email</h3>
                    <p>
                        <a href="mailto:CRSoftwareEngineer@outlook.com">CRSoftwareEngineer@outlook.com</a>
                    </p>
                    <p>
                        I’m open to discussing AI contract opportunities, instruction dataset creation, model evaluation rubrics, and independent technical projects.
                    </p>
                </div>

                <div className="calendly-details-column">
                    <h3>Schedule a 1-on-1 Session</h3>
                    <p>Book a dedicated session to discuss AI model training, contractor advice, or dataset evaluation strategy.</p>
                    <p style={{ marginTop: '24px' }}>
                        <a
                            href={calendlyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="calendly-link-button"
                            style={{
                                display: 'inline-block',
                                backgroundColor: 'var(--primary-color)',
                                color: '#ffffff',
                                padding: '12px 24px',
                                borderRadius: '6px',
                                fontWeight: '600',
                                textDecoration: 'none'
                            }}
                        >
                            Book via Calendly
                        </a>
                    </p>
                </div>
            </div>

            <div className="contact-details-layout" style={{ marginTop: '3rem', borderTop: '1px solid var(--card-border)', paddingTop: '2rem' }}>
                <div className="contact-details-column">
                    <h3>Connect on GitHub</h3>
                    <p>
                        GitHub: <a href="https://github.com/renners7777" target="_blank" rel="noopener noreferrer">github.com/renners7777</a>
                    </p>
                </div>
            </div>

            <div style={{ marginTop: '30px' }}>
                <Disclaimer />
            </div>
        </section>
    );
};

export default Contact;
