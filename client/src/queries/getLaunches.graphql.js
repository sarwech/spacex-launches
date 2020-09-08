import gql from 'graphql-tag'

export const GET_ALL_LAUNCHES = gql`
	query getAllLaunches {
		launches {
			flight_number
			mission_name
			rocket {
				rocket_id
				rocket_name
				rocket_type
			}
			details
			launch_date_utc
		}
	}
`
