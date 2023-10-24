import React from 'react'
import "./footer.css"
import {BsInstagram} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {IoLogoTwitter} from 'react-icons/io'
import {BsGithub} from 'react-icons/bs'
import {SiLeetcode} from 'react-icons/si'
import {SiGeeksforgeeks} from 'react-icons/si'
import {SiCodechef} from 'react-icons/si'
const footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>D E B A N J A N</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#TechStats">TechStats</a></li>
        <li><a href="#portfolio">Projects</a></li>
        <li><a href="#testimonials">Achievements</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
            <a href="https://www.instagram.com/thedebanjan/" target="_blank"><BsInstagram /></a>
            <a href="https://www.linkedin.com/in/debanjan-guha-thakurata/" target="_blank"><BsLinkedin /></a>
            <a href="https://mobile.twitter.com/debanjandgt" target="_blank"><IoLogoTwitter /></a>
            <a href="https://github.com/debanjandgt" target="_blank"><BsGithub /></a>
            <a href="https://leetcode.com/debanjandgt/" target="_blank"><SiLeetcode /></a>
            <a href="https://auth.geeksforgeeks.org/user/debanjandgt/" target="_blank"><SiGeeksforgeeks /></a>
            <a href="https://www.codechef.com/users/debanjandgt" target="_blank"><SiCodechef /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Debanjan Guha Thakurata . All rights reserved</small>
      </div>
    </footer>
  )
}

export default footer