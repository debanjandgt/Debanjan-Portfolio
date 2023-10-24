import React from 'react'
import "./testimonials.css"
import AVTR1 from '../../assets/avatar1.png'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.png'
import AVTR4 from '../../assets/avatar4.png'



// import Swiper core and required modules
import {  Pagination , Navigation} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const testimonials = () => {
  return (
    <section id='testimonials'>

      <h5>My Achievements</h5>
      <h2>Certifications And Achievements</h2>

      <Swiper className="container testimonials__container"
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      >
        <SwiperSlide className='testimonial'>

          <div className="client__avatar">
            <img src={AVTR1} alt="AvatarOne" />
          </div>
            <h5 className='client__name'>Java Programming: Solving Problems with Software</h5>
            <small className='client__review'>an online non-credit course authorized by Duke University and offered through Coursera
            </small>
           <a id='view' className='btn ' href="https://www.coursera.org/account/accomplishments/certificate/8X9KLFHEQBZA" target="_blank">View</a>
          
        </SwiperSlide>

        <SwiperSlide className='testimonial'>

          <div className="client__avatar">
            <img src={AVTR3} alt="AvatarTwo" />
          </div>
            <h5 className='client__name'>The Full Stack Web Development Bootcamp 2023 - MERN STACK</h5>
            <small className='client__review'>Fullstack Web Development MERN STACK, Nodejs, React, Mongodb, Javascript, HTML, CSS, Express, API, & more
            </small>
            <a id='view' className='btn ' href="https://www.udemy.com/certificate/UC-74194d19-9bf7-4ae1-b267-9731c681726a/" target="_blank">View</a>
          
        </SwiperSlide>

        <SwiperSlide className='testimonial'>

          <div className="client__avatar">
            <img src={AVTR4} alt="AvatarOne" />
          </div>
            <h5 className='client__name'>LeetCode</h5>
            <small className='client__review'>2.5 star coder at Leetcode and solved over 300 problems</small>
            <a id='view' className='btn ' href="https://leetcode.com/debanjandgt/" target="_blank">View</a>
          
        </SwiperSlide>

        <SwiperSlide className='testimonial'>

          <div className="client__avatar">
            <img src={AVTR2} alt="AvatarTwo" />
          </div>
            <h5 className='client__name'>University of Engineering & Management,Kolkata</h5>
            <small className='client__review'>I have secured a position in the top 20% students in the Department of CSE.
            </small>
            <a id='view' className='btn ' href="https://drive.google.com/file/d/1FmSFcT-yOgTL_nJya3BYGlAgysZ3i8Sd/view" target="_blank">View</a>
          
        </SwiperSlide>

        <SwiperSlide className='testimonial'>

          <div className="client__avatar">
            <img src={AVTR1} alt="AvatarOne" />
          </div>
            <h5 className='client__name'>Programming for Everybody (Getting Started with
Python)</h5>
            <small className='client__review'>an online non-credit course authorized by University of Michigan and offered through
Coursera

            </small>
            <a id='view' className='btn ' href="https://www.coursera.org/account/accomplishments/certificate/QK5WC34HR4J9" target="_blank">View</a>
        </SwiperSlide>

        


      </Swiper>




    </section>

  )
}

export default testimonials