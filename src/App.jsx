import React from 'react';
// Import Routes instead of Switch
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import About from './components/About';
import Contact from './components/Contact';
import Skills from './components/Skills';
import './styles/css/App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        {/* Use Routes instead of Switch */}
        <Routes>
          {/* Use element prop with JSX, no exact needed */}
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />
          {/* Optional: Add a catch-all route for 404 Not Found */}
          {/* <Route path="*" element={<div>Page Not Found</div>} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;