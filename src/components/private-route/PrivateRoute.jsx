import React, { useEffect } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAppHooks } from '../../context'
import { SUCCESS_AUTH } from '../../reducers/authReducer'
import { getToken } from '../../utils/token.utils'
import { getUser } from '../../utils/user.utils'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { useAuth } = useAppHooks()
  const [{isConnected}, dispatchAuth] = useAuth

  useEffect(() => {
    if (getToken() && getUser()) {
      dispatchAuth({ type: SUCCESS_AUTH, payload: {user: getUser()} })
    }
  }, [getToken])

  return (
    isConnected ?
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

export default PrivateRoute
