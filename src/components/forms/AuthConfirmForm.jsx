import React, { useState, useEffect } from 'react'
import { Pane, Button } from 'evergreen-ui'
import api from '../../api'
import { useAppHooks } from '../../context'
import FieldComponent from '../fields/FieldComponent'
import Label from '../label/Label'
import ErrorAlert from '../errors/ErrorAlert'

const AuthConfirmForm = ({ setVerification }) => {
  const { useAuth, useToast, history } = useAppHooks()
  const [{user, errors}, dispatchAuth] = useAuth

  const [code, setCode] = useState('')

  const handleCode = e => setCode(e.target.value)

  const handleSubmit = async e => {
    e.preventDefault()
    if (!code) {
      dispatchAuth({ type: ERROR_AUTH, payload: {verification: 'This field is required'} })
    }
    setVerification(false)
    // try {
    //   const res = await api.user.confirm(user._id)
    //   if (code === res.verification) {
    //     history.push('/profile')
    //   }
    //   else {
    //     dispatchAuth({ type: ERROR_AUTH, payload: {verification_failed: 'Sorry this code is incorrect. Please try again'} })
    //   }
    // } catch (e) {
    //   dispatchAuth({ type: ERROR_AUTH, payload: {verification_failed: e.message} })
    // }
  }

  return (
    <Pane display='block'>
      <Pane display='block' is='form' onSubmit={handleSubmit}>
        <FieldComponent
          label={<Label name='Verification code *' />}
          description='Please enter the verification code we sent you in your mail box'
          name='code'
          placeholder='enter your verification code here'
          handleChange={handleCode}
          error={errors && errors.verification}
        />
        <Button appearance='primary'>Verify</Button>
      </Pane>
      { errors && errors.verification_failed && <ErrorAlert label='verification_failed' errors={errors} /> }
    </Pane>
  )
}

export default AuthConfirmForm
