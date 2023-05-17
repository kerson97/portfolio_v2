import React from 'react'
import './skills.css'

const Skills = () => {
  return (
    <div className='skills-content section_padding section_margin' id='skills'>
      <h1 className='gradient__text'>My Resumé</h1>

      <iframe
        title='Resume'
        src='https://drive.google.com/file/d/1XOIwyni761iMotW3YxCh_fZ_Kntp4JZq/preview'
        width='866'
        height='1066'
        allow='autoplay'
      ></iframe>

      <a
        href='https://drive.google.com/file/d/1XOIwyni761iMotW3YxCh_fZ_Kntp4JZq/view?usp=sharing'
        target='_blank'
        rel='noopener noreferrer'
      >
        Download 2023 Resumé (PDF)
      </a>
    </div>
  )
}

export default Skills
