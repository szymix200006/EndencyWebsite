import React from 'react'
import '../styles/Input.css'

const Input = ({name, type, label, register, validation}) => {
  return (
    type == 'text' || type == 'number' ?
    <div className='input-container'>
      <label htmlFor={name} className='input-label'>{label}</label>
      <input type={type} name={name} className='input-field' {...register(name, validation)}/>
    </div> : 
    <div className='input-container-small'>
        <input type={type} name={name} className='input-field-small' {...register(name, validation)}/>
        <label htmlFor={name} className='input-label-small'>{label}</label>
    </div> 
  )
}

export default Input
