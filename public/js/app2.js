
var asyncRequestObject = new XMLHttpRequest();
var proxy = 'https://cors-anywhere.herokuapp.com/';
var apiLinkDS = 'https://api.darksky.net/forecast/bcfb332dbff54b0b470a2c8cbad6e360/-12.145598,%20-77.022311?lang=es';

asyncRequestObject.open('GET', proxy + apiLinkDS);
asyncRequestObject.onload = handleSuccess;
asyncRequestObject.onerror = handleError;
asyncRequestObject.send();


function handleSuccess () {
  var data = JSON.parse( this.responseText );
  var dataDaily = data['daily'];
  var dataDaily2 = data['daily']['data'];
  console.log(dataDaily2);

console.log(data['daily']['data'].length - 2);

  function dataDailyTravel () {
    for (var i = 0; i <= dataDaily2.length; i++) {
      console.log(dataDaily2[i]);
      var temperature1 = dataDaily2[i]['apparentTemperatureMin'];
      var temperatureCelsius1 = parseInt((temperature1 - 32) * 5/9);
      var temperature2 = dataDaily2[i]['apparentTemperatureHigh'];
      var temperatureCelsius2 = parseInt((temperature2 - 32) * 5/9);
      var daysWeek = document.getElementsByClassName('inner-daily');
      for (var j = 0; j <= daysWeek.length; j++) {
        daysWeek[i].innerHTML = temperatureCelsius1 + '°' + ' - ' + temperatureCelsius2 + '°';
      }
    }
  }
  dataDailyTravel();
}

function handleError () {
  console.log( 'Ocurrió un error' );
}
