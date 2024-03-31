import React from 'react'
import './Prototype.css'
import Angel from '../../img/angel.png'
import Devil from '../../img/devil.png'


const Prototype = () => {
  return (
    <div className='pro'>
        <div className="pro-left">
            <div className="pro-wrapper">
                <h1 className="pro-title">Angel and Devil Theme: Light and Dark Mode Prototype</h1>
                <p className="pro-desc">
                Explore the celestial duality of light and darkness in this Angel and Devil theme prototype,
                meticulously crafted using Figma. Seamlessly transition between light mode and dark mode to
                experience contrasting visual narratives inspired by heavenly and infernal realms.
                In light mode, bask in the serene glow of celestial hues and ethereal designs, evoking the 
                purity and tranquility of angelic beings. Each element, meticulously sculpted in Figma, exudes 
                a sense of divine grace and heavenly harmony, inviting users into a realm of serenity and enlightenment.
                Switch to dark mode, and be enveloped by the mysterious allure of shadowy depths and fiery accents, 
                reminiscent of the sinister charm of devilish entities. The intricately crafted designs in Figma convey 
                a sense of ominous mystique and otherworldly allure, beckoning users to explore the depths of darkness.
                Through the use of Figma's intuitive design tools and powerful collaboration features, this prototype 
                brings the celestial dichotomy of angels and devils to life, offering users a captivating journey through 
                realms of light and shadow.
            </p>

            </div>
        </div>
        <div className="pro-right">
        <a href="https://www.figma.com/proto/IJPRL7h64xq33zPhIibPKT/Figma-basics?
        type=design&node-id=894-154&t=QDGH81rssIUJCxfy-1&scaling=min-zoom&page-id=
        856%3A265&starting-point-node-id=894%3A154&mode=design" 
        target='_blank'  
        rel='noreferrer'>
            <div className="right-wrapper">
                <img src={Angel} alt="" className="a-pro" />
                <img src={Devil} alt="" className="d-pro" />
            </div>
            </a>
        </div>
    </div>
  );
};

export default Prototype