import React from 'react'
import './header.css'
import duck from '../../assets/duck.png'

import fb from '../../assets/fb.png'
import ig from '../../assets/ig.png'
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'
import mail from '../../assets/mail.png'

const Header = () => {
  return (
    <div className='website_header section_padding' id='home'>
      <div className='website_header-content'>
        <h1 className='gradient__text'>
          Hi, <br class='break' /> I'm Carson
        </h1>
        <p>
          Full-stack developer based out of Victoria BC. Enjoyer of learning,
          enthusiast of technology,
          <br /> and occasional drinker of dark beers.
        </p>
        <div className='website_header-socials'>
          <a
            href='https://www.facebook.com/carson.seidel'
            target='_blank'
            className='button'
            rel='noopener noreferrer'
          >
            <img src={fb} alt='fb' />
          </a>
          <a
            href='https://www.instagram.com/carsonseidel/'
            target='_blank'
            className='button'
            rel='noopener noreferrer'
          >
            <img src={ig} alt='ig' />
          </a>
          <a
            href='https://www.linkedin.com/in/carson-seidel/'
            target='_blank'
            className='button'
            rel='noopener noreferrer'
          >
            <img src={linkedin} alt='linkedin' />
          </a>
          <a
            href='https://github.com/kerson97'
            target='_blank'
            className='button'
            rel='noopener noreferrer'
          >
            <img src={github} alt='github' />
          </a>

          <a
            href='mailto:carson.e.seidel@gmail.com'
            target='_blank'
            className='button'
            rel='noopener noreferrer'
          >
            <img src={mail} alt='mail' />
          </a>
        </div>
      </div>
      <div className='website_header-img'>
        <img src={duck} alt='duck' />
      </div>
    </div>
  )
}

export default Header
