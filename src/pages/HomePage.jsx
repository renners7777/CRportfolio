import React from 'react';
import Skills from '../components/Skills.jsx';
import Home from '../components/Home.jsx';

const HomePage = () => {
    return (
        <div>
            <main>
                <Home />
                <Skills />
            </main>
        </div>
    );
};

export default HomePage;