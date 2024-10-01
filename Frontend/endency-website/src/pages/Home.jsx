import React from 'react'
import { MainSection } from '../components/MainSection'
import HomeSection1 from '../assets/HomeSection1.mp4'
import { PrimaryHeader } from '../components/PrimaryHeader'
import { PrimaryButton } from '../components/PrimaryButton'
import '../styles/Home.css'
import { SmallCard } from '../components/SmallCard'
import HomeSection2 from '../assets/HomeSection2.png'

export const Home = () => {
  return (
    <>
      <MainSection backgroundUrl={HomeSection1}>
        <div className="home-hero-section-wrapper">
          <PrimaryHeader text={<>work with<br></br> modern features</>} />
          <PrimaryButton text={"Learn more"} destination={'/about'}/>
        </div>
      </MainSection>
      <MainSection backgroundColor={"#0E1018"}>
        <div className="home-main-section-container">
          <div className="home-main-section-header-wrapper">
            <PrimaryHeader text={"Create with endency"} />
          </div>
          <div className="home-main-section-cards">
            <SmallCard heading={"Resources"} text={
                `Discover the power of clarity with Endency's documentation. 
                Our comprehensive guides and tutorials are meticulously crafted 
                to provide developers with a seamless onboarding experience. 
                Navigating the intricacies of our game engine, including 
                advanced features like Voice Control, becomes effortless 
                with our user-friendly documentation.`
            } buttonText={"Documentation"} buttonDestination={'/documentation'}/>
            <SmallCard heading={"Features"} text={
                `Welcome to Endency, where our game engine stands out with Voice Control and
                 Accessibility for everyone. Voice Control lets developers seamlessly navigate menus 
                 and interact with code, elevating the developing experience. 
                 Our dedication to Accessibility ensures that all developers, enjoy developing process. `
            } buttonText={"Features"} buttonDestination={'/features'}/>
            <SmallCard heading={"About"} text={
                `In Endency, innovation meets inclusivity in developing. 
                Our passion drives us to craft a cutting-edge game engine, 
                prioritizing Voice Control and Accessibility. 
                Join us on a journey to reshape the game engine  
                world—where every voice is heard, and every developer is embraced. `
            } buttonText={"About"} buttonDestination={'/about'}/>
          </div>
        </div>
      </MainSection>
      <MainSection backgroundUrl={HomeSection2}>
        <div className="home-bottom-section-wrapper">
          <PrimaryHeader text={'start developing now'} />
          <p className="home-bottom-section-text">
            Embark on your game development journey with Endency. Our powerful 
            tools, featuring innovative Voice Control and Accessibility, empower
            creators to shape the future of immersive gaming experiences. Experience 
            the cutting edge of development today, and join us in turning your creative
            visions into limitless realities. The possibilities are endless—start
            developing with Endency now!
          </p>
          <PrimaryButton text={"DOWNLOAD"} destination={'/download'}/>
        </div>
      </MainSection>
    </>
  )
}
