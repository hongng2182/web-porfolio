import React from 'react'
import Layout from '../layout'
import './index.css'
import { useIntersectionObserver } from '../../hooks';

function AboutMe() {
  useIntersectionObserver({
    targetClasses: ['fade-in'],
    options: {
      threshold: 0,
      rootMargin: '0px 0px -300px 0px',
    },
  });

  return (
    <section id="about" className="about">
      <Layout>
        <div className='about-content'>
          <div className='title-container fade-in'>
            <h2 className="title-large about-me">01. About me</h2>
            <div className='line' />
          </div>
          <div className='about-details body-large fade-in'>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aut, optio quo illo exercitationem doloribus consequatur. Sit alias animi perferendis exercitationem doloremque. Asperiores veritatis nisi ut unde aliquam ipsam minima?</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aut, optio quo illo exercitationem doloribus consequatur. Sit alias animi perferendis exercitationem doloremque. Asperiores veritatis nisi ut unde aliquam ipsam minima?</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aut, optio quo illo exercitationem doloribus consequatur. Sit alias animi perferendis exercitationem doloremque. Asperiores veritatis nisi ut unde aliquam ipsam minima?</p>
          </div>
        </div>
      </Layout>
    </section>
  )
}

export default AboutMe