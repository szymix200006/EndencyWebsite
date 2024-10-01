import React from 'react'
import '../styles/Form.css'
import Input from './Input'
import { useForm } from "react-hook-form"
import {useMutation} from '@tanstack/react-query'

const Form = ({submitButtonText, fields, headerText, mutationFn, onSuccess, onError}) => {
  const {register, handleSubmit, formState: {errors}} = useForm();
  const mutation = useMutation({
    mutationFn: mutationFn,
    onError: onError,
    onSuccess: onSuccess,
  })
  const onSubmit = (data) => mutation.mutate({email: data.email});

  return (
    <form className='form-container' onSubmit={handleSubmit(onSubmit)}>
      <h1 className="form-header">{headerText}</h1>
      {fields.map(field => <Input name={field.name} type={field.type} label={field.label} register={register} validation={field.validation}/>)}
      <button className='form-submit-button' disabled={mutation.isPending}>{submitButtonText}</button>
      <div className="errors-container">
        {Object.keys(errors).map(error => <span className="error-text">{errors[error].message}</span>)}
      </div>
    </form>
  )
}

export default Form
