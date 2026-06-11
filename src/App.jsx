import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from './pages/HomePage';
import Products from './pages/Products';
import Contact from './components/Contact';
import WorshipflowAI from './pages/WorshipflowAI';
import BackToTopButton from './components/BackToTopButton';
import './styles/css/App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <main> {/* Wrap routes in main for semantics */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/worshipflow-ai" element={<WorshipflowAI />} />
            
            {/* Alias route to catch old links or manual URL entries */}
            <Route path="/products/worshipflow-ai" element={<WorshipflowAI />} />
            
            {/* Catch-all 404 Route so missing routes don't show a blank screen */}
            <Route path="*" element={
              <div className="container" style={{ padding: '100px 20px', textAlign: 'center', minHeight: '60vh' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>404 - Page Not Found</h2>
                <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>The route you are trying to visit does not exist.</p>
              </div>
            } />
          </Routes>
        </main>
        <Footer />
        <BackToTopButton /> {/* Add the button here */}
      </div>
    </Router>
  );
};

export default App;