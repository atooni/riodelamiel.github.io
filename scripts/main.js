var gmap = null;


$( document ).ready(
  function() {
    $("#map").each( function(idx, elem) {
      gmap = new GMaps({
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
          content: "<p>See you at Rio de la Miel!</p>"
        }
      });
    });
  }
);
