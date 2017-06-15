import React, { Component } from 'react'
import FroalaEditor from 'react-froala-editor'

export default class MenuExampleSecondary extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: ''
    }
  }

  render () {
    return (
      <FroalaEditor 
       base='https://cdnjs.cloudflare.com/ajax/libs/froala-editor/2.6.1'
       value={this.state.value}
       config={{charCounterMax: 140}} />
     )
  }
}