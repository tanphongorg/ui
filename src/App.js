import React from 'react'
import 'semantic-ui-css/semantic.min.css'

import Menu from './components/Menu'

import LandingPage from './pages/LandingPage'
import AboutPage from './pages/AboutPage'
import SearchPage from './pages/SearchPage'

import store, { history } from './store'
import { ConnectedRouter } from 'react-router-redux'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Menu />
        <Route exact path='/' component={LandingPage} />
        <Route path='/about' component={AboutPage} />
        <Route path='/search' component={SearchPage} />
      </div>
    </ConnectedRouter>
  </Provider>
)
export default App
