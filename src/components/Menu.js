import React, { Component } from 'react'
import { Input, Menu, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class MenuExampleSecondary extends Component {
  render () {
    const { className } = this.props
    return (
      <Menu secondary className={className}>
        <Menu.Item name='home'>
          <Link to='/'><Icon name='home' /></Link>
        </Menu.Item>
        <Menu.Item name='about'>
          <Link to='/about'>About</Link>
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
          <Menu.Item name='logout' />
        </Menu.Menu>
      </Menu>
    )
  }
}
