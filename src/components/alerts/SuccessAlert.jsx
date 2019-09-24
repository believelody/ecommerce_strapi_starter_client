import React from 'react'
import { Pane, Alert } from 'evergreen-ui'

const SuccessAlert = ({ msg }) => {
  return (
    <Pane marginBottom={10}>
      <Alert title={msg} intent='success' />
    </Pane>
  )
}

export default SuccessAlert
