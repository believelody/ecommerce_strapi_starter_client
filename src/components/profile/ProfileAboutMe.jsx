import React, { useState, useEffect, useRef } from 'react'
import { Pane, Card, Button, toaster } from 'evergreen-ui'
import { useAppHooks } from '../../context'
import ProfileImage from './ProfileImage'
import ProfileNames from './ProfileNames'
import api, { apiUrl } from '../../api'
import { ERROR_PROFILE, UPDATE_PROFILE } from '../../reducers/profileReducer'
import { SET_LOADING, RESET_LOADING } from '../../reducers/loadingReducer'

const ProfileAboutMe = () => {
    const { useProfile, useLoading } = useAppHooks()
    const [{ profile, errors }, dispatchProfile] = useProfile
    const [loadingState, dispatchLoading] = useLoading

    const formRef = useRef(null)

    const [image, setImage] = useState(null)
    const [names, setNames] = useState({username: ''})

    const uploadFile = async formElement => {
        try {
            if (formElement) {
                const res = await api.profile.changeImage(formElement)
                console.log(res)
            }
        } catch (e) {
            console.log(e)
        }
    }

    const handleSubmit = async e => {
        e.preventDefault()
        if (!names.firstname) {
            dispatchProfile({
                type: ERROR_PROFILE,
                payload: { firstname: 'Firstname field cannot be empty' }
            })
        }
        else if (!names.lastname) {
            dispatchProfile({
                type: ERROR_PROFILE,
                payload: { lastname: 'Lastname field cannot be empty' }
            })
        }
        else {
            dispatchLoading({ type: SET_LOADING })
            try {
                let formId = e.target.id
                // const {data} = await api.profile.updateNames(profile._id, {
                //     username: names.username,
                //     firstname: names.firstname,
                //     lastname: names.lastname
                // })
                await uploadFile(document.getElementById(formId))
                
                // dispatchProfile({
                //     type: UPDATE_PROFILE,
                //     payload: {
                //         profile: data.updateProfile.profile
                //     }
                // })
                toaster.success('Your profile has been successfully updated')
            } catch (e) {
                console.log(e)
            }
            dispatchLoading({ type: RESET_LOADING })
        }
    }

    useEffect(() => {
        if (profile) {
            setImage({ url: `${apiUrl}${profile.image.url}`, name: profile.image.name })
            setNames({
                username: profile.username,
                firstname: profile.firstname || '',
                lastname: profile.lastname || '',
            })
        }
    }, [profile])
    
    return (
        profile &&
        <Pane is='form' id='about-me-form' onSubmit={handleSubmit} display='block'>
            <Button
                appearance='primary'
                intent='success'
                marginY={8}
                marginLeft={8}
                paddingX={32}
                size={600}
            >
                Save
            </Button>
            <Pane
                display='flex'
                flexWrap='wrap'
                justifyContent='stretch'
                alignItems='stretch'
                padding={8}
                width='100%'
                border
            >
                <ProfileImage image={image} setImage={setImage} profileId={profile._id} />
                <ProfileNames names={names} setNames={setNames} errors={errors} />
            </Pane>
        </Pane>
    )
}

export default ProfileAboutMe
