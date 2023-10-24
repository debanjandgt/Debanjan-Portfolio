import React from 'react'
import "./services.css"
import {BiCheck} from 'react-icons/bi'
const services = () => {
  return (
    <section id='services'>
      <h5>Here Is My Work Experiences</h5>
      <h2>My Work Experiences</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>Software Development Intern</h3>
            <h3>Desi QnA</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Worked on the Complete Designing and Development of the
Website <br /> which is Fully Responsive
</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Optimised the Code to increase the User Experience and User
Interface by 60%

</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Worked on SEO’s to increase the user traffic in the website by
90%
</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Included Recaptha and Google Layer of Protection</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Worked on User Verification and Detecting Bots and removing the Bots</p>
            </li>
          </ul>

        </article>
      </div>
  
    </section>
  )
}

export default services