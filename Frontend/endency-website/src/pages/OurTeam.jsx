import React from 'react'
import { MainSection } from '../components/MainSection'
import OurTeamSection1 from '../assets/OurTeamSection1.png'
import { PrimaryHeader } from '../components/PrimaryHeader'
import '../styles/OurTeam.css'
import OurTeamCard from '../components/OurTeamCard'
import PrimaryCarousel from '../components/PrimaryCarousel'
import { ourTeam } from '../assets/constants'
import { Helmet } from 'react-helmet-async'

export const OurTeam = () => {
  return (
    <>
      {/* <Helmet>
        <title>Our Team</title>
        <meta name="description" content="Our team consists of strong individuals that are ready to conquer and revolutionize game engine scene." />
        <link rel="canonical" href="/ourteam" />
      </Helmet>
      <MainSection backgroundUrl={OurTeamSection1}>
        <div className="our-team-hero-section-wrapper">
          <PrimaryHeader text={'people behind endency'}/>
          <p className="our-team-hero-section-text">Our team</p>
        </div>
      </MainSection>
      <MainSection backgroundColor={'#F5F5F5'}>
        <div className="our-team-main-section-wrapper">
          <PrimaryCarousel swipeable={true} infinite={true} autoPlay={true} arrows={false}>
            {ourTeam.map(member => (
              <OurTeamCard image={member.image} role={member.role} name={member.name} media={member.media} description={
                member.text
              }/>
            ))}
          </PrimaryCarousel>
        </div>
      </MainSection> */}
      In Progress
    </>
  )
}
