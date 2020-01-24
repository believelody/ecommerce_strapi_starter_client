import React, { useState } from 'react'
import { Pane, Text } from 'evergreen-ui'
import AuthConfirmForm from '../forms/AuthConfirmForm'
import { useAppHooks } from '../../context'
import verifyEmailTemplate from '../../utils/verifyEmailTemplate'

const Verify = ({ handleClose }) => {
    const { useAuth } = useAppHooks()
    const [{ user }, dispatchAuth] = useAuth

    const [isEmailSent, SetIsEmailSent] = useState(false)

    const resendEmail = async e => {
        try {
            await verifyEmailTemplate(
                user.email,
                'Please confirm your email',
                `Welcome ${user.name}, please confirm your email with this code: 586. Copy and paste it the verify form. Enjoy your shopping in our store.`,
                `<p>
                Welcome ${user.name}, please confirm your email with this code: <b>586</b>. Copy and paste it the verify form. Enjoy your shopping in our store.
                </p>`
            )
            SetIsEmailSent(true)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <Pane>
            <AuthConfirmForm handleClose={handleClose} />
            {
                isEmailSent
                    ?
                <Text float='right' size={300}>
                    Please check your email, we've just sent you a new verifiaction code
                </Text>
                    :
                <Text
                    color='orange'
                    cursor='pointer'
                    size={300}
                    float='right'
                    onClick={resendEmail}
                >
                    Resend me verification link
                </Text>
            }
        </Pane>
    )
}

export default Verify
