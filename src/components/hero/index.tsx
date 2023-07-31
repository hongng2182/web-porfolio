import Layout from '../layout'
import './index.css'
import { webContent } from '../../constants'

function Hero() {
  const { title, subtitle } = webContent.hero
  return (
    <section id="home" className="intro">
      <Layout>
        <div className='intro-content'>
          <h1 className='headline-large typewriter'>{title}</h1>
          <h3 className='headline-medium fade-in'>{subtitle}</h3>
        </div>
      </Layout>
    </section >
  )
}

export default Hero