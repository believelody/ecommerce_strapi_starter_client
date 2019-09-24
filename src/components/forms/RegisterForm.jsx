import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Pane, Card, Text, Button, Alert } from 'evergreen-ui'
import InputComponent from '../inputs/InputComponent'
import FieldComponent from '../fields/FieldComponent'
import Label from '../label/Label'
import ErrorAlert from '../alerts/ErrorAlert'
import AuthConfirm from '../auth-confirm/AuthConfirm'
import { useAppHooks } from '../../context'
import { SUCCESS_AUTH, ERROR_AUTH, RESET_ERROR } from '../../reducers/authReducer'
import { SET_LOADING, RESET_LOADING } from '../../reducers/loadingReducer'
import { setToken } from '../../utils/token.utils'
import { setUser } from '../../utils/user.utils'

const RegisterForm = () => {
  const { useAuth, useLoading, useToast } = useAppHooks()
  const [{errors}, dispatchAuth] = useAuth
  const [{loading}, dispatchLoading] = useLoading
  const [toastState, dispatchToast] = useToast

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [confirmEmail, setConfirmEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [verification, setVerification] = useState(false)

  const handleUsername = e => setUsername(e.target.value)
  const handleEmail = e => setEmail(e.target.value)
  const handleConfirmEmail = e => setConfirmEmail(e.target.value)
  const handlePassword = e => setPassword(e.target.value)
  const handleConfirmPassword = e => setConfirmPassword(e.target.value)

  const handleSubmit = async e => {
    e.preventDefault()
    dispatchAuth({ type: RESET_ERROR })
    if (!username) {
      dispatchAuth({ type: ERROR_AUTH, payload: {username: 'Username is required'}})
    }
    if (!email) {
      dispatchAuth({ type: ERROR_AUTH, payload: {email: 'Email is required'}})
    }
    if (!confirmEmail) {
      dispatchAuth({ type: ERROR_AUTH, payload: {confirmEmail: 'This field is required'}})
    }
    if (!password) {
      dispatchAuth({ type: ERROR_AUTH, payload: {password: 'Password is required'}})
    }
    if (!confirmPassword) {
      dispatchAuth({ type: ERROR_AUTH, payload: {confirmPassword: 'This field is required'}})
    }
    if (email !== confirmEmail) {
      dispatchAuth({ type: ERROR_AUTH, payload: {noMatch: 'Email and email confirm must be same'} })
    }
    if (password !== confirmPassword) {
      dispatchAuth({ type: ERROR_AUTH, payload: {noMatch: 'Password and password confirm must be same'} })
    }
    setVerification(true)
    // dispatchLoading({ type: SET_LOADING })
    // try {
    //   const res = await api.user.register(email, password)
    //   dispatchAuth({
    //       type: SUCCESS_AUTH,
    //       payload: {
    //           user: { _id: res.user._id, name: res.user.username, email: res.user.email }
    //       }
    //   })
    //   setToken(res.jwt)
    //   setUser({ _id: res.user._id, name: res.user.username, email: res.user.email })
    //   dispatchToast({ type: SET_TOAST, payload: { msg: `Welcome ${res.user.username}` } })
    //   setEmail('')
    //   setPassword('')
    //   setVerification(true)
    // } catch (e) {
    //   dispatchAuth({ type: ERROR_AUTH, payload: {authFailed: e.message} })
    // }
    // dispatchLoading({ type: RESET_LOADING })
  }

  useEffect(() => {}, [errors])

  return (
    <Card
      display='flex'
      alignItems='center'
      justifyContent='center'
      flexDirection='column'
      elevation={2}
      width='60%'
    >
      <Pane borderBottom width='100%' paddingY={5} textAlign='center'>
        <Text size={500}>Create a new account</Text>
      </Pane>
      <Pane textAlign='center' marginY={20}>
        {
          !verification &&
          <form onSubmit={handleSubmit}>
            <FieldComponent
              label={<Label name='Username *' />}
              name='username'
              placeholder='enter a username here'
              handleChange={handleEmail}
              error={errors && errors.email}
            />
            <FieldComponent
              label={<Label name='Email *' />}
              name='email'
              type='email'
              placeholder='ex: username@mail.com'
              handleChange={handleEmail}
              error={errors && errors.email}
            />
            <FieldComponent
              label={<Label name='Email Confirm *' />}
              name='confirmEmail'
              type='email'
              placeholder='must be same than email field'
              handleChange={handleConfirmEmail}
              error={errors && errors.confirmEmail}
            />
            <FieldComponent
              label={<Label name='Password *' />}
              name='password'
              type='password'
              placeholder='enter your password here'
              hint='It must contain at least 6 characters, 1 numerical'
              handleChange={handlePassword}
              error={errors && errors.password}
            />
            <FieldComponent
              label={<Label name='Password Confirm *' />}
              name='confirmPassword'
              type='password'
              placeholder='must be same than password field'
              handleChange={handleConfirmPassword}
              error={errors && errors.confirmPassword}
            />
            {
              errors && errors.authFailed &&
              <ErrorAlert label='authFailed' errors={errors} />
            }
            {
              errors && errors.noMatch &&
              <ErrorAlert label='noMatch' errors={errors} />
            }
            <Button appearance='primary' intent='success'>Register</Button>
          </form>
        }
        {
          verification &&
          <AuthConfirm setVerification={setVerification} />
        }
      </Pane>
      <NavLink to='/login'>
        <Button appearance='minimal'>Already an account? Connect here!</Button>
      </NavLink>
    </Card>
  )
}

export default RegisterForm
