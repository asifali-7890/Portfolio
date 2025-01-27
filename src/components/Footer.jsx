// src/Footer.jsx
import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <h5 className="footer-heading">Contact Me</h5>
                <p>Email: <a href="mailto:gufraanquraishi@gmail.com">gufraanquraishi@gmail.com</a></p>
                <p>Phone: <a href="tel:+918420414655">+91 84204 14655</a></p>

                <h5 className="footer-heading">Connect with Me</h5>
                <div className="social-icons">
                    <a href="https://www.linkedin.com/in/AsifAli1010" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="https://github.com/asifali-7890" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="https://www.facebook.com/gufraan.ali.73" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                </div>
                <hr />
                <p>&copy; {new Date().getFullYear()} Asif Ali. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
