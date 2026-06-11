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
          </Routes>
        </main>
        <Footer />
        <BackToTopButton /> {/* Add the button here */}
      </div>
    </Router>
  );
};

export default App;