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
                    Hi, I'm Chris Renshaw. Over the past couple of years, my focus as a software engineer has shifted heavily towards Artificial Intelligence and rapid application development. I have been actively participating in hackathons through Devpost, which has been an incredible way to explore new concepts and push the boundaries of what I can build.
                </p>
                <p>
                    The projects featured on this website—such as the Stroke Survivor Companion, the Social Work Supervisor Agent, and WorshipFlow AI—are largely the direct outcomes of those hackathons. Through these experiences, I have developed a strong competence in leveraging modern AI tooling to accelerate development, enabling me to efficiently bring complex, intelligent applications to life.
                </p>
            </div>
        </section>
    );
};

export default Home;