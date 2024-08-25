import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const HomeSectionTwo = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms for animations
  }, []);

  return (
    <React.Fragment>
      <div className="home-Section-two">
        <div className="home-section-two-text" data-aos="fade-up">
          We primarily invest in resourceful founders with transformative ideas that we 
          believe will solve market frictions, improve the status quo, and simultaneously deliver massive returns for stakeholders. 
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomeSectionTwo;
