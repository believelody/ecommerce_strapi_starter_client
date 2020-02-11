import React from 'react'
import {Redirect, NavLink} from 'react-router-dom'
import { Pane, Button } from 'evergreen-ui'
import LoginForm from '../components/forms/LoginForm'
import {useAppHooks} from '../context'

const LoginPage = () => {
  const { useAuth } = useAppHooks()
  const [{ isConnected }, dispatchAuth] = useAuth

  return (
    !isConnected ?
    <Pane minHeight='100vh' display='flex' alignItems='center' justifyContent='center' flexDirection='column'>
      <LoginForm />
      <NavLink to='/register'>
        <Button appearance='minimal' intent='success'>No account? Register here!</Button>
      </NavLink>
      <NavLink to='/forgot-password'>
        <Button appearance='minimal' intent='warning'>Password forgotten? Click here!</Button>
      </NavLink>
    </Pane>
    :
    <Redirect to='/profile' />
  )
}

export default LoginPage
