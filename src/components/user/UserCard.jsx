import React from 'react'
import { Pane, Card, Avatar, Button } from 'evergreen-ui'
import Label from '../label/Label'
import { useAppHooks } from '../../context'
import { deleteCart } from '../../utils/cart.utils'
import { deleteToken } from '../../utils/token.utils'
import { Link } from 'react-router-dom'

const UserCard = () => {
  const {useAuth} = useAppHooks()
  const [{user}, dispatchAuth] = useAuth

  const logout = () => {
    dispatchAuth({})
    deleteCart()
    deleteToken()
  }

  return (
    <Pane elevation={2} marginTop={10}>
      <Link to='/profile'>
        <Card
          paddingY={10}
          height='100%'
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          cursor='pointer'
        >
          <Avatar isSolid name="Believe LODY" src={user ? '' : null} size={100} />
          <Label
            name="Believe LODY"
            paddingBottom={5}
          />
        </Card>
      </Link>
    </Pane>
  )
}

export default UserCard
