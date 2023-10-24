import React from 'react'
import "./header.css"
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiLeetcode} from 'react-icons/si'
const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/debanjan-guha-thakurata/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/debanjandgt" target="_blank"><FaGithub /></a>
        <a href="https://leetcode.com/debanjandgt/" target="_blank"><SiLeetcode /></a>

    </div>
  )
}

export default HeaderSocials