import React from 'react'
import { Card, Heading, Paragraph } from 'evergreen-ui'
import FieldComponent from '../fields/FieldComponent'
import { Pane } from 'evergreen-ui/commonjs/layers'

const ProfileInfo = ({ info, setInfo, errors }) => {
    const handleNames = e => {
        setInfo({ ...info, [e.target.name]: e.target.value })
    }

    return (
        <Card
            display='block'
            border
            marginX={8}
            width='calc(70% - 16px)'
            textAlign='center'
        >
            <Heading>
                Please provide a firstname and a lastname since username is unique.
            </Heading>
            <Paragraph marginBottom={16} style={{ fontStyle: 'italic' }}>
                We would be glad if you give us your birthday too 🙏!
            </Paragraph>
            <Pane
                display='flex'
                alignItems='center'
                justifyContent='center'
                flexWrap='wrap'
            >
                <Pane width='40%' marginRight={16}>
                    <FieldComponent
                        name='username'
                        label='Username *'
                        placeholder='Type your username here'
                        value={info.username}
                        error={errors && errors.username}
                        handleChange={handleNames}
                    />
                </Pane>
                <Pane width='40%'>
                    <FieldComponent
                        name='birthday'
                        label='Birthday 🎂'
                        type='date'
                        placeholder='Click here to select your birthday'
                        value={info.birthday}
                        error={errors && errors.birthday}
                        handleChange={handleNames}
                    />
                </Pane>                
                <Pane width='40%' marginRight={16}>
                    <FieldComponent
                        name='firstname'
                        label='Firstname *'
                        placeholder='Type your firstname here'
                        value={info.firstname}
                        error={errors && errors.firstname}
                        handleChange={handleNames}
                    />
                </Pane>
                <Pane width='40%'>
                    <FieldComponent
                        name='lastname'
                        label='Lastname *'
                        placeholder='Type your lastname here'
                        value={info.lastname}
                        error={errors && errors.lastname}
                        handleChange={handleNames}
                    />
                </Pane>
            </Pane>
        </Card>
    )
}

export default ProfileInfo
