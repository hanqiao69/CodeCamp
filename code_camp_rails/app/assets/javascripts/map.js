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
		case 'philadelphia': pin = new google.maps.LatLng(39.9525839, -75.1652215); break; //Rachel Han, Andrea Baric
		case 'new york': pin = new google.maps.LatLng(40.712784, -74.005941); break; // Kathryn Hodge, Kaitlin Gu, Briana Vecchione
    /*
    case 'providence' // Victoria Chavez
    case 'daytona beach': // Caeley Looney
    case 'melbourne': // Camille Ramseur
    case 'cambridge': // JN Fang
    case 'san francisco': // Janet Chavez, Shailee Wilson
    case 'detroit': // Jeseekia Vaughn
    case 'wellesley': // Ashley Thomas
    case 'jacksonville': // Allison Lakay Bryan
		case 'ames': // Kelsey Hrubes
		case 'claremont': // Rosario Huamani Carpio
		case 'south hadley': // Hashma Shahid
		case 'atlanta': // Vy Thuy Nguyen
    case 'los angeles': // Kayla Kasprak
    case 'austin': // Megan Chen
    */
	} 
	return pin;
}