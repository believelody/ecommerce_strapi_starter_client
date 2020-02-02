import React from 'react'
import { Pane, Heading } from 'evergreen-ui'
import queryString from 'query-string'
import ResetPasswordForm from '../components/forms/ResetPasswordForm'
import { Redirect } from 'react-router-dom'
import { useAppHooks } from '../context'

const ResetPasswordPage = ({ location }) => {
    const { useAuth } = useAppHooks()
    const [{ isConnected }, dispatchAuth] = useAuth

    const {code} = queryString.parse(location.search)
    
    return (
        !isConnected ?
        <Pane
            height='100vh'
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
        >
            <Heading size={700} marginBottom={16}>Reset your password</Heading>
            <ResetPasswordForm code={code} />
        </Pane>
        :
        <Redirect to='/profile' />
    )
}

export default ResetPasswordPage
