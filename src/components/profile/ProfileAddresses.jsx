import React from 'react'
import { Pane } from 'evergreen-ui'
import ProfileShippingAddresses from './ProfileShippingAddresses'
import ProfileBillingAddresses from './ProfileBillingAddresses'

const ProfileAddresses = () => {
    
    return (
        <Pane display='flex' justifyContent='space-around' flexWrap='wrap' alignItems='center' padding={8}>
            <ProfileShippingAddresses />
            <ProfileBillingAddresses />
        </Pane>
    )
}

export default ProfileAddresses
