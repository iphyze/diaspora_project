import React, { useEffect, useState } from 'react';
import 'animate.css';
// import WOW from 'wowjs';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import './Responsive.css';
import './assets/fontawesome/css/all.css';
import './assets/fontawesome/css/all.min.css';
import './assets/fontawesome/css/fontawesome.css';
import './assets/fontawesome/css/fontawesome.min.css';
import './assets/fontawesome/css/brands.css';
import './assets/fontawesome/css/brands.min.css';
import NavBar from './components/NavBar';
import HomeAll from './components/Home/HomeAll';

const App = () => {
  // useEffect(() => {
  //   new WOW.WOW().init();
  // }, []);

  const [showScrollButton, setShowScrollButton] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setShowScrollButton(scrollTop > window.innerHeight);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='container'>
      <Router basename="/">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomeAll />} />
          <Route path="/about" element={<div className="wow animate__fadeInUp">About Page</div>} />
        </Routes>
      </Router>

      {showScrollButton && (
        <div onClick={scrollToTop} className="scroll-to-top-btn fas fa-angle-up"></div>
      )}
    </div>
  );
}

export default App;
