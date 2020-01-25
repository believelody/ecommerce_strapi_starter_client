import React from 'react'
import { Pane } from 'evergreen-ui'
import PasswordForgottenForm from '../components/forms/PasswordForgottenForm'
import { Redirect } from 'react-router-dom'
import { useAppHooks } from '../context'

const PasswordForgottenPage = () => {
  const { useAuth } = useAppHooks()
  const [{ isConnected }, dispatchAuth] = useAuth

  return (
    !isConnected ?
    <Pane height='100vh' display='flex' alignItems='center' justifyContent='center'>
      <PasswordForgottenForm />
    </Pane> :
    <Redirect to='/profile' />
  )
}

export default PasswordForgottenPage
