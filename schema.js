const {
	GraphQLObjectType,
	GraphQLInt,
	GraphQLString,
	GraphQLBoolean,
	GraphQLList,
	GraphQLSchema,
} = require('graphql')
const axios = require('axios')

// Types

// 1. Launches

const LaunchType = new GraphQLObjectType({
	name: 'Launch',
	fields: () => ({
		flight_number: { type: GraphQLInt },
		mission_name: { type: GraphQLString },
		launch_date_utc: { type: GraphQLString },
		launch_success: { type: GraphQLBoolean },
		launch_year: { type: GraphQLString },
		rocket: { type: RocketType },
		details: { type: GraphQLString },
	}),
})

// 2. Rockets

const RocketType = new GraphQLObjectType({
	name: 'Rocket',
	fields: () => ({
		rocket_id: { type: GraphQLString },
		rocket_name: { type: GraphQLString },
		rocket_type: { type: GraphQLString },
		description: { type: GraphQLString },
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

const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		launches: {
			type: new GraphQLList(LaunchType),
			resolve(parent, args) {
				return axios
					.get('https://api.spacexdata.com/v3/launches')
					.then((data) => data.data)
			},
		},
		launch: {
			type: LaunchType,
			args: {
				flight_number: {
					type: GraphQLInt,
				},
			},
			resolve(parent, args) {
				return axios
					.get(`https://api.spacexdata.com/v3/launches/${args.flight_number}`)
					.then((data) => data.data)
			},
		},
		rockets: {
			type: new GraphQLList(RocketType),
			resolve(parent, args) {
				return axios
					.get('https://api.spacexdata.com/v3/rockets')
					.then((data) => data.data)
			},
		},
		rocket: {
			type: RocketType,
			args: {
				id: {
					type: GraphQLInt,
				},
			},
			resolve(parent, args) {
				return axios
					.get(`https://api.spacexdata.com/v3/rockets/${args.id}`)
					.then((data) => data.data)
			},
		},
		payloads: {
			type: new GraphQLList(PayloadType),
		},
	},
})

module.exports = new GraphQLSchema({
	query: RootQuery,
})
