import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope, faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar sticky-top">
            <div className="container">
                <Link className="navbar-brand" to="/">My Portfolio</Link>
                <div className="navbar-toggle" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
                <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
                    <Link className="nav-link" to="/">
                        <FontAwesomeIcon icon={faHome} /> Home
                    </Link>
                    <Link className="nav-link" to="/about">
                        <FontAwesomeIcon icon={faUser} /> About
                    </Link>
                    <Link className="nav-link" to="/contact">
                        <FontAwesomeIcon icon={faEnvelope} /> Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
