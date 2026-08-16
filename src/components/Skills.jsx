import React from 'react';
import '../styles/css/Skills.css';

const Skills = () => {
    const skills = [
        'AI Model Training',
        'RLHF & Human Evaluation',
        'Instruction Tuning (SFT)',
        'Prompt Engineering',
        'Model Benchmarking',
        'Python',
        'JavaScript (ES6+)',
        'React',
        'Node.js',
        'REST APIs & Integrations',
        'Appwrite / Cloud Services',
        'Git & Version Control'
    ];

    return (
        <section className="skills-section" id="skills">
            <div className="container">
                <h2>Skills & Technical Capabilities</h2>
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