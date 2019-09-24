import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Pane, Card, Text, Button, Alert } from 'evergreen-ui'
import InputComponent from '../inputs/InputComponent'
import FieldComponent from '../fields/FieldComponent'
import Label from '../label/Label'
import { useAppHooks } from '../../context'
import { SUCCESS_AUTH, ERROR_AUTH, RESET_ERROR } from '../../reducers/authReducer'

const LoginForm = () => {
  const { useAuth } = useAppHooks()
  const [{errors}, dispatchAuth] = useAuth

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  // const [errors, setErrors] = useState(null)

  const handleEmail = e => setEmail(e.target.value)
  const handlePassword = e => setPassword(e.target.value)

  const handleSubmit = e => {
    e.preventDefault()
    dispatchAuth({ type: RESET_ERROR })
    if (!email) {
      dispatchAuth({ type: ERROR_AUTH, payload: {mail: 'Email is required'}})
    }
    if (!password) {
      // dispatchAuth({ type: ERROR_AUTH, payload: {password: 'Password is required'}})
      dispatchAuth({ type: ERROR_AUTH, payload: {authFailed: 'Incorrect password'}})
    }
    try {

    } catch (e) {
      dispatchAuth({ type: ERROR_AUTH, payload: {authFailed: e.message}})
    }
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
      <Text size={500}>Connect to your account</Text>
      <Pane textAlign='center' marginY={20}>
        <form onSubmit={handleSubmit}>
          <FieldComponent
            label={<Label name='Email *' />}
            name='email'
            type='email'
            placeholder='ex: username@mail.com'
            handleChange={handleEmail}
            error={errors && errors.email}
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
          {
            errors && errors.authFailed &&
            <Pane marginBottom={10}>
              <Alert title={errors.authFailed} intent='danger' />
            </Pane>
          }
          <Button appearance='primary'>Login</Button>
        </form>
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
