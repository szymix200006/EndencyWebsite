import React from 'react'
import '../styles/OurTeamCard.css'
import { Link } from 'react-router-dom'

const OurTeamCard = ({image, role, name, description, media}) => {
  return (
    <div className='our-team-card-container'>
        <img src={image} alt="member-image" className='our-team-card-member-image' />
        <div className="our-team-card-right-column">
            <h1 className="our-team-card-role">{role}</h1>
            <h3 className="our-team-card-name">{name}</h3>
            <p className="our-team-card-description">{description}</p>
            <div className="our-team-card-media-row">
                {media.map(app => (
                    <Link to={app.destination} target='_blank'>
                        <img src={app.icon} alt="app-icon" className='our-team-card-media-icon'/>
                    </Link>
                ))}
            </div>
        </div>
    </div>
  )
}

export default OurTeamCard
