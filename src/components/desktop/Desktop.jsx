import React from 'react'
import { Pane, Text } from 'evergreen-ui'
import Sidenav from '../sidenav/Sidenav'
import Main from '../main/Main'

const Desktop = () => {
  return (
    <Pane
      display='flex'
      justifyContent="center"
      alignItems="center"
      padding={0}
      margin={0}
      height='97vh'
    >
      <Sidenav />
      <Main />
    </Pane>
  )
}

export default Desktop
