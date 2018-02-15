$(document).ready(function () {

  function imagenes() {
    const imagenes = new XMLHttpRequest();
    imagenes.onreadystatechange = function () {
      if (imagenes.readyState === 4 && imagenes.status === 200) {
        const data = JSON.parse(this.responseText);
        const rpta = data.photos.photo[2];
        console.log(rpta);

        var farmId = rpta.farm;
        console.log(farmId);
        var serverId = rpta.server;
        console.log(serverId);
        var id = rpta.id;
        console.log(id);
        var secret = rpta.secret;
        console.log(secret);


       /*  for (let i = 0; i < rpta.length; i++) {
          const element = rpta[i];
          var farmId = element.farm;
          console.log(farmId);
          var serverId = element.server;
          console.log(serverId);
          var id = element.id;
          console.log(id);
          var secret = element.secret;
          console.log(secret);

          console.log(element);} */
          console.log(farmId + ", " + serverId + ", " + id + ", " + secret);

         /*  $("#flickr").append('<img class="imags" src="https://farm' + farmId + '.staticflickr.com/' + serverId + '/' + id + '_' + secret + '.jpg"/>');
         */
          ("Background color = " + $("p").css("background"));
          $("#flickr").css({"background": 'url("https://farm' + farmId + '.staticflickr.com/' + serverId + '/' + id + '_' + secret + '.jpg")',
           "background-position": "center center","background-repeat": "no-repeat","background-size": "cover",
           "width": "100%"});
      }
    };  $("p").css({"background-color": "yellow", "font-size": "200%"});
   
    imagenes.open('GET', `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=e2c37b656ec7eaa2fb179227fc88b553&tags=flower&per_page=3&format=json&nojsoncallback=1`);
    imagenes.send();
  }

  imagenes();
})
