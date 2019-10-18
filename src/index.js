import React from 'react'
import ReactDOM from 'react-dom'
import Helmet from 'react-helmet'
import App from './App'
import { AppProvider } from './context'
import seo from './utils/seo.utils'
import './index.css'

document.addEventListener('snipcart.ready', () => {
  ReactDOM.render(
    <AppProvider>
      <Helmet
        title={seo.title}
        meta={seo.meta}
        link={seo.link}
      />
      <App />
    </AppProvider>,
    document.getElementById('root')
  )
})
