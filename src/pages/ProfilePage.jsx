import React from 'react'
import { Pane } from 'evergreen-ui'
import AuthConfirmForm from '../components/forms/AuthConfirmForm'
import isMobile from '../utils/isMobile.utils'

const ProfilePage = () => {
  return (
    <Pane
      minHeight='98vh'
    >
      <Pane border paddingY={5} marginX={isMobile () ? 0 : '20%'} width='auto'>
        <AuthConfirmForm />
      </Pane>
    </Pane>
  )
}

export default ProfilePage
