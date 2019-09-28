import React from 'react'
import { Link } from 'react-router-dom'
import { Pane, Text, Button } from 'evergreen-ui'

const OfflineUserCard = () => (
  <Pane width='100%' display='flex' justifyContent='space-around' marginTop={10}>
    <Button width='35%' appearance='minimal'>
      <Link to='/login'><Text textAlign='center'>Login</Text></Link>
    </Button>
    <Button width='35%' appearance='minimal' intent='success'>
      <Link to='/register'><Text textAlign='center'>Register</Text></Link>
    </Button>
  </Pane>
)

export default OfflineUserCard
