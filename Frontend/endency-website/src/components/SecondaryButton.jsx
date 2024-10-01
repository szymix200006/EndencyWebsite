import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/SecondaryButton.css'

const SecondaryButton = ({text, destination}) => {
  return (
    <Link to={destination} className='secondary-button-wrapper'>
        {text}
    </Link>
  )
}

export default SecondaryButton
