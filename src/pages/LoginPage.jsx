import React, { useEffect, useState } from 'react'
import {Redirect} from 'react-router-dom'
import { Pane } from 'evergreen-ui'
import LoginForm from '../components/forms/LoginForm'
import {useAppHooks} from '../context'
import {SET_LOADING, RESET_LOADING} from '../reducers/loadingReducer'

const LoginPage = () => {
  const {useAuth, useLoading} = useAppHooks()
  const [{isConnected}, dispatchAuth] = useAuth
  const [loadingState, dispatchLoading] = useLoading

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    dispatchLoading({ type: SET_LOADING })
    if (isConnected) {
      setLoading(isConnected)
    }
    dispatchLoading({ type: RESET_LOADING })
  }, [isConnected])

  return (
    !loading ?
    <Pane height='100vh' display='flex' alignItems='center' justifyContent='center'>
      <LoginForm />
    </Pane> :
    <Redirect to='/profile' />
  )
}

export default LoginPage
