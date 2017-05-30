app.controller('portfolioController', function($scope, $rootScope) {
	$scope.portfolios = {
		0: {
			image: 'images/portfolio/0.jpg',
			name: 'Paper Bag',
			modalTitle: 'You should put a title here you know<span class="text-accent"><b>.</b><span>',
			modalAbout: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			images: ['images/portfolio/0.jpg', 'images/portfolio/1.jpg', 'images/portfolio/2.jpg', 'images/portfolio/3.jpg', 'images/portfolio/4.jpg'],
			details: {
				name: 'Paper Bag',
				date: '04-10-2016',
				client: 'MTV',
				type: 'Product Design'
			},
			subText: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire',
			buttonText: 'PREVIEW PROJECT',
			buttonLink: '#portfolio',
			tags:'product design'
		},
		1: {
			image: 'images/portfolio/1.jpg',
			name: 'Paper Hot Cup',
			modalTitle: 'Where\'s my title<span class="text-accent"><b>?</b><span>',
			modalAbout: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			images: ['images/portfolio/1.jpg', 'images/portfolio/0.jpg','images/portfolio/4.jpg','images/portfolio/3.jpg'],
			details: {
				name: 'Paper Hot Cup',
				date: '08-11-2016',
				client: 'EarBook Inc.',
				type: 'Product Design & Branding'
			},
			subText: 'The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.',
			buttonText: 'BUY PRODUCT',
			buttonLink: '#portfolio',
			tags:'product design'
		},
		2: {
			image: 'images/portfolio/2.jpg',
			name: 'Basic Stationery',
			modalTitle: 'Untitled <br />Unmastered<span class="text-accent"><b>0</b><span>1',
			modalAbout: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			images: ['images/portfolio/2.jpg', 'images/portfolio/3.jpg', 'images/portfolio/1.jpg','images/portfolio/4.jpg'],
			details: {
				name: 'Basic Stationery',
				date: '09-12-2016',
				client: 'HideoKojima',
				type: 'Product Design'
			},
			subText: 'The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.',
			buttonText: 'BUY SAMPLES',
			buttonLink: '#portfolio',
			tags:'product design'
		},
		3: {
			image: 'images/portfolio/3.jpg',
			name: 'Red T-shirt',
			modalTitle: 'Untitled <br />Unmastered<span class="text-accent"><b>0</b><span>2',
			modalAbout: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			images: ['images/portfolio/3.jpg', 'images/portfolio/2.jpg', 'images/portfolio/1.jpg', 'images/portfolio/0.jpg'],
			details: {
				name: 'Red T-shirt',
				date: '09-12-2016',
				client: 'Hellipostale',
				type: 'Clothing'
			},
			subText: 'The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.',
			buttonText: 'TRY ON',
			buttonLink: '#portfolio',
			tags:'clothing'
		},
		4: {
			image: 'images/portfolio/4.jpg',
			name: 'Tote Bag',
			modalTitle: 'Untitled <br />Unmastered<span class="text-accent"><b>0</b><span>3',
			modalAbout: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			images: ['images/portfolio/4.jpg','images/portfolio/3.jpg', 'images/portfolio/2.jpg', 'images/portfolio/1.jpg', 'images/portfolio/0.jpg'],
			details: {
				name: 'Tote Bag',
				date: '15-12-2016',
				client: 'Orange',
				type: 'Design'
			},
			subText: 'The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.',
			buttonText: 'PURCHASE',
			buttonLink: '#portfolio',
			tags:'design product'
		},
	}
	$scope.openModal = function(index) {
		$scope.currentModal = $scope.portfolios[index];
		$('.portfolio-modal').fadeIn();
		$('body').css('overflow-y', 'hidden');
		var $gridModal;
			$gridModal = $('.gridModal').isotope();
			$gridModal.isotope('layout');
		//isotope has weird unexpected bugs. so this would help more than it would hurt.
		setInterval(function(){
			var $gridModal;
				$gridModal = $('.gridModal').isotope();
				$gridModal.isotope('layout');
		},1000);
	}
	$scope.closeModal = function() {
		$('.portfolio-modal').fadeOut('', function() {
			$('body').css('overflow-y', 'auto');
		});
	}
	$('body').on('mouseenter', '.item', function(event) {
		var $this = $(this);
		$(this).find('.circle').offset({
			top: event.pageY,
			left: event.pageX
		}).one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
			function(e) {
				$this.find('h3').fadeIn();
			});
	})
	$('body').on('mouseleave', '.item', function(event) {
		var $this = $(this);
		$(this).find('.circle').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
			function(e) {
				$this.find('h3').fadeOut();
			});
	})
	$scope.popMeUp = function(src) {
		$('.popmeup img').remove();
		$('.popmeup').append('<img src="' + src + '" />').fadeIn();
		$('body').addClass('popmeup-open')
	}
	$scope.closePopMeUp = function() {
		$('.popmeup').fadeOut('', function() {
			$('.popmeup').find('img').remove()
		});
		$('body').removeClass('popmeup-open')
	}
	$scope.callGrid = function(){
		var $grid;
		$(document).ready(function(){
			$grid = $('.grid').isotope();
			$('body').on('click','.portfolio-template .categories li',function(){
				var $cat = $(this).attr('data-cat');
				$('.portfolio-template .categories li').removeClass('active');
				$(this).addClass('active');
				if($cat != '*'){
					$grid.isotope({ filter: '[data-tags~='+$cat+']' });
				} else {
					$grid.isotope({ filter: '*' });
				}
			});
		})
		//isotope has weird unexpected bugs. so this would help more than it would hurt.
		setInterval(function(){
			$grid = $('.grid').isotope();
		},1000);
	}
});
app.filter('unsafe', function($sce) {
	return $sce.trustAsHtml;
});
