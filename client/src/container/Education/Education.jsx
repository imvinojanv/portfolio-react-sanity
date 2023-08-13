import React,  { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';

import './Education.scss';

const Education = () => {
    const [education, setEducation] = useState([]);

    useEffect(() => {
        const query = '*[_type == "education"]';

        client.fetch(query)
            .then((data) => {
                setEducation(data);
            })
    }, [])
    

  return (
    <>
        <h2 className='head-text'>
            <span>Education</span>
            &nbsp;Background
        </h2>

        <div className='app__education-container'>
            {education.map((education) => (
                <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    className='app__education-item app__flex'
                    key={education.institute}
                >
                    <div className='app__education-box1'>
                        <div className='app__education-content'>
                            <h2>{education.degree}</h2>
                            <h3>{education.institute}</h3>
                        </div>
                        <div className='app__education-img'>
                            <img src={urlFor(education.logo)} alt={education.institute} />
                        </div>
                    </div>
                    <div className='app__education-box2'>
                        <p className='p-text'>{education.period}</p>
                        <p className='p-text'>{education.location}</p>
                    </div> <hr />
                    <div className='app__education-box3'>
                        <p>{education.fieldTitle}</p>
                        <p className='p-text'>{education.content}</p>
                    </div>
                </motion.div>
            ))}
        </div>
    </>
  )
}

export default AppWrap(
    MotionWrap(Education, 'app__education'), 
    'education',
    'app__whitebg'
);