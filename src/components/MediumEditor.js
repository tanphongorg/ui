import React, { Component } from 'react'
import 'medium-editor/dist/css/medium-editor.css'
import 'medium-editor/dist/css/themes/default.css'
import Editor from 'react-medium-editor'

export default class MediumEditor extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text: ''
    }
  }

  handleChange(text, medium) {
    
  }

  render() {
    return (
      <Editor
        text={this.state.text}
        onChange={this.handleChange}
      />
    )
  }
}
