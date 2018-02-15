
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

  /* Función que falta aplicar
  var iconsView2 = document.getElementsByClassName('icons-second-view');
  console.log(dataDaily2);

  function iconsTravel () {
    for (var i = 0; i < dataDaily2.length; i++) {
      for (var j = 0; j<= iconsView2.length; j++) {
        switch (dataDaily2[i]['icon']) {
          case 'sun': iconsView2[i].src = '../assets/images/sun.png';
          console.log(iconsView2[i]);
            break;
          case 'partly-cloudy-day': iconsView2[i].src = '../assets/images/cloudy.png';
            break;
          case 'cloudy': iconsView2[i].src = '../assets/images/cloudy.png';
            break;
          case 'rain': iconsView2[i].src = '../assets/images/rain.png';
            break;
          }
      }
    }
  }
  iconsTravel();*/
}

function handleError () {
  console.log( 'Ocurrió un error' );
}
