import React from 'react'
import { Pane } from 'evergreen-ui'

const SidenavHeader = ({children}) => {
  return (
    <Pane elevation={2} display='flex' alignItems='center'>
      {children}
    </Pane>
  )
}

export default SidenavHeader
