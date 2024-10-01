import React from 'react'
import '../styles/Download.css'
import { MainSection } from '../components/MainSection'
import { PrimaryHeader } from '../components/PrimaryHeader'
import InstalationStep from '../components/InstalationStep'
import { PrimaryButton } from '../components/PrimaryButton'
import DownloadVideo from '../assets/DownloadVideo.mp4'
import DownloadSection1 from '../assets/DownloadSection1.png'
import { Helmet } from 'react-helmet-async'

const requirements = {
  minimal: ['Windows 7', 'Rtx 2080', 'Intel Core i5', '16 GB Ram', 'Big Cock'],
  optimal: ['Windows 10', 'Rtx 4070', 'Intel Core i9', '32 GB Ram', '16 inch bicep']
}

export const Download = () => {
  return (
    <>
      <Helmet>
        <title>Download</title>
        <meta name="description" content="Learn how to download our revolutionary game engine on your computer and start developing." />
        <link rel="canonical" href="/download" />
      </Helmet>
      <MainSection backgroundColor={'#303343'}>
        <div className="download-hero-section-container">
          <PrimaryHeader text={'Instalation Guide'}/>
          <InstalationStep step={'1'} title={'Download the launcher'} text={'If you don’t have a launcher already, download it using the ‘download’ button below. Otherwise skip this step.'} />
          <PrimaryButton handleClick={() => console.log('Pobieranie')} text={'DOWNLOAD'} />
        </div>
      </MainSection>
      <MainSection backgroundColor={'#373B4E'}>
        <div className="download-hero-section-container">
          <InstalationStep step={'2'} title={'Install and launch'} text={'Next, click on the .exe file and choose your settings. If you are not sure about your preferences, watch the video below.'} />
          <video height='340' width='624' controls>
            <source src={DownloadVideo} type="video/mp4"/>
            Your browser does not support the video tag.
          </video>
        </div>
      </MainSection>
      <MainSection backgroundUrl={DownloadSection1}>
        <div className="download-hero-section-container">
          <PrimaryHeader text={'SYSTEM REQUIREMENTS'}/>
          <div className="download-requirements-section">
            <div className="downloads-requirements-section-column">
              <h3 className="downloads-requirements-section-header">MINIMAL REQUIREMENTS</h3>
              <ul className="downloads-requirement-section-list">
                {requirements.minimal.map(requirement => (
                  <li className="downloads-requirements-section-item">{requirement}</li>
                ))}
              </ul>
            </div>
            <div className="downloads-requirements-section-column">
            <h3 className="downloads-requirements-section-header">OPTIMAL REQIREMENTS</h3>
              <ul className="downloads-requirement-section-list">
                {requirements.optimal.map(requirement => (
                  <li className="downloads-requirements-section-item">{requirement}</li>
                ))}
              </ul>
            </div>
          </div>
          <PrimaryButton handleClick={() => console.log('Pobieranie')} text={'DOWNLOAD'} />
        </div>
      </MainSection>
    </>
  )
}
