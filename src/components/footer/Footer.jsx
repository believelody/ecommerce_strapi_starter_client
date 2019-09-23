import React from 'react'
import { NavLink } from 'react-router-dom'
import { Pane, Text } from 'evergreen-ui'
import styled from 'styled-components'

const ListStyle = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
`

const ItemStyle = styled.li`
  margin: 0;
  padding: 0 5px;
  border-left: 1px solid rgba(0, 0, 0, 0.2);

  &:nth-child(1) {
    border-left: none;
  }
`

const Footer = () => {
  return (
    <Pane width='100%' background='tint2' paddingY={2} bottom={0} position='absolute'>
      <ListStyle>
        <ItemStyle marginX={5}>
          <NavLink to='/ugc'>
            <Text size={400}>U.G.C</Text>
          </NavLink>
        </ItemStyle>
        <ItemStyle marginX={5}>
          <NavLink to='/about'>
            <Text size={400}>About us</Text>
          </NavLink>
        </ItemStyle>
        <ItemStyle marginX={5}>
          <NavLink to='/contact'>
            <Text size={400}>Contact us</Text>
          </NavLink>
        </ItemStyle>
      </ListStyle>
    </Pane>
  )
}

export default Footer
