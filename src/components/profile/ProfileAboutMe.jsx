import React from 'react'
import { useAppHooks } from '../../context'
import ProfileAboutMeForm from '../forms/ProfileAboutMeForm'

const ProfileAboutMe = () => {
    const { useProfile } = useAppHooks()
    const [{ profile }, dispatchProfile] = useProfile
    
    return (
        profile &&
        <ProfileAboutMeForm profile={profile} />
    )
}

export default ProfileAboutMe
