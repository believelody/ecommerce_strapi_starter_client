import React from 'react'
import { Pane, Card, Avatar, Text, Strong } from 'evergreen-ui'
import { useAppHooks } from '../../context'
import { Link } from 'react-router-dom'
import { apiUrl } from '../../api'

const IconBadge = ({badge}) => (
  <>
    {badge == 'bronze' && <Text marginX={8}>🥉</Text>}
    {badge == 'silver' && <Text marginX={8}>🥈</Text>}
    {badge == 'gold' && <Text marginX={8}>🏆</Text>}
    {badge == 'diamond' && <Text marginX={8}>💎</Text>}
  </>
)

const UserCard = () => {
  const {useProfile} = useAppHooks()
  const [{ profile }, dispatchProfile] = useProfile

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
              src={profile && profile.image ? `${apiUrl}${profile.image.url}` : null} 
              size={100}
            />
            <Pane textAlign='center'>
              <Strong>
                {
                  profile.firstname && profile.lastname ?
                  `${profile.firstname} ${profile.lastname}` :
                  profile.username
                }
              </Strong>
              <IconBadge badge={profile.badge.toString()} />
            </Pane>
          </Card>
        }
      </Link>
    </Pane>
  )
}

export default UserCard
