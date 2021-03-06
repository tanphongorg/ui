import React from 'react'
import { Container } from 'semantic-ui-react'
import './App.css'

import Menu from './components/Menu'

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import SearchPage from './pages/SearchPage'
import NewCoursePage from './pages/NewCoursePage'

import { Route } from 'react-router-dom'

const App = () => (
  <Container>
    <Menu />
    <hr />
    <div className='containerPadding'>
      <Route exact path='/' key={'home' + new Date()} component={HomePage} />
      <Route path='/about' key={'about' + new Date()} component={AboutPage} />
      <Route path='/search' key={'search' + new Date()} component={SearchPage} />
      <Route path='/new_course' component={NewCoursePage} />
    </div>
  </Container>
)
export default App
