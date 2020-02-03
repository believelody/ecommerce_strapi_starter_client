import React, { useState } from 'react'
import { Card, Button, Pane, Heading } from 'evergreen-ui'
import Label from '../label/Label'
import FieldComponent from '../fields/FieldComponent'
import { useAppHooks } from '../../context'
import { deleteUser } from '../../utils/user.utils'
import { deleteToken } from '../../utils/token.utils'
import { CLOSE_DIALOG } from '../../reducers/dialogReducer'
import { LOG_OUT, RESET_ERRORS } from '../../reducers/authReducer'
import { OPEN_MODAL } from '../../reducers/modalReducer'
import isMobile from '../../utils/isMobile.utils'

const ProfileInfoAccount = () => {
    const { useAuth, useDialog, useProfile, useModal } = useAppHooks()
    const [{errors}, dispatchAuth] = useAuth
    const [{ isShowed }, dispatchDialog] = useDialog
    const [stateProfile, dispatchProfile] = useProfile
    const [stateModal, dispatchModal] = useModal

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmail = e => setEmail(e.target.value)
    const handlePassword = e => setPassword(e.target.value)

    const changeEmail = e => {
        console.log(email)
    }

    const handleLogout = e => {
        dispatchAuth({ type: LOG_OUT })
        deleteUser()
        deleteToken()
        dispatchAuth({ type: RESET_ERRORS })
        dispatchProfile({ type: RESET_PROFILE_ERRORS })
        if (isShowed) {
            dispatchDialog({ type: CLOSE_DIALOG })
        }
    }

    const handleDeleteUser = e => {
        dispatchModal({
            type: OPEN_MODAL,
            payload: {
                title: 'Delete User',
                msg: `We're sad to know you leave us. Are you sure ?`,
                labelConfirm: 'Yes, delete my account',
                status: 'danger',
                action: () => console.log('User deleted...')
            }
        })
    }

    return (
        <Card padding={!isMobile() ? 32 : 8}>
            <Pane marginBottom={50} paddingBottom={16} borderBottom>
                <Heading size={700} textAlign='center'>Here you will find your sensitive data</Heading>
            </Pane>
            <Pane 
                width={320} 
                display='flex' 
                justifyContent='flex-start' 
                alignItems='center'
            >
                <FieldComponent
                    name='email'
                    email='email'
                    placeholder='Change your email'
                    label={<Label name='Email' />}
                    value={email}
                    handleChange={handleEmail}
                    errors={errors && errors.email}
                />
                <Button onClick={changeEmail}>Change</Button>
            </Pane>
            <Pane>
                <Button onClick={handleLogout}>
                    Logout
                </Button>
            </Pane>
            <Pane marginTop={24}>
                <Button appearance='primary' intent='danger' onClick={handleDeleteUser}>
                    Delete User
                </Button>
            </Pane>
        </Card>
    )
}

export default ProfileInfoAccount
