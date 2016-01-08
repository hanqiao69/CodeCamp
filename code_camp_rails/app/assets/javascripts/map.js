function initialize() {
        var mapCanvas = document.getElementById('map');
        var mapOptions = {
          center: new google.maps.LatLng(39, -95),
          zoom: 5,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(mapCanvas, mapOptions);
        var philadelphia = ['Rachel Han', 'Andrea Baric'];
        var new_york = ['Kathryn Hodge', 'Kaitlin Gu', 'Briana Vecchione'];
        var providence = ['Victoria Chavez'];
        var daytona_beach = ['Caeley Looney'];
        var melbourne = ['Camille Ramseur'];
        var cambridge = ['JN Fang'];
        var san_francisco = ['Janet Chavez', 'Shailee Wilson', 'Gloria Kimbwala'];
        var detroit = ['Jeseekia Vaughn'];
        var wellesley = ['Ashley Thomas'];
        var jacksonville = ['Allison Lakay Bryan'];
        var ames = ['Kelsey Hrubes'];
        var claremont = ['Rosario Huamani Carpio'];
        var south_hadley = ['Hashma Shahid'];
        var atlanta = ['Vy Thuy Nguyen'];
        var los_angeles = ['Kayla Kasprak'];
        var austin = ['Megan Chen'];

        makeMarker(1, 'philadelphia', philadelphia, map);
        makeMarker(2, 'new york', new_york, map);
        makeMarker(3, 'providence', providence, map);
        makeMarker(4, 'daytona beach', daytona_beach, map);
        makeMarker(5, 'melbourne', melbourne, map);
        makeMarker(6, 'cambridge', cambridge, map);
        makeMarker(7, 'san francisco', san_francisco, map);
        makeMarker(8, 'detroit', detroit, map);
        makeMarker(9, 'wellesley', wellesley, map);
        makeMarker(10, 'jacksonville', jacksonville, map);
        makeMarker(11, 'ames', ames, map);
        makeMarker(12, 'claremont', claremont, map);
        makeMarker(13, 'south hadley', south_hadley, map);
        makeMarker(14, 'atlanta', atlanta, map);
        makeMarker(15, 'los angeles', los_angeles, map);
        makeMarker(16, 'austin', austin, map);
      }
      google.maps.event.addDomListener(window, 'load', initialize); 

function getLocation(location) {
	var pin
	switch (location) {
		case 'philadelphia': pin = new google.maps.LatLng(39.9525839, -75.1652215); break; //Rachel Han, Andrea Baric
		case 'new york': pin = new google.maps.LatLng(40.712784, -74.005941); break; // Kathryn Hodge, Kaitlin Gu, Briana Vecchione
    case 'providence': pin = new google.maps.LatLng(41.823989, -71.412834); break; // Victoria Chavez
    case 'daytona beach': pin = new google.maps.LatLng(29.210815, -81.022833); break; // Caeley Looney
    case 'melbourne': pin = new google.maps.LatLng(28.083627, -80.608109); break; // Camille Ramseur
    case 'cambridge': pin = new google.maps.LatLng(42.373616, -71.109734); break; // JN Fang
    case 'san francisco': pin = new google.maps.LatLng(37.774929, -122.419416); break; // Janet Chavez, Shailee Wilson
    case 'detroit': pin = new google.maps.LatLng(42.331427, -83.045754); break; // Jeseekia Vaughn
    case 'wellesley': pin = new google.maps.LatLng(42.296797, -71.292388); break; // Ashley Thomas
    case 'jacksonville': pin = new google.maps.LatLng(30.332184, -81.655651); break; // Allison Lakay Bryan
		case 'ames': pin = new google.maps.LatLng(42.030781, -93.631913); break; // Kelsey Hrubes
		case 'claremont': pin = new google.maps.LatLng(34.096676, -117.719779); break; // Rosario Huamani Carpio
		case 'south hadley': pin = new google.maps.LatLng(42.259173, -72.574793); break; // Hashma Shahid
		case 'atlanta': pin = new google.maps.LatLng(33.748995, -84.387982); break; // Vy Thuy Nguyen
    case 'los angeles': pin = new google.maps.LatLng(34.052234, -118.243685); break; // Kayla Kasprak
    case 'austin': pin = new google.maps.LatLng(30.267153, -97.743061); break; // Megan Chen
	} 
	return pin;
}

function makeMarker(id, location, names, map) {
  var len = names.length;
  var pin;
  var infowindow = new Array(len);
  var marker;
  for (var i = 0; i < len; i++) {
    infowindow[i] = new google.maps.InfoWindow({
      content: names[i],
      map: map
      });
      infowindow[i].close();
  }
  var pin = getLocation(location); //new google.maps.LatLng(39.9525839, -75.1652215);
  var marker = new google.maps.Marker({
    position: pin,
    map: map
  });
  marker.addListener('mouseover', function() {
    for (var i = 0; i < len; i++) {
      infowindow[i].open(map, marker); 
    }
  });
  marker.addListener('onclick', function() {
    for (var i = 0; i < len; i++) {
      infowindow[i].close(); 
    }
  });
}

function lookUpByName(name, map) {
  switch (name) {
    case 'Rachel Han': map.setCenter(getLocation('philadelphia'));
  }
}