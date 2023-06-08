import React, { useEffect, useRef } from 'react'
import Layout from '../layout'
import './index.css'

function Contact() {
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const el = document.getElementById('last')
        if (entry.isIntersecting) {
          document.body.style.backgroundColor = 'var(--color-on-primary-container)'
          if (el) { el.style.visibility = 'hidden' }
        } else {
          document.body.style.backgroundColor = 'var(--color-background)'
          if (el) { el.style.visibility = 'visible' }
        }
      });
    });

    const fadeInElements = document.querySelectorAll('.contact');

    fadeInElements.forEach(el => {
      if (observer.current) {
        observer.current.observe(el);
      }
    });

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  return (
    <section id="contact" className="contact">
      <Layout>
        <div className='contact-content'>
          <div className='contact-title'>
            <h2 className='title-large'>04. Contact</h2>
            <div className='line' />
          </div>
          <div className='contact-details body-large'>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aut, optio quo illo exercitationem doloribus consequatur. Sit alias animi perferendis exercitationem doloremque. Asperiores veritatis nisi ut unde aliquam ipsam minima?</p>
          </div>
        </div>
        <footer>Design and built by Hong Nguyen</footer>
      </Layout>
    </section>
  )
}

export default Contact