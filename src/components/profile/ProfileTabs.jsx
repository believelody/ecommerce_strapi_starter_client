import React from 'react'
import { Pane, Text } from 'evergreen-ui'
import ProfileAddresses from './ProfileAddresses'
import Tabs from '../tabs/Tabs'
import ProfileAboutMe from './ProfileAboutMe'
import ProfileInfoAccount from './ProfileInfoAccount'
import ProfileOrder from './ProfileOrder'

const ProfileTabs = () => {

    return (
        <Pane flex='1 1 auto' background='tint1'>
            <Tabs
                marginTop={0}
                elements={[
                    {
                        content: (
                            <Pane padding={8} background='tint2'>
                                <ProfileOrder />
                            </Pane>
                        ),
                        label: 'orders',
                        tab: <Text size={500}>My Orders</Text>
                    },
                    {
                        content: (
                            <Pane padding={8} >
                                <ProfileAddresses />
                            </Pane>
                        ),
                        label: 'addresses',
                        tab: <Text size={500}>My Addresses</Text>
                    },
                    {
                        content: <ProfileAboutMe />,
                        label: 'profile',
                        tab: <Text size={500}>About Me</Text>
                    },
                    {
                        content: <ProfileInfoAccount />,
                        label: 'account',
                        tab: <Text size={500}>Account Info</Text>
                    },
                ]}
            />
        </Pane>
    )
}

export default ProfileTabs
