import React, { useState } from 'react';
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
        // Here you can handle form submission, e.g., send data to an API
        console.log('Form submitted:', formData);
        // Reset form after submission
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="container contact-container mt-5">
            <h1 className="text-center">Contact Me</h1>
            <p className="text-center">If you have any questions or would like to get in touch, feel free to reach out!</p>

            <form onSubmit={handleSubmit} className="mt-4">
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
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
                <div className="form-group mt-3">
                    <label htmlFor="email">Email:</label>
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
                <div className="form-group mt-3">
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        className="form-control"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-primary mt-3">Send Message</button>
            </form>

            <h2 className="mt-5">Contact Information</h2>
            <p>Email: <a href="mailto:gufraanquraishi@gmail.com">gufraanquraishi@gmail.com</a></p>
            <p>Phone: <a href="tel:+918420414655">+91 84204 14655</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/AsifAli1010" target="_blank" rel="noopener noreferrer">linkedin.com/in/AsifAli1010</a></p>
            <p>GitHub: <a href="https://github.com/asifali-7890" target="_blank" rel="noopener noreferrer">github.com/asifali-7890</a></p>
        </div>
    );
}

export default Contact;