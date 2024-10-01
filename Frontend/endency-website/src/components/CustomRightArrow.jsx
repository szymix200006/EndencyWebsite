import React from 'react'
import RightArrow from '../assets/RightArrow.png'
import '../styles/CustomRightArrow.css'

const CustomRightArrow = ({onClick, ...rest}) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType }
  } = rest;
  
  return ( 
    <button onClick={() => onClick()} className='custom-right-arrow'>
      <img src={RightArrow} alt='right-arrow'/>
    </button>
  )
}

export default CustomRightArrow
