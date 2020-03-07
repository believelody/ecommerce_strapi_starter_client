import React from 'react'
import { Pane } from 'evergreen-ui'
import Label from '../label/Label'

const Logo = ({ name, size }) => {
  return (
    <Pane padding={8} flex='auto'>
      <Label link='/' size={size} name={name} />
    </Pane>
  )
}

export default Logo
