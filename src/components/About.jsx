import React from 'react';
import myselfImage from './myself.webp';
import './About.css';

const About = () => {
    return (
        <div className="about-container bg-light p-5 rounded shadow-sm">
            {/* Title */}
            <h1 className="about-title text-center fw-bold mb-4 text-primary">About Me</h1>

            {/* About Content */}
            <div className="about-content d-flex flex-column flex-md-row align-items-start gap-4">
                {/* Image Section */}
                <div className="about-image-container flex-shrink-0" style={{ flex: '1 1 50%' }}>
                    <img
                        src={myselfImage}
                        alt="Myself"
                        className="about-image shadow-lg object-cover mx-auto"
                        style={{ width: "250px", height: "250px", objectFit: "cover", borderRadius: "10px", objectPosition: "top" }}
                    />
                </div>

                {/* Text Section */}
                <div className="about-text" style={{ flex: '1 1 50%' }}>
                    <p className="fs-5 text-center text-md-start">
                        Hello! I'm <strong>Asif Ali</strong>, a motivated and adaptable Software Developer based in Kolkata.
                        I have a strong foundation in computer science, equipped with both a <strong>Bachelor's</strong> and a <strong>Diploma</strong> in Computer Science and Engineering.
                        I am passionate about leveraging my technical skills to develop innovative and efficient software solutions.
                    </p>
                </div>
            </div>

            {/* Education Section */}
            <div className="about-education mt-5">
                <h2 className="text-center fw-bold mb-4 text-secondary">Education</h2>
                <div className="education-item mb-4">
                    <h3 className="fw-bold">🎓 Bachelor's of Technology in Computer Science and Engineering</h3>
                    <p className="mb-1 text-muted">Budge Budge Institute of Technology, Kolkata</p>
                    <p className="mb-1"><strong>Duration:</strong> 08/2021 - 06/2024</p>
                    <p><strong>GPA:</strong> 8.02/10.0</p>
                </div>
                <div className="education-item">
                    <h3 className="fw-bold">🎓 Diploma in Computer Science and Engineering</h3>
                    <p className="mb-1 text-muted">Budge Budge Institute of Technology, Kolkata</p>
                    <p className="mb-1"><strong>Duration:</strong> 06/2018 - 08/2021</p>
                    <p><strong>GPA:</strong> 8.5/10.0</p>
                </div>
            </div>
        </div>



    );
};

export default About;