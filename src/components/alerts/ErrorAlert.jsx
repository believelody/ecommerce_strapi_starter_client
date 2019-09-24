import React from 'react'
import { Pane, Alert } from 'evergreen-ui'

const ErrorAlert = ({ label, errors }) => {
  return (
    <Pane marginBottom={10}>
      <Alert title={errors[label]} intent='danger' />
    </Pane>
  )
}

export default ErrorAlert
