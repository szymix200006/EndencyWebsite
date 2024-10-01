import React from 'react'
import { MainSection } from '../components/MainSection'
import SignUpBackground from '../assets/SignUpBackground.mp4'
import '../styles/Login.css'
import Form from '../components/Form'
import { toast } from 'sonner'
import { Helmet } from 'react-helmet-async'

const formFields = [
  {
    name: 'email',
    label: 'email',
    type: 'text',
    validation: {required: 'Email is required', pattern: {value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, message: 'Invalid email'}}
  },
  {
    name: 'tos',
    label: 'i agree to the terms of service',
    type: 'checkbox',
    validation: {required: 'You must accept Terms of Service'}
  }
]

const mutationFn = async (user) => {
  const response = await fetch('http://localhost:8080/user/email', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
  console.log(response)
  if(response.ok) return response.json();
  else throw new Error();
}

const onSuccess = () => toast.success("Email saved in the database!");
const onError = () => toast.error("Failed to save email in the database!");

export const Login = () => {
  return (
    <>
      <Helmet>
        <title>Login</title>
        <meta name="description" content="Log in with your email to recive the latest news about Muniffic game engine." />
        <link rel="canonical" href="/login" />
        <meta name="robots" content='noindex'/>
      </Helmet>
      <MainSection backgroundUrl={SignUpBackground}>
        <div className="login-hero-section-wrapper">
          <Form submitButtonText={'Sign In'} headerText={'SIGN UP FOR OUR NEWSLETTER'} fields={formFields} mutationFn={mutationFn} onSuccess={onSuccess} onError={onError}/>
        </div>
      </MainSection>
    </>
  )
}
