import React from 'react'
import { Grid, Card } from 'semantic-ui-react'
import _ from 'lodash'
import CourseInfo from './CourseInfo'

const CourseRow = ({ coursesChunk }) => (
  <Card.Group>
    {
      coursesChunk.map((chunk) => {
        return (
          <CourseInfo key={chunk.id} course={chunk} />
        )
      })
    }
  </Card.Group>
)

const GridExampleDividedNumber = ({ courses }) => (
  <Grid columns={3}>
    {
      _.chunk(courses, 3).map((courses_, i) => {
        return (
          <Grid.Row key={i} verticalAlign={'middle'} >
            <CourseRow coursesChunk={courses_} />
          </Grid.Row>
        )
      })
    }
  </Grid>
)

export default GridExampleDividedNumber
