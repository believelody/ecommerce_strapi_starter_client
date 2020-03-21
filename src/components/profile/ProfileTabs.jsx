import React from 'react'
import { Card, Text } from 'evergreen-ui'
import ProfileAddresses from './ProfileAddresses'
import Tabs from '../tabs/Tabs'
import ProfileAboutMe from './ProfileAboutMe'
import ProfileInfoAccount from './ProfileInfoAccount'
import ProfileOrder from './ProfileOrder'

const ProfileTabs = () => {

    return (
        <Card background='tint1' marginX={8} elevation={1}>
            <Tabs
                marginTop={0}
                elements={[
                    {
                        content: (
                            <Card padding={8} background='tint2'>
                                <ProfileOrder />
                            </Card>
                        ),
                        label: 'orders',
                        tab: <Text size={500}>My Orders</Text>
                    },
                    {
                        content: (
                            <Card padding={8} >
                                <ProfileAddresses />
                            </Card>
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
        </Card>
    )
}

export default ProfileTabs
