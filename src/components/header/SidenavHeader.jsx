import React from 'react'
import { Link } from 'react-router-dom'
import { Pane } from 'evergreen-ui'
import { useAppHooks } from '../../context'

const SidenavHeader = ({children}) => {
  const { history } = useAppHooks()

  return (
    <Pane cursor='pointer'>
      <Link to='/'>{children}</Link>
    </Pane>
  )
}

export default SidenavHeader
