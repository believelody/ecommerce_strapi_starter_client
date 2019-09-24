import React, { useEffect } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAppHooks } from '../../context'
import { getToken } from '../../utils/token.utils'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { useAuth } = useAppHooks
  const [authState, dispatchAuth] = useAuth

  useEffect(() => {
    if (getToken() && getUser()) {
      dispatchAuth({ type: SUCCESS_AUTH, payload: {user: getUser()} })
    }
  }, [getToken])

  return (
    getToken() ?
    <Route
      {...rest}
      render={
        props => <Component {...props} />
      }
    />
    :
    <Redirect to='/login' />
  )
}
