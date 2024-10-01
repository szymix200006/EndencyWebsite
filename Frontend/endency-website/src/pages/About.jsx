import React from 'react'
import { MainSection } from '../components/MainSection'
import AboutSection1 from '../assets/AboutSection1.png'
import { PrimaryHeader } from '../components/PrimaryHeader'
import '../styles/About.css'
import { PrimaryButton } from '../components/PrimaryButton'
import AboutSection2 from '../assets/AboutSection2.png'
import SecondaryButton from '../components/SecondaryButton'
import { Helmet } from 'react-helmet-async'

export const About = () => {
  return (
    <>
      <Helmet>
        <title>About</title>
        <meta name="description" content="Learn more about Endency. See what we have to offer as a company with our products." />
        <link rel="canonical" href="/about" />
      </Helmet>
      <MainSection backgroundUrl={AboutSection1}>
        <div className="about-hero-section-wrapper">
          <PrimaryHeader text={'our goals'}/>
          <p className="about-hero-section-text">What are we aiming for</p>
        </div>
      </MainSection>
      <MainSection backgroundColor={'#0E1018'}>
        <div className="about-main-section-container">
          <PrimaryHeader text={'the idea'}/>
          <p className="about-main-section-text">
            At Endency, our vision is to redefine the gaming landscape by fostering 
            innovation, inclusivity, and unparalleled creativity. We aim to empower 
            developers with cutting-edge tools, including Voice Control and 
            Accessibility features, to break down barriers and create environment that 
            resonate universally. By envisioning a future where every player, regardless 
            of abilities, feels a sense of belonging, Endency strives to set new 
            standards in immersive and diverse developing experiences. Join us in 
            shaping a world where ideas flourish, boundaries vanish, and the 
            extraordinary becomes the norm. 
          </p>
          <div className="about-main-section-buttons">
            <PrimaryButton text={'DOCUMENTATION'} destination={'/documentation'} />
            <PrimaryButton text={'FEATURES'} destination={'/features'} />
          </div>
        </div>
      </MainSection>
      <MainSection backgroundColor={'#373B4E'}>
        <div className="about-footer-section-container">
          <img src={AboutSection2} alt="footer-image" className='about-footer-section-image'/>
          <div className="about-footer-section-text-segment">
            <PrimaryHeader text={'purpose of endency'} />
            <p className="about-footer-section-text-segment-info">
              Endency is committed to revolutionizing the <br />
              gaming experience by providing a cutting-edge <br />
              game engine. With a focus on innovation and <br />
              inclusivity through features like Voice Control <br />
              and Accessibility, our purpose is to empower <br />
              developers. We aim to break down barriers in <br />
              game development, ensuring that creating <br />
              immersive and diverse gaming experiences is <br />
              accessible to all.
            </p>
            <SecondaryButton text={'features'} destination={'/features'} />
          </div>
        </div>
      </MainSection>
    </>
  )
}
