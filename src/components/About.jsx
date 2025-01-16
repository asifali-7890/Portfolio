import React from 'react';
import myselfImage from './myself.webp';

const About = () => {
    return (
        <div className="about-container">
            <h1>About Me</h1>
            <p>
                Hello! I'm Asif Ali, a motivated and adaptable Software Developer based in Kolkata.
                I have a strong foundation in computer science, equipped with both a Bachelor's and a Diploma in Computer Science and Engineering.
                I am passionate about leveraging my technical skills to develop innovative and efficient software solutions.
            </p>

            <h2>Education</h2>
            <h3>Bachelor's of Technology in Computer Science and Engineering</h3>
            <p>Budge Budge Institute of Technology, Kolkata (08/2021 - 06/2024)</p>
            <p>GPA: 8.02/10.0</p>

            <h3>Diploma in Computer Science and Engineering</h3>
            <p>Budge Budge Institute of Technology, Kolkata (06/2018 - 08/2021)</p>
            <p>GPA: 8.5/10.0</p>

            <h2>Skills</h2>
            <ul>
                <li>React.js</li>
                <li>Node.js</li>
                <li>JavaScript</li>
                <li>HTML & CSS</li>
                <li>Bootstrap</li>
                <li>MongoDB</li>
                <li>MySQL</li>
                <li>Firebase</li>
                <li>Java</li>
            </ul>

            <h2>Projects</h2>
            <h3>Swiggy Clone</h3>
            <p>A functional clone of the Swiggy mobile app focusing on frontend user experience.</p>
            <h3>Netflix GPT</h3>
            <p>A Netflix clone app that replicates core functionalities using Firebase for backend services.</p>
            <h3>Tomato Food App</h3>
            <p>A web-based food ordering platform with features like food item listings and secure user authentication.</p>

            <h2>Strengths</h2>
            <ul>
                <li><strong>Aim Towards My Goals:</strong> Goals serve as the driving force behind my endeavors.</li>
                <li><strong>Problem Solving:</strong> I have honed my problem-solving skills through various academic and extracurricular activities.</li>
                <li><strong>Collaboration:</strong> I am eager to contribute my skills and knowledge to a collaborative team environment.</li>
            </ul>

            <h2>Key Achievements</h2>
            <p>Achieved 1st Rank in 3rd Semester: This accomplishment has reinforced my belief in my abilities and motivated me to strive for even greater achievements in the future.</p>

            <div className="image-container text-center mt-5">
                <h2>My Favorite Image</h2>
                <img
                    src="https://www.superiorwallpapers.com/download/disneyland-castle-beautiful-in-the-night-3840x2160.jpg"
                    alt="Disneyland Castle"
                    className="img-fluid" // Bootstrap class for responsive images
                />
                <img
                    src={myselfImage} // Use the imported image
                    alt="Myself" // Update the alt text to be more descriptive
                    className="img-fluid w-75 w-md-50" // Bootstrap class for responsive images
                    style={{ height: 'auto' }}
                />
                <h1 className='fs-1 mt-4'>Our Founder Asif Ali</h1>
            </div>
        </div>
    );
}

export default About;   