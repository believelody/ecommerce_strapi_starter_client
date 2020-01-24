import React from 'react'
import { Pane, Alert } from 'evergreen-ui'

const InfoAlert = ({ msg, hasTrim, appearance }) => {
  return (
    <Pane marginBottom={8}>
      <Alert
        title={msg}
        intent='none'
        hasTrim={hasTrim}
        appearance={appearance}
      />
    </Pane>
  )
}

export default InfoAlert
