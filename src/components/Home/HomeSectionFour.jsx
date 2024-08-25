import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import Service_Image from '../../assets/images/services-img-one.jpg'




const data = [
    {
        id: 1,
        text: 'Private Equity',
    },
    {
        id: 2,
        text: 'Strategic Consulting',
    },
    {
        id: 3,
        text: 'Growth Acceleration',
    },
    {
        id: 4,
        text: 'Fund Raising',
    },
    {
        id: 5,
        text: 'Deal Sourcing',
    },
    {
        id: 6,
        text: 'Value Enhancement',
    },
    {
        id: 7,
        text: 'Mergers & Aquisitions',
    },
    {
        id: 8,
        text: 'Capital Management',
    },
    {
        id: 9,
        text: "Exit Strategy",
    },
    {
        id: 10,
        text: 'Board Formation',
    },
]



const HomeSectionFour = () => {

useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms for animations
}, []);  


  return (
    <div className='core-belief-wrapper core-belief-wrapper-two'>
        
        <div className='core-list-box' data-aos='fade-in'>
            <div className='core-list-title'>Our Services</div>

            <div className='service-text'>
                Whether you’re seeking to capitalize on emerging trends, navigate market disruptions, 
                or simply optimize your portfolio for maximum returns, Diaspora Impact Fund Inc has you covered.
            </div>

        </div>


        <div className='core-image-box'>
            <img src={Service_Image} alt="services-img" className='core-img' data-aos='fade-left'/>
        </div>


    </div>
  )
}

export default HomeSectionFour