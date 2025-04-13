import React from 'react';
import Skills from '../components/Skills.jsx';
import About from '../components/About.jsx';

const HomePage = () => {
    return (
        <div>
            <main>
                <About />
                <Skills />
            </main>
        </div>
    );
};

export default HomePage;