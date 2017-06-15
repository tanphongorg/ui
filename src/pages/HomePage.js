import React from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'

import { Grid, Image, Progress } from 'semantic-ui-react'
import Feed from '../components/Feed'
import TopTeachers from '../components/TopTeachers'
import TrendingCourses from '../components/TrendingCourses'
import CourseStats from '../components/CourseStats'
import Introduction from '../components/Introduction'

const About = () => (
  <Grid>
    <Grid.Row>
      <Grid.Column width={5}>
        <Introduction />
      </Grid.Column>
      <Grid.Column width={5}>
        <Image src={'https://s3.amazonaws.com/titlepages.leanpub.com/reactiveandroid/hero?1494036233'} />
        <Progress percent={100} success size='tiny'>
          The progress was successful
        </Progress>
      </Grid.Column>
      <Grid.Column width={5}>
        <h3>Featured Course</h3>
        <CourseStats />
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column width={3}>
        <h3>Trending Teachers</h3>
        <TopTeachers />
      </Grid.Column>
      <Grid.Column width={9}>
        <h3>Trending Courses</h3>
        <TrendingCourses />
        <Link to='/search'>Browse all courses</Link>
      </Grid.Column>
      <Grid.Column width={3}>
        <h3>Recent Activity</h3>
        <Feed />
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default withRouter(About)
