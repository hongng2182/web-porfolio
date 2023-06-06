import React from 'react'
import Layout from '../layout'
import { Avatar } from '../svg'
import './index.css'

function Hero() {
  return (
    <section className="intro">
      <Layout>
        <div className='intro-content'>
          <div className='avatar'>
            <Avatar width={300} />
          </div>
          <div className='headline-large'>Headline large</div>
          <div className='headline-medium'>headline-medium</div>
        </div>
      </Layout>
    </section>
  )
}

export default Hero