import React from 'react';
import { BsTwitter, BsInstagram, BsGithub, BsMedium } from 'react-icons/bs';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className='app__social'>

      <a href='https://www.linkedin.com/in/iam-vinojan/' target='_blank'>
        <div>
            <FaLinkedinIn />
        </div>
      </a>
      
      <a href='https://www.facebook.com/iam.vinojan/' target='_blank'>
        <div>
          <FaFacebookF />
        </div>
      </a>

      <a href='https://www.instagram.com/iam_vinojan/' target='_blank'>
        <div>
          <BsInstagram />
        </div>
      </a>

      {/* <a href='https://twitter.com/iam_vinojan' target='_blank'>
        <div>
          <BsTwitter />
        </div>
      </a> */}

      <a href='https://github.com/Vinojan1999' target='_blank'>
        <div>
          <BsGithub />
        </div>
      </a>
      
      <a href='https://medium.com/@iam_vinojan' target='_blank'>
        <div>
          <BsMedium />
        </div>
      </a>

    </div>
  )
}

export default SocialMedia