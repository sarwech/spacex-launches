export type Rocket = {
	rocket_id: string
	rocket_name: string
	rocket_type: string
	description: string
}

export type Launch = {
	flight_number: number
	mission_name: string
	rocket: Rocket
	details: string
	launch_date_utc: string
}
