import React from 'react';
import '../styles/css/Home.css';
import profilePic from '../assets/ProfilePic1.jpeg';
import Disclaimer from './Disclaimer';

const Home = () => {
    return (
        <section className="home-section" id="about">
            <div className="container">
                <img src={profilePic} alt="Profile Picture" className="profile-pic" />
                <h2>Chris Renshaw | Independent AI Model Trainer</h2>
                <p>
                    Hi, I'm Chris Renshaw. I am an <strong>independent AI contractor</strong> specializing in Artificial Intelligence model training, Reinforcement Learning from Human Feedback (RLHF), instruction dataset creation, and human-in-the-loop (HITL) model evaluation.
                </p>
                <p>
                    Over recent years, my work has focused heavily on the mechanics of training and fine-tuning AI systems. Through active technical exploration, open-source hackathons, and independent contracting, I build, evaluate, and benchmark intelligent systems—helping platforms ensure their AI models remain accurate, safe, and aligned.
                </p>
                <p>
                    On this site, I share practical insights on <strong>building a flexible career in AI model training</strong>, navigating contractor roles, and evaluating ethical AI alignment.
                </p>
                <Disclaimer />
            </div>
        </section>
    );
};

export default Home;