import React from 'react'
import { Pane } from 'evergreen-ui'
import RegisterForm from '../components/forms/RegisterForm'

const RegisterPage = () => {
  return (
    <Pane height='100%' display='flex' justifyContent='center'>
      <RegisterForm />
    </Pane>
  )
}

export default RegisterPage
