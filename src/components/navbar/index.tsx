import { useSectionIntersectionObserver } from '../../hooks'
import './index.css'

function Navbar() {
  useSectionIntersectionObserver()

  return (
    <nav id="navbar">
      <ul>
        <li className='subtitle-small resume'><a target='_blank' rel="noreferrer" href="https://bit.ly/3Klh3tc">Resume</a></li>
        <li className='subtitle-small nav-contact'><a href="#contact">Contact</a></li>
        <li className='subtitle-small nav-courses'><a href="#courses">Courses</a></li>
        <li className='subtitle-small nav-projects'><a href="#projects">Projects</a></li>
        {/* <li className='subtitle-small nav-about'><a href="#about">01.About</a></li> */}
        <li><a href="#home"><img src="logo.png" alt="logo" /></a></li>
      </ul>
    </nav>
  )
}

export default Navbar