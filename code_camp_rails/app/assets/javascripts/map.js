$(window).load(function() {
  loadScript();
});

function initialize() {
        var mapCanvas = document.getElementById('map');
        var pin1 = new google.maps.LatLng(39.9525839, -75.1652215);
        var mapOptions = {
          center: new google.maps.LatLng(39, -95),
          zoom: 5,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(mapCanvas, mapOptions);
        var infowindow = new google.maps.InfoWindow({
          content: '',
          map: map
          //position: pin1
        });
        var marker = new google.maps.Marker({
          position: pin1,
          map: map
        });
        marker.setMap(map);
        marker.addListener('mouseover', function() {
          infowindow.open(map, marker);
        });
      }

      function loadScript() {
	console.log("map loading ...");
  var script = document.createElement('script');
  script.type = 'text/javascript';
  //'https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyBJYFdplGeKUUEmGZ-vL4ydiSZ09Khsa_o&sensor=false&libraries=drawing'
  script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp' +
    //'&v=3.14'+
    //'&key=AIzaSyBJYFdplGeKUUEmGZ-vL4ydiSZ09Khsa_o'+
    '&libraries=drawing'+
    '&callback=initialize';
  document.body.appendChild(script);
}
