//calculate text height for canvas use.
var getTextHeight = function(font) {

	var text = $('<span>Hg</span>').css({
		fontFamily: font
	});
	var block = $('<div style="display: inline-block; width: 1px; height: 0px;"></div>');

	var div = $('<div></div>');
	div.append(text, block);

	var body = $('body');
	body.append(div);

	try {

		var result = {};

		block.css({
			verticalAlign: 'baseline'
		});
		result.ascent = block.offset().top - text.offset().top;

		block.css({
			verticalAlign: 'bottom'
		});
		result.height = block.offset().top - text.offset().top;

		result.descent = result.height - result.ascent;

	} finally {
		div.remove();
	}

	return result;
};

var app = angular.module("june", ["ngRoute", 'ngAnimate']);
app.config(function($routeProvider, $locationProvider) {
	$routeProvider
		.when("/", {
			Name: 'Main',
			templateUrl: "templates/main.html",
			controller: 'mainViewController'
		})
		.when("/main", {
			Name: 'Main',
			templateUrl: "templates/main.html",
			controller: 'mainViewController'
		})
		.when("/skills", {
			Name: 'Skills',
			templateUrl: "templates/skills.html",
			controller: 'skillsController'
		})
		.when("/about", {
			Name: 'About',
			templateUrl: "templates/about.html"
		})
		.when("/education", {
			Name: 'Education',
			templateUrl: "templates/education.html",
			controller: 'educationController'
		})
		.when("/experience", {
			Name: 'Experience',
			templateUrl: "templates/experience.html",
			controller: 'experienceController'
		})
		.when("/pricing", {
			Name: 'Pricing',
			templateUrl: "templates/pricing.html",
			controller: 'pricingController'
		})
		.when("/portfolio", {
			Name: 'Portfolio',
			templateUrl: "templates/portfolio.html",
			controller: 'portfolioController'
		})
		.when("/contact", {
			Name: 'Contact',
			templateUrl: "templates/contact.html",
			controller: 'contactController'
		})
		.otherwise({
			Name: 'Main',
			templateUrl: "templates/main.html",
			controller: 'mainViewController'
    });
});
//HashError
document.location.hash =  '/';

app.run(function($rootScope) {
	$rootScope.$on('$routeChangeSuccess', function(ev, data) {
		$('body').css('overflow-y', 'auto');
		//fadeout the modal on routeChangeSuccess
		$('#modal').fadeOut();
		var routeName = data.$$route.Name;
		$rootScope.viewClass = routeName;
		$('.route-chooser').append($('span.current-route').removeClass('fix'));
		$('.route-chooser li').removeClass('activeroute');
		var $this = $('.route-chooser li:contains(' + routeName + ')').addClass('activeroute');
		$('span.current-route').css('width', $this.css('width'));
		$('span.current-route').css('transform', 'translateX(' + $this.offset().left + 'px)');
		$('span.current-route').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
			$('.activeroute').append($('span.current-route').addClass('fix'));
			$('body').css('display','block');
		})
	})
});

