import React from 'react'
import { Pane, Alert } from 'evergreen-ui'

const SuccessAlert = ({ msg, hasTrim, appearance }) => {
  return (
    <Pane marginBottom={10}>
      <Alert
        title={msg}
        intent='success'
        hasTrim={hasTrim}
        appearance={appearance}
      />
    </Pane>
  )
}

export default SuccessAlert
