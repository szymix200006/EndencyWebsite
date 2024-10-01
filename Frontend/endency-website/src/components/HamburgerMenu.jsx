import React from 'react'
import '../styles/HamburgerMenu.css'
import HamburgerMenuIcon from '../assets/HamburgerMenuIcon.png'

const HamburgerMenu = ({onClick}) => {
  return (
    <img src={HamburgerMenuIcon} alt="hamburger-menu" className='hamburger-menu-image' onClick={() => onClick()}/>
  )
}

export default HamburgerMenu
