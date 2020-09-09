import React from 'react'
import { Col, Card } from 'antd'
import { StarOutlined } from '@ant-design/icons'
import { rocketImages } from '../rocketImages'
import { Rocket } from '../Types'
import { StyledRocketCard } from '../Styles'

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
			<StyledRocketCard
				cover={
					<img
						alt='example'
						src={rocketImages[rocket_id]}
						width={200}
						style={{ minHeight: 250, maxHeight: 250, objectFit: 'contain' }}
					/>
				}
				actions={[
					<StarOutlined
						key='favourite'
						style={{ color: topRocket === rocket_id ? '#f1c40f' : 'black' }}
						onClick={() => setTopRocket(rocket_id)}
					/>,
				]}
				loading={loading}
				selected={topRocket === rocket_id ? true : false}>
				<Meta
					title={rocket && rocket.rocket_name}
					description={
						rocket && rocket.description.length > 150
							? `${rocket.description.substring(0, 150)}...`
							: rocket.description
					}
				/>
			</StyledRocketCard>
		</Col>
	)
}

export default RocketCard
