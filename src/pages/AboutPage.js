import React from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import seed from '../seeds/test.json'



class AboutPage extends React.Component {
  render() {

    return (
      <div>
        <h2>{seed.title}</h2>
        <Link to='/search'>Browse all courses</Link>
        <hr/>
      </div>
    )
  }
}

export default withRouter(AboutPage)
