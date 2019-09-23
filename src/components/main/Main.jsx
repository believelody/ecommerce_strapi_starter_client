import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Pane, Text } from 'evergreen-ui'
import HomePage from '../../pages/HomePage'
import LoginPage from '../../pages/LoginPage'

const Main = ({}) => {
  return (
    <Pane width='80%' height='100%' margin={0} padding={0}>
      <main>
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/login' exact component={LoginPage} />
        </Switch>
      </main>
    </Pane>
  )
}

export default Main
