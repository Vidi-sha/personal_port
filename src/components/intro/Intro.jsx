import React from 'react'
import './intro.css'
import Me from '../../img/me.jpeg'
import HeartIcon from '../Heart-icon';

const Intro = () => {
  return (
    <div className='introduction'> 
        <div className="i-left">
            <div className="i-left-wrapper">
                <h2 className='i-intro'>Hello, my name is </h2>
                <h1 className='i-name'>VIDISHA
                <span className="tooltiptext">"I always felt that I needed to make efforts since I was lacking, 
                but when for the first time I found what is really necessary for me, I never thought of going back. 
                This path always showed me doors to escape to the world where I actually belong."<HeartIcon/>
               </span>
                </h1>
                <div className="i-title">
                <div className="i-title-wrapper">
                    <div className="i-title-item">Front-End Developer</div>
                    <div className="i-title-item">Aspiring UI/UX Designer</div>
                    <div className="i-title-item">Art Admirer</div>
                    <div className="i-title-item">Aesthetically Innovative</div>
                    <div className="i-title-item">Problem Solver</div>
                </div>
                </div>
                <div className="i-desc">
                "A passionate learner currently stepping into the world of front-end development with aspirations to 
                become a UI/UX designer. I have a keen eye for aesthetics and a love for creating art, often spending 
                my free time sketching and exploring various artistic mediums."
                </div>
            </div>
        </div>
        <div className="i-right">
         <div className="i-bg"></div>
           <img src={Me} alt='' className='img-me'/>
           </div>
           </div>
        
        
    
  );
};

export default Intro