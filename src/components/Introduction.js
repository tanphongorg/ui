import React from 'react'
import { Header, Icon, Image, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const HeaderExampleUsersIcon = () => (
  <div>
    <Header as='h2' icon textAlign='center'>
      <Icon name='users' circular />
      <Header.Content>
        <div>
          <Link to='/new_course'>
            <Button primary>Create Your Course now</Button>
          </Link>
        </div>
        <h3>or</h3>
        <div>
          <Link to='/search'>
            <Button primary>Browse all courses</Button>
          </Link>
        </div>
      </Header.Content>
    </Header>
  </div>
)

export default HeaderExampleUsersIcon