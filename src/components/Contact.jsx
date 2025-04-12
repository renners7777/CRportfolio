// filepath: /home/chris/Documents/CRportfolio/src/components/Contact.jsx
import React, { useState } from 'react';
import { supabase } from '../supabaseClient'; // Import the Supabase client
import './Contact.css'; // Assuming you have Contact.css

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({ message: '', type: '' }); // For user feedback

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent default HTML form submission
        setIsSubmitting(true);
        setSubmitStatus({ message: '', type: '' }); // Clear previous status

        try {
            // Insert data into the 'messages' table
            const { data, error } = await supabase
                .from('messages') // Make sure 'messages' matches your table name
                .insert([
                    { name: name, email: email, message: message }
                ]);

            if (error) {
                throw error; // Throw error to be caught by the catch block
            }

            // Success!
            setSubmitStatus({ message: 'Message sent successfully!', type: 'success' });
            // Clear the form
            setName('');
            setEmail('');
            setMessage('');

        } catch (error) {
            console.error('Error submitting message:', error);
            setSubmitStatus({ message: `Failed to send message: ${error.message || 'Please try again.'}`, type: 'error' });
        } finally {
            setIsSubmitting(false); // Re-enable the button
        }
    };

    return (
        <div className="contact-section container"> {/* Added container class */}
            <h2>Contact Me</h2>
            <p>Have a question or want to work together? Send me a message!</p>

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

                {/* Display submission status */}
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
    );
};

export default Contact;