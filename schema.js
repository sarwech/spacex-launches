const {
	GraphQLObjectType,
	GraphQLInt,
	GraphQLString,
	GraphQLBoolean,
} = require('graphql')

// Types

// 1. Launches

const LaunchType = new GraphQLObjectType({
	name: 'Launch',
	fields: () => ({
		flight_number: { type: GraphQLInt },
		mission_name: { type: GraphQLString },
		launch_year: { type: GraphQLString },
		launch_date_local: { type: GraphQLString },
		launch_success: { type: GraphqlBoolean },
		rocket: { type: RocketType },
	}),
})

// 2. Rockets

const RocketType = new GraphQLObjectType({
	name: 'Rocket',
	fields: () => ({
		id: { type: GraphQLString },
		rocket_name: { type: GraphQLString },
		rocket_type: { type: GraphQLString },
	}),
})

// 3. Payloads

const PayloadType = new GraphQLObjectType({
	name: 'Payload',
	fields: () => ({
		payload_type: { type: GraphQLString },
		customer: { type: GraphQLString },
		nationality: { type: GraphQLString },
	}),
})
