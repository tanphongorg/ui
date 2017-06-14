import React from 'react'
import { withRouter } from 'react-router'

const About = ({ match, location, history }) => (
  <div>
    <h2>About</h2>
    <div>You are now at {location.pathname}</div>
  </div>
)

export default withRouter(About)
