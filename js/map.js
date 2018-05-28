$(function() {
    initMap();
});

  function initMap() {
    var element = document.getElementById('map');
    var cordinates = {
      lat: 59.905711, 
      lng: 30.2926403
    };

    var map = new google.maps.Map(element, {
      zoom: 11,
      center: cordinates
    });

    var image = 'img/icons/map-marker.svg';

    function addMarker(markerCordinates) {
      var marker = new google.maps.Marker({
          position: markerCordinates,
          map: map,
          icon: image
      });
    }
    addMarker({ lat: 59.943116, lng: 30.380792 });
    addMarker({ lat: 59.974191, lng: 30.312069 });
    addMarker({ lat: 59.886129, lng: 30.303641 });
    addMarker({ lat: 59.907195, lng: 30.504854 });
  }