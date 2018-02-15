var asyncRequestObject = new XMLHttpRequest();
var proxy = 'https://cors-anywhere.herokuapp.com/';
var apiLinkDS = 'https://api.darksky.net/forecast/bcfb332dbff54b0b470a2c8cbad6e360/';
var finalLink = 'https://api.darksky.net/forecast/bcfb332dbff54b0b470a2c8cbad6e360/' + localStorage.Lat + ',%20' + localStorage.Lng + '?lang=es';

asyncRequestObject.open('GET', proxy + finalLink);
asyncRequestObject.onload = handleSuccess;
asyncRequestObject.onerror = handleError;
asyncRequestObject.send();


function handleSuccess () {
  var data = JSON.parse( this.responseText );
  var dataCurrently = data['currently'];
  var temperature = data['currently']['temperature'];
  var temperatureCelsius = parseInt((temperature - 32) * 5/9); // Temperatura en celsius
  var wind = data['currently']['windSpeed']; //Viento
  var humidity = data['currently']['humidity']; // Humedad
  var humidityPercentage = parseInt(humidity * 100); // Humedad en porcentaje
  var uvIndex = data['currently']['uvIndex']; // UV
  var pressure = data['currently']['pressure']; // Presión
  console.log(document.getElementById('icon-index').src);
  console.log(dataCurrently['icon']);


  switch (dataCurrently['icon']) {
    case 'sun': document.getElementById('icon-index').src = 'assets/images/sun.png';
      break;
    case 'partly-cloudy-day': document.getElementById('icon-index').src = 'assets/images/cloudy.png';
      break;
    case 'cloudy': document.getElementById('icon-index').src = 'assets/images/cloudy.png';
      break;
    case 'rain': document.getElementById('icon-index').src = 'assets/images/rain.png';
      break;
    }

  document.getElementById('temperature-currently').innerHTML = temperatureCelsius + '°';
  document.getElementById('wind-currently').innerHTML = wind + ' m/s';
  document.getElementById('humidity-currently').innerHTML = humidityPercentage + ' %';
  document.getElementById('uv-currently').innerHTML = uvIndex;
  document.getElementById('pressure-currently').innerHTML = pressure + ' hPa';

}

function handleError () {
  console.log( 'Ocurrió un error' );
}
