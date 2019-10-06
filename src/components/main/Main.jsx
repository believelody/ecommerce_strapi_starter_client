import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Pane, Text } from 'evergreen-ui'
import HomePage from '../../pages/HomePage'
import LoginPage from '../../pages/LoginPage'
import RegisterPage from '../../pages/RegisterPage'
import PasswordForgottenPage from '../../pages/PasswordForgottenPage'
import ProductDetailPage from '../../pages/ProductDetailPage'
import CheckoutPage from '../../pages/CheckoutPage'

const Main = ({}) => {
  return (
    <Pane width='75%' margin={0} padding={0}>
      <main>
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/products/:id' exact component={ProductDetailPage} />
          <Route path='/checkout' exact component={CheckoutPage} />
          <Route path='/login' exact component={LoginPage} />
          <Route path='/register' exact component={RegisterPage} />
          <Route path='/forgot-password' exact component={PasswordForgottenPage} />
        </Switch>
      </main>
    </Pane>
  )
}

export default Main
