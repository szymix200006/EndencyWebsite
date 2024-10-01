import React from 'react'
import '../styles/InstalationStep.css'

const InstalationStep = ({step, title, text}) => {
  return (
    <div className='instalation-step-container'>
      <h1 className="instalation-step-number">{step}</h1>
      <h3 className="instalation-step-title">{title}</h3>
      <p className="instalation-step-text">{text}</p>
    </div>
  )
}

export default InstalationStep
