import React, { useState, useEffect } from 'react'
import { Pane, Button, toaster } from 'evergreen-ui'
import moment from 'moment'
import ProfileImage from './ProfileImage'
import ProfileInfo from './ProfileInfo'
import ErrorAlert from '../alerts/ErrorAlert'
import api, { apiUrl } from '../../api'
import { useAppHooks } from '../../context'
import { SET_LOADING, RESET_LOADING } from '../../reducers/loadingReducer'
import { ERROR_PROFILE, UPDATE_PROFILE, RESET_PROFILE_ERRORS } from '../../reducers/profileReducer'

const ProfileAboutMe = () => {
    const { useProfile, useLoading } = useAppHooks()
    const [{ profile, errors }, dispatchProfile] = useProfile
    const [loadingState, dispatchLoading] = useLoading

    const [image, setImage] = useState(null)
    const [info, setInfo] = useState({username: ''})

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
        if (!info.firstname) {
            dispatchProfile({
                type: ERROR_PROFILE,
                payload: { firstname: 'Firstname field cannot be empty' }
            })
        }
        else if (!info.lastname) {
            dispatchProfile({
                type: ERROR_PROFILE,
                payload: { lastname: 'Lastname field cannot be empty' }
            })
        }
        else if (moment().year() - moment(info.birthday).year() < 18) {
            dispatchProfile({
                type: ERROR_PROFILE,
                payload: { birthday: 'You must have 18 years old or more' }
            })
        }
        else {
            dispatchLoading({ type: SET_LOADING, payload: {msg: 'Saving your changes'} })
            try {
                if (image) {
                    let formId = e.target.id
                    await uploadFile(document.getElementById(formId))
                }
                const { data } = await api.profile.updateInfo(profile._id, {
                    username: info.username,
                    firstname: info.firstname,
                    lastname: info.lastname,
                    birthday: new Date(info.birthday)
                })
                dispatchProfile({
                    type: UPDATE_PROFILE,
                    payload: {
                        profile: data.updateProfile.profile
                    }
                })
                toaster.success('Your profile has been successfully updated')
                dispatchProfile({ type: RESET_PROFILE_ERRORS })
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
            if (profile.image) {
                setImage({ url: `${apiUrl}${profile.image.url}`, name: profile.image.name })
            }
            setInfo({
                username: profile.username,
                firstname: profile.firstname || '',
                lastname: profile.lastname || '',
                birthday: moment(profile.birthday).format('YYYY-MM-DD') || ''
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
                <ProfileInfo info={info} setInfo={setInfo} errors={errors} />
            </Pane>
        </Pane>
    )
}

export default ProfileAboutMe
