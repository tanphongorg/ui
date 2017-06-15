/* global it , expect */

import React from 'react'
import CourseList from './CourseList'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

it('renders without crashing', () => {
  const component = shallow(<CourseList />)
  const tree = shallowToJson(component)
  expect(tree).toMatchSnapshot()
})
