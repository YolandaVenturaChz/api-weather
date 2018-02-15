var latitude, longitude;
console.log('Holi');

/* Función que carga Google Maps y nos ubica en Lima por default */
function initMap() {
  var location = {
    lat: -12.0431800,
    lng: -77.0282400
  };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: location
  });
  var marker = new google.maps.Marker({
    position: location,
    map: map,

  });
console.log('Holi');


var infoWindow = new google.maps.InfoWindow({map: map});

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            localStorage.Lat = pos['lat'];
            localStorage.Lng = pos['lng'];
            infoWindow.setPosition(pos);
            map.setCenter(pos);
          });
        } else {
          alert('Tenemos problemas para encontrar tu ubicación.');
        }
      }
