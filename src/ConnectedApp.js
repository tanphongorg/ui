import React from 'react'
import 'semantic-ui-css/semantic.min.css'

import App from './App'

import store, { history } from './store'
import { ConnectedRouter } from 'react-router-redux'
import { Provider } from 'react-redux'

const ConnectedApp = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
)
export default ConnectedApp
