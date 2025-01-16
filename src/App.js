import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import './components/custom.css';

const App = () => {
  const myStyle = {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Adjust the opacity as needed
    zIndex: 1,
  };

  const textContainerStyle = {
    position: 'relative',
    zIndex: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Light background for text
    padding: '20px',
    borderRadius: '8px', // Optional: adds rounded corners
  };

  return (
    <Router>
      <div style={myStyle}>
        <Navbar />
        <div className="container mt-5" style={textContainerStyle}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;