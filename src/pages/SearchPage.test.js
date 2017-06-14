/* global it , expect */

import React from 'react'
import SearchPage from './SearchPage'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

it('renders without crashing', () => {
  const component = shallow(<SearchPage />)
  const tree = shallowToJson(component)
  expect(tree).toMatchSnapshot()
})
