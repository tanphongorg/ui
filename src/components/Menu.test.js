/* global it , expect */

import React from 'react'
import Menu from './Menu'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

it('renders without crashing', () => {
  const component = shallow(<Menu />)
  const tree = shallowToJson(component)
  expect(tree).toMatchSnapshot()
})
