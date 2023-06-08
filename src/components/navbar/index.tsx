import React from 'react'
import './index.css'

function Navbar() {
  return (
    <nav>
      <ul>
        <li className='subtitle-small resume'><a href="#d">Resume</a></li>
        <li className='subtitle-small'><a href="#contact">04.Contact</a></li>
        <li className='subtitle-small'><a href="#courses">03.Courses</a></li>
        <li className='subtitle-small'><a href="#projects">02.Projects</a></li>
        <li className='subtitle-small'><a href="#about">01.About</a></li>
        <li><a href="#home"><img src="logo.png" alt="logo" /></a></li>
      </ul>
    </nav>
  )
}

export default Navbar