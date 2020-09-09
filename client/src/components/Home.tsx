import React from 'react'
import { Row, Typography } from 'antd'
import Rockets from './Rockets'

export interface HomeProps {}

const { Title } = Typography

const Home: React.SFC<HomeProps> = () => {
	return (
		<>
			<Row>
				<Title level={2}>Home</Title>
			</Row>
			<Row>
				<Rockets />
			</Row>
		</>
	)
}

export default Home
