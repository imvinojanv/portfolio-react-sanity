import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './About.scss';

// Static Data
// const abouts = [
//   { title: 'Founder and CEO', description: 'I am a Founder and CEO at DecHorizon Technologies', imgUrl: images.about01 },
//   { title: 'Web Designer', description: 'I am a Good Web designer', imgUrl: images.about02 },
//   { title: 'Software Engineer', description: 'I am a Software Engineer at DecHorizon', imgUrl: images.about03 },
//   { title: 'UI/UX Designer', description: 'I am a Good UI/UX Designer', imgUrl: images.about04 }
// ];

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const About = () => {

  // Using useStateSnippet
  const [abouts, setAbouts] = useState([]);
  const [aboutMe, setAboutMe] = useState([]);

  // We only wants to rander useEffects at the start once are components load
  useEffect(() => {
    const query = '*[_type == "abouts"]';
    const aboutQuery = '*[_type == "aboutMe"]';

    client.fetch(query)
      .then((data) => setAbouts(data))
    
    client.fetch(aboutQuery)
      .then((data) => setAboutMe(data))
  }, []);
  

  return (
    <>
      <h2 className='head-text'>
        Do you wanna know about 
        <span> me?</span>
      </h2>

      <div className='app__aboutme'>
        {aboutMe.map((aboutMe, index) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className='app__aboutme-item app__flex'
            key={aboutMe.title + index}
          >
            <motion.div
              variants={scaleVariants}
              whileInView={scaleVariants.whileInView}
              className='app__aboutme-img app__flex'
            >
              <img src={urlFor(aboutMe.imgUrl)} alt={aboutMe.title} />
            </motion.div>
            <div className='app__aboutme-content'>
              <p>{aboutMe.content}</p>
              <div className='strength-text'>
                <h2 className='bold-text'>Strength:</h2>
                <p>{aboutMe.strength}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className='app__profile-item'
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className='bold-text' style={{ marginTop: 20 }}>{about.title}</h2>
            <p className='p-text' style={{ marginTop: 8 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about'),    // app__about : className
  'about',                            // index
  'app__primarybg'                      // for White background
);