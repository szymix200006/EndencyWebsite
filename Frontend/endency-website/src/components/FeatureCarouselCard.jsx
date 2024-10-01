import React from 'react'
import '../styles/FeatureCarouselCard.css'

const FeatureCarouselCard = ({title, image, text}) => {
  return (
    <div className="feature-card-wrapper">
      <h1 className="feature-card-header">{title}</h1>
      <div className='feature-card-container'>
        <img src={image} alt="feature-image" className='feature-card-image'/>
        <p className='feature-card-text'>{text}</p>
      </div>
    </div>
  )
}

export default FeatureCarouselCard
