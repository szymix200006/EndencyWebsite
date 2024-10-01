import React from 'react'
import LeftArrow from '../assets/LeftArrow.png'
import '../styles/CustomLeftArrow.css'

const CustomLeftArrow = ({onClick, ...rest}) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType }
  } = rest;
  
  return ( 
    <button onClick={() => onClick()} className='custom-left-arrow'>
      <img src={LeftArrow} alt='left-arrow'/>
    </button>
  )
}

export default CustomLeftArrow
