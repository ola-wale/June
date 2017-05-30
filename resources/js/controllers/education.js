//controller for the education view.
app.controller('educationController', function($scope,$rootScope) {
	var chart = document.getElementById('educationChart').getContext('2d');
	var gradient = chart.createLinearGradient(0, 0, 0, 450);
	gradient.addColorStop(0, 'rgba(255,161,0,1)');
	gradient.addColorStop(0.5, 'rgba(255,0,0,1)');
	gradient.addColorStop(1, 'rgba(255,0,0,1)');
	var fillGradient = chart.createLinearGradient(0, 0, 0, 450);
	fillGradient.addColorStop(0, 'rgba(255,161,0,.0)');
	fillGradient.addColorStop(0.5, 'rgba(255,0,0,.0)');
	fillGradient.addColorStop(1, 'rgba(255,0,0,.0)');
	Chart.defaults.global.tooltips.backgroundColor = '#fff';

	var labels = ['Bsc.', 'Msc.', 'Ba.', 'Phd.'];
	//must be unique!!!
	var dataArr = [2011, 2012, 2017, 2019];
	var descriptionObj = {
		0: {
			title: 'Bsc. Computer Science',
			subTitle: 'University of Lodz',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,\nsed do eiusmod tempor incididunt ut\nlabore et dolore magna aliqua. Ut enim ad minim veniam,\nquis nostrud exercitation ullamco laboris nisi ut aliquip'
		},
		1: {
			title: 'Msc. Tea Drinking',
			subTitle: 'University of Lipton',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,\nsed do eiusmod tempor incididunt ut\nlabore et dolore magna aliqua. Ut enim ad minim veniam,\nquis nostrud exercitation ullamco laboris nisi ut aliquip'
		},
		2: {
			title: 'Ba. Sleeping',
			subTitle: 'Nocturnal University of Universities',
			description: 'Lorem ipsum dolor sit amet,\nsed do eiusmod tempor incididunt ut\nlabore et dolore magna aliqua. Ut enim ad minim veniam,\nquis nostrud exercitation ullamco laboris nisi ut aliquip'
		},
		3: {
			title: 'Phd. Pizza Eating',
			subTitle: 'Pizza Hut University',
			description: 'Lorem ipsum dolor sit amet,\nsed do eiusmod tempor incididunt ut\nlabore et dolore magna aliqua. Ut enim ad minim veniam,\nquis nostrud exercitation ullamco laboris nisi ut aliquip'
		}
	}
	var data = {
		labels: labels,

		datasets: [{
			label: '',
			panGaps: true,
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
			pointHitRadius: 10
		}]
	};
	Chart.defaults.global.tooltips.titleFontColor = Chart.defaults.global.defaultFontColor = '#b5b5b5';
	window.x = chart;
	var hasFilled = false;
	var chartInstance = new Chart(chart, {
		type: 'line',
		data: data,
		options: {
			tooltips: {
				enabled: false,
			},
			responsive: true,
			scales: {
				yAxes: [{
					gridLines: {
						display: false
					},
					ticks: {
						max: 2021
					}
				}],
				xAxes: [{
					gridLines: {
						display: true
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

	$("#educationChart").mousemove(function(e) {
		$("html").css("mouse-c: url('cursor url with protocol'), auto");
		var activeBars = chartInstance.getElementAtEvent(e);
		if (typeof activeBars[0] == 'undefined') {
			$('html').css('cursor', 'initial');
			return;
		}
		$('html').css('cursor', 'pointer');
		var index = activeBars[0]._index;
		var __chart = chartInstance;
		var ctx = document.getElementById('anotateCanvas').getContext('2d');
		if (typeof index != 'undefined') {
			var xaxis = __chart.scales['x-axis-0'];
			var yaxis = __chart.scales['y-axis-0'];
			var adjustCanvases = function() {
				ctx.canvas.width = document.getElementById('educationChart').getContext('2d').canvas.width;
				ctx.canvas.height = document.getElementById('educationChart').getContext('2d').canvas.height;
			}
			adjustCanvases();
			$(window).resize(function() {
				adjustCanvases();
			});
			ctx.font = "500 15px poppins";
			ctx.fillStyle = 'blue';
			ctx.textBaseline = 'middle';
			var xAxis = xaxis.getPixelForValue(undefined, index);
			var align = 'end';
			if (typeof descriptionObj[index] !== 'undefined' && typeof descriptionObj[index].title !== 'undefined') {
				var title = descriptionObj[index].title;
			} else {
				var title = '';
			}
			if (typeof descriptionObj[index] !== 'undefined' && typeof descriptionObj[index].subTitle !== 'undefined') {
				var subtitle = descriptionObj[index].subTitle;
			} else {
				var subtitle = '';
			}
			if (typeof descriptionObj[index] !== 'undefined' && typeof descriptionObj[index].description !== 'undefined') {
				var description = descriptionObj[index].description;
			} else {
				var description = '';
			}
			$rootScope.modalTitle = title;
			$rootScope.modalSubtitle = subtitle;
			$rootScope.modalDesc = description;
			$rootScope.$apply();
			if (!($scope.modalTitle && $scope.modalDesc && $scope.modalSubtitle)) {
				$scope.closeModal();
			}
			if ($(window).width() < 768) {
				return;
			}
			var descriptionLines = description.split('\n');
			var width = [];
			width.push(ctx.measureText(title).width);
			width.push(ctx.measureText(subtitle).width);
			for (var i = 0; i < descriptionLines.length; i++) {
				width.push(ctx.measureText(descriptionLines[i]).width);
			}
			//calculating the width of the longest text here.
			var highestWidth = 0
			for (var i = 0; i < width.length; i++) {
				if (width[i] >= highestWidth) {
					highestWidth = width[i];
				}
			}
			//now that we know the highest width we'll calculate the distance from this index to the end of the screen to know if the text could fit in
			var point = xaxis.getPixelForValue(undefined, index);
			if (point + highestWidth > ctx.canvas.clientWidth) {
				ctx.textAlign = 'end';
			}
			var textHeight = getTextHeight('500 15px poppins').height * 2;
			for (var i = 0; i < descriptionLines.length; i++) {
				textHeight += getTextHeight('500 15px poppins').height;
			}
			var yAxis = ctx.canvas.clientHeight / 2 - textHeight / 2;
			ctx.fillText(title, xAxis, yAxis);
			ctx.fillStyle = 'gray';
			ctx.font = "500 15px poppins";
			ctx.fillText(subtitle, xAxis, yAxis + 20);
			ctx.font = "100 15px poppins";
			ctx.fillStyle = 'rgb(179,179,179)';
			yAxis += 20;
			for (var i = 0; i < descriptionLines.length; i++) {
				ctx.fillText(descriptionLines[i], xAxis, yAxis += 20);
			}
		}
	}).click(function(event) {
		var activeBars = chartInstance.getElementAtEvent(event);
		if ((typeof activeBars[0] == 'undefined') || !($scope.modalTitle && $scope.modalDesc && $scope.modalSubtitle)) {
			$scope.closeModal();
			return;
		}
		$scope.showModal();
	});

	Chart.defaults.global.defaultFontFamily = 'Poppins';

	var ctxShadow = document.getElementById("educationShadowChart").getContext("2d");;
	var _chartInstance = new Chart(ctxShadow, {
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
			}],
			lineAtIndex: 1
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
						display: false,
						max: 2021
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
