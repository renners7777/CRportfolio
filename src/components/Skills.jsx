import React from 'react';
import './Skills.css'; // Import the CSS file

const Skills = () => {
    const skills = [
        'JavaScript',
        'React',
        'Node.js',
        'CSS',
        'HTML',
        'Git',
        'TypeScript',
        'Python',
        'SQL',
        'GraphQL',
        'Supabase', // Added Supabase
        'Vite'      // Added Vite
    ];

    return (
        // Use a section tag
        <section className="skills-section" id="skills"> {/* Added id */}
            <div className="container">
                <h2>My Skills</h2>
                <ul className="skills-list">
                    {skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Skills;