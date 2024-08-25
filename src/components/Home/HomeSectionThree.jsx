import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import Service_Image from '../../assets/images/services-img-two.jpg'




const data = [
    {
        id: 1,
        text: 'Accountability is our “love language”',
    },
    {
        id: 2,
        text: 'We concentrate our efforts on market niches where fear, indecision, and weakness live',
    },
    {
        id: 3,
        text: 'We choose battles we win and get paid well when we do.',
    },
    {
        id: 4,
        text: 'We believe “Smart” matters; opportunity lives where innovation dies.',
    },
    {
        id: 5,
        text: 'We pick winners, support them, and run up the score.',
    },
    {
        id: 6,
        text: 'We respect hard work, diligence, intelligence, and “grit.”',
    },
    {
        id: 7,
        text: 'We find hidden value and show up first to the party.',
    },
    {
        id: 8,
        text: 'We value Impact, the ultimate measure of success.',
    },
    {
        id: 9,
        text: "We live and die by metrics. We know you cannot improve what you cannot measure, and measurement precedes profits, always.",
    },
    {
        id: 10,
        text: 'We know what we don’t know. No one knows everything, and arrogance destroys wealth.',
    },
]



const HomeSectionThree = () => {

useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms for animations
}, []);  


  return (
    <div className='core-belief-wrapper'>
        
        <div className='core-image-box'>
            <img src={Service_Image} alt="services-img" className='core-img' data-aos='fade-right'/>
        </div>
        
        <div className='core-list-box' data-aos='fade-in'>
            <div className='core-list-title'>Our 10 Truths</div>

            {data.map((lists) => {

                    const {id, text} = lists;

                return(
                    <div className='core-list-wrapper' key={id}>
                        <div className='core-list-icon fas fa-list'></div>
                        <div className='core-list-text'>{text}</div>
                    </div>
                )

            }) }

        </div>

    </div>
  )
}

export default HomeSectionThree