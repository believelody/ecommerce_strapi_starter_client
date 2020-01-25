import React from 'react'
import {Redirect} from 'react-router-dom'
import { Pane } from 'evergreen-ui'
import LoginForm from '../components/forms/LoginForm'
import {useAppHooks} from '../context'

const LoginPage = () => {
  const { useAuth } = useAppHooks()
  const [{ isConnected }, dispatchAuth] = useAuth

  return (
    !isConnected ?
    <Pane minHeight='100vh' display='flex' alignItems='center' justifyContent='center'>
      <LoginForm />
    </Pane>
    :
    <Redirect to='/profile' />
  )
}

export default LoginPage
