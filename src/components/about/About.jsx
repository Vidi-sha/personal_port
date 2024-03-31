import React from 'react'
import './About.css'
import Sketch from '../../img/sketch1.jpeg'

const About = () => {
  return (
    <div className="ab">
<div className="ab-left">
<div className="ab-card bg"></div>
    <div className="ab-card">
        <img src={Sketch} alt="" className="ab-img" />
        <span className="label">
         A Glimpse Of My Sketching-The Fault In Our Stars
         <i className="fa-solid fa-star"></i>
        </span>
        
    </div>
</div>
<div className="ab-right">
<h1 className="ab-title">ABOUT ME</h1>
<p className="ab-sub">
"My journey towards design began with a zest for knowing how things work and an emotion 
to create beautiful and heartfelt experiences for users. As I dive deeper into front-end
development, I find myself drawn to the intersection of technology and creativity.
(TMI- My name also means intersection of two directions.)Beyond my professional aspirations, 
I'm an avid traveler at heart, with dreams of exploring the world and experiencing different 
cultures. While I may not be able to embark on my global adventures just yet, I'm determined 
to pursue my passions and work towards making those dreams a reality."<br/> <b>Let's create something beautiful together.</b>
</p>
</div>
</div>
  );
};

export default About