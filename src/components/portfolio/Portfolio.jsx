import React from 'react'
import "./portfolio.css"
import IMG1 from "../../assets/portfolio1.jpg"
import IMG2 from "../../assets/portfolio2.jpg"
import IMG3 from "../../assets/portfolio3.png"
import IMG4 from "../../assets/portfolio4.png"
import IMG5 from "../../assets/proj1.jpg"
import IMG6 from "../../assets/portfoliosell.jpg.png"
const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Projects</h2>
      <div className='container portfolio__container'>
      <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <img src={IMG5} alt="" />
        </div>
        <h3>TalkTime</h3>
          
          <div className="portfolio__item-cta">
          <a className='btn' href="https://github.com/debanjandgt/talktime" target='_blank'>GitHub</a>
          <a className='btn btn-primary' href="https://talktime.onrender.com/" target='_blank'>Live Demo</a>
          </div>
        
      </article>

      <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <img src={IMG6} alt="" />
        </div>
        <h3>Sell Easy</h3>
          
          <div className="portfolio__item-cta">
          <a className='btn' href="https://github.com/debanjandgt/Sell-Easy" target='_blank'>GitHub</a>
          <a className='btn btn-primary' href="https://sell-easy.onrender.com/" target='_blank'>Live Demo</a>
          </div>
        
      </article>

      <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <img src={IMG1} alt="" />
        </div>
        <h3>Determination of Cervical Cancer</h3>
          <div className="portfolio__item-cta">
          <a className='btn' href="https://github.com/debanjandgt/Cervical-Cancer-Detection" target='_blank'>GitHub</a>
          <a className='btn btn-primary' href="https://github.com/debanjandgt/Cervical-Cancer-Detection/blob/main/CervicalCancer.ipynb" target='_blank'>Live Demo</a>
          </div>
        
      </article>

      <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <img src={IMG4} alt="" />
        </div>
        <h3>LeetCode Solution's Repository</h3>
          <div className="portfolio__item-cta">
          <a className='btn' href="https://github.com/debanjandgt/LeetCode" target='_blank'>GitHub</a>
          <a className='btn btn-primary' href="https://leetcode.com/debanjandgt/" target='_blank'>Live Demo</a>
          </div>
        
      </article>

      <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <img src={IMG3} alt="" />
        </div>
        <h3>Sort It Out</h3>
          <div className="portfolio__item-cta">
          <a className='btn' href="https://github.com/debanjandgt/Sort-It-Out-" target='_blank'>GitHub</a>
          <a className='btn btn-primary' href="https://debanjandgt-sort-it-out.netlify.app/" target='_blank'>Live Demo</a>
          </div>
        
      </article>

      <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <img src={IMG2} alt="" />
        </div>
        <h3>Spam Message Detection</h3>
          <div className="portfolio__item-cta">
          <a className='btn' href="https://github.com/debanjandgt/Natural-Language-Processor-Spam-detection" target='_blank'>GitHub</a>
          <a className='btn btn-primary' href="https://github.com/debanjandgt/Natural-Language-Processor-Spam-detection/blob/main/Natural%20Language%20Processor%20Spam%20detection.pdf" target='_blank'>Live Demo</a>
          </div>
        
      </article>
      </div>
    </section>
  )
}

export default portfolio

