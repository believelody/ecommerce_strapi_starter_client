import React, { useState, useEffect } from 'react'
import { Card, Button, Pane, Heading, toaster } from 'evergreen-ui'
import Label from '../label/Label'
import FieldComponent from '../fields/FieldComponent'
import Switch from '../switch/Switch'
import api from '../../api'
import { useAppHooks } from '../../context'
import { LOG_OUT, RESET_ERRORS, UPDATE_USER } from '../../reducers/authReducer'
import { RESET_CART } from '../../reducers/cartReducer'
import { CLOSE_DIALOG } from '../../reducers/dialogReducer'
import { SET_LOADING, RESET_LOADING } from '../../reducers/loadingReducer'
import { OPEN_MODAL } from '../../reducers/modalReducer'
import { RESET_PROFILE_ERRORS, UPDATE_PROFILE } from '../../reducers/profileReducer'
import { deleteCart } from '../../utils/cart.utils'
import isMobile from '../../utils/isMobile.utils'
import { deleteToken } from '../../utils/token.utils'
import { deleteUser, setUser, getUser } from '../../utils/user.utils'
import { generateVerifyCode } from '../../utils/verifyCode.utils'
import verifyEmailTemplate from '../../utils/verifyEmailTemplate.utils'

const ProfileInfoAccount = () => {
    const { useAuth, useDialog, useProfile, useModal, useLoading, useCart } = useAppHooks()
    const [{user, errors}, dispatchAuth] = useAuth
    const [{ isShowed }, dispatchDialog] = useDialog
    const [{profile}, dispatchProfile] = useProfile
    const [stateModal, dispatchModal] = useModal
    const [loadingState, dispatchLoading] = useLoading
    const [cartState, dispatchCart] = useCart

    const [email, setEmail] = useState(user.email || '')
    const [password, setPassword] = useState('')
    const [checked, setCheck] = useState(false)

    const handleEmail = e => setEmail(e.target.value)
    const handlePassword = e => setPassword(e.target.value)

    const changeEmail = async () => {
        try {
            dispatchLoading({ type: SET_LOADING })
            const userResult = await api.user.changeEmail(user._id, email)
            dispatchAuth({
                type: UPDATE_USER,
                payload: {
                    user: {
                        _id: userResult.data.updateUser.user._id,
                        name: userResult.data.updateUser.user.username,
                        email: userResult.data.updateUser.user.email
                    }
                }
            })
            setUser({ ...getUser(), email: userResult.data.updateUser.user.email })
            let code = generateVerifyCode()
            const profileResult = await api.profile.confirmEmail(profile._id, false, code)
            await verifyEmailTemplate(
                email,
                `Confirm your email`,
                `Welcome ${user.name}, you have just changed your email. Please confirm your email with this code: ${code}. Copy and paste it the verify form. Enjoy your shopping in our store.`,
                `<p>
                    Welcome ${user.name}, you have just changed your email. Please confirm your email with this code: <b>${code}</b>. Copy and paste it the verify form. Enjoy your shopping in our store.
                </p>`
            )
            toaster.notify(`Hello ${user.name}, we just send you a new confirm email.`)
            dispatchProfile({
                type: UPDATE_PROFILE,
                payload: {
                    profile: {...profile, emailConfirm: profileResult.data.updateProfile.profile.emailConfirm}
                }
            })
            dispatchLoading({ type: RESET_LOADING })            
        } catch (error) {
            console.log(error)
            toaster.danger('An error occured. Please refresh your page and try again.')
            dispatchLoading({ type: RESET_LOADING })
        }
    }

    const handleSubscribe = async e => {
        try {
            let checked = e.target.checked
            dispatchLoading({ type: SET_LOADING })
            await api.profile.subscribeNewsletter(profile._id, checked)
            dispatchProfile({
                type: UPDATE_PROFILE,
                payload: {
                    profile: {...profile, isSubscribed: checked}
                }
            })
            dispatchProfile({ type: RESET_PROFILE_ERRORS })
            dispatchLoading({ type: RESET_LOADING })
            toaster.notify(`You are now ${!checked ? 'unsubscribed' : 'subscribed'} to our newsletter !`)
        } catch (error) {
            console.log(error)
            toaster.danger('An error occured. Please refresh your page and try again.')
            dispatchLoading({ type: RESET_LOADING })
        }
    }

    const handleLogout = () => {
        dispatchAuth({ type: LOG_OUT })
        dispatchProfile({ type: UPDATE_PROFILE, payload: {profile: null} })
        deleteCart()
        deleteUser()
        deleteToken()
        dispatchCart({ type: RESET_CART })
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
                title: 'Delete Account',
                msg: `We're sad to know you leave us. Are you sure ?`,
                labelConfirm: 'Yes, delete my account',
                status: 'danger',
                action: async () => {
                    try {
                        dispatchLoading({ type: SET_LOADING })
                        await api.profile.deleteProfile(profile._id)
                        await api.user.deleteUser(user._id)
                        handleLogout()
                        toaster.danger('We hope to see you sooner, bye 😥!')
                        dispatchLoading({ type: RESET_LOADING })
                    } catch (error) {
                        console.log(error)
                        toaster.danger('An error occured. Please refresh your page and try again.')
                    }
                }
            }
        })
    }

    useEffect(() => {
        if (profile) {
            setCheck(profile.isSubscribed)
        }
    }, [profile])

    return (
        <Card>
            <Pane paddingY={16} borderBottom>
                <Heading size={700} textAlign='center'>Here you will find your sensitive data</Heading>
            </Pane>
            <Pane
                width='auto'
                display='block'
                padding={!isMobile() ? 32 : 8}
            >
                <Pane width={320}>
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
                    <Switch
                        label='Subscribe to our newsletter'
                        checked={checked}
                        handleChange={handleSubscribe}
                    />
                </Pane>
                <Pane marginTop={24}>
                    <Button appearance='primary' intent='danger' onClick={handleDeleteUser}>
                        Delete User
                </Button>
                </Pane>
                <Pane>
                    <Button appearance='minimal' onClick={handleLogout}>
                        Logout
                </Button>
                </Pane>
            </Pane>
        </Card>
    )
}

export default ProfileInfoAccount
