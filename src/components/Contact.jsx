import React, { useState } from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="contact-container bg-light p-5 rounded shadow-sm">
            {/* Contact Title */}
            <h1 className="contact-title text-center text-primary mb-4 fw-bold">Contact Me</h1>

            {/* Description */}
            <p className="contact-description text-center fs-5 mb-4 text-muted">
                If you have any questions or would like to get in touch, feel free to reach out!
            </p>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group mb-3">
                    <label htmlFor="name" className="fw-semibold">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="email" className="fw-semibold">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group mb-4">
                    <label htmlFor="message" className="fw-semibold">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        className="form-control"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>

                <button type="submit" className="btn btn-primary w-100">Send Message</button>
            </form>

            {/* Contact Information */}
            <div className="contact-info mt-5">
                <h2 className="text-center fw-bold mb-4 text-secondary">Contact Information</h2>

                <div className="contact-info-item mb-3">
                    <p><FontAwesomeIcon icon={faEnvelope} /> <strong>Email:</strong>
                        <a href="mailto:gufraanquraishi@gmail.com" className="text-decoration-none">gufraanquraishi@gmail.com</a>
                    </p>
                </div>

                <div className="contact-info-item mb-3">
                    <p><FontAwesomeIcon icon={faPhone} /> <strong>Phone:</strong>
                        <a href="tel:+918420414655" className="text-decoration-none">+91 84204 14655</a>
                    </p>
                </div>

                <div className="contact-info-item mb-3">
                    <p><FontAwesomeIcon icon={faMapMarkerAlt} /> <strong>Location:</strong> Kolkata, India</p>
                </div>

                <div className="contact-info-item mb-3">
                    <p><strong>LinkedIn:</strong>
                        <a href="https://www.linkedin.com/in/AsifAli1010" target="_blank" rel="noopener noreferrer" className="text-decoration-none">linkedin.com/in/AsifAli1010</a>
                    </p>
                </div>

                <div className="contact-info-item">
                    <p><strong>GitHub:</strong>
                        <a href="https://github.com/asifali-7890" target="_blank" rel="noopener noreferrer" className="text-decoration-none">github.com/asifali-7890</a>
                    </p>
                </div>
            </div>
        </div>

    );
}

export default Contact;