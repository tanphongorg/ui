/* global it , expect */

import React from 'react'
import App from './App'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

it('renders without crashing', () => {
  const component = shallow(<App />)
  const tree = shallowToJson(component)
  expect(tree).toMatchSnapshot()
})
