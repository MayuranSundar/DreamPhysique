import React from 'react'
import './contact.css'
import {TfiEmail} from 'react-icons/tfi'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // API set up
    emailjs.sendForm('service_mgdva1i', 'template_xkjmkow', form.current, '-oF0ECIH8LEl2Y8Kk')
    // Resetting form
    e.target.reset()

    // Displaying success message 
    document.getElementById('success').style.visibility = 'visible'
    setTimeout(() => {
      let get = document.getElementById('success')
      get.style.visibility = 'hidden'
    }, 5000);
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <TfiEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>contact@dreamphysique.com</h5>
            <a href="mailto:contact@dreamphysique.com" target='_blank' rel='noopener noreferrer'>Send an Email</a>
          </article>
          <article className="contact__option">
            <AiOutlineWhatsApp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+44 712 3456 7890</h5>
            <a href="https://api.whatsapp.com/send?phone=071234567890" target='_blank' rel='noopener noreferrer'>Send a WhatsApp Message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
          <h3 id='success'>Your message was successfully sent!</h3>
        </form>
      </div>
    </section>
  )
}

export default Contact