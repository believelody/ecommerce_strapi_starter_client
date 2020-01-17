import React from 'react'
import { Pane, Menu, Strong } from 'evergreen-ui'
import { NavLink } from 'react-router-dom'
import { Avatar } from 'evergreen-ui/commonjs/avatar'

const HomeMenu = () => {
    return (
        <Pane>
            <Menu>
                <NavLink to='/categories/men' style={{ width: '100%' }}>
                    <Menu.Item paddingY={24}>
                        <Pane
                            display='flex'
                            alignItems='center'
                            justifyContent='center'
                        >
                            <Avatar src='/men.png' name='men' marginRight={16} />
                            <Strong>Men</Strong>
                        </Pane>
                    </Menu.Item>
                </NavLink>
                <Menu.Divider />
                <NavLink to='/categories/women' style={{ width: '100%' }}>
                    <Menu.Item paddingY={24}>
                        <Pane
                            display='flex'
                            alignItems='center'
                            justifyContent='center'
                        >                            
                            <Avatar src='/woman.png' name='women' marginRight={16} />
                            <Strong>Women</Strong>
                        </Pane>
                    </Menu.Item>
                </NavLink>
            </Menu>
        </Pane>
    )
}

export default HomeMenu
