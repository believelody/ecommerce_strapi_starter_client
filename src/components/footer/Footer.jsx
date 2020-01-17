import React from 'react'
import { NavLink } from 'react-router-dom'
import { Pane, Text } from 'evergreen-ui'
import styled from 'styled-components'

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
  border-left: 3px solid rgba(0, 0, 0, 0.15);
  text-align: center;
`

const Footer = () => {
  return (
    <Pane width='100%' background='tint2' paddingY={2} bottom={0} position='absolute'>
      <ListStyle>
        <NavLink to='/ugc' style={{ width: "100%" }}>
          <ItemStyle>
              <Text size={400}>U.G.C</Text>
          </ItemStyle>
        </NavLink>
        <NavLink to='/about' style={{ width: "100%" }}>
          <ItemStyle>
              <Text size={400}>About Us</Text>
          </ItemStyle>
        </NavLink>
        <NavLink to='/contact' style={{ width: "100%" }}>
          <ItemStyle>
              <Text size={400}>Contact Us</Text>
          </ItemStyle>
        </NavLink>
      </ListStyle>
    </Pane>
  )
}

export default Footer
