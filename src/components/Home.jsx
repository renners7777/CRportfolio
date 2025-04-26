import React from 'react';
import '../styles/css/Home.css'; // Import the CSS file
import profilePic from '../assets/ProfilePic1.jpeg'; // Path relative to the component file

const Home = () => {
    return (
        <section className="home-section" id="about"> {/* Added id for potential navigation */}
            <div className="container">
                <img src={profilePic} alt="Profile Picture" className="profile-pic" />
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