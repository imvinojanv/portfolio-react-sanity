import React, { useState, useEffect } from 'react';
import { motion} from 'framer-motion';
import { BiDownload } from 'react-icons/bi';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';

import './Skills.scss';

const Skills = () => {
  const [experience, setExperience] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query)
      .then((data) => {
        setExperience(data);
      })
    client.fetch(skillsQuery)
    .then((data) => {
      setSkills(data);
    })
    
  }, [])

  return (
    <>
      <h2 className='head-text'>
        Skills & 
        <span> Experiences</span>
      </h2>

      <div className='app__skills-container'>
        {/* Skills */}
        <motion.div
          className='app__skills-list'
        >
          {skills?.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className='app__skills-item app__flex'
              key={skill.name}
            >
              <div className='app__flex' style={{ backgroundColor: skill.bgColor }}>
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className='p-text'>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Experience */}
        <motion.div className='app__skills-exp'>
          {experience.map((experience) => (
            <motion.div
              className='app__skills-exp-item'
              key={experience.imgUrl}
            >
              <div className='app__skills-exp-logo'>
                <img src={urlFor(experience?.imgUrl)} alt={experience.title} />
              </div>

              <motion.div className='app__skills-exp-works'>
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className='app__skills-exp-work'
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className='bold-text'>{work.title}</h4>
                      <p className='company-name p-text'>{work.company}</p>
                      <p className='time-period p-text'>{work.time}</p>
                      <div>
                        <p className='p-text'>{work.desc}</p>
                      </div>
                      <div>
                        <p className='p-text title'>{work.name}</p>
                        <p className='p-text'>{work.skills}</p>
                      </div>
                    </motion.div>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className='app__resume-container'>
        <a href='https://drive.google.com/file/d/1xMAkpY31pWMo13AdXU-5ckyNstCAxqYV/view?usp=share_link' target='_blank'>
          <div className='resume-cmp app__flex'>
            <h4>
              My Resume 
            </h4>
            <BiDownload 
              className='icon'
            />
          </div>
        </a>
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Skills, 'app__skills'), 
  'skills',
  'app__whitebg'
  // change the color of logos in SANITY
);