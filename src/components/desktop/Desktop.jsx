import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Pane, Text } from 'evergreen-ui'
import Sidenav from '../sidenav/Sidenav'
import Main from '../main/Main'
import Loading from '../loading/Loading'

const Desktop = () => {
  return (
    <BrowserRouter>
      <Pane
        display='flex'
        justifyContent="center"
        alignItems="center"
        padding={0}
        margin={0}
        height='98vh'
      >
        <Sidenav />
        <Main />
        <Loading />
      </Pane>
    </BrowserRouter>
  )
}

export default Desktop
