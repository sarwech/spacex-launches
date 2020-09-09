import React from 'react'
import { shallow, mount } from 'enzyme'
import RocketCard from '../RocketCard.tsx'
import { Card } from 'antd'
import { StarOutlined } from '@ant-design/icons'

const mockSetState = jest.fn()

describe('<RocketCard />', () => {
	it('should render correctly', () => {
		const wrapper = shallow(<RocketCard />)
		expect(wrapper).toMatchSnapshot()
	})

	it('should contain a Card', () => {
		const wrapper = shallow(<RocketCard />)

		expect(wrapper.find(Card).length).toEqual(1)
	})

	it('should contain StarOutlined', () => {
		const wrapper = shallow(<RocketCard />)
		expect(wrapper.find(Card).dive().find(StarOutlined).exists()).toBe(true)
	})

	it('should update when star is clicked', () => {
		const wrapper = mount(<RocketCard setTopRocket={mockSetState} />)
		const starIcon = wrapper.find(StarOutlined)
		starIcon.simulate('click')
		expect(mockSetState).toHaveBeenCalled()
	})
})
