import React, { useEffect } from 'react'
import { Pane, Heading, Paragraph } from 'evergreen-ui'
import Verify from '../verify/Verify'
import { useAppHooks } from '../../context'
import { OPEN_DIALOG } from '../../reducers/dialogReducer'
import ProfileTabs from './ProfileTabs'

const Profile = () => {
    const { useAuth, useDialog, useProfile } = useAppHooks()
    const [{user}, dispatchAuth] = useAuth
    const [stateLoading, dispatchDialog] = useDialog
    const [{profile}, dispatchProfile] = useProfile

    useEffect(() => {
        if (profile && !profile.emailConfirm) {
            dispatchDialog({
                type: OPEN_DIALOG,
                payload: {
                    children: Verify
                }
            })
        }
    }, [profile])
    
    return (
        <Pane height='100%' display='block'>
            <Pane display='block' textAlign='center' paddingY={16}>
                <Heading size={700} color='white'>Hi <em>{user.name}</em></Heading>
                <Paragraph color='white'>
                    Here you will find all informations about you and your orders.
                </Paragraph>
            </Pane>
            <ProfileTabs />
        </Pane>
    )
}

export default Profile
