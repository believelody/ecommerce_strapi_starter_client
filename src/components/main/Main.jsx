import React from 'react'
import { useLocation, Switch, Route } from 'react-router-dom'
import { Pane, Text } from 'evergreen-ui'
import PrivateRoute from '../private-route/PrivateRoute'
import Modal from '../modal/Modal'
import HomePage from '../../pages/HomePage'
import CheckoutPage from '../../pages/CheckoutPage'
import LoginPage from '../../pages/LoginPage'
import RegisterPage from '../../pages/RegisterPage'
import PasswordForgottenPage from '../../pages/PasswordForgottenPage'
import ProductDetailPage from '../../pages/ProductDetailPage'
import ProfilePage from '../../pages/ProfilePage'
import ResetPasswordPage from '../../pages/ResetPasswordPage'
import ProductListPage from '../../pages/ProductListPage'

const Main = () => {

  return (
    <Pane width='75%' height='100%' overflow='auto' margin={0} padding={0}>
      <main>
        <Switch>
          <Route path='/' exact children={<HomePage />} />
          <Route path='/products' exact children={<ProductListPage />} />
          <Route path='/products/:id' exact component={ProductDetailPage} />
          <Route path='/login' exact component={LoginPage} />
          <Route path='/register' exact component={RegisterPage} />
          <Route path='/forgot-password' exact component={PasswordForgottenPage} />
          <Route path='/reset-password' exact component={ResetPasswordPage} />
          <PrivateRoute path='/profile' exact component={ProfilePage} />
          <PrivateRoute path='/checkout' exact component={CheckoutPage} />
        </Switch>
      </main>
    </Pane>
  )
}

export default Main
