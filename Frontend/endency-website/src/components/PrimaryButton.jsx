import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/PrimaryButton.css'

export const PrimaryButton = ({text, destination, handleClick}) => {
  return (
    <Link to={destination} className='primary-button-wrapper'>
        <button className="primary-button" onClick={handleClick}>
            {text}
        </button>
    </Link>
  )
}
