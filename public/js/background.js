$(document).ready(function () {

  function imagenes() {
    const imagenes = new XMLHttpRequest();
    imagenes.onreadystatechange = function (){
      if (imagenes.readyState === 4 && imagenes.status === 200){
        const data = JSON.parse(this.responseText);
        const rpta = data.photos.photo[2];
        var farmId = rpta.farm;
        var serverId = rpta.server;
        var id = rpta.id;
        var secret = rpta.secret;
        console.log(farmId + ", " + serverId + ", " + id + ", " + secret);
        $("#flickr").css({"background": 'url("https://farm' + farmId + '.staticflickr.com/' + serverId + '/' + id + '_' + secret + '.jpg")',
        "background-position": "center center","background-repeat": "no-repeat","background-size": "cover",
        "width": "100%"});
      }
    }; 

    imagenes.open('GET', `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=e2c37b656ec7eaa2fb179227fc88b553&tags=flower&per_page=3&format=json&nojsoncallback=1`);
    imagenes.send();
  }
  imagenes();

  function handleError(){
    console.log( 'Ocurrió un error' );
  }
  
})
