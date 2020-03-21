import React from 'react'
import { Heading } from 'evergreen-ui'
import queryString from 'query-string'
import ResetPasswordForm from '../components/forms/ResetPasswordForm'
import { Redirect } from 'react-router-dom'
import { useAppHooks } from '../context'
import Page from '../components/page/Page'

const bg =`radial-gradient(circle at 92% 37%, hsla(94,0%,12%,0.07) 0%, hsla(94,0%,12%,0.07) 39%,transparent 39%, transparent 71%,transparent 71%, transparent 100%),radial-gradient(circle at 65% 60%, hsla(94,0%,12%,0.07) 0%, hsla(94,0%,12%,0.07) 15%,transparent 15%, transparent 67%,transparent 67%, transparent 100%),radial-gradient(circle at 18% 57%, hsla(94,0%,12%,0.07) 0%, hsla(94,0%,12%,0.07) 23%,transparent 23%, transparent 31%,transparent 31%, transparent 100%),radial-gradient(circle at 38% 0%, hsla(94,0%,12%,0.07) 0%, hsla(94,0%,12%,0.07) 27%,transparent 27%, transparent 60%,transparent 60%, transparent 100%),radial-gradient(circle at 83% 39%, hsla(94,0%,12%,0.07) 0%, hsla(94,0%,12%,0.07) 74%,transparent 74%, transparent 87%,transparent 87%, transparent 100%),linear-gradient(135deg, rgb(243, 77, 35),rgb(25, 28, 34))`

const ResetPasswordPage = ({ location }) => {
    const { useAuth } = useAppHooks()
    const [{ isConnected }, dispatchAuth] = useAuth

    const {code} = queryString.parse(location.search)
    
    return (
        !isConnected ?
        <Page
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            bg={bg}
        >
            <Heading size={700} marginBottom={16}>Reset your password</Heading>
            <ResetPasswordForm code={code} />
        </Page>
        :
        <Redirect to='/profile' />
    )
}

export default ResetPasswordPage
