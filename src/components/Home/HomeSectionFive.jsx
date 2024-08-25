import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles



const HomeSectionFive = () => {

useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms for animations
}, []);  


const data = [
    {
        id: 1,
        title: 'Asymmetrical Investing Expertise',
        text: 'Our team specializes in identifying and capitalizing on opportunities that offer the greatest potential for outsized returns.',
        icon: 'fas fa-chart-line'
    },
    {
        id: 2,
        title: 'Proven Track Record',
        text: 'With a history of successful investments and value creation, we deliver results that speak for themselves.',
        icon: 'fas fa-award'
    },
    {
        id: 3,
        title: 'Strategic Insights',
        text: 'Gain access to unparalleled market insights and strategic guidance to navigate today’s complex investment landscape.',
        icon: 'fas fa-lightbulb'
    },
    {
        id: 4,
        title: 'Industry-Leading Expertise',
        text: 'Our team and networks have some of the most experienced people in the early-stage technology startup investment ecosystem, with comprehensive and outstanding track records.  Our team has spearheaded “scaling multiple businesses up to over $1 billion in revenues, and strategic initiatives with investments over $10 billion.”',
        icon: 'fas fa-trophy'
    },
    {
        id: 5,
        title: 'Tailored Solutions',
        text: 'We understand that every investor is unique. That’s why we offer personalized solutions designed to meet your specific investment objectives.',
        icon: 'fas fa-puzzle-piece'
    }
]



  return (
    <div className='choose-container'>
        
        <div className='choose-header' data-aos='fade-down'>Why Choose Us?</div>
        
        <div className='choose-text' data-aos='fade-up'>
            We are committed to producing measurable and sustainable impact in the world by creating, 
            funding, and advising disruptive companies. We are bold enough to believe we will build 
            a better world in the process.
        </div>

        <div className='choose-text-two' data-aos='fade-up'>
            Experience the Diaspora Impact Fund Inc advantage.
            <br /> 
            Here's why investors trust us.
        </div>

        <div className='choose-flexbox' data-aos='fade-up'>
            {data.map((fetched) => {

                const {id, title, text, icon} = fetched;                

                return(
                    <div className='choose-wrap' key={id}>
                        <div className={`${icon} choose-icon`}></div>
                        <div className='choose-title'>{title}</div>
                        <div className='choose-subtext'>
                            {text}
                        </div>
                        <div className={`${icon} hidden-icon`}></div>
                    </div>
                )
            })}
        </div>

    </div>
  )
}

export default HomeSectionFive