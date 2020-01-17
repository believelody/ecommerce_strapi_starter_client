import React from 'react'
import { Pane } from 'evergreen-ui'
import Label from '../label/Label'

const Logo = ({ name, size }) => {
  return (
    <Pane elevation={2} paddingY={16} borderBottom>
      <Label size={size} name={name} />
    </Pane>
  )
}

export default Logo
