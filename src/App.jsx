import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import About from './components/About';
import Contact from './components/Contact';
import Skills from './components/Skills';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/portfolio" component={PortfolioPage} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/skills" component={Skills} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;