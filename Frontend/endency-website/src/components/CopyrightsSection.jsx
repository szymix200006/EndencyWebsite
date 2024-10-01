import React from 'react'
import '../styles/CopyrightsSection.css'
import { NavigationButton } from './NavigationButton'

export const CopyrightsSection = () => {
  return (
    <nav className="copyrights-section-container">
        <NavigationButton text='Terms of Service' to=''/>
        <NavigationButton text='Privacy Policy' to=''/>
        <NavigationButton text='Cookies' to=''/>
    </nav>
  )
}
