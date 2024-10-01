import React from 'react'
import { NavigationButton } from './NavigationButton'
import '../styles/Navbar.css'

export const Navbar = () => {
  return (
    <nav className='navbar-container'>
        <NavigationButton destination='about' text='About'/>
        <NavigationButton destination='features' text='Features'/>
        <NavigationButton destination='ourteam' text='Our Team'/>
        <NavigationButton destination='documentation' text='Documentation'/>
    </nav>
  )
}
