import React from 'react'
import { Pane } from 'evergreen-ui'
import RegisterForm from '../components/forms/RegisterForm'
import { useAppHooks } from '../context'
import { Redirect } from 'react-router-dom'

const RegisterPage = () => {
  const { useAuth } = useAppHooks()
  const [{ isConnected }, dispatchAuth] = useAuth

  return (
    !isConnected ?
    <Pane minHeight='100vh' display='flex' alignItems='center' justifyContent='center'>
      <RegisterForm />
    </Pane> :
    <Redirect to='/profile' />
  )
}

export default RegisterPage
