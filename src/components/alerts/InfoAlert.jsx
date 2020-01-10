import React from 'react'
import { Pane, Alert } from 'evergreen-ui'

const InfoAlert = ({ msg }) => {
  return (
    <Pane marginBottom={10}>
      <Alert title={msg} intent='none' />
    </Pane>
  )
}

export default InfoAlert
