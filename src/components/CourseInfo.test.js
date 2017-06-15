/* global it , expect */

import React from 'react'
import CourseInfo from './CourseInfo'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import courses from '../seeds/courses.json'

it('renders without crashing', () => {
  const component = shallow(<CourseInfo course={courses[0]} />)
  const tree = shallowToJson(component)
  expect(tree).toMatchSnapshot()
})
