import React from 'react'
import { Grid, Card } from 'semantic-ui-react'
import _ from 'lodash'
import CourseInfo from './CourseInfo'

const CourseRow = ({ courses_chunk }) => (
  <Card.Group>
    {
      courses_chunk.map((chunk) => {
        return (
          <CourseInfo course={chunk} />
        )
      })
    }
  </Card.Group>
)

const GridExampleDividedNumber = ({ courses }) => (
  <Grid columns={3} divided>
    {
      _.chunk(courses, 3).map((courses_) => {
        return (
          <Grid.Row>
            <CourseRow courses_chunk={courses_} />
          </Grid.Row>
        )
      })
    }
  </Grid>
)

export default GridExampleDividedNumber
