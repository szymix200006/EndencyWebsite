import React from 'react'
import '../styles/MainSection.css'

export const MainSection = ({backgroundUrl, backgroundColor, children}) => {
  return (
    <div className='main-section-container' style={backgroundUrl ? {background: `url(${backgroundUrl})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'} : backgroundColor ? {backgroundColor: backgroundColor} : {}}>
        {children}
    </div>
  )
}
