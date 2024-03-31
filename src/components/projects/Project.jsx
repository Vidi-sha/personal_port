import React from 'react'
import './Project.css'
import Products from '../products/Products'

const Project = () => {
  return (
    <div className="pr">
        <div className="pr-left">
            <div className="pr-wrapper">
            <h3>Travel Website</h3>
            <h4 className="pr-title">
                BHRAMAN- Make Yourself Home At GOD's Home
            </h4>
            
            <p className="pr-desc">
             The website is crafted with HTML, 
             CSS, and JavaScript, with React.js used for dynamic 
             user interface components. Utilized libraries like React 
             Router and Styled Components for seamless navigation and styling.
             By utilizing these technologies and libraries, I tried to create 
             an immersive and visually appealing website that captures the 
             authenticity of Uttarakhand's beauty, inviting travelers 
             to embark on unforgettable adventures in the Himalayas.
            </p>
        </div>
        </div>
        <div className="pr-right">
            <div className="pr-ani">
                <Products/>

            </div>
        </div>
    </div>
    
  );
};

export default Project