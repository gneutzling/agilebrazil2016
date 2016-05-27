

function showGoogleMaps() {
  var position = [-25.452154, -49.252771];
    var latLng = new google.maps.LatLng(position[0], position[1]);

    var mapOptions = {
        zoom: 16, // initialize zoom level - the max value is 21
        streetViewControl: false, // hide the yellow Street View pegman
        scaleControl: false, // allow users to zoom the Google Map
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: latLng,
        scrollwheel: false
    };

    map = new google.maps.Map(document.getElementById('location-gmaps'),
        mapOptions);

    // Show the default red marker at the location
    marker = new google.maps.Marker({
        position: latLng,
        map: map,
        draggable: false,
        animation: google.maps.Animation.DROP
    });
}

google.maps.event.addDomListener(window, 'load', showGoogleMaps);

// var map;
// function initMap() {
//   map = new google.maps.Map(document.getElementById('location-gmaps'), {
//     center: {lat: -34.397, lng: 150.644},
//     zoom: 8
//   });
// }
