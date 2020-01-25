import React, { useEffect } from 'react'
import { Pane, Heading, Paragraph, Button } from 'evergreen-ui'
import Verify from '../verify/Verify'
import { useAppHooks } from '../../context'
import { OPEN_DIALOG, CLOSE_DIALOG } from '../../reducers/dialogReducer'
import { LOG_OUT } from '../../reducers/authReducer'
import ProfileTabs from './ProfileTabs'
import { deleteUser } from '../../utils/user.utils'
import { deleteToken } from '../../utils/token.utils'

const Profile = () => {
    const { useAuth, useDialog } = useAppHooks()
    const [{user}, dispatchAuth] = useAuth
    const [{ isShowed }, dispatchDialog] = useDialog

    const handleClick = e => {
        dispatchAuth({ type: LOG_OUT })
        deleteUser()
        deleteToken()
        if (isShowed) {
            dispatchDialog({ type: CLOSE_DIALOG })
        }
    }

    useEffect(() => {
        dispatchDialog({
            type: OPEN_DIALOG,
            payload: {
                children: Verify
            }
        })
    }, [])
    
    return (
        <Pane height='100%' display='flex' flexDirection='column'>
            <Pane display='block' textAlign='center' background='blueTint' paddingY={16}>
                <Heading size={700}>Hi <em>{user.name}</em></Heading>
                <Paragraph>
                    Here you will find all informations about you and your orders.
                    <Button onClick={handleClick}>Logout</Button>
                </Paragraph>
            </Pane>
            <ProfileTabs />
        </Pane>
    )
}

export default Profile
