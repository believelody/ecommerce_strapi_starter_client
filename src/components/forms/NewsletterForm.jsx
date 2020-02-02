import React, { useState } from 'react'
import FieldComponent from '../fields/FieldComponent'
import { Button, Pane, Text } from 'evergreen-ui'
import styled from 'styled-components'
import { useAppHooks } from '../../context'
import api from '../../api'
import { ERROR_PROFILE, RESET_PROFILE_ERRORS } from '../../reducers/profileReducer'
import verifyEmailTemplateUtils from '../../utils/verifyEmailTemplate.utils'

const FormStyle = styled.form`
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0;
`

const NewsletterForm = () => {
    const {useProfile} = useAppHooks()
    const [{profile, errors}, dispatchProfile] = useProfile

    const [email, setEmail] = useState('')
    const [isSubmitted, setIsSubmit] = useState(false)

    const handleSubmit = async e => {
        e.preventDefault()
        if (!email) {
            dispatchProfile({
                type: ERROR_PROFILE,
                payload: {
                    email: 'Email field cannot be empty.'
                }
            })
        }
        else {
            try {
                await verifyEmailTemplateUtils(
                    email,
                    `Thanks for your subscription`,
                    `Hi there, we are glad to see you among our subscriber. Please stay tuned and enjoy your shopping in our store.`,
                    `<p>
                        Hi there, we are glad to see you among our subscriber. Please stay tuned and enjoy your shopping in our store.
                    </p>`
                )
                if (profile) {
                    await api.profile.subscribeNewsletter(profile._id)
                }
                setIsSubmit(true)
                dispatchProfile({ type: RESET_PROFILE_ERRORS })
            } catch (e) {
                console.log(e)
                dispatchProfile({
                    type: ERROR_PROFILE,
                    payload: {
                        subscribe_failed: 'Oops, an error has occured'
                    }
                })
            }
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
                error={errors && (errors.email || errors.subscribe_failed)}
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
