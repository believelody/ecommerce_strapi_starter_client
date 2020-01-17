import React from 'react'
import { Link } from 'react-router-dom'
import { Pane } from 'evergreen-ui'

const SidenavHeader = ({children}) => {
  return (
    <Pane cursor='pointer'>
      <Link to='/'>{children}</Link>
    </Pane>
  )
}

export default SidenavHeader
