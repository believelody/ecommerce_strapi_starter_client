import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Pane } from 'evergreen-ui'
import Sidenav from '../sidenav/Sidenav'
import Main from '../main/Main'
import Loading from '../loading/Loading'
import SideSheetNav from '../side-sheet/SideSheetNav'
import Dialog from '../dialog/Dialog'

const Desktop = () => {
  return (
    <BrowserRouter>
      <Pane
        display="flex"
        justifyContent="center"
        alignItems="start"
        height="100vh"
      >
        <Sidenav />
        <Main />
        <Loading />
        <SideSheetNav />
        <Dialog />
      </Pane>
    </BrowserRouter>
  )
}

export default Desktop
