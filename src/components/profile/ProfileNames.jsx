import React from 'react'
import { Card } from 'evergreen-ui'
import FieldComponent from '../fields/FieldComponent'

const ProfileNames = ({ names, setNames, errors }) => {
    const handleNames = e => {
        // console.log(e)
        setNames({ [e.target.name]: e.target.value })
    }

    return (
        <Card
            display='flex'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            flex='1 1 auto'
            border
            marginX={8}
        >
            <FieldComponent
                name='username'
                label='Username *'
                placeholder='Type your username here'
                value={names.username}
                error={errors && errors.username}
                handleChange={handleNames}
                width='80%'
            />
            <FieldComponent
                name='firstname'
                label='Firstname *'
                placeholder='Type your firstname here'
                value={names.firstname}
                error={errors && errors.firstname}
                handleChange={handleNames}
                width='80%'
            />
            <FieldComponent
                name='lastname'
                label='Lastname *'
                placeholder='Type your lastname here'
                value={names.lastname}
                error={errors && errors.lastname}
                handleChange={handleNames}
                width='80%'
            />
        </Card>
    )
}

export default ProfileNames
