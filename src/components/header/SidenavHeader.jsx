import React from 'react'
import { Pane } from 'evergreen-ui'
import { useAppHooks } from '../../context'

const SidenavHeader = ({children}) => {
  const { history } = useAppHooks()

  return (
    <Pane cursor='pointer' onClick={e => history.replace('/')}>
      {children}
    </Pane>
  )
}

export default SidenavHeader
