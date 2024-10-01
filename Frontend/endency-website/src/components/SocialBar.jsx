import React from 'react'
import '../styles/SocialBar.css'
import { SocialIcon } from './SocialIcon.jsx'
import FacebookIcon from '../assets/FacebookIcon.png'
import InstagramIcon from '../assets/InstagramIcon.png'
import GitHubIcon from '../assets/GitHubIcon.png'
import MailIcon from '../assets/MailIcon.png'
import LinkedInIcon from '../assets/LinkedInIcon.png'

export const SocialBar = () => {
  return (
    <div className='social-bar-container'>
        <SocialIcon image={FacebookIcon} destination='#'/>
        <SocialIcon image={InstagramIcon} destination='#'/>
        <SocialIcon image={GitHubIcon} destination='#'/>
        <SocialIcon image={LinkedInIcon} destination='#'/>
        <SocialIcon image={MailIcon} destination='#'/>
    </div>
  )
}
