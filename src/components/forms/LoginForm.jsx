import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Pane, Card, Text, Button } from 'evergreen-ui'
import InputComponent from '../inputs/InputComponent'
import FieldComponent from '../fields/FieldComponent'
import Label from '../label/Label'

const LoginForm = () => {
  const [username, setUsername] = useState()
  const [email, setEmail] = useState()
  const [errors, setErrors] = useState(null)

  const handleName = e => setUsername(e.target.value)
  const handleEmail = e => setEmail(e.target.value)

  const handleSubmit = e => {
    e.preventDefault()
    setErrors(null)
    if (!email) {
      setErrors({ email: 'Email is required' })
    }
  }

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
            handleChange={handleEmail}
            error={errors && errors.email}
          />
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
