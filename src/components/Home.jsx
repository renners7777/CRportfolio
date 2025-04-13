import React from 'react';
import '../styles/css/Home.css'; // Import the CSS file

const Home = () => {
    return (
        <section className="about-section" id="about"> {/* Added id for potential navigation */}
            <div className="container">
                <img src="src/assets/ProfilePic1.jpeg" alt="Chris Renshaw" className="profile-pic" />
                <h2>Profile</h2>
                <p>
                    Hi, I'm Chris Renshaw, a passionate freelance software engineer specializing in building modern, responsive web applications. I help businesses bring their ideas to life with clean code and user-friendly designs.
                </p>
                <p>
                    {/* Add more details about your experience, approach, or what drives you */}
                    My expertise includes React, Node.js, JavaScript, and working with various APIs and databases. Let's build something great together!
                </p>
            </div>
        </section>
    );
};

export default Home;