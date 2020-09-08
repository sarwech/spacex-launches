import gql from 'graphql-tag'

export const GET_ALL_LAUNCHES = gql`
	query getAllLaunches {
		launches {
			flight_number
			mission_name
			rocket
		}
	}
`
