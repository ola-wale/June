app.controller('contactController',function($scope){

function initMap() {
        var uluru = {lat: 51.775739, lng: 19.490522};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 7,
          center: uluru,
					styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"administrative.country","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#ff0000"},{"visibility":"on"}]}]
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }
					initMap();
		});
