import React, { useState, useEffect } from 'react'
import { Pane, Button, toaster } from 'evergreen-ui'
import ErrorAlert from '../alerts/ErrorAlert'
import FieldComponent from '../fields/FieldComponent'
import Label from '../label/Label'
import api from '../../api'
import { useAppHooks } from '../../context'
import { ERROR_AUTH } from '../../reducers/authReducer'

const AuthConfirmForm = ({ handleClose }) => {
  const { useAuth, useToast } = useAppHooks()
  const [{user, errors}, dispatchAuth] = useAuth
  const [toastState, dispatchToast] = useToast

  const [code, setCode] = useState('')
  const [profileId, setProfileId] = useState('')
  const [confirm, setConfirm] = useState(false)

  const handleCode = e => setCode(e.target.value)

  const handleSubmit = async e => {
    e.preventDefault()
    if (!code) {
      dispatchAuth({ type: ERROR_AUTH, payload: {code: 'This field is required'} })
    }
    else {
      try {
        const {data} = await api.profile.verifyCode(code)
        if (data.profiles[0]) {
          toaster.notify(`Well done ${user.name}, your email is confirmed. Have fun in our store`)
          setConfirm(true)
          handleClose()
        }
        else {
          dispatchAuth({ type: ERROR_AUTH, payload: {verification_failed: 'Sorry this code is incorrect. Please try again'} })
        }
      } catch (e) {
        dispatchAuth({ type: ERROR_AUTH, payload: {verification_failed: e.message} })
      }
    }
  }

  useEffect(() => {
    const checkEmailConfirmedStatus = async () => {
      try {
        let {data} = await api.profile.getEmailConfirmStatusByUser(user._id)
        setProfileId(data.profiles[0]._id)
        setConfirm(data.profiles[0].emailConfirm)
      } catch (e) {
        console.log(e)
      }
    }

    // checkEmailConfirmedStatus()
  }, [confirm])

  return (
    <Pane display='block' is='form' onSubmit={handleSubmit}>
      <FieldComponent
        label={<Label name='Verification code *' />}
        description='Please enter the verification code we sent you in your mail box'
        name='code'
        placeholder='enter your verification code here'
        handleChange={handleCode}
        error={errors && errors.code}
      />
      { 
        errors && errors.verification_failed && 
        <ErrorAlert
          label='verification_failed'
          errors={errors}
          appearance='card'
          height={30}
        /> 
      }
      <Button appearance='primary'>Verify</Button>
    </Pane>
  )
}

export default AuthConfirmForm
