import React from 'react'
import { withRouter } from 'react-router'
import coursesData from '../seeds/courses'

import CourseList from '../components/CourseList'

const Search = ({ match, location, history }) => (
  <div>
    <h2>Search</h2>
    <div>You are now at {location.pathname}</div>
    <CourseList courses={coursesData} />
  </div>
)

export default withRouter(Search)
