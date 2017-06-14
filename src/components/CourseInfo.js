import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'

const CardExample = ({course}) => (
  <Card>
    <Card.Content>
      <Image floated='right' size='mini' src='https://react.semantic-ui.com/assets/images/avatar/large/steve.jpg' />
      <Card.Header>
        { course.title }
      </Card.Header>
      <Card.Meta>
        { course.meta }
      </Card.Meta>
      <Card.Description>
        { course.description }
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <div className='ui two buttons'>
        <Button basic color='green'>Approve</Button>
        <Button basic color='red'>Decline</Button>
      </div>
    </Card.Content>
  </Card>
)

export default CardExample
