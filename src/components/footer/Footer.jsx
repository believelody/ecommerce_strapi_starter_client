import React from 'react'
import { Link } from 'react-router-dom'
import { Pane, Text, IconButton, Popover, Menu, Position, Image } from 'evergreen-ui'
import styled from 'styled-components'
import Newsletter from '../newsletter/Newsletter'
import { useAppHooks } from '../../context'

const ListStyle = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  justify-content: space-around;

  &:nth-child(1) {
    border-left: none;
  }
`

const ItemStyle = styled.li`
  margin: 0;
  padding: 4px 16px;
  border-left: 1px solid rgba(0, 0, 0, 0.15);
  text-align: center;
`

const Footer = ({}) => {
  const { useProfile } = useAppHooks()
  const [{profile}, dispatchProfile] = useProfile
  

  return (
    <Pane width='100%' maxHeight={110} background='tint2' bottom={0}>
      {(!profile || (profile && !profile.isSubscribed)) && <Newsletter />}
      <Pane textAlign='center'>
        <Text >©️ Copyright 2020 - Brand Store</Text>
        <Popover
          position={Position.TOP_LEFT}
          content={
            ({close}) => (
              <Menu>
                <Menu.Group title='useful links'>
                  <Menu.Item is={Link} to='/faq' onSelect={close}>
                    <Text size={400}>FAQ</Text>
                  </Menu.Item>
                  <Menu.Item is={Link} to='/ugc' onSelect={close}>
                    <Text size={400}>U.G.C</Text>
                  </Menu.Item>
                  <Menu.Item is={Link} to='/about' onSelect={close}>
                    <Text size={400}>About Us</Text>
                  </Menu.Item>
                  <Menu.Item is={Link} to='/contact' onSelect={close}>
                    <Text size={400}>Contact</Text>
                  </Menu.Item>
                </Menu.Group>
                <Menu.Divider />
                <Menu.Group title='follow us'>
                  <Menu.Item margin={0} padding={0}>
                    <Pane display='flex' justifyContent='space-around'>
                      <Link to='' target='_blank'onClick={close}>
                        <Image width={20} height={20} src='/svg_social_icons/facebook.svg' alt='facebook' />
                      </Link>
                      <Link to='' target='_blank'onClick={close}>
                        <Image width={20} height={20} src='/svg_social_icons/instagram.svg' alt='instagram' />
                      </Link>
                      <Link to='' target='_blank'onClick={close}>
                        <Image width={20} height={20} src='/svg_social_icons/snapchat.svg' alt='snapchat' />
                      </Link>
                      <Link to='' target='_blank'onClick={close}>
                        <Image width={20} height={20} src='/svg_social_icons/youtube.svg' alt='youtube' />
                      </Link>
                    </Pane>
                  </Menu.Item>
                </Menu.Group>
              </Menu>
            )
          }
        >
          <IconButton height={24} icon='caret-right' appearance='minimal' float='right' />
        </Popover>
      </Pane>
    </Pane>
  )
}

export default Footer
