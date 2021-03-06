import React, { useState } from 'react'
import { Pane, Button, toaster, Paragraph } from 'evergreen-ui'
import ErrorAlert from '../alerts/ErrorAlert'
import FieldComponent from '../fields/FieldComponent'
import Label from '../label/Label'
import api from '../../api'
import { useAppHooks } from '../../context'
import { ERROR_AUTH } from '../../reducers/authReducer'

const AuthConfirmForm = ({ handleClose }) => {
  const { useAuth } = useAppHooks()
  const [{user, errors}, dispatchAuth] = useAuth

  const [code, setCode] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleCode = e => setCode(e.target.value)

  const handleSubmit = async e => {
    e.preventDefault()
    if (!code) {
      dispatchAuth({ type: ERROR_AUTH, payload: {code: 'This field is required'} })
    }
    else {
      setIsSubmitted(true)
      try {
        const {data} = await api.profile.verifyCode(code)
        if (data.profiles[0]) {
          const res = await api.profile.confirmEmail(data.profiles[0]._id)
          toaster.success(
            `Email Verification Success`,
            {
              description: `Well done ${user.name}, your email has been confirmed. Have fun in our store`
            }
          )
          handleClose()
        }
        else {
          dispatchAuth({ type: ERROR_AUTH, payload: {verification_failed: 'Sorry this code is incorrect. Please try again'} })
          setIsSubmitted(false)
        }
      } catch (e) {
        dispatchAuth({ type: ERROR_AUTH, payload: {verification_failed: e.message} })
        setIsSubmitted(false)
      }
    }
  }

  return (
    !isSubmitted ?
    <Pane display='block' is='form' onSubmit={handleSubmit}>
      <FieldComponent
        label={<Label name='Verification code *' />}
        description='Please enter the verification code we sent you in your mail box'
        name='code'
        placeholder='enter your verification code here'
        handleChange={handleCode}
        error={errors && errors.code}
        value={code}
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
    :
    <Pane>
      <Paragraph>
        Please wait, we are verifying your email...⏱️
      </Paragraph>
    </Pane>
  )
}

export default AuthConfirmForm
