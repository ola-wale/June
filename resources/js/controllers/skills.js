//controller for the skills view.
app.controller('skillsController', function($scope) {
	var chart = document.getElementById('skillsChart').getContext('2d');
	var gradient = chart.createLinearGradient(0, 0, 0, 450);
	gradient.addColorStop(0, 'rgba(255,161,0,1)');
	gradient.addColorStop(0.5, 'rgba(255,0,0,1)');
	gradient.addColorStop(1, 'rgba(255,0,0,1)');
	var fillGradient = chart.createLinearGradient(0, 0, 0, 450);
	fillGradient.addColorStop(0, 'rgba(255,161,0,.0)');
	fillGradient.addColorStop(0.5, 'rgba(255,0,0,.0)');
	fillGradient.addColorStop(1, 'rgba(255,0,0,.0)');
	Chart.defaults.global.tooltips.backgroundColor = '#fff';


	var labels = ['WordPress', 'HTML5', 'PhotoShop', 'Illustrator', 'jQuery', 'Css3'];
	var dataArr = [80, 85, 60, 40, 86, 89];

	var data = {
		labels: labels,

		datasets: [{
			label: '',
			borderColor: gradient,
			strokeColor: 'transparent',
			backgroundColor: fillGradient,
			pointStrokeColor: 'rgba(220,220,220,1)',
			pointHighlightFill: '#fff',
			pointHighlightStroke: 'rgba(220,220,220,1)',
			data: dataArr,
			pointBorderColor: "rgba(11,56,249,.43)",
			pointBackgroundColor: "blue",
			pointBorderWidth: 0,
			pointHoverBorderWidth: 17,
			pointHoverRadius: 10,
			pointRadius: 10,
			pointHitRadius: 10,
		}]
	};
	Chart.defaults.global.tooltips.titleFontColor = Chart.defaults.global.defaultFontColor = '#b5b5b5';
	Chart.defaults.global.defaultFontFamily = 'Poppins';
	var chartInstance = new Chart(chart, {
		type: 'line',
		data: data,
		options: {
			responsive: true,
			scales: {
				yAxes: [{
					gridLines: {
						display: false
					}
				}]
			},
			fontFamily: 'Poppins',
			fontColor: 'red',
			legend: {
				display: false,
				labels: {
					display: false
				},
			}
		}
	});
	var ctxShadow = document.getElementById("skillsShadowChart").getContext("2d");;
	var chartInstance = new Chart(ctxShadow, {
		type: 'line',
		data: {
			labels: labels,
			datasets: [{
				data: dataArr,
				backgroundColor: 'transparent',
				pointBorderWidth: 0,
				pointHoverBorderWidth: 0,
				pointHoverRadius: 0,
				pointRadius: 0,
				pointHitRadius: 0,
				borderColor: 'rgba(220,220,220,0.2)',
				borderWidth: 7,
				showScale: false,
				scaleLineColor: 'transparent',
			}]
		},
		options: {
			legend: {
				display: false
			},
			tooltips: {
				enabled: false
			},
			scaleShowLabels: false,
			responsive: true,
			scales: {
				yAxes: [{
					gridLines: {
						display: false,
						drawBorder: false
					},
					ticks: {
						display: false
					},
					labels: {
						display: false
					}
				}],
				xAxes: [{
					gridLines: {
						display: false,
						drawBorder: false
					},
					ticks: {
						display: false
					},
					labels: {
						display: false
					}
				}]
			},
		}
	});
})