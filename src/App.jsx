import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from './pages/HomePage';
import Services from './pages/Services';
import Contact from './components/Contact';
import BackToTopButton from './components/BackToTopButton'; // Import
import './styles/css/App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <main> {/* Wrap routes in main for semantics */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <BackToTopButton /> {/* Add the button here */}
      </div>
    </Router>
  );
};

export default App;