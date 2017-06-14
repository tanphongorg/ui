import React from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import seed from '../seeds/test.json'

const About = ({ match, location, history }) => (
  <div>
    <h2>{seed.title}</h2>
    <div>You are now at {location.pathname}</div>
    <Link to='/search'>Browse all courses</Link>
  </div>
)

export default withRouter(About)