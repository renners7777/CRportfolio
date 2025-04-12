// filepath: /home/chris/Documents/CRportfolio/src/components/Header.jsx
import React from 'react';
import { Link, NavLink } from 'react-router-dom'; // Use NavLink for active styling
import './Header.css'; // Import the CSS file

const Header = () => {
  // Basic state for mobile nav toggle (example)
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  const toggleNav = () => setIsNavOpen(!isNavOpen);


  return (
    <header className="header">
      <div className="container">
         <h1><Link to="/">Chris Renshaw</Link></h1>
         {/* Add a button to toggle nav on mobile */}
         <button className="nav-toggle" aria-label="Toggle navigation" onClick={toggleNav}>
             ☰ {/* Or use an icon */}
         </button>
         {/* Add class based on state for mobile visibility */}
         <nav className={isNavOpen ? 'nav-open' : ''}>
           <ul>
             {/* Use NavLink for automatic active class */}
             <li><NavLink to="/" className={({isActive}) => isActive ? 'active' : ''}>Home</NavLink></li>
             <li><NavLink to="/portfolio" className={({isActive}) => isActive ? 'active' : ''}>Portfolio</NavLink></li>
             <li><NavLink to="/about" className={({isActive}) => isActive ? 'active' : ''}>About</NavLink></li>
             <li><NavLink to="/skills" className={({isActive}) => isActive ? 'active' : ''}>Skills</NavLink></li>
             <li><NavLink to="/contact" className={({isActive}) => isActive ? 'active' : ''}>Contact</NavLink></li>
           </ul>
         </nav>
      </div>
    </header>
  );
};

export default Header;