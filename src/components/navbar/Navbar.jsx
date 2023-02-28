import React, { useState } from 'react'
import './navbar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'

const Menu = () => (
  <>
    <p>
      <a href='#home'>Home</a>
    </p>
    <p>
      <a href='#AboutMe'>About</a>
    </p>
    <p>
      <a href='#Skills'>Skills</a>
    </p>
    <p>
      <a href='#Contact'>Contact</a>
    </p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className='website_navbar'>
      <div className='website_navbar-links'>
        <div className='website_navbar-links_container'>
          <Menu />
        </div>
      </div>

      <div className='website_navbar-menu'>
        {toggleMenu ? (
          <RiCloseLine
            color='#fff'
            size={50}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color='#fff'
            size={50}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className='website_navbar-menu_container slide-fwd-center'>
            <div className='website_navbar-menu_links'>
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
