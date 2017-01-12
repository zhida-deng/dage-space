
// If you're adding a number of markers, you may want to drop them on the map
// consecutively rather than all at once. This example shows how to use
// window.setTimeout() to space your markers' animation.

var neighborhoods = [
  {lat: 52.511, lng: 13.447},
  {lat: 52.549, lng: 13.422},
  {lat: 52.497, lng: 13.396},
  {lat: 52.517, lng: 13.394}
];

var markers = [];
var map;
var contentString = '<div id="content">' +
       '<div id="siteNotice">' +
       '</div>' +
       '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
       '<div id="bodyContent">' +
       '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
       'sandstone rock formation in the southern part of the ' +
       'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) ' +
       'south west of the nearest large town, Alice Springs; 450&#160;km ' +
       '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major ' +
       'features of the Uluru - Kata Tjuta National Park. Uluru is ' +
       'sacred to the Pitjantjatjara and Yankunytjatjara, the ' +
       'Aboriginal people of the area. It has many springs, waterholes, ' +
       'rock caves and ancient paintings. Uluru is listed as a World ' +
       'Heritage Site.</p>' +
       '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
       'https://en.wikipedia.org/w/index.php?title=Uluru</a> ' +
       '(last visited June 22, 2009).</p>' +
       '</div>' +
       '</div>';

function initMap() {
  
    var infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 300
    });


    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: {lat: 52.520, lng: 13.410}
    });
    var marker = new google.maps.Marker({
        position: { lat: 52.520, lng: 13.410 },
        map: map,
        title: 'Uluru (Ayers Rock)'
    });
    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });

}

function drop() {
    clearMarkers();
    for (var i = 0; i < neighborhoods.length; i++) {
        addMarkerWithTimeout(neighborhoods[i], i * 200);
    }
}

function addMarkerWithTimeout(position, timeout) {
    window.setTimeout(function() {
        markers.push(new google.maps.Marker({
            position: position,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Uluru (Ayers Rock)'
        }));
    }, timeout);

}




function clearMarkers() {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
    }
    markers = [];
}

