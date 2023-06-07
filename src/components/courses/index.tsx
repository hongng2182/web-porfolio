import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Layout from '../layout'
import './index.css'
import { courses } from '../../constants';
import { useIntersectionObserver } from '../../hooks';

function Courses() {
  const scrollRef = useRef(null);
  const pinRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const animationContext = gsap.context(() => {
      gsap.from("h2", {
        scale: 3,
        duration: 1,
        ease: "none",
        scrollTrigger: {
          trigger: scrollRef.current,
          start: "center center",
          end: "bottom center",
          scrub: true
        }
      });
      ScrollTrigger.create({
        trigger: scrollRef.current,
        start: "center center",
        end: "bottom center",
        pin: pinRef.current
      });
    }, scrollRef);
    return () => animationContext.revert();
  }, []);

  useIntersectionObserver({
    targetClasses: ['slide-in'],
    options: {
      threshold: 0,
      rootMargin: '0px 0px -300px 0px',
    },
  });

  return (
    <section className="courses">
      <Layout>
        <div className="courses_title-container" ref={scrollRef}>
          <div className="title-container-inner">
            <div ref={pinRef}>
              <h2 className='title-large'>03. Courses I&apos;ve learnt</h2>
            </div>
          </div>
        </div>

        <div className="courses_display">
          {courses.map((course, index) =>
            <div key={course.title} className="course_row">
              {index % 2 === 0 ? <>
                <img
                  src={course.courseImg}
                  alt={course.alt}
                  className="slide-in left"
                />
                <div className="slide-in right">
                  <h3 className='subtitle-medium'>{course.title}</h3>
                  <p className='body-medium'>{course.description}</p>
                </div>
              </> : <>
                <div className="slide-in left">
                  <h3 className='subtitle-medium'>{course.title}</h3>
                  <p className='body-medium'>{course.description}</p>
                </div>
                <img
                  src={course.courseImg}
                  alt={course.alt}
                  className="slide-in right"
                />
              </>}
            </div>)}
        </div>
      </Layout></section >
  )
}

export default Courses