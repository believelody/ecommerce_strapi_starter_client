import React, { useState } from 'react'
import FieldComponent from '../fields/FieldComponent'
import { Button, Pane, Text } from 'evergreen-ui'
import styled from 'styled-components'

const FormStyle = styled.form`
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0;
`

const NewsletterForm = () => {
    const [email, setEmail] = useState(null)
    const [error, setError] = useState(null)
    const [isSubmitted, setIsSubmit] = useState(false)

    const handleSubmit = e => {
        e.preventDefault()
        if (!email) {
            setError('Email field cannot be empty.')
        }
        else {
            setIsSubmit(true)
        }
    }

    return !isSubmitted ?
    <FormStyle onSubmit={handleSubmit}>
        <Pane width='70%' paddingLeft={8}>
            <FieldComponent
                type='email'
                name='email'
                label='Stay tuned on our last news'
                placeholder='john@doe.com'
                value={email}
                handleChange={e => setEmail(e.target.value)}
                error={error}
            />
        </Pane>
        <Pane width='30%'>
            <Button appearance='minimal' type='submit'>Subscribe</Button>
        </Pane>
    </FormStyle>
    :
    <Pane padding={8} textAlign='center'>
        <Text>Thank you, we will get you in touch 😉</Text>
    </Pane>
}

export default NewsletterForm
