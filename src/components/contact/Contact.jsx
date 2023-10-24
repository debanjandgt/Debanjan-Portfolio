import React from 'react'
import "./contact.css"
import {MdOutlineEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import  { useRef } from 'react';
import emailjs from 'emailjs-com'
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qcljjjd', 'template_fvfbm3h', form.current, 'fbuqHI6MRPcf-dSOH')
    e.target.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contact'>

    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>

    <div className="container contact__container">

        <div className="contact__options">
        <article className='contact__option'>
          <MdOutlineEmail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>debanjandgt@gmai.com</h5>
          <a href="mailto:debanjandgt@gmail.com" target="_blank">Send a message</a>
        </article>

        <article className='contact__option'>
          <BsLinkedin className='contact__option-icon'/>
          <h4>LinkedIn</h4>
          <h5>Debanjan Guha Thakurata</h5>
          <a href="https://www.linkedin.com/in/debanjan-guha-thakurata/" target="_blank">Send a message</a>
        </article>

        <article className='contact__option'>
          <BsWhatsapp className='contact__option-icon' />
          <h4>WhatsApp</h4>
          <h5>+919748112102</h5>
          <a href="https://api.whatsapp.com/send/?phone=919748112102&text=Hi!+I+am+interested+to+hire+you.&type=phone_number&app_absent=0" target="_blank">Send A Message</a>
        </article>
        </div>


        <form ref={form} onSubmit={sendEmail}>

         <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your E-mail' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      
    

    </div>

    </section>
  )
}

export default Contact