import React from 'react'
import "./about.css"
import ME from '../../assets/me.jpg'
import {FaUserGraduate} from 'react-icons/fa' 
import {FaAward} from 'react-icons/fa'
import {BsPersonWorkspace} from 'react-icons/bs'
const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="My Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">

            <article className='about__card'>
              <FaUserGraduate className='about__icon'/>
              <h5>Education</h5>
              <small>B.Tech CSE</small>
              <br />
              <small>UEM Kolkata</small>
              <br />
              <small>9.61 CGPA</small>
            </article>

            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>6+ Months Working</small>
            </article>

            <article className='about__card'>
              <BsPersonWorkspace className='about__icon'/>
              <h5>Projects</h5>
              <small>5+ Completed</small>
            </article>

          </div>

          <p>
          Pursuing B.Tech in Computer Science with a passion for software development and a strong foundation in coding and problem-solving.  <br />
          Skilled in Java, C++ and experienced in developing web applications and databases. <br />
          Seeking an internship as a Software Development Engineer to gain hands-on experience in a professional environment 
          and contribute to the development of innovative solutions.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>

    </section>
  )
}

export default about