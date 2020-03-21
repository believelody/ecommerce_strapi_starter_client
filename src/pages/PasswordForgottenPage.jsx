import React from 'react'
import { Pane } from 'evergreen-ui'
import PasswordForgottenForm from '../components/forms/PasswordForgottenForm'
import { Redirect } from 'react-router-dom'
import { useAppHooks } from '../context'
import Page from '../components/page/Page'

const bg = `linear-gradient(126deg, rgba(101, 101, 101, 0.09) 0%, rgba(101, 101, 101, 0.09) 68%,rgba(200, 200, 200, 0.09) 68%, rgba(200, 200, 200, 0.09) 100%),linear-gradient(164deg, rgba(238, 238, 238, 0.03) 0%, rgba(238, 238, 238, 0.03) 90%,rgba(14, 14, 14, 0.03) 90%, rgba(14, 14, 14, 0.03) 100%),linear-gradient(27deg, rgba(214, 214, 214, 0.04) 0%, rgba(214, 214, 214, 0.04) 34%,rgba(104, 104, 104, 0.04) 34%, rgba(104, 104, 104, 0.04) 100%),linear-gradient(175deg, rgba(20, 20, 20, 0.01) 0%, rgba(20, 20, 20, 0.01) 4%,rgba(9, 9, 9, 0.01) 4%, rgba(9, 9, 9, 0.01) 100%),linear-gradient(257deg, rgba(14, 14, 14, 0.01) 0%, rgba(14, 14, 14, 0.01) 28%,rgba(164, 164, 164, 0.01) 28%, rgba(164, 164, 164, 0.01) 100%),linear-gradient(311deg, rgba(68, 68, 68, 0.07) 0%, rgba(68, 68, 68, 0.07) 33%,rgba(213, 213, 213, 0.07) 33%, rgba(213, 213, 213, 0.07) 100%),linear-gradient(244deg, rgba(43, 43, 43, 0.02) 0%, rgba(43, 43, 43, 0.02) 80%,rgba(161, 161, 161, 0.02) 80%, rgba(161, 161, 161, 0.02) 100%),linear-gradient(130deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.04) 49%,rgba(105, 105, 105, 0.04) 49%, rgba(105, 105, 105, 0.04) 100%),linear-gradient(90deg, rgb(190, 33, 111),rgb(97, 3, 0))`

const PasswordForgottenPage = () => {
  const { useAuth } = useAppHooks()
  const [{ isConnected }, dispatchAuth] = useAuth

  return (
    !isConnected ?
    <Page bg={bg} display='flex' alignItems='center' justifyContent='center'>
      <PasswordForgottenForm />
    </Page> :
    <Redirect to='/profile' />
  )
}

export default PasswordForgottenPage
