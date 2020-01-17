import React from 'react'
import { Pane } from 'evergreen-ui'
import RegisterForm from '../components/forms/RegisterForm'

const RegisterPage = () => {
  return (
    <Pane minHeight='100vh' display='flex' alignItems='center' justifyContent='center'>
      <RegisterForm />
    </Pane>
  )
}

export default RegisterPage
