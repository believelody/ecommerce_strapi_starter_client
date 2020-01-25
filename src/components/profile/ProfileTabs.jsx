import React from 'react'
import { Pane, Text } from 'evergreen-ui'
import Tabs from '../tabs/Tabs'

const ProfileTabs = () => {
    return (
        <Pane flex='1 1 auto' background='tint1'>
            <Tabs
                marginTop={0}
                elements={[
                    {
                        content: (
                            <Pane height='auto'>
                                <Text>Order Tab</Text>
                            </Pane>
                        ),
                        label: 'orders',
                        tab: <Text size={500}>My Orders</Text>
                    },
                    {
                        content: <Text>Address Tab</Text>,
                        label: 'addresses',
                        tab: <Text size={500}>My Addresses</Text>
                    },
                    {
                        content: <Text>Profile Tab</Text>,
                        label: 'profile',
                        tab: <Text size={500}>About Me</Text>
                    },
                    {
                        content: <Text>Account Tab</Text>,
                        label: 'account',
                        tab: <Text size={500}>Account Info</Text>
                    },
                ]}
            />
        </Pane>
    )
}

export default ProfileTabs
