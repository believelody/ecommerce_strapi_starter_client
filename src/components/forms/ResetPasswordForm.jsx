import React, { useState } from 'react'
import { Card, Button, InlineAlert, toaster } from 'evergreen-ui'
import FieldComponent from '../fields/FieldComponent'
import Label from '../label/Label'
import api from '../../api'
import { useAppHooks } from '../../context'
import { ERROR_AUTH, SUCCESS_AUTH } from '../../reducers/authReducer'
import { setUser } from '../../utils/user.utils'
import { setToken } from '../../utils/token.utils'

const ResetPasswordForm = ({ code }) => {
    const { useAuth } = useAppHooks()
    const [{errors}, dispatchAuth] = useAuth

    const [input, setInput] = useState({})
    const [isSubmitted, setIsSubmit] = useState(false)

    const handleChange = e => setInput({...input, [e.target.name]: e.target.value})

    const handleSubmit = async e =>  {
        e.preventDefault()
        if (!input.newPwd) {
            dispatchAuth({
                type: ERROR_AUTH,
                payload: { newPwd: 'New Password field is required' }
            })
        }
        else if (!input.confirmPwd) {
            dispatchAuth({
                type: ERROR_AUTH,
                payload: { confirmPwd: 'Confirm Password field is required' }
            })
        }
        else if (input.newPwd !== input.confirmPwd) {
            dispatchAuth({
                type: ERROR_AUTH,
                payload: { noMatch: 'Both password must be same!' }
            })
        }
        else {
            try {
                setIsSubmit(true)
                const {data} = await api.user.resetPassword(code, input.newPwd, input.confirmPwd)
                dispatchAuth({
                    type: SUCCESS_AUTH,
                    payload: {
                        user: { _id: data.user._id, name: data.user.username, email: data.user.email }
                    }
                })
                setToken(data.jwt)
                setUser({ _id: data.user._id, name: data.user.username, email: data.user.email })
                toaster.notify(`Welcome ${data.user.username}`)
                setInput({})
            } catch (e) {
                console.log(e)
                setIsSubmit(false)
            }
        }
    }

    return (
        <Card
            is='form'
            onSubmit={handleSubmit}
            padding={16}
            minWidth={300}
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            border
        >
            <FieldComponent
                label={<Label name='New Password *' />}
                placeholder='Type your new password here'
                name='newPwd'
                type='password'
                value={input && input.newPwd}
                handleChange={handleChange}
                error={errors && errors.newPwd}
            />
            <FieldComponent
                label={<Label name='Confirm Password *' />}
                placeholder='Confirm your new password'
                name='confirmPwd'
                type='password'
                value={input && input.confirmPwd}
                handleChange={handleChange}
                error={errors && errors.confirmPwd}
            />
            {
                errors && errors.noMatch &&
                <InlineAlert intent='danger' marginBottom={16}>{errors.noMatch}</InlineAlert>
            }
            <Button appearance='primary' intent='success' disabled={isSubmitted}>
                {isSubmitted ? 'Resetting password...' : 'Change password'}
            </Button>
        </Card>
    )
}

export default ResetPasswordForm
