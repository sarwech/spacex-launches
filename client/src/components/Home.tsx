import React, { useState } from 'react'

export interface HomeProps {}

const Home: React.SFC<HomeProps> = () => {
	const [topRocket, setTopRocket] = useState('')

	return (
		<>
			<h1>Home</h1>
		</>
	)
}

export default Home
