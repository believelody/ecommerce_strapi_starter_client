import React from 'react'
import ReactDOM from 'react-dom'
import Helmet from 'react-helmet'
import App from './App'
import seo from './utils/seo.utils'

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
