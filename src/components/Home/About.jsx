import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import Cop_One from '../../assets/images/cop_1.jpg';
import Cop_Two from '../../assets/images/cop_2.jpg';
import Cop_Three from '../../assets/images/cop_3.jpg';
import Cop_Four from '../../assets/images/cop_4.jpg';


const data = [
    {
        id: 1,
        image: Cop_One,
        name: 'John Doe',
        title: 'Executive Partner, Founder'
    },
    {
        id: 2,
        image: Cop_Two,
        name: 'Paul Smith',
        title: 'CEO/CFO, Co-Founder'
    },
    {
        id: 1,
        image: Cop_Three,
        name: 'Danny Couper',
        title: 'Executive Partner, Co-Founder'
    },
    {
        id: 1,
        image: Cop_Four,
        name: 'Derek Jones',
        title: 'Executive Partner, Co-Founder'
    }
]



const About = () => {

useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms for animations
}, []);  

  return (
    <div className='home-about-container'>
        <div className='home-abt-title' data-aos='fade-in'>About Our Team</div>
        <div className='home-abt-text' data-aos='fade-in'>
            At <span className='home-abt-text-span'>Diaspora Impact Fund Inc</span>, our team comprises seasoned professionals with diverse expertise in finance, 
            entrepreneurship, strategic management, and operations. Together, we drive success through collaboration and innovation.
        </div>

        <div className='home-abt-flexbox'>

            {data.map((fetched) => {
                
                const {id, name, title, image} = fetched;

                return(
                    <div className='home-abt-wrap' key={id} data-aos='fade-up'>
                        <div className='home-abt-imgBox'>
                            <img src={image} className='home-abt-img'/>
                        </div>
                        <div className='home-abt-person-name'>{name}</div>
                        <div className='home-abt-person-title'>{title}</div>
                        <div className='fas fa-user person-icon'></div>
                    </div>
                    )
                })}

        </div>

    </div>
  )
}

export default About