app.controller('pricingController', function($scope, $rootScope) {
	$rootScope.subColorClass = 'animated slideInDown';
	$scope.$on("$destroy", function() {
		$rootScope.subColorClass = 'animated slideOutUp';
	});
	$scope.models = {
		0: {
			name: 'Personal',
			price: '5',
			currency: '$',
			image: 'http://image.flaticon.com/icons/svg/171/171240.svg',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.',
			link: '#pricing'
		},
		1: {
			name: 'Professional',
			price: '15',
			currency: '$',
			image: 'http://image.flaticon.com/icons/svg/171/171240.svg',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.',
			link: '#pricing'
		},
		2: {
			name: 'Enterprise',
			price: '150',
			currency: '$',
			image: 'http://image.flaticon.com/icons/svg/171/171240.svg',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.',
			link: '#pricing'
		}
	};
	$scope.callOwl = function() {
		$(".owl-carousel").owlCarousel({
			width: 'auto',
			nav:false,
			responsive: {
				0: {
					items: 1,
				},
				768: {
					items: 3
				}
			}
		});
	}
});
