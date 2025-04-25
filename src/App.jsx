import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from './pages/HomePage'; // Keep - This will now contain Hero, Skills, Portfolio
import Services from './pages/Services'; // Keep
import Contact from './components/Contact'; // Keep - Assuming this is your Contact Page component
import './styles/css/App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          {/* Route for the combined HomePage (Hero, Skills, Portfolio) */}
          <Route path="/" element={<HomePage />} />

          {/* Route for Services */}
          <Route path="/services" element={<Services />} />

          {/* Route for Contact */}
          <Route path="/contact" element={<Contact />} />

          {/* Remove old routes */}
          {/* <Route path="/portfolio" element={<PortfolioPage />} /> */}
          {/* <Route path="/portfolio/:id" element={<PortfolioPage />} /> */}
          {/* <Route path="/home" element={<Home />} /> */}
          {/* <Route path="/skills" element={<Skills />} /> */}

          {/* Optional: Add a catch-all route for 404 Not Found */}
          {/* <Route path="*" element={<div>Page Not Found</div>} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;