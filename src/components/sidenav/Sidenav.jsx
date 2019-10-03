import React from 'react'
import { Link } from 'react-router-dom'
import { Pane, Text, Button } from 'evergreen-ui'
import Logo from '../logo/Logo'
import SidenavHeader from '../header/SidenavHeader'
import UserCard from '../cards/UserCard'
import OfflineUserCard from '../cards/OfflineUserCard'
import TabMenu from '../tabs/TabMenu'
import Footer from '../footer/Footer'
import { useAppHooks } from '../../context'

const Sidenav = ({}) => {
  const {useAuth} = useAppHooks()
  const [{isConnected}, dispatchAuth] = useAuth

  return (
    <Pane elevation={2} width='25%' height='98vh' margin={0} padding={0} position='relative'>
      <aside>
        <SidenavHeader>
          <Logo name='Brand Store' size={700} />
        </SidenavHeader>
        {
          isConnected ?
          <UserCard /> :
          <OfflineUserCard />
        }
        <TabMenu />
        <Footer />
      </aside>
    </Pane>
  )
}

export default Sidenav
