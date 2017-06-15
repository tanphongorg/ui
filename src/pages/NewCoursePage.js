import React from 'react'
import { withRouter } from 'react-router'

import EditorFormatSelector from '../components/EditorFormatSelector'
import RteEditor from '../components/RteEditor'
import LatexEditor from '../components/LatexEditor'
import CourseWizard from '../components/CourseWizard'

class NewCoursePage extends React.Component {
  state = {
    format: 'html'
  }

  onFormatChange = ({ value }) => this.setState({ format: value })

  render() {
    let editor = <RteEditor format='html' />
    if (this.state.format === 'latex') {
      editor = <LatexEditor />
    } else if (this.state.format === 'markdown' ) {
      editor = <RteEditor format='markdown' />
    }
    return (
      <div>
        <CourseWizard />
        <hr/>
        <EditorFormatSelector onFormatChange={this.onFormatChange} />
        { editor }
      </div>
    )
  }
}

export default withRouter(NewCoursePage)
