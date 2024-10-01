import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import '../styles/PrimaryCarousel.css'
import CustomRightArrow from './CustomRightArrow';
import CustomLeftArrow from './CustomLeftArrow';
import CustomDot from './CustomDot';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1500 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1500, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const PrimaryCarousel = ({swipeable, customRightArrow, customLeftArrow, customDot, infinite, autoPlay, dots, arrows, deviceType, children}) => {
  return (
    <Carousel 
      responsive={responsive}
      draggable={false}
      swipeable={swipeable}
      showDots={dots}
      arrows={arrows}
      transitionDuration={500}
      autoPlaySpeed={5000}
      infinite={infinite || deviceType == 'tablet'}
      containerClass="carousel-container"
      dotListClass="custom-dot-list-style"
      customRightArrow={arrows ? customRightArrow : null}
      customLeftArrow={arrows ? customLeftArrow : null}
      customDot={dots ? customDot : null}
      removeArrowOnDeviceType={['tablet', 'mobile']}
      autoPlay={deviceType == "tablet" ? true : autoPlay}
    >
      {children}
    </Carousel>
  )
}

export default PrimaryCarousel
