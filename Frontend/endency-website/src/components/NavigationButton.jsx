import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/NavigationButton.css'

export const NavigationButton = ({text, destination}) => {
  const {pathname} = useLocation();

  return (
    <Link to={destination}>
        <button className={`navigation-button ${(pathname == `/${destination}`) ? 'active' : ''}`}>
            {text}
        </button>
    </Link>
  )
}
