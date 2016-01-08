function initialize() {
        var mapCanvas = document.getElementById('map');
        var mapOptions = {
          center: new google.maps.LatLng(39, -95),
          zoom: 5,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(mapCanvas, mapOptions);
        var pin1 = getLocation('philadelphia'); //new google.maps.LatLng(39.9525839, -75.1652215);
        //var pin2 = getLocation('new york');
        //var geocoder = new google.maps.Geocoder();
        //var marker = geocodeAddress(geocoder, map);
        var infowindow1 = new google.maps.InfoWindow({
          content: 'Rachel Han',
          map: map
        });
        infowindow1.close();
        var marker1 = new google.maps.Marker({
          position: pin1,
          map: map
        });
        //marker1.setMap(map);
        marker1.addListener('mouseover', function() {
          infowindow1.open(map, marker1); 
        });
        marker1.addListener('mouseout', function() {
          infowindow1.close();
        });
        /*
        var infowindow2 = new google.maps.InfoWindow({
          content: 'Andrea Baric',
          map: map
        });
        var marker2 = new google.maps.Marker({
          position: pin1,
          map: map
        });
        marker2.setMap(map);
        marker2.addListener('mouseover', function() {
          infowindow1.open(map, marker); infowindow2.open(map, marker); 
        });
*/
      }
      google.maps.event.addDomListener(window, 'load', initialize); 

function getLocation(location) {
	var pin
	switch (location) {
		case 'philadelphia': pin = new google.maps.LatLng(39.9525839, -75.1652215); break;
		case 'new york': pin = new google.maps.LatLng(40.712784, -74.005941); break;
		/*
    case 'san francisco':
		case 'ames': 
		case 'claremont':
		case 'south hadley':
		case 'atlanta': 
    */
	} 
	return pin;
}

/*
function geocodeAddress(geocoder, map) {
	var marker;
  geocoder.geocode('philadelphia', function(results, status) {
    if (status === google.maps.GeocoderStatus.OK) {
      resultsMap.setCenter(results[0].geometry.location);
      marker = new google.maps.Marker({
        map: resultsMap,
        position: results[0].geometry.location
      });
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
  return marker;
}


function getGeo(address) {
	geocoder = new google.maps.Geocoder();
	var loc = geocoder.location;
	var pin = google.maps.LatLng(loc);
	return loc
}
*/