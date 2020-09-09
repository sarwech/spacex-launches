import React, { useState } from 'react'
import { useQuery } from 'react-apollo'
import { GET_ALL_ROCKETS } from '../queries/getRockets.graphql'
import { Row, Button, Col, Tag, Typography, Space } from 'antd'
import RocketCard from './RocketCard'
import { Rocket } from '../Types'

export interface RocketsProps {}

const { Title } = Typography

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
			<Col span={24}>
				{!!topRocket ? (
					<Space>
						<Title level={3}>Your favourite rocket is</Title>
						<Title level={3} mark>
							{
								data.rockets.filter(
									(rocket: Rocket) => rocket.rocket_id === topRocket
								)[0].rocket_name
							}
						</Title>
					</Space>
				) : (
					<Title level={3}>Select a favourite rocket.</Title>
				)}
			</Col>
			<Row gutter={24}>
				{data &&
					data.rockets.map((rocket: any) => (
						<RocketCard
							key={rocket.rocket_id}
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
