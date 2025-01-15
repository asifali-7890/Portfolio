// src/Footer.jsx
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-dark text-light text-center py-4 fs-3">
            <div className="container">
                <h5 className='fs-3'>Contact Me</h5>
                <p>Email: <a href="mailto:gufraanquraishi@gmail.com" className="text-light">gufraanquraishi@gmail.com</a></p>
                <p>Phone: <a href="tel:+918420414655" className="text-light">+91 84204 14655</a></p>

                <h5>Connect with Me</h5>
                <div className="social-icons">
                    <a href="https://www.linkedin.com/in/AsifAli1010" target="_blank" rel="noopener noreferrer" className="text-light me-3">
                        <i className="fab fa-linkedin fa-2x"></i>
                    </a>
                    <a href="https://github.com/asifali-7890" target="_blank" rel="noopener noreferrer" className="text-light me-3">
                        <i className="fab fa-github fa-2x"></i>
                    </a>
                    <a href="https://www.facebook.com/gufraan.ali.73" target="_blank" rel="noopener noreferrer" className="text-light">
                        <i className="fab fa-facebook fa-2x"></i>
                    </a>
                </div>

                <hr className="my-4" />
                <p>&copy; {new Date().getFullYear()} Asif Ali. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;