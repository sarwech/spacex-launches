import React from 'react'
import TimeAgo from 'react-timeago'
import { List, Avatar, Table } from 'antd'
import { rocketImages } from '../rocketImages'
import { Launch } from '../Types'

export interface LaunchListProps {
	launches: any
}

const LaunchList: React.SFC<LaunchListProps> = ({ launches }) => {
	const { Column } = Table

	return (
		<Table
			dataSource={launches.sort(
				(a: Launch, b: Launch) =>
					(new Date(b.launch_date_utc) as any) -
					(new Date(a.launch_date_utc) as any)
			)}
			rowKey='flight_number'>
			<Column title='Flight #' dataIndex='flight_number' key='flight_number' />
			<Column title='Mission' dataIndex='mission_name' key='mission_name' />
			<Column
				title='Launch date'
				dataIndex='launch_date_utc'
				key='launch_date_utc'
				render={(launchDate) => <TimeAgo date={launchDate} />}
			/>
			<Column title='Details' dataIndex='details' key='details' />
		</Table>
	)
}

export default LaunchList
