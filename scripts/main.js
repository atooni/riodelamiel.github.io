$( document ).ready(
  function() {
    $("#map").each( function(idx, elem) {
      var gmap = new GMaps({
        div: "#" + elem.id,
        lat: 36.800024,
        lng: -3.776859,
        zoom: 17,
        mapType: "satellite"
      });

      gmap.addMarker({
        lat: 36.800024,
        lng: -3.776859,
        infoWindow: {
          content: "<p>Bis bald in <i>Rio de la Miel!</i></p>"
        }
      });
    });

    $("#fb-photos").each( function(idx, elem) {
      console.log("Foto Album found");
      $("#" + elem.id ).facebookAlbumPhotos({
        'albumURL': 'https://www.facebook.com/media/set/?set=a.929135233792435.1073741829.929094460463179'
      });
    });
  }
);
