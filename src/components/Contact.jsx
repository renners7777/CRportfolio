import React, { useState, useRef } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import '../styles/css/Contact.css';
import { functions } from '../appwriteClient';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({ message: '', type: '' });
    const [captchaToken, setCaptchaToken] = useState(null);
    const recaptchaRef = useRef(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleCaptchaChange = (token) => {
        setCaptchaToken(token);
        if (token) {
            setSubmitStatus({ message: '', type: '' });
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setSubmitStatus({ message: '', type: '' });

        if (!captchaToken) {
            setSubmitStatus({ message: 'Please complete the CAPTCHA.', type: 'error' });
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus({ message: 'Processing...', type: 'info' });

        const appwriteFunctionId = '6802e4a8000ecdcd6e33';

        try {
            const result = await functions.createExecution(
                appwriteFunctionId,
                JSON.stringify({ ...formData, captchaToken }),
                false
            );

            if (result.status === 'completed') {
                let responseBody = {};
                try {
                    responseBody = JSON.parse(result.responseBody);
                } catch (parseError) {
                    console.warn("Could not parse function response body as JSON:", result.responseBody);
                }

                if (result.responseStatusCode === 200 || result.responseStatusCode === 201) {
                    setSubmitStatus({ message: responseBody.message || 'Message sent successfully!', type: 'success' });
                    setFormData({ name: '', email: '', message: '' });
                    setCaptchaToken(null);
                    recaptchaRef.current?.reset();
                } else {
                    throw new Error(responseBody.error || `Function returned status ${result.responseStatusCode}`);
                }

            } else {
                console.error("Appwrite function execution failed:", result.stderr || result.responseBody);
                throw new Error(result.stderr || 'Function execution failed. Check function logs.');
            }

        } catch (error) {
            console.error('Submission error:', error);
            setSubmitStatus({ message: `Failed to send message: ${error.message || 'Please try again.'}`, type: 'error' });
        } finally {
            setIsSubmitting(false);
        }
    };


    return (
        <section className="contact-section container" id="contact">
            <h2>Contact Me</h2>
            <p className="contact-intro">Have a question or want to work together? Send me a message or book a meeting directly.</p>

            {/* Centered Form Wrapper */}
            <div className="form-wrapper">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text" id="name" name="name" value={formData.name}
                            onChange={handleChange} required disabled={isSubmitting}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email" id="email" name="email" value={formData.email}
                            onChange={handleChange} required disabled={isSubmitting}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message" name="message" value={formData.message}
                            onChange={handleChange} required rows={5} disabled={isSubmitting}
                        ></textarea>
                    </div>
                    <div className="form-group recaptcha-container">
                        <ReCAPTCHA
                            ref={recaptchaRef}
                            sitekey="6LcmTRwrAAAAAA_1ej5NE4zSIsVaYsyk9LOPeZOe"
                            onChange={handleCaptchaChange}
                            theme="dark"
                        />
                    </div>
                    {submitStatus.message && (
                        <p className={`submit-status ${submitStatus.type}`}>
                            {submitStatus.message}
                        </p>
                    )}
                    <button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
            </div> {/* End form-wrapper */}

            {/* Two-Column Layout for Details and Calendly Below Form */}
            <div className="contact-details-layout">
                {/* Column 1: Other ways to connect */}
                <div className="contact-details-column">
                    <h3>Other ways to connect:</h3>
                    <p>
                        Email: <a href="mailto:CRSoftwareEngineer@outlook.com">CRSoftwareEngineer@outlook.com</a>
                    </p>
                    <p>
                        LinkedIn: <a href="https://www.linkedin.com/in/chris-renshaw-renners7777/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
                    </p>
                    <p>
                        GitHub: <a href="https://github.com/renners7777" target="_blank" rel="noopener noreferrer">GitHub Profile</a>
                    </p>
                </div>

                {/* Column 2: Calendly */}
                <div className="calendly-details-column">
                    <h3>Book a Meeting</h3>
                    <p>Schedule a time to discuss your project requirements directly:</p>
                    <p style={{ marginTop: '20px' }}> {/* <-- MODIFIED LINE */}
                        <a
                            href="https://calendly.com/chrisrenshaw79"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="calendly-link-button"
                        >
                            Book via Calendly
                        </a>
                    </p>
                </div>
            </div> {/* End contact-details-layout */}

        </section>
    );
};

export default Contact;