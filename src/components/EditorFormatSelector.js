import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

export default class RadioExampleRadioGroup extends Component {
  state = { value: 'html' }
  handleChange = (e, { value }) => {
    this.setState({ value: value })
    this.props.onFormatChange({ value })
  }

  render() {
    const { value } = this.state
    return (
      <Form>
        <Form.Group inline>
          <label>Size</label>
          <Form.Radio label='HTML' value='html' checked={value === 'html'} onChange={this.handleChange} />
          <Form.Radio label='Markdown' value='markdown' checked={value === 'markdown'} onChange={this.handleChange} />
          <Form.Radio label='Latex' value='latex' checked={value === 'latex'} onChange={this.handleChange} />
        </Form.Group>
      </Form>
    )
  }
}
