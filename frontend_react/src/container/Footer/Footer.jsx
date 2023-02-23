import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';

import './Footer.scss'

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    // .../formData - Destructure the current value
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message,
    }

    // using SANITY client to upload data from here
    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
  };
  console.log('here', isFormSubmitted);

  return (
    <>
      <h2 className='head-text'>Let's Talk With Me</h2>
      
      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.email} alt='email' />
          <a href='mailto:hello@vinojan.online' className='p-text'>hello@vinojan.online</a>
        </div>
        <div className='app__footer-card'>
          <img src={images.mobile} alt='phone' />
          <a href='tel:+94775737782' className='p-text'>+94 77 573 7782</a>
        </div>
      </div>

      {/* If the form is not submitted Show this form again, otherwise Show success message */}
      {!isFormSubmitted ?
        <div className='app__footer-form app__flex'>
          <div className='app__flex'>
            <input className='p-text' type='text' placeholder='Your Name' name='name' value={name} onChange={handleChangeInput} />
          </div>
          <div className='app__flex'>
            <input className='p-text' type='email' placeholder='Your Email' name='email' value={email} onChange={handleChangeInput} />
          </div>
          <div>
            <textarea 
              className='p-text'
              placeholder='Your Message'
              name='message'
              value={message}
              onChange={handleChangeInput}
            />
          </div>
          <button className='p-text' type='button' onClick={handleSubmit}>{loading ? 'Loading...' : 'Send Message'}</button>
        </div>
        : <div>
          <h3 className='head-text'>Thank you for getting in touch!</h3>
        </div>}

      <div className='app__footer-copyright'>
        <p className='p-text'>© Vinojan Abhimanyu, 2023.</p>
        <a className='p-text'>All Rights Reserved.</a>
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'), 
  'contact',
  'app__whitebg'
);