import React from 'react'
import { Pane } from 'evergreen-ui'
import PasswordForgottenForm from '../components/forms/PasswordForgottenForm'

const PasswordForgottenPage = () => {
  return (
    <Pane minHeight='100vh' display='flex' justifyContent='center'>
      <PasswordForgottenForm />
    </Pane>
  )
}

export default PasswordForgottenPage
