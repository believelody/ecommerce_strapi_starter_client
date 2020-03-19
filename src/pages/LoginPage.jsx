import React from 'react'
import {Redirect, NavLink} from 'react-router-dom'
import { Pane, Button } from 'evergreen-ui'
import LoginForm from '../components/forms/LoginForm'
import {useAppHooks} from '../context'

const bg = `linear-gradient(92deg, rgba(168, 168, 168, 0.04) 0%, rgba(168, 168, 168, 0.04) 25%,rgba(92, 92, 92, 0.04) 25%, rgba(92, 92, 92, 0.04) 50%,rgba(25, 25, 25, 0.04) 50%, rgba(25, 25, 25, 0.04) 75%,rgba(50, 50, 50, 0.04) 75%, rgba(50, 50, 50, 0.04) 100%),linear-gradient(255deg, rgba(139, 139, 139, 0.04) 0%, rgba(139, 139, 139, 0.04) 25%,rgba(204, 204, 204, 0.04) 25%, rgba(204, 204, 204, 0.04) 50%,rgba(211, 211, 211, 0.04) 50%, rgba(211, 211, 211, 0.04) 75%,rgba(65, 65, 65, 0.04) 75%, rgba(65, 65, 65, 0.04) 100%),linear-gradient(331deg, rgba(21, 21, 21, 0.04) 0%, rgba(21, 21, 21, 0.04) 25%,rgba(63, 63, 63, 0.04) 25%, rgba(63, 63, 63, 0.04) 50%,rgba(243, 243, 243, 0.04) 50%, rgba(243, 243, 243, 0.04) 75%,rgba(191, 191, 191, 0.04) 75%, rgba(191, 191, 191, 0.04) 100%),linear-gradient(199deg, rgba(165, 165, 165, 0.04) 0%, rgba(165, 165, 165, 0.04) 25%,rgba(236, 236, 236, 0.04) 25%, rgba(236, 236, 236, 0.04) 50%,rgba(102, 102, 102, 0.04) 50%, rgba(102, 102, 102, 0.04) 75%,rgba(159, 159, 159, 0.04) 75%, rgba(159, 159, 159, 0.04) 100%),linear-gradient(302deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.04) 25%,rgba(7, 7, 7, 0.04) 25%, rgba(7, 7, 7, 0.04) 50%,rgba(249, 249, 249, 0.04) 50%, rgba(249, 249, 249, 0.04) 75%,rgba(199, 199, 199, 0.04) 75%, rgba(199, 199, 199, 0.04) 100%),linear-gradient(90deg, rgb(41, 207, 59),rgb(94, 168, 92))`

const LoginPage = () => {
  const { useAuth } = useAppHooks()
  const [{ isConnected }, dispatchAuth] = useAuth

  return (
    !isConnected ?
      <Pane 
        minHeight='100vh' 
        display='flex' 
        alignItems='center' 
        justifyContent='center' 
        flexDirection='column'
        background={bg}
      >
      <LoginForm />
    </Pane>
    :
    <Redirect to='/profile' />
  )
}

export default LoginPage
