// src/Home.jsx
import React from 'react';
import './custom.css'; // Make sure to import your CSSotstrap CSS is imported

const Home = () => {
    return (
        <div className="container text-center">
            <div>
                <h1 className='fs-1'>Welcome to My Portfolio</h1>
                <p className='fs-4'>Hi, I'm Asif Ali, a passionate Software Developer based in Kolkata.</p>
                <p className='fs-4'>I specialize in creating efficient and innovative software solutions.</p>
            </div>

            <div className="row mt-5 fs-2">
                <div className='col-md-6 fs-4'>
                    <h2>Education</h2>
                    <div className="row mt-3">
                        <div className="col-md-6">
                            <p><strong>Bachelor's of Technology in Computer Science and Engineering</strong><br />
                                Budge Budge Institute of Technology, Kolkata (08/2021 - 06/2024)<br />
                                GPA: 8.02/10.0</p>
                        </div>
                        <div className="col-md-6">
                            <p><strong>Diploma in Computer Science and Engineering</strong><br />
                                Budge Budge Institute of Technology, Kolkata (06/2018 - 08/2021)<br />
                                GPA: 8.5/10.0</p>
                        </div>
                    </div>
                </div>

                <div className='col-md-6 fs-4'>
                    <h2>Skills</h2>
                    <ul className="list-unstyled">
                        <li>React.js</li>
                        <li>Node.js</li>
                        <li>JavaScript</li>
                        <li>HTML & CSS</li>
                        <li>Bootstrap</li>
                        <li>MongoDB</li>
                        <li>Firebase</li>
                    </ul>
                </div>
            </div>

            <div className="row mt-5 fs-4">
                <h2>Projects</h2>
                <div className="row">
                    <div className="col-md-4">
                        <h3>Swiggy Clone</h3>
                        <p>A functional clone of the Swiggy mobile app focusing on frontend user experience.</p>
                        <a href="https://swiggy-clone-739ab.web.app/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">View Project</a>
                    </div>
                    <div className="col-md-4 mt-3">
                        <h3>Netflix GPT</h3>
                        <p>A Netflix clone app that replicates core functionalities using Firebase for backend services.</p>
                        <a href="https://netflixgpt-47c21.web.app/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">View Project</a>
                    </div>
                    <div className="col-md-4 mt-3">
                        <h3>Tomato Food App</h3>
                        <p>A web-based food ordering platform with features like food item listings and secure user authentication.</p>
                        <a href="https://food-del-c58f2.web.app/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">View Project</a>
                    </div>

                    <div className="col-md-4 mt-3">
                        <h3>MERN Stack App</h3>
                        <p>A full-stack application with the ability to create and view posts, built using the MERN stack.</p>
                        <a href="YOUR_MERN_STACK_APP_LINK" target="_blank" rel="noopener noreferrer" className="btn btn-primary">View Project</a>
                    </div>

                    <div className="col-md-4 mt-3">
                        <h3>Bookstore App</h3>
                        <p>An online bookstore app where users can browse, search, and purchase books.</p>
                        <a href="https://book-store-six-beta.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">View Project</a>
                    </div>
                </div>
            </div>

            <div className="row mt-5 fs-4">
                <div className="col-md-6 mt-5">
                    <h2>Strengths</h2>
                    <ul className="list-unstyled">
                        <li><strong>Aim Towards My Goals:</strong> Goals serve as the driving force behind my endeavors.</li>
                        <li><strong>Problem Solving:</strong> I have honed my problem-solving skills through various academic and extracurricular activities.</li>
                        <li><strong>Collaboration:</strong> I am eager to contribute my skills and knowledge to a collaborative team environment.</li>
                    </ul>
                </div>

                <div className="col-md-6 mt-5">
                    <h2>Key Achievements</h2>
                    <p>Got 1st Rank in 3rd Semester: Achieving first rank in my third semester was a significant accomplishment that has had a profound positive impact on my psychological and emotional well-being.</p>
                </div>
            </div>
        </div>
    );
};

export default Home;