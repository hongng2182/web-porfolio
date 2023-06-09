import Layout from '../layout'
import './index.css'
import { useIntersectionObserver } from '../../hooks';
import { webContent } from '../../constants';

function AboutMe() {
  const { title, details: aboutMeDetails } = webContent.about
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
            <h2 className="title-large about-me">{title}</h2>
            <div className='line' />
          </div>
          <div className='about-details body-large fade-in'>
            {aboutMeDetails.map(detail => <p>{detail}</p>)}
          </div>
        </div>
      </Layout>
    </section>
  )
}

export default AboutMe