import React, { useRef } from 'react'
import './Contact.css'

const Contact = () => {
    const formRef = useRef()
    const handleSubmit = (e) =>{
        e.preventDefault();
    }
  return (
    <div className='co'>
        <div className="co-bg"></div>
        <div className="co-wrapper">
            <div className="co-left">
                <h1 className="co-title">Contact me</h1>
                <div className="co-info">
                    <div className="co-info-item">
                    <i className="fa-solid fa-phone-volume" aria-hidden="true" title="Phone"></i>
                    9027987425
                    </div>
                    <div className="co-info-item">
                    <i className="fas fa-duotone fa-envelope-open" aria-hidden="true" title="Mail"></i>
                    <a href="mailto:vidishatiwari74@gmail.com"  >Vidisha's Mail</a>
                    </div>
                    
                    <div className="co-info-item">
                        
                    <i className="fas fa-duotone fa-location-pin" aria-hidden="true" title="Location"></i>
                    <p> Lower JOllygrant, Bhaniyawala, Dehradun</p>
                    </div>
                    
                   
                </div>
            </div>
            <div className="co-right">
                <p className="co-desc">
                <h1> Get In Touch With Me</h1>
                </p>
                <form ref={formRef} onSubmit={handleSubmit}>
                    <input type='text'  placeholder='Name' name='user-name'/>
                    <input type='text'  placeholder='Subject' name='user-subject'/>
                    <input type='text'  placeholder='Email' name='user-email'/>
                    <textarea rows={5}  placeholder='message' name='message'/>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    </div>
  );
};

export default Contact