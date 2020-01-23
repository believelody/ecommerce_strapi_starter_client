import React from 'react'
import { NavLink } from 'react-router-dom'
import { Pane, Text, Button } from 'evergreen-ui'

const OfflineUserCard = () => (
  <Pane width='100%' display='flex' marginTop={10}>
    <NavLink to='/login' style={{ width: '100%' }}>
      <Button width='100%' appearance='minimal' display='flex' justifyContent='center'>
        <Text>Login</Text>
      </Button>
    </NavLink>
    <NavLink to='/register' style={{ width: '100%' }}>
      <Button width='100%' appearance='minimal' intent='success' display='flex' justifyContent='center'>
        <Text>Register</Text>
      </Button>
    </NavLink>
  </Pane>
)

export default OfflineUserCard
