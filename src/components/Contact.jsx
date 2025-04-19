// filepath: /home/chris/Documents/CRportfolio/src/components/Contact.jsx
import React, { useState, useEffect, useRef } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import '../styles/css/Contact.css';
import { functions } from '../appwriteClient'; // Import the Appwrite functions service

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({ message: '', type: '' });
    const [captchaToken, setCaptchaToken] = useState(null);
    const recaptchaRef = useRef(null);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            const existingScript = document.querySelector(`script[src="${script.src}"]`);
            if (existingScript && document.body.contains(existingScript)) {
                document.body.removeChild(existingScript);
            }
        };
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleCaptchaChange = (token) => {
        console.log("Captcha Token:", token);
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

        const appwriteFunctionId = '6802e4a8000ecdcd6e33'; // <-- Replace with your actual Appwrite Function ID

        try {
            console.log("Calling Appwrite function:", appwriteFunctionId);
            console.log("Payload:", { ...formData, captchaToken });

            const result = await functions.createExecution(
                appwriteFunctionId,
                JSON.stringify({ ...formData, captchaToken }),
                false
            );

            console.log("Appwrite function result:", result);

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
            <p>Have a question, want to work together, or prefer to book a meeting directly?</p>

            <div className="contact-layout">

                <div className="contact-form-column">
                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                disabled={isSubmitting}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                disabled={isSubmitting}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message:</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                disabled={isSubmitting}
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

                        <button type="submit" disabled={isSubmitting || !captchaToken}>
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </div>

                <div className="calendly-column">
                    <h3>Book a meeting to discuss your website requirements</h3>
                    <div
                        className="calendly-inline-widget"
                        data-url="https://calendly.com/chrisrenshaw79"
                        style={{ minWidth: '320px', height: '700px' }}
                    ></div>
                </div>

            </div>
        </section>
    );
};

export default Contact;