// src/Home.jsx
import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <h1 className='text-xl'>Welcome to My Portfolio</h1>
            <p className="intro-text">Hi, I'm Asif Ali, a passionate Software Developer based in Kolkata.</p>
            <p className="intro-text">I specialize in creating efficient and innovative software solutions.</p>

            <div className="projects-section rounded-md">
                <h2>Projects</h2>
                <div className="row bg-white pt-4 rounded-md p-2">
                    {/* Project 1 */}
                    <div className="col-12 col-md-4 mt-4 rounded-md">
                        <h3 className="fw-bold text-primary">🏨 Airbnb Booking App</h3>
                        <img
                            src="https://th.bing.com/th/id/OIP.XJ5QlO4jH6MVKl6VbKuLtgHaE8?rs=1&pid=ImgDetMain"
                            alt="Airbnb Booking App"
                            className="img-fluid rounded shadow-sm mb-3"
                        />
                        <p>
                            A full-stack application for hotel and rental bookings featuring user
                            authentication, property listings, and real-time booking functionality.
                        </p>
                        <a
                            href="https://airbnb-client-ntyq.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline-primary rounded-pill"
                        >
                            View Project
                        </a>
                    </div>

                    {/* Project 2 */}
                    <div className="col-12 col-md-4 mt-4">
                        <h3 className="fw-bold text-primary">🍔 Swiggy Clone</h3>
                        <img
                            src="https://th.bing.com/th?id=OIP.C6pDGyxRwqwfYTZwUPAKygHaE7&w=306&h=203&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                            alt="Swiggy Clone"
                            className="img-fluid rounded shadow-sm mb-3"
                        />
                        <p>
                            A functional clone of the Swiggy mobile app focusing on frontend user
                            experience.
                        </p>
                        <a
                            href="https://swiggy-clone-739ab.web.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline-primary rounded-pill"
                        >
                            View Project
                        </a>
                    </div>

                    {/* Project 3 */}
                    <div className="col-12 col-md-4 mt-4">
                        <h3 className="fw-bold text-primary">🎬 Netflix GPT</h3>
                        <img
                            src="https://th.bing.com/th?id=OIP.AK6U_jX96M3WhF4sVwmVrgHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                            alt="Netflix GPT"
                            className="img-fluid rounded shadow-sm mb-3"
                        />
                        <p>
                            A Netflix clone app that replicates core functionalities using Firebase
                            for backend services.
                        </p>
                        <a
                            href="https://netflixgpt-47c21.web.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline-primary rounded-pill"
                        >
                            View Project
                        </a>
                    </div>

                    {/* Project 4 */}
                    <div className="col-12 col-md-4 mt-4">
                        <h3 className="fw-bold text-primary">🎟️ Tomato Booking App</h3>
                        <img
                            src="https://th.bing.com/th?id=OIP.ecXwyzt0vx-T0Mk9uiZcEwHaFH&w=300&h=207&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                            alt="Tomato Booking App"
                            className="img-fluid rounded shadow-sm mb-3"
                        />
                        <p>
                            A booking app for movie tickets with features like seat selection,
                            payment gateway integration, and user reviews.
                        </p>
                        <a
                            href="https://food-del-c58f2.web.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline-primary rounded-pill"
                        >
                            View Project
                        </a>
                    </div>

                    {/* Project 5 */}
                    <div className="col-12 col-md-4 mt-4">
                        <h3 className="fw-bold text-primary">🛫 Bookstore App</h3>
                        <img
                            src="https://th.bing.com/th?id=OIP.WAtej7j0Tj8F_biDcg8HLAHaDt&w=350&h=175&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                            alt="Booking App"
                            className="img-fluid rounded shadow-sm mb-3"
                        />
                        <p>
                            A comprehensive booking app for various services including hotels,
                            flights, and car rentals.
                        </p>
                        <a
                            href="https://book-store-six-beta.vercel.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline-primary rounded-pill"
                        >
                            View Project
                        </a>
                    </div>

                    {/* Project 6 */}
                    <div className="col-12 col-md-4 mt-4">
                        <h3 className="fw-bold text-primary">💼 Business Website</h3>
                        <img
                            src="https://th.bing.com/th?id=OIP.C6pDGyxRwqwfYTZwUPAKygHaE7&w=306&h=203&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                            alt="Business Website"
                            className="img-fluid rounded shadow-sm mb-3"
                        />
                        <p>
                            A modern, responsive website designed to elevate the online presence of a
                            business with a professional and user-friendly interface.
                        </p>
                        <a
                            href="https://business-website-fml2.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline-primary rounded-pill"
                        >
                            View Project
                        </a>
                    </div>
                </div>



            </div>

            <div className="row mt-5 fs-4 text-dark bg-white shadow-lg rounded-md">
                <div className="col-md-6 mt-5">
                    <h2 className="fw-bold mb-4 text-primary">🌟 Strengths</h2>
                    <ul className="list-unstyled">
                        <li className="mb-3">
                            <span className="fw-bold text-secondary">🎯 Aim Towards My Goals:</span>
                            <span className="ms-2">Goals serve as the driving force behind my endeavors.</span>
                        </li>
                        <li className="mb-3">
                            <span className="fw-bold text-secondary">🧠 Problem Solving:</span>
                            <span className="ms-2">I have honed my problem-solving skills through various academic and extracurricular activities.</span>
                        </li>
                        <li className="mb-3">
                            <span className="fw-bold text-secondary">🤝 Collaboration:</span>
                            <span className="ms-2">I am eager to contribute my skills and knowledge to a collaborative team environment.</span>
                        </li>
                    </ul>
                </div>

                <div className="col-md-6 mt-5">
                    <h2 className="fw-bold mb-4 text-primary">🏆 Key Achievements</h2>
                    <ul className="list-unstyled">
                        <li className="mb-3">
                            <span className="fw-bold text-secondary">🥇 1st Rank in 3rd Semester:</span>
                            <span className="ms-2">Achieving first rank in my third semester was a significant accomplishment that has had a profound positive impact on my psychological and emotional well-being.</span>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Home;