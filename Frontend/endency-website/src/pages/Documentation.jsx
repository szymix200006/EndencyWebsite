import React from 'react'
import '../styles/Documentation.css'
import { MainSection } from '../components/MainSection'
import MainLogo from '../assets/MainLogo.png'
import { PrimaryButton } from '../components/PrimaryButton'
import SecondaryButton from '../components/SecondaryButton'
import DocumentationIcon from '../assets/DocumentationIcon.png'
import { Helmet } from 'react-helmet-async'

const destinations = ['Instalation', 'Voice Control', 'Accesibility', 'Versions', 'General Usage'];

export const Documentation = () => {
  return (
    <>
      <Helmet>
        <title>Documentation</title>
        <meta name="description" content="Learn more about Muniffic. Explore what you can do with our revolutionary features." />
        <link rel="canonical" href="/documentation" />
      </Helmet>
      <MainSection backgroundColor={'#303343'}>
        <div className="documentation-hero-section-container">
          <div className="documentation-hero-section-left-column">
            <div className="documentation-hero-section-title-row">
              <img src={DocumentationIcon} alt="docs" />
              <h1 className="documentation-hero-section-title">Muniffic Documentation</h1>
            </div>
            <PrimaryButton destination={'#'} text={'Read More'}/>
            <h2 className="documentation-hero-section-nav-title">TOPICS</h2>
            <nav className="documentation-hero-section-nav">
              {destinations.map(destination => <SecondaryButton to={'#'} text={destination}/>)}
            </nav>
          </div>
          <img src={MainLogo} alt="logo" className="documentation-hero-section-logo" />
        </div>
      </MainSection>
    </>
  )
}
