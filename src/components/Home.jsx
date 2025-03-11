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
                    {/* Project 0 */}
                    <div className="education-item col-12 col-md-4 mt-4 rounded-md">
                        <h3 className="fw-bold text-primary">🍗 Raju Chicken - Poultry E-Commerce</h3>
                        <img
                            src="https://mir-s3-cdn-cf.behance.net/projects/max_808/0cc04193469573.Y3JvcCwxMjU4LDk4NCwyODksMTM3.jpg"
                            alt="Raju Chicken Poultry Store"
                            className="img-fluid rounded shadow-sm mb-3"
                        />
                        <p>
                            Full-stack poultry e-commerce platform with product listings, cart management, secure checkout,
                            and order tracking. Built with React, Node.js, and MongoDB.
                        </p>
                        <a
                            href="https://raju-chicken.onrender.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline-primary rounded-pill"
                        >
                            View Project
                        </a>
                    </div>

                    <div className="education-item col-12 col-md-4 mt-4 rounded-md">
                        <h3 className="fw-bold text-primary">🏠 Asif Estate - Real Estate App</h3>
                        <img
                            src="https://img.freepik.com/premium-photo/real-estate-image-background-beautiful-house-front-view_800563-4682.jpg"  // You can replace this with a relevant image link
                            alt="Asif Estate Real Estate App"
                            className="img-fluid rounded shadow-sm mb-3"
                        />
                        <p>
                            A comprehensive real estate application featuring Google authentication, property listings,
                            detailed property search, and advanced filters to help users find their ideal home or investment.
                        </p>
                        <a
                            href="https://asif-estate-qc2n.onrender.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline-primary rounded-pill"
                        >
                            View Project
                        </a>
                    </div>


                    {/* Project 1 */}
                    <div className="education-item col-12 col-md-4 mt-4 rounded-md">
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
                    <div className="education-item col-12 col-md-4 mt-4">
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
                    <div className="education-item col-12 col-md-4 mt-4">
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
                    <div className="education-item col-12 col-md-4 mt-4">
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
                    <div className="education-item col-12 col-md-4 mt-4">
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
                    <div className="education-item col-12 col-md-4 mt-4">
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

                    {/* Project 7 */}
                    <div className="education-item col-12 col-md-4 mt-4">
                        <h3 className="fw-bold text-primary">🏥 Hospital Management Website</h3>
                        <img
                            src="https://149842033.v2.pressablecdn.com/wp-content/uploads/2020/03/Medically-1024x807.jpg"
                            alt="Hospital Management Website"
                            className="img-fluid rounded shadow-sm mb-3"
                        />
                        <p>
                            A fully responsive hospital management website designed for handling doctor and patient details effectively. Built with an intuitive and efficient interface for healthcare administration.
                        </p>
                        <a
                            href="https://medvista.ardent-start.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline-primary rounded-pill"
                        >
                            View Project
                        </a>
                    </div>

                    {/* Project 8 */}
                    <div className="education-item col-12 col-md-4 mt-4">
                        <h3 className="fw-bold text-primary">💻 BlueNext Technologies Website</h3>
                        <img
                            src="https://wallpaperaccess.com/full/860435.jpg"
                            alt="BlueNext Technologies Website"
                            className="img-fluid rounded shadow-sm mb-3"
                        />
                        <p>
                            A full-stack software development website for BlueNext Technologies, providing cutting-edge technology solutions. The website is built to highlight the company's services and solutions.
                        </p>
                        <a
                            href="https://company-website-aqsj.onrender.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline-primary rounded-pill"
                        >
                            View Project
                        </a>
                    </div>

                    {/* Project 9 */}
                    <div className="education-item col-12 col-md-4 mt-4">
                        <h3 className="fw-bold text-primary">📝 Note Zipper</h3>
                        <img
                            src="https://th.bing.com/th/id/OIP.R93Or3NLjhihyni2_xRbFwHaE8?rs=1&pid=ImgDetMain"
                            alt="Note Zipper"
                            className="img-fluid rounded shadow-sm mb-3"
                        />
                        <p>
                            Note Zipper is a web app that allows users to store and manage their notes securely. It provides features like note creation, editing, and organization with a clean and user-friendly interface.
                        </p>
                        <a
                            href="https://note-zipper-hts5.onrender.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline-primary rounded-pill"
                        >
                            View Project
                        </a>
                    </div>


                    {/* Project 10 */}
                    <div className="education-item col-12 col-md-4 mt-4">
                        <h3 className="fw-bold text-primary">🌐 Portfolio Website</h3>
                        <img
                            src="https://th.bing.com/th/id/OIP.RkPk1UDAJ0zC1yCoafwUQwHaEK?w=1920&h=1080&rs=1&pid=ImgDetMain"
                            alt="Portfolio Website"
                            className="img-fluid rounded shadow-sm mb-3"
                        />
                        <p>
                            A portfolio website showcasing a collection of over 10+ projects. It provides detailed information on each project, allowing visitors to explore my web development skills and experience.
                        </p>
                        <a
                            href="https://portfolio-khaki-seven-10.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline-primary rounded-pill"
                        >
                            View Project
                        </a>
                    </div>
                </div>



            </div>

            <div className="row mt-5 fs-6 text-dark bg-white shadow-lg rounded-md">
                <div className="col-md-12 mt-5">
                    <h2 className="fw-bold mb-4 text-primary">🌟 Strengths</h2>
                    <ul className="list-unstyled">
                        <li className="mb-3 flex">
                            <span className="fw-bold text-secondary w-1/4">🎯 Aim Towards My Goals:</span>
                            <span className="ms-2 w-3/4">Goals serve as the driving force behind my endeavors.</span>
                        </li>
                        <li className="mb-3 flex">
                            <span className="fw-bold text-secondary w-1/4">🧠 Problem Solving:</span>
                            <span className="ms-2 w-3/4">
                                I have honed my problem-solving skills through various academic and extracurricular activities.
                            </span>
                        </li>
                        <li className="mb-3 flex">
                            <span className="fw-bold text-secondary w-1/4">🤝 Collaboration:</span>
                            <span className="ms-2 w-3/4">
                                I am eager to contribute my skills and knowledge to a collaborative team environment.
                            </span>
                        </li>
                    </ul>

                </div>

                <div className="col-md-12 mt-5">
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