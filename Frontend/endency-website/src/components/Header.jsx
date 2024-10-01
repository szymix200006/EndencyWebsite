import React, { useState } from 'react'
import MainLogo from '../assets/MainLogo.png'
import DefaultProfilePicture from '../assets/DefaultProfilePicture.png'
import { Link } from 'react-router-dom'
import { Navbar } from './Navbar'
import { PrimaryButton } from './PrimaryButton'
import HamburgerMenu from './HamburgerMenu'
import '../styles/Header.css'
import NavbarSmall from './NavbarSmall'

export const Header = () => {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <div className='header-container'>
          <div className='logo-container'>
            <Link to=''>
              <img src={MainLogo} alt="Main Logo" className='header-container-logo'/>
            </Link>
          </div>
          <Navbar />
          <div className="hero-column">
            <PrimaryButton destination='download' text='DOWNLOAD'/>
            <div className='profile-container'>
              <Link to='login'>
                <img src={DefaultProfilePicture} alt="Main Logo"/>
              </Link>
            </div>
          </div>
          <HamburgerMenu onClick={() => setOpened(opened => !opened)}/>
      </div>
      {opened && <NavbarSmall onClick={() => setOpened(opened => !opened)}/>}
    </>
  )
}
