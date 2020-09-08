import React from 'react'
import { useQuery } from 'react-apollo'
import { Row, List, Avatar } from 'antd'
import TimeAgo from 'react-timeago'
import { GET_ALL_LAUNCHES } from '../queries/getLaunches.graphql'
import { rocketImages } from '../rocketImages'
import { Launch } from '../Types'

export interface LaunchesProps {}

const Launches: React.SFC<LaunchesProps> = () => {
	const { loading, error, data } = useQuery(GET_ALL_LAUNCHES)

	if (loading) {
		return <p>Loading...</p>
	}

	if (error) {
		return <p>{error}</p>
	}

	return (
		<>
			<Row>
				<h1>Launches</h1>
			</Row>
			{console.log(data && data)}
			<List
				itemLayout='horizontal'
				dataSource={data.launches}
				renderItem={(launch: Launch) => (
					<List.Item>
						<List.Item.Meta
							avatar={<Avatar src={rocketImages[launch.rocket.rocket_id]} />}
							title={launch.mission_name}
							description={launch.details}
						/>
						<TimeAgo date={launch.launch_date_utc} />
					</List.Item>
				)}
			/>
		</>
	)
}

export default Launches
