import React from 'react';
import Header from '../components/Header';
import Skills from '../components/Skills';
import About from '../components/About';
import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <div>
            <Header />
            <main>
                <About />
                <Skills />
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;