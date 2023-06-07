import React, { useEffect, useRef } from 'react'
import Layout from '../layout'
import './index.css'

function Contact() {
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          document.body.style.backgroundColor = 'var(--color-on-primary-container)'
        } else {
          document.body.style.backgroundColor = '#f3f3f3'
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
    <section className="contact">
      <Layout>
        <h2 className='title-large'>04. Contact</h2>
      </Layout>
    </section>
  )
}

export default Contact