import React from 'react'
import '../styles/SocialIcon.css'

export const SocialIcon = ({image, destination}) => {
  return (
    <a href={destination} target='_blank' className='social-icon-wrapper'>
        <img src={image} alt="social-icon" className='social-icon-image'/>
    </a>
  )
}
