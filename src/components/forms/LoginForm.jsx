import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Pane, Card, Button, Heading, toaster } from 'evergreen-ui'
import api from '../../api'
import FieldComponent from '../fields/FieldComponent'
import Label from '../label/Label'
import ErrorAlert from '../alerts/ErrorAlert'
import { useAppHooks } from '../../context'
import { SUCCESS_AUTH, ERROR_AUTH, RESET_ERRORS } from '../../reducers/authReducer'
import { SET_LOADING, RESET_LOADING } from '../../reducers/loadingReducer'
import { setToken } from '../../utils/token.utils'
import { setUser } from '../../utils/user.utils'

const LoginForm = () => {
  const { useAuth, useLoading, useToast } = useAppHooks()
  const [{errors}, dispatchAuth] = useAuth
  const [{loading}, dispatchLoading] = useLoading

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmail = e => setEmail(e.target.value)
  const handlePassword = e => setPassword(e.target.value)

  const handleSubmit = async e => {
    e.preventDefault()
    dispatchAuth({ type: RESET_ERRORS })
    if (!email) {
      dispatchAuth({ type: ERROR_AUTH, payload: {email: 'Email is required'}})
    }
    if (!password) {
      dispatchAuth({ type: ERROR_AUTH, payload: {password: 'Password is required'}})
    }
    dispatchLoading({ type: SET_LOADING, payload: {msg: 'Please wait a while...'} })
    try {
      const res = await api.user.login(email, password)
      dispatchAuth({
          type: SUCCESS_AUTH,
          payload: {
              user: { _id: res.user._id, name: res.user.username, email: res.user.email }
          }
      })
      setToken(res.jwt)
      setUser({ _id: res.user._id, name: res.user.username, email: res.user.email })
      toaster.notify(`Welcome ${res.user.username}`)
      setEmail('')
      setPassword('')
      // history.push('/profile')
    } catch (e) {
      dispatchAuth({ type: ERROR_AUTH, payload: {authFailed: e.message} })
    }
    dispatchLoading({ type: RESET_LOADING })
  }

  useEffect(() => {
    if (errors) {
      dispatchAuth({ type: RESET_ERRORS })
    }
  }, [])

  return (
    <Card
      display='flex'
      alignItems='center'
      justifyContent='center'
      flexDirection='column'
      elevation={2}
      width='60%'
    >
      <Pane borderBottom width='100%' paddingY={8} textAlign='center'>
        <Heading size={700}>Connect to your account</Heading>
      </Pane>
      <Pane textAlign='center' marginY={20} is='form' onSubmit={handleSubmit}>
        <FieldComponent
          label={<Label name='Email *' />}
          name='email'
          type='email'
          placeholder='ex: username@mail.com'
          value={email}
          handleChange={handleEmail}
          error={errors && errors.email}
        />
        <FieldComponent
          label={<Label name='Password *' />}
          name='password'
          type='password'
          placeholder='enter your password here'
          value={password}
          hint='It must contain at least 6 characters, 1 numerical'
          handleChange={handlePassword}
          error={errors && errors.password}
        />
        {
          errors && errors.authFailed &&
          <ErrorAlert label='authFailed' errors={errors} />
        }
        <Button appearance='primary'>Login</Button>
      </Pane>
      <NavLink to='/register'>
        <Button appearance='minimal' intent='success'>No account? Register here!</Button>
      </NavLink>
      <NavLink to='/forgot-password'>
        <Button appearance='minimal' intent='warning'>Password forgotten? Click here!</Button>
      </NavLink>
    </Card>
  )
}

export default LoginForm
