import React, { useState, useEffect } from 'react'
import { Pane, Button } from 'evergreen-ui'
import api from '../../api'
import { useAppHooks } from '../../context'
import FieldComponent from '../fields/FieldComponent'
import Label from '../label/Label'
import ErrorAlert from '../alerts/ErrorAlert'
import SuccessAlert from '../alerts/SuccessAlert'

const PasswordForgottenForm = ({ }) => {
  const { useAuth, useToast, history } = useAppHooks()
  const [{user, errors}, dispatchAuth] = useAuth

  const [email, setEmail] = useState('')
  const [success, setSuccess] = useState(false)

  const handleEmail = e => setEmail(e.target.value)

  const handleSubmit = async e => {
    e.preventDefault()
    if (!email) {
      dispatchAuth({ type: ERROR_AUTH, payload: {email: 'This field is required'} })
    }
    setSuccess(true)
    // try {
    //   const res = await api.user.changePassword(email)
    //
    // } catch (e) {
    //   dispatchAuth({ type: ERROR_AUTH, payload: {password_change_failed: e.message} })
    // }
  }

  return (
    <Pane display='block'>
      <Pane display='block' is='form' onSubmit={handleSubmit} marginBottom={10}>
        <FieldComponent
          label={<Label name='Email *' />}
          description='Please enter email you use to create your account'
          name='email'
          type='email'
          placeholder='enter your email here'
          handleChange={handleEmail}
          error={errors && errors.email}
        />
        <Button disabled={!!success} appearance='primary'>Change Password</Button>
      </Pane>
      { errors && errors.password_change_failed && <ErrorAlert label='password_change_failed' errors={errors} /> }
      { success && <SuccessAlert msg='We sent you a link to change your password. Please check your email' /> }
    </Pane>
  )
}

export default PasswordForgottenForm