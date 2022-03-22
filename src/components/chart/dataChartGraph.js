const dataChartGraph = {
	type: 'bar',
	options: {
		chart: {
			id: 'bar-chart',
			stacked: false,
			fontFamily: 'inherit',
			toolbar: {
				show: false,
			},
			animations: {
				speed: 200,
			},
		},
		colors: ['#46dca6', '#f24560'],
		plotOptions: {
			bar: {
				horizontal: false,
				columnWidth: '60%',
			},
		},
		xaxis: {
			type: 'category',
			categories: ['', ''],
		},
		fill: {
			type: 'solid',
		},
		legend: {
			show: true,
			position: 'bottom',
			offsetX: 20,
			labels: {
				useSeriesColors: false,
			},
			markers: {
				width: 10,
				height: 10,
				radius: 50,
			},
			itemMargin: {
				horizontal: 15,
				vertical: 5,
			},
		},
		dataLabels: {
			enabled: false,
		},
		grid: {
			show: true,
		},
		tooltip: {
			x: {
				show: false,
			},
		},
	},

	series: [
		{
			name: 'Ingreso',
			data: [104000],
		},
		{
			name: 'Egreso',
			data: [200000],
		},
	],
};
export default dataChartGraph;
