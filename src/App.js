import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import './App.css';
import Footer from './components/Footer.jsx';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import ScrollToTop from './ScrollToTop.jsx';
import './ScrollToTop.css';

library.add(fas, fab);

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
};

export default App;