import React from 'react'
import { Pane, Avatar } from 'evergreen-ui'
import Label from '../label/Label'

const Logo = ({ name, size, avatar = null }) => {
  return (
    <Pane elevation={2} borderBottom>
      {/*<Avatar name={name} />*/}
      <Label size={size} name={name} />
    </Pane>
  )
}

export default Logo
