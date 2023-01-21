import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className='contact'>
      <span className="contactTitle">Contact Us</span>
    <form action="#" className="contactForm">
      <label>Full name</label>  
      <input className='contactInput' type="text" id="contactUsername" placeholder='Enter your username'/>
      <label>Email</label>  
      <input className='contactInput' type="email" id="contactEmail" placeholder='Enter your email'/>
      <label>Message</label>  
      <textarea className='contactMsg' type="password" id="contactPassword" placeholder='Enter your password'></textarea>
      <button className="contactButton">Send</button>
    </form>
    </div>
  )
}

export default Contact;