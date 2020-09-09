import React from 'react'
import { Col, Card } from 'antd'
import { StarOutlined } from '@ant-design/icons'
import { rocketImages } from '../rocketImages'
import { Rocket } from '../Types'

export interface RocketCardProps {
	rocket: Rocket
	loading: boolean
	setTopRocket: Function
	topRocket: string
}

const { Meta } = Card

const RocketCard: React.SFC<RocketCardProps> = ({
	rocket,
	loading,
	setTopRocket,
	topRocket,
}) => {
	let rocket_id: any
	if (rocket) {
		rocket_id = rocket.rocket_id
	}

	return (
		<Col>
			<Card
				style={{ width: 300, height: 500 }}
				cover={
					<img
						alt='example'
						src={rocketImages[rocket_id]}
						height={200}
						style={{ objectFit: 'contain' }}
					/>
				}
				actions={[
					<StarOutlined
						key='favourite'
						style={{ color: topRocket === rocket_id ? '#f1c40f' : 'black' }}
						onClick={() => setTopRocket(rocket_id)}
					/>,
				]}
				loading={loading}>
				<Meta
					title={rocket && rocket.rocket_name}
					description={rocket && rocket.description}
				/>
			</Card>
		</Col>
	)
}

export default RocketCard
