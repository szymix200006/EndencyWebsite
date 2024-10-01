import React from 'react'
import '../styles/CustomDot.css'
import DotActive1 from '../assets/DotActive1.png'
import DotNormal1 from '../assets/DotNormal1.png'

const CustomDot = ({ onClick, ...rest }) => {
    const {
        onMove,
        index,
        active,
        carouselState: { currentSlide, deviceType }
      } = rest;
      
      return (
        <button
          onClick={() => onClick()}
          className='custom-dot'
        >
          <img src={active ? DotActive1 : DotNormal1} alt="custom-dot" className='custom-dot-image'/>
        </button>
      );
}

export default CustomDot
