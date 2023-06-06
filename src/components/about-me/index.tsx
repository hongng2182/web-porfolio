import React from 'react'
import Layout from '../layout'
import './index.css'

function AboutMe() {
  return (
    <section className="about">
      <Layout>
        <div className='about-content'>
          <div className='title-container'>
            <h2 className="title-large about-me">01. About me</h2>
            <div className='line' />
          </div>
          <div className='about-details body-large'>
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