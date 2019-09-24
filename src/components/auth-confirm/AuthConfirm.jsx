import React from 'react'
import { Pane } from 'evergreen-ui'
import AuthConfirmForm from '../forms/AuthConfirmForm'

const AuthConfirm = ({ setVerification }) => {
  return (
    <Pane height='100%' display='flex' justifyContent='center'>
      <AuthConfirmForm setVerification={setVerification} />
    </Pane>
  )
}

export default AuthConfirm
