import React from 'react'
import { Card, Button } from 'evergreen-ui'
import FieldComponent from '../fields/FieldComponent'
import Label from '../label/Label'
import { useAppHooks } from '../../context'
import { SET_LOADING, RESET_LOADING } from '../../reducers/loadingReducer'

const ResetPasswordForm = ({ code }) => {
    const { useAuth } = useAppHooks()
    const [{errors}, dispatchAuth] = useAuth

    const [input, setInput] = useState(null)
    const [isSubmitted, setIsSubmit] = useState(false)

    const handleChange = e => setInput({...input, [e.target.name]: e.target.value})

    const handleSubmit = async e =>  {
        if (!input.newPwd) {}
        else if (!input.confirmPwd) {}
        else if (input.newPwd !== input.confirmPwd) {}
        else {
            try {
                setIsSubmit(true)
            } catch (e) {
                console.log(e)
            }
        }
    }

    return (
        <Card is='form' onSubmit={handleSubmit}>
            <FieldComponent
                label={<Label name='New Password' />}
                placeholder='Type your new password here'
                name='new-password'
                type='password'
                value={input && input.newPwd}
                handleChange={handleChange}
                error={errors && errors.newPwd || ''}
            />
            <FieldComponent
                label={<Label name='Confirm Password' />}
                placeholder='Confirm your new password'
                name='confirm-password'
                type='password'
                value={input && input.confirmPwd}
                handleChange={handleChange}
                error={errors && errors.confirmPwd || ''}
            />
            <Button disabled={isSubmitted}>Change password</Button>
        </Card>
    )
}

export default ResetPasswordForm
