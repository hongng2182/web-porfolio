import Layout from '../layout'
import { Avatar } from '../svg'
import { useMediaQuery } from '../../hooks'
import './index.css'
import { webContent } from '../../constants'

function Hero() {
  const { title, subtitle } = webContent.hero
  const smallerThan500 = useMediaQuery('(max-width: 500px)')
  return (
    <section id="home" className="intro">
      <Layout>
        <div className='intro-content'>
          <div className='avatar'>
            <Avatar width={smallerThan500 ? 250 : 300} height={smallerThan500 ? 300 : 400} />
          </div>
          <h1 className='headline-large typewriter'>{title}</h1>
          <h3 className='headline-medium fade-in'>{subtitle}</h3>
        </div>
      </Layout>
    </section >
  )
}

export default Hero