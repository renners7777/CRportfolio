// filepath: /home/chris/Documents/CRportfolio/src/components/Contact.jsx
import React, { useState, useEffect } from 'react'; // Import useEffect
import { supabase } from '../supabaseClient.js';
import '../styles/css/Contact.css';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({ message: '', type: '' });

    // Effect to load the Calendly script
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        document.body.appendChild(script);

        // Cleanup function to remove the script when the component unmounts
        return () => {
            document.body.removeChild(script);
        };
    }, []); // Empty dependency array ensures this runs only once on mount

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ message: '', type: '' });

        try {
            const { _data, error } = await supabase
                .from('messages')
                .insert([{ name: name, email: email, message: message }]);

            if (error) {
                throw error;
            }

            setSubmitStatus({ message: 'Message sent successfully!', type: 'success' });
            setName('');
            setEmail('');
            setMessage('');

        } catch (error) {
            console.error('Error submitting message:', error);
            setSubmitStatus({ message: `Failed to send message: ${error.message || 'Please try again.'}`, type: 'error' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        // Use a section tag for better semantics
        <section className="contact-section container">
            <h2>Contact Me</h2>
            <p>Have a question, want to work together, or prefer to book a meeting directly?</p>

            {/* Wrapper for the two-column layout */}
            <div className="contact-layout">

                {/* Column 1: Contact Form */}
                <div className="contact-form-column">
                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                disabled={isSubmitting}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                disabled={isSubmitting}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message:</label>
                            <textarea
                                id="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                                rows="5"
                                disabled={isSubmitting}
                            ></textarea>
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
                </div>

                {/* Column 2: Calendly Widget */}
                <div className="calendly-column">
                    <h3>Book a meeting to discuss your website requirements</h3>
                    {/* Calendly inline widget div - the script loaded by useEffect will target this */}
                    <div
                        className="calendly-inline-widget"
                        data-url="https://calendly.com/chrisrenshaw79"
                        style={{ minWidth: '320px', height: '700px' }}
                    ></div>
                </div>

            </div> {/* End of contact-layout */}
        </section>
    );
};

export default Contact;