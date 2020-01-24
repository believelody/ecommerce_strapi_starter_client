import React from 'react'
import { Pane, Alert } from 'evergreen-ui'

const ErrorAlert = ({ label, errors, hasTrim, appearance }) => {
  return (
    <Pane marginBottom={8}>
      <Alert
        title={errors[label]}
        intent='danger'
        hasTrim={hasTrim}
        appearance={appearance}
      />
    </Pane>
  )
}

export default ErrorAlert
