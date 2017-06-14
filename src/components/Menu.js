import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class MenuExampleSecondary extends Component {
  render () {
    return (
      <Menu secondary>
        <Menu.Item name='home'>
          <Link to='/'>Home</Link>
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
