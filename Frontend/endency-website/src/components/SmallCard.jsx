import React from 'react'
import { PrimaryButton } from './PrimaryButton'
import '../styles/SmallCard.css'

export const SmallCard = ({heading, text, buttonText, buttonDestination}) => {
  return (
    <div className="small-card-container">
        <h1 className="small-card-header">{heading}</h1>
        <p className="small-card-text">{text}</p>
        <div className="small-card-button-wrapper">
          <PrimaryButton text={buttonText} destination={buttonDestination}/>
        </div>
    </div>
  )
}
