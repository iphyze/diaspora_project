import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { NavLink } from 'react-router-dom';

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms for animations
  }, []);

  return (
    <React.Fragment>
      <div className="home-contact-wrapper">
        <div className='hcw-title' data-aos='fade-up'>Are you an Investor?</div>
        <div className='hcw-subtitle' data-aos='fade-up'>Get in Touch with Us Today to Optimize Your Financial Results</div>
        <div className='hcw-subtitle-two' data-aos='fade-up'>Are you looking for funding?  Share your ideas with us</div>
        <NavLink to='/contact' className='hcw-contact-btn' data-aos='fade-in'>
            <div className='hcw-link-text'>Contact</div>
            <div className='hcw-link-icon fas fa-arrow-right'></div>
        </NavLink>
      </div>
    </React.Fragment>
  );
};

export default Contact;
