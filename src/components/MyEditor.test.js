/* global it , expect */

import React from 'react'
import MyEditor from './MyEditor'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

it('renders without crashing', () => {
  const component = shallow(<MyEditor />)
  const tree = shallowToJson(component)
  expect(tree).toMatchSnapshot()
})
