import React from 'react';

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
        'GraphQL'
    ];

    return (
        <div className="skills">
            <h2>My Skills</h2>
            <ul>
                {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>
    );
};

export default Skills;