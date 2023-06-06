import React from 'react'
import Layout from '../layout'
import { Avatar } from '../svg'
import { useMediaQuery } from '../../hooks'
import './index.css'

function Hero() {
  const smallerThan500 = useMediaQuery('(max-width: 500px)')
  return (
    <section className="intro">
      <Layout>
        <div className='intro-content'>
          <div className='avatar'>
            <Avatar width={smallerThan500 ? 250 : 300} height={smallerThan500 ? 300 : 400} />
          </div>
          <h1 className='headline-large typewriter'>Hi i&apos;m Hong Nguyen</h1>
          <h3 className='headline-medium fade-in'>Welcome to my website</h3>
        </div>
      </Layout>
    </section >
  )
}

export default Hero