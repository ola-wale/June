app.controller('MainCtrl', ['$scope', function($scope) {
	$scope.closeModal = function() {
		$('#modal').fadeOut();
	}
	$scope.showModal = function() {
		$('#modal').fadeIn();
	}
	$('body').on('mouseleave', '#modal', function() {
		$(this).fadeOut();
	});
	var placeFooter = function() {
		var footerHeight = 64;
		var windHeight = $(window).height();
		var offset = parseInt(windHeight) - parseInt(footerHeight);
		$('.route-chooser').css('top', offset);
	}
	placeFooter();
	$(window).resize(placeFooter);
}]);