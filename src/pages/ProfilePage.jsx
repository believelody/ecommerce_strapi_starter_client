import React from 'react'
import { Pane } from 'evergreen-ui'
import AuthConfirmForm from '../components/forms/AuthConfirmForm'

const ProfilePage = () => {
  return (
    <Pane
      minHeight='98vh'
    >
      <AuthConfirmForm />
    </Pane>
  )
}

export default ProfilePage
