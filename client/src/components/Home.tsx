import React from 'react'
import { Row } from 'antd'
import Rockets from './Rockets'

export interface HomeProps {}

const Home: React.SFC<HomeProps> = () => {
	return (
		<>
			<Row>
				<h1>Home</h1>
			</Row>
			<Row>
				<Rockets />
			</Row>
		</>
	)
}

export default Home
