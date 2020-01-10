import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Pane, Text } from 'evergreen-ui'
import Sidenav from '../sidenav/Sidenav'
import Main from '../main/Main'
import Loading from '../loading/Loading'
import FilterButton from '../filter/FilterButton'
import SideSheetNav from '../side-sheet/SideSheetNav'

const Desktop = () => {
  return (
    <BrowserRouter>
      <Pane
        display='flex'
        justifyContent="center"
        alignItems="start"
        padding={0}
        margin={0}
      >
        <Sidenav />
        <Main />
        <Loading />
        <FilterButton />
        <SideSheetNav />
      </Pane>
    </BrowserRouter>
  )
}

export default Desktop
