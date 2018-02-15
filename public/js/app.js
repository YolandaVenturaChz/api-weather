
var asyncRequestObject = new XMLHttpRequest();
var proxy = 'https://cors-anywhere.herokuapp.com/';
var apiLinkDS = 'https://api.darksky.net/forecast/bcfb332dbff54b0b470a2c8cbad6e360/-12.145598,%20-77.022311?lang=es';

asyncRequestObject.open('GET', proxy + apiLinkDS);
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

  document.getElementById('temperature-currently').innerHTML = temperatureCelsius + '°';
  document.getElementById('wind-currently').innerHTML = wind + ' m/s';
  document.getElementById('humidity-currently').innerHTML = humidityPercentage + ' %';
  document.getElementById('uv-currently').innerHTML = uvIndex;
  document.getElementById('pressure-currently').innerHTML = pressure + ' hPa';

}

function handleError () {
  console.log( 'Ocurrió un error' );
}
