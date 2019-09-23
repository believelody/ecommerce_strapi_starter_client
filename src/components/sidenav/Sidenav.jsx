import React from 'react'
import { Pane, Text } from 'evergreen-ui'
import Logo from '../logo/Logo'
import SidenavHeader from '../header/SidenavHeader'
import UserCard from '../cards/UserCard'
import Footer from '../footer/Footer'

const Sidenav = ({}) => {
  return (
    <Pane elevation={2} width='20%' height='100%' margin={0} padding={0} position='relative'>
      <aside>
        <SidenavHeader>
          <Logo name='Brand Store' size={700} />
        </SidenavHeader>
        <UserCard />
        <Footer />
      </aside>
    </Pane>
  )
}

export default Sidenav
