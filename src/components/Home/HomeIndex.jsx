import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'animate.css'; // Import animate.css
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Autoplay } from 'swiper/modules';
import { NavLink } from 'react-router-dom';


const HomeIndex = () => {

  return (
    <div className='home-wrapper'>
      <div className='home-wrapper-overlay'>
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          grabCursor={true}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide className='home-slide-boxes'>
            <div className='slide-text animate__animated animate__fadeInUp'>
              We focus our investments mainly on unique opportunities within the emerging Mobility sector.
            </div>
            <NavLink to='/contact' className='contact-link-btn'>
              <div className='contact-link-bg'></div>
              <span className='contact-link-text'>Contact Us</span>
            </NavLink>
          </SwiperSlide>

          <SwiperSlide className='home-slide-boxes'>
            <div className='slide-text animate__animated animate__fadeInUp'>
              We identify, develop, acquire, and manage assets in industries that have recently experienced significant disruptions. 
            </div>
            <NavLink to='/contact' className='contact-link-btn'>
              <div className='contact-link-bg'></div>
              <span className='contact-link-text'>Contact Us</span>
            </NavLink>
          </SwiperSlide>

          <SwiperSlide className='home-slide-boxes'>
            <div className='slide-text animate__animated animate__fadeInUp'>
              We strategically invest in transformative opportunities and manage assets in sectors undergoing recent, impactful disruptions.
            </div>
            <NavLink to='/contact' className='contact-link-btn'>
              <div className='contact-link-bg'></div>
              <span className='contact-link-text'>Contact Us</span>
            </NavLink>
          </SwiperSlide>

        </Swiper>
      </div>
    </div>
  );
}

export default HomeIndex;
