import React from 'react'
import { Pane, Card, Avatar } from 'evergreen-ui'
import Label from '../label/Label'
import { useAppHooks } from '../../context'
import { deleteCart } from '../../utils/cart.utils'
import { deleteToken } from '../../utils/token.utils'
import { Link } from 'react-router-dom'
import { apiUrl } from '../../api'

const UserCard = () => {
  const {useAuth, useProfile} = useAppHooks()
  const [{user}, dispatchAuth] = useAuth
  const [{profile}, dispatchProfile] = useProfile

  return (
    <Pane elevation={2} marginTop={10}>
      <Link to='/profile'>
        {
          profile &&
          <Card
            paddingY={10}
            height='100%'
            display='flex'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            cursor='pointer'
          >
            <Avatar 
              isSolid 
              name={
                profile.firstname && profile.lastname ?
                `${profile.firstname} ${profile.lastname}` :
                profile.username
              } 
              src={profile ? `${apiUrl}${profile.image.url}` : null} 
              size={100}
            />
            <Label
              name={
                profile.firstname && profile.lastname ?
                `${profile.firstname} ${profile.lastname}`:
                profile.username
              }
              paddingBottom={5}
            />
          </Card>
        }
      </Link>
    </Pane>
  )
}

export default UserCard
