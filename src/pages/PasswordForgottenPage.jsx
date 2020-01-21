import React from 'react'
import { Pane } from 'evergreen-ui'
import PasswordForgottenForm from '../components/forms/PasswordForgottenForm'

const PasswordForgottenPage = () => {
  return (
    <Pane height='100vh' display='flex' alignItems='center' justifyContent='center'>
      <PasswordForgottenForm />
    </Pane>
  )
}

export default PasswordForgottenPage
