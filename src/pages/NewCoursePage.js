import React from 'react'
import { withRouter } from 'react-router'

import RteEditor from '../components/RteEditor'

class NewCoursePage extends React.Component {
  render() {
    return (
      <div>
        <h2>New Course</h2>
        <hr/>
        <RteEditor />
      </div>
    )
  }
}

export default withRouter(NewCoursePage)
