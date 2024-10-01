import React from 'react'
import '../styles/NavbarSmall.css'
import { PrimaryButton } from './PrimaryButton'
import { Link } from 'react-router-dom'

const NavbarSmall = ({onClick}) => {
  return (
    <div className='navbar-small-container'>
      <nav className='navbar-small-nav'>
        <button className="navbar-small-button" onClick={onClick}><Link to='about' className='navbar-small-link'>About</Link></button>
        <button className="navbar-small-button" onClick={onClick}><Link to='features' className='navbar-small-link'>Features</Link></button>
        <button className="navbar-small-button" onClick={onClick}><Link to='ourteam' className='navbar-small-link'>Our Team</Link></button>
        <button className="navbar-small-button" onClick={onClick}><Link to='documentation' className='navbar-small-link'>Documentation</Link></button>
        <button className="navbar-small-button" onClick={onClick}><Link to='login' className='navbar-small-link'>Login</Link></button>
      </nav>
      <div className="navbar-small-hero-section">
        <PrimaryButton destination='download' text='DOWNLOAD'/>
      </div>
    </div>
  )
}

export default NavbarSmall
