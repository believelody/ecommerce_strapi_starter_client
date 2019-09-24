import React from 'react'
import { Pane } from 'evergreen-ui'
import LoginForm from '../components/forms/LoginForm'

const LoginPage = () => {
  return (
    <Pane height='100%' display='flex' alignItems='end' justifyContent='center'>
      <LoginForm />
    </Pane>
  )
}

export default LoginPage
