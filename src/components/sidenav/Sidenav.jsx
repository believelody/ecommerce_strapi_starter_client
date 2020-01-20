import React from 'react'
import { Pane } from 'evergreen-ui'
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
    <Pane
      elevation={2}
      width='25%'
      height='100vh'
      display='flex'
      flexDirection='column'
      overflow='auto'
      position='relative'
    >
      <aside
        style={{
          display: 'block',
          height: '100%',
          overflow: 'auto'
        }}
      >
        <SidenavHeader>
          <Logo name='Brand Store' size={600} />
        </SidenavHeader>
        {
          isConnected ?
          <UserCard /> :
          <OfflineUserCard />
        }
        <TabMenu />
      </aside>
      <Footer />
    </Pane>
  )
}

export default Sidenav
