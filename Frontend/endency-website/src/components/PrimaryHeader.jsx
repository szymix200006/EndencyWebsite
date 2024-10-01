import React from 'react'
import '../styles/PrimaryHeader.css'

export const PrimaryHeader = ({text}) => {
  return (
    <h1 className='primary-header'>
        {text}
    </h1>
  )
}
