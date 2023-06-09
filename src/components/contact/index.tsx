import Layout from '../layout'
import './index.css'
import { useChangeBackgroundIntersectionObserver } from '../../hooks'
import { webContent } from '../../constants'

function Contact() {
  const { title, details } = webContent.contact
  const { intro, links } = details
  useChangeBackgroundIntersectionObserver()

  return (
    <section id="contact" className="contact">
      <Layout>
        <div className='contact-content'>
          <div className='contact-title'>
            <h2 className='title-large'>{title}</h2>
            <div className='line' />
          </div>
          <div className='contact-details body-large'>
            <p>{intro}</p>
            <div className='links-container'>
              {links.map(link =>
                <a href={link.href} target='__blank'><img src={link.socialImg} alt={link.alt} /></a>
              )}
            </div>
          </div>
        </div>
        <footer>{webContent.footer}</footer>
      </Layout>
    </section>
  )
}

export default Contact