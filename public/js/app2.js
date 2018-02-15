
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
  var dataDaily = data['daily'];
  var dataDaily2 = data['daily']['data'];
  var iconsSecondView = document.getElementsByClassName('icons-second-view');

console.log(data['daily']['data'].length - 2);

  function dataDailyTravel () {
    for (var i = 0; i <= dataDaily2.length; i++) {
      for (var j = 0; j <= iconsSecondView.length; j++) {
        console.log(dataDaily2[i]);
        var temperature1 = dataDaily2[i]['apparentTemperatureMin'];
        var temperatureCelsius1 = parseInt((temperature1 - 32) * 5/9);
        var temperature2 = dataDaily2[i]['apparentTemperatureHigh'];
        var temperatureCelsius2 = parseInt((temperature2 - 32) * 5/9);
        var daysWeek = document.getElementsByClassName('inner-daily');
        for (var y = 0; y <= daysWeek.length; y++) {
          daysWeek[i].innerHTML = temperatureCelsius1 + '°' + ' - ' + temperatureCelsius2 + '°';
        }
        switch (dataDaily2[i]['icon']) {
          case 'sun': document.getElementsByClassName('icons-second-view')[i].src = '../assets/images/sun.png';
            break;
          case 'partly-cloudy-day': document.getElementsByClassName('icons-second-view')[i].src = '../assets/images/cloudy.png';
            break;
          case 'cloudy': document.getElementsByClassName('icons-second-view')[i].src = '../assets/images/cloudy.png';
            break;
          case 'rain': document.getElementsByClassName('icons-second-view')[i].src = './assets/images/rain.png';
            break;
          }
      }
    }
  }
  dataDailyTravel();

}

function handleError () {
  console.log( 'Ocurrió un error' );
}
