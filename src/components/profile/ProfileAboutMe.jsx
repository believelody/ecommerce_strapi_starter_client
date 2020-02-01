import React, { useState, useEffect } from 'react'
import { Pane, Button, toaster } from 'evergreen-ui'
import { useAppHooks } from '../../context'
import ProfileImage from './ProfileImage'
import ProfileNames from './ProfileNames'
import api, { apiUrl } from '../../api'
import { ERROR_PROFILE, UPDATE_PROFILE } from '../../reducers/profileReducer'
import { SET_LOADING, RESET_LOADING } from '../../reducers/loadingReducer'
import ErrorAlert from '../alerts/ErrorAlert'

const ProfileAboutMe = () => {
    const { useProfile, useLoading } = useAppHooks()
    const [{ profile, errors }, dispatchProfile] = useProfile
    const [loadingState, dispatchLoading] = useLoading

    const [image, setImage] = useState(null)
    const [names, setNames] = useState({username: ''})

    const uploadFile = async formElement => {
        try {
            if (formElement) {
                await api.profile.changeImage(formElement)
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
            dispatchLoading({ type: SET_LOADING, payload: {msg: 'Saving your changes'} })
            try {
                if (image) {
                    let formId = e.target.id
                    await uploadFile(document.getElementById(formId))
                }
                const {data} = await api.profile.updateNames(profile._id, {
                    username: names.username,
                    firstname: names.firstname,
                    lastname: names.lastname
                })
                dispatchProfile({
                    type: UPDATE_PROFILE,
                    payload: {
                        profile: data.updateProfile.profile
                    }
                })
                toaster.success('Your profile has been successfully updated')
            } catch (e) {
                console.log(e)
                dispatchProfile({
                    type: ERROR_PROFILE,
                    payload: {
                        submit_failed: 'An error has occured'
                    }
                })
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
            <Pane display='flex'>
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
                {
                    errors && errors.submit_failed &&
                    <ErrorAlert
                        label='submit_failed'
                        errors={errors || ''}
                        hasTrim
                        appearance='minimal'
                    />
                }
            </Pane>
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
