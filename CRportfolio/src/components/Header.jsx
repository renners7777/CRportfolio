import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Assuming you will create a Header.css for styling

const Header = () => {
    return (
        <header className="header">
            <h1>My Portfolio</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;