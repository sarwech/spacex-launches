import gql from 'graphql-tag'

export const GET_ALL_ROCKETS = gql`
	query getAllRockets {
		rockets {
			rocket_id
			rocket_name
			rocket_type
			description
		}
	}
`
