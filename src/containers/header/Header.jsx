import React from 'react'
import './header.css'
import duck from '../../assets/duck.png'

const Header = () => {
  return (
    <div className='website_header section_padding' id='home'>
      <div className='website_header-content'>
        <h1 className='gradient__text'>Hi, I'm Carson</h1>
        <p>
          Aspiring full-stack developer based out of Victoria BC. Lover of
          learning, people and technology.
        </p>
      </div>
      <div />
      <div className='website_header-img'>
        <img src={duck} alt='duck' />
      </div>
    </div>
  )
}

export default Header
