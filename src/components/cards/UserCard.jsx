import React from 'react'
import { Pane, Card, Avatar, Button } from 'evergreen-ui'
import Label from '../label/Label'
import { useAppHooks } from '../../context'
import { deleteCart } from '../../utils/cart.utils'
import { deleteToken } from '../../utils/token.utils'

const UserCard = () => {
  const {useAuth, history} = useAppHooks()
  const [{user, isConnected}, dispatchAuth] = useAuth

  const logout = () => {
    dispatchAuth({})
    deleteCart()
    deleteToken()
  }

  return (
    <Pane elevation={2} marginTop={10}>
      <Card
        paddingY={10}
        height='100%'
        display='flex'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        cursor='pointer'
      >
        <Avatar isSolid name='User Name' src={user ? '' : null} size={100} />
        <Label
          handleClick={() => history.push('/profile')}
          name='User Name'
          borderBottom
          paddingBottom={5}
        />
        <Pane paddingTop={10}>
          <Button intent='warning' onClick={logout}>Logout</Button>
        </Pane>
      </Card>
    </Pane>
  )
}

export default UserCard