import React from 'react'
import './about.css'
import {TbCertificate} from 'react-icons/tb'
import {FiUsers} from 'react-icons/fi'
import {CgGym} from 'react-icons/cg'
import profile from '../../images/profile.jpg'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={profile} alt="About Me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <CgGym className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ years of personal training</small>
            </article>

            <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>10+ clients have been trained by me</small>
            </article>

            <article className="about__card">
              <TbCertificate className='about__icon'/>
              <h5>Certification</h5>
              <small>Level 4 Certificate in Personal Training</small>
            </article>
          </div>

          <p>
            Hi, I am Arber. I have been working out for over 10 years with the aim of being healthy and fit. 
            With the knowledge I have gained thorughout the years of training and my education, I have helped many of my close friends and family
            to be the best version of themselves. Now I am invested in doing the same for my clients.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About