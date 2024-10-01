import React, { useState } from 'react'
import { MainSection } from '../components/MainSection'
import FeaturesSection1 from '../assets/FeaturesSection1.mp4'
import { PrimaryHeader } from '../components/PrimaryHeader'
import '../styles/Features.css'
import SecondaryButton from '../components/SecondaryButton'
import FeaturesSection2 from '../assets/FeaturesSection2.png'
import PrimaryCarousel from '../components/PrimaryCarousel'
import FeatureCarouselCard from '../components/FeatureCarouselCard'
import CustomDot from '../components/CustomDOt.jsx'
import CustomRightArrow from '../components/CustomRightArrow'
import CustomLeftArrow from '../components/CustomLeftArrow'
import { features } from '../assets/constants'
import { Helmet } from 'react-helmet-async'

export const Features = () => {
  return (
    <>
      <Helmet>
        <title>Features</title>
        <meta name="description" content="Explore revolutionary features of our engine. See what we have to offer for you." />
        <link rel="canonical" href="/features" />
      </Helmet>
      <MainSection backgroundUrl={FeaturesSection1}>
        <div className="features-hero-section-wrapper">
          <PrimaryHeader text={'strong points'} />
          <p className="features-hero-section-text">Revolutionary solutions of our engine</p>
        </div>
      </MainSection>
      <MainSection backgroundColor={'#F5F5F5'}>
        <div className="features-main-section-container">
          <PrimaryCarousel customDot={<CustomDot/>} customRightArrow={<CustomRightArrow/>} customLeftArrow={<CustomLeftArrow/>} arrows={true} dots={true}>
            {features.map(feature => (
              <FeatureCarouselCard title={feature.name} image={feature.image} text={feature.text}/>
            ))}
          </PrimaryCarousel>
        </div>
      </MainSection>
      <MainSection backgroundUrl={FeaturesSection2}>
        <div className="features-footer-section-container">
          <PrimaryHeader text={'get started'}/>
          <p className="features-footer-section-text">
            Our revolutionary Voice Control feature empowers developers to 
            seamlessly integrate verbal commands, elevating the creation process. 
            Imagine designing interactions, and strategic moves—all effortlessly 
            controlled by voice. Endency redefines game development by making voice 
            a dynamic tool, enhancing both accessibility and immersion. Developers, 
            step into a new era of game design where your voice shapes the engine, 
            crafting intuitive and engaging experiences. Getting started with Endency 
            is your key to unlocking limitless possibilities in game development.
          </p>
          <div className="features-footer-section-buttons">
            <SecondaryButton text={'documentation'} destination={'/documentation'} />
            <SecondaryButton text={'download'} destination={'/download'} />
          </div>
        </div>
      </MainSection>
    </>
  )
}
