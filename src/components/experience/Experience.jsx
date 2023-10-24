import React from 'react'
import "./experience.css"
import {AiFillHtml5} from 'react-icons/ai'
import {FaJava} from 'react-icons/fa'
import{DiCss3} from 'react-icons/di'
import{SiJavascript} from 'react-icons/si'
import{SiBootstrap} from 'react-icons/si'
import{GrReactjs} from 'react-icons/gr'
import{IoLogoNodejs} from 'react-icons/io'
import{SiExpress} from 'react-icons/si'
import {SiMongodb} from 'react-icons/si'
import{TbBrandNpm} from 'react-icons/tb'
import {SiMysql} from 'react-icons/si'
import {SiCplusplus} from 'react-icons/si'
import {FaCopyright} from 'react-icons/fa'
import {SiPython} from 'react-icons/si'

const experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have?</h5>
      <h2>My Experience</h2>
      <div className="conatiner experience__container">
        <div className="experience__frontend">
            <h3>Frontend Development</h3>
            <div className="experience__content">
              <article className='experience__details'>
                  <AiFillHtml5 className='experience__details-icon'/>
                  <div>
                  <h4>HTML</h4>
                  <small className='text-light'>Experienced</small>
                  </div>
              </article>
              <article className='experience__details'>
                  <DiCss3 className='experience__details-icon'/>
                  <div>
                  <h4>CSS</h4>
                  <small className='text-light'>Experienced</small>
                  </div>
              </article>
              <article className='experience__details'>
                  <SiJavascript className='experience__details-icon'/>
                  <div>
                  <h4>JavaScript</h4>
                  <small className='text-light'>Experienced</small>
                  </div>
              </article>
              <article className='experience__details'>
                  <SiBootstrap className='experience__details-icon'/>
                  <div>
                  <h4>Bootstrap</h4>
                  <small className='text-light'>Experienced</small>
                  </div>
              </article>
              <article className='experience__details'>
                  <GrReactjs className='experience__details-icon'/>
                  <div>
                  <h4>ReactJS</h4>
                  <small className='text-light'>Intermediate</small>
                  </div>
              </article>
            </div>

        </div>

        <div className="experience__backend">

        <h3>Backend Development</h3>
            <div className="experience__content">
              <article className='experience__details'>
                  <IoLogoNodejs className='experience__details-icon'/>
                  <div>
                  <h4>NodeJS</h4>
                  <small className='text-light'>Intermediate</small>
                  </div>
              </article>
              <article className='experience__details'>
                  <SiExpress className='experience__details-icon'/>
                  <div><h4>ExpressJS</h4>
                  <small className='text-light'>Intermediate</small></div>
              </article>
              <article className='experience__details'>
                  <SiMongodb className='experience__details-icon'/>
                  <div>
                  <h4>MongoDB</h4>
                  <small className='text-light'>Intermediate</small>
                  </div>
              </article>
              <article className='experience__details'>
                  <TbBrandNpm className='experience__details-icon'/>
                  <div>
                  <h4>Mongoose</h4>
                  <small className='text-light'>Intermediate</small>
                  </div>
              </article>
              <article className='experience__details'>
                  <SiMysql className='experience__details-icon'/>
                  <div>
                  <h4>MySQL</h4>
                  <small className='text-light'>Intermediate</small>
                  </div>
              </article>
            </div>
        </div>

        <div className="experience__programming">
            <h3>Programming <br /> Skills</h3>
            <div className="experience__content">
              <article className='experience__details'>
                  <FaJava className='experience__details-icon'/>
                  <div>
                  <h4>Java</h4>
                  <small className='text-light'>Experienced</small>
                  </div>
              </article>
              <article className='experience__details'>
                  <SiCplusplus className='experience__details-icon'/>
                  <div>
                  <h4>C++</h4>
                  <small className='text-light'>Experienced</small>
                  </div>
              </article>
              <article className='experience__details'>
                  <FaCopyright className='experience__details-icon'/>
                  <div>
                  <h4>C</h4>
                  <small className='text-light'>Experienced</small>
                  </div>
              </article>
              <article className='experience__details'>
                  <SiJavascript className='experience__details-icon'/>
                  <div>
                  <h4>JavaScript</h4>
                  <small className='text-light'>Experienced</small>
                  </div>
              </article>
              <article className='experience__details'>
                  <SiPython className='experience__details-icon'/>
                  <div>
                  <h4>Python</h4>
                  <small className='text-light'>Familiar</small>
                  </div>
              </article>
            </div>

        </div>





      </div>

    </section>
  )
}

export default experience