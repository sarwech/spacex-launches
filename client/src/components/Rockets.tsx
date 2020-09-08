import React, { useState } from 'react'
import { useQuery } from 'react-apollo'
import { GET_ALL_ROCKETS } from '../queries/getRockets.graphql'
import { Row, Button, Col } from 'antd'
import RocketCard from './RocketCard'

export interface RocketsProps {}

const Rockets: React.SFC<RocketsProps> = () => {
	const [topRocket, setTopRocket] = useState('')
	const { loading, error, data } = useQuery(GET_ALL_ROCKETS)

	if (loading) {
		return <p>Loading...</p>
	}

	if (error) {
		return <p>{error}</p>
	}

	return (
		<>
			<Row>
				<Col>
					<h2>
						{!!topRocket
							? `Your favourite rocket is ${topRocket}.`
							: 'Select a favourite rocket.'}
					</h2>
				</Col>
			</Row>
			<Row gutter={24}>
				{data &&
					data.rockets.map((rocket: any) => (
						<RocketCard
							rocket={rocket}
							loading={loading}
							setTopRocket={setTopRocket}
							topRocket={topRocket}
						/>
					))}
			</Row>
		</>
	)
}

export default Rockets
