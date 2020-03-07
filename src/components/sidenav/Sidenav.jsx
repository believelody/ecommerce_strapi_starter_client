import React from 'react'
import { Pane } from 'evergreen-ui'
import Logo from '../logo/Logo'
import SidenavHeader from '../header/SidenavHeader'
import UserCard from '../user/UserCard'
import OfflineUserCard from '../user/OfflineUserCard'
import TabMenu from '../tabs/TabMenu'
import Footer from '../footer/Footer'
import { useAppHooks } from '../../context'
import LanguageMenu from '../menu/LanguageMenu'

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
          <LanguageMenu />
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
