import React, { useState, useEffect } from 'react'
import { Pane, Card, Button } from 'evergreen-ui'
import { useAppHooks } from '../../context'
import ProfileImage from './ProfileImage'
import ProfileNames from './ProfileNames'
import { apiUrl } from '../../api'

const ProfileAboutMe = () => {
    const { useProfile } = useAppHooks()
    const [{ profile, errors }, dispatchProfile] = useProfile

    const [image, setImage] = useState(null)
    const [names, setNames] = useState({username: ''})

    const handleSubmit = e => {
        e.preventDefault()
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
        <Pane is='form' onSubmit={handleSubmit} display='block'>
            <Button
                appearance='primary'
                intent='success'
                marginY={8}
                marginLeft={8}
                paddingY={16}
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
                <ProfileImage image={image} setImage={setImage} />
                <ProfileNames names={names} setNames={setNames} errors={errors} />
            </Pane>
        </Pane>
    )
}

export default ProfileAboutMe
