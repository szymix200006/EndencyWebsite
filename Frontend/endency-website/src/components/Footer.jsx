import React from 'react'
import '../styles/Footer.css'
import { SocialBar } from './SocialBar.jsx'
import { CopyrightsSection } from './CopyrightsSection.jsx'
import MainLogo from '../assets/MainLogo.png'

export const Footer = () => {
  return (
    <div className='footer-container'>
        <div className="footer-left-section">
            <SocialBar />
            <div className="footer-copyrights-container">
                <p className="footer-copyrights">
                    @2024 Endency copyrighted. All rights reserved.
                </p>
            <CopyrightsSection />
            </div>
        </div>
        <div className="footer-right-section">
            <img src={MainLogo} alt="main-logo" className='main-logo-footer'/>
        </div>
    </div>
  )
}
