import React from 'react'
import { Icon, Step } from 'semantic-ui-react'

const StepExampleIcons = () => (
  <Step.Group fluid={true} size='tiny'>
    <Step>
      <Icon name='building' />
      <Step.Content>
        <Step.Title>Create Course</Step.Title>
        <Step.Description>Choose your shipping options</Step.Description>
      </Step.Content>
    </Step>

    <Step>
      <Icon name='book' />
      <Step.Content title='Add Lessons and Projects' description='Add lessons to your course' />
    </Step>

    <Step icon='dollar' title='Pricing' description='Pricing your knowledge' />
    <Step icon='send' title='Publish' description='Publish your course to the world' />
    <Step icon='check' title='Assessment' description='Assess your students' />
  </Step.Group>
)

export default StepExampleIcons