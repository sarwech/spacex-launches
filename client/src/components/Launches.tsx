import React, { useState } from 'react'
import { useQuery } from 'react-apollo'
import { Row, Typography } from 'antd'
import { GET_ALL_LAUNCHES } from '../queries/getLaunches.graphql'

import BarChart from './BarChart'
import LaunchList from './LaunchList'

export interface LaunchesProps {}

const { Title } = Typography

const Launches: React.SFC<LaunchesProps> = () => {
	const { loading, error, data } = useQuery(GET_ALL_LAUNCHES)
	const [sortBy, setSortBy] = useState('desc')

	if (loading) {
		return <p>Loading...</p>
	}

	if (error) {
		return <p>{error}</p>
	}

	return (
		<>
			<Row>
				<Title level={3}>Launches</Title>
			</Row>
			<Row>
				<BarChart launches={data.launches} />
			</Row>
			<LaunchList launches={data.launches} />
		</>
	)
}

export default Launches
