import React from 'react'
import { shallow } from 'enzyme'
import Launches from '../Launches.tsx'

describe('Launches', () => {
	it('should render correctly', () => {
		const component = shallow(<Launches />)

		expect(component).toMatchSnapshot()
	})
})
