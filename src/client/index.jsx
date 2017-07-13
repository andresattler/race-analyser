import 'whatwg-fetch'
import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { HashRouter } from 'react-router-dom'

import App from './app'
import './style/style.styl'

const rootEl = document.getElementById('app')

const wrapApp = AppComponent => (
  <AppContainer>
    <HashRouter>
      <AppComponent />
    </HashRouter>
  </AppContainer>
)

ReactDOM.render(wrapApp(App), rootEl)

if (module.hot) {
  module.hot.accept('./app', () => {
    // eslint-disable-next-line global-require
    const NextApp = require('./app').default
    ReactDOM.render(wrapApp(NextApp), rootEl)
  })
}
