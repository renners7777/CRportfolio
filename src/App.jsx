import React from 'react';
// Import Routes instead of Switch
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import HomePage from './pages/HomePage.jsx';
import PortfolioPage from './pages/PortfolioPage.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Skills from './components/Skills.jsx';
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