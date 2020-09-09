import React from 'react'
import { Bar } from 'react-chartjs-2'
import { format } from 'date-fns'
import { Launch } from '../Types'

export interface BarChartProps {
	launches: any
}

const BarChart: React.SFC<BarChartProps> = ({ launches }) => {
	const sortedDates = launches.sort((a: Launch, b: Launch) => {
		return Date.parse(a.launch_date_utc) > Date.parse(b.launch_date_utc)
	})
	const dateRange = [
		parseInt(format(new Date(sortedDates[0].launch_date_utc), 'yyyy')),
		parseInt(
			format(
				new Date(sortedDates[sortedDates.length - 1].launch_date_utc),
				'yyyy'
			)
		),
	]

	console.log(dateRange)
	const getValues = () => {
		let launchCount = []
		for (let i = dateRange[0]; i < dateRange[1]; i++) {
			const match = launches.filter(
				(each: Launch) =>
					format(new Date(each.launch_date_utc), 'yyyy') === i.toString()
			).length
			launchCount.push({ year: i, count: parseInt(match, 10) })
		}
		return launchCount
	}

	const chartData = {
		labels: getValues().map((value) => value.year),
		datasets: [
			{
				data: getValues().map((value) => value.count),
			},
		],
	}
	return (
		<Bar
			data={chartData}
			options={{
				layout: {
					padding: 5,
				},
				legend: {
					display: false,
				},
				scales: {
					xAxes: [
						{
							display: true,
							gridLines: {
								display: true,
							},
							ticks: {
								min: 0,
								autoSkip: true,
							},
						},
					],
					yAxes: [
						{
							gridLines: {
								display: false,
							},
							ticks: {
								min: 0,
								stepSize: 10,
							},
						},
					],
				},
			}}
			height={120}
		/>
	)
}

export default BarChart
