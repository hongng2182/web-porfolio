import { useSectionIntersectionObserver } from '../../hooks'
import './index.css'

function Navbar() {
  useSectionIntersectionObserver()

  return (
    <nav id="navbar">
      <ul>
        <li className='subtitle-small resume'><a href="#d">Resume</a></li>
        <li className='subtitle-small nav-contact'><a href="#contact">04.Contact</a></li>
        <li className='subtitle-small nav-courses'><a href="#courses">03.Courses</a></li>
        <li className='subtitle-small nav-projects'><a href="#projects">02.Projects</a></li>
        <li className='subtitle-small nav-about'><a href="#about">01.About</a></li>
        <li><a href="#home"><img src="logo.png" alt="logo" /></a></li>
      </ul>
    </nav>
  )
}

export default Navbar