import React, { useEffect, useState } from 'react'
import { Pane, Code, Text } from 'evergreen-ui'
import AuthConfirmForm from '../components/forms/AuthConfirmForm'
import isMobile from '../utils/isMobile.utils'
import { OPEN_DIALOG } from '../reducers/dialogReducer'
import { useAppHooks } from '../context'
import Verify from '../components/verify/Verify'

const ProfilePage = () => {
  const { useDialog } = useAppHooks()
  const [dialogState, dispatchDialog] = useDialog

  useEffect(() => {
    dispatchDialog({
      type: OPEN_DIALOG,
      payload: {
        children: Verify
      }
    })
  }, [])

  return (
    <Pane
      height='100vh'
    >
    </Pane>
  )
}

export default ProfilePage
