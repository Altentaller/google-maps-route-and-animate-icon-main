  var map;
  var directionsService;
  var stepDisplay;
  var markerArray = [];
  var position;
  var marker = null;
  var polyline = null;
  var poly2 = null;
  var speed = 0.099, wait = 1;
  var infowindow = null; 
  var timerHandle = null;
  	
	
    function createMarker(latlng, label, html) {
        var contentString = '<b>'+'A rom dom dom (づ ◕‿◕ )づ'+'</b><br>';	 // text visible when you click on the image
        var image = 'https://i.ibb.co/J2Fx5PK/car-icon.png';   //image 
        var marker = new google.maps.Marker({
            position: latlng,
            map: map,
            icon: image,
            title: label,
            zIndex: Math.round(latlng.lat()*-100000)<<5		
            });
            marker.myname = label;

        google.maps.event.addListener(marker, 'click', function() {
            infowindow.setContent(contentString); 
            infowindow.open(map,marker);
            });
        return marker;
    }


    function initialize() {
        infowindow = new google.maps.InfoWindow(
        { 
        size: new google.maps.Size(150,50)
        });
        directionsService = new google.maps.DirectionsService();
        
        // Create a map
        var myOptions = {
            zoom: 3,
            center: {lat: 55, lng: 55},
            types: ['(cities)'],	  
            scrollwheel: false,
            styles:[    
                    {
                        "featureType": "administrative",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "on"
                            },
                            {
                                "saturation": -100
                            },
                            {
                                "lightness": 20
                            }
                        ]
                    },
                    {
                        "featureType": "landscape.man_made",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "simplified"
                            },
                            {
                                "saturation": -60
                            },
                            {
                                "lightness": 10
                            }
                        ]
                    },
                    {
                        "featureType": "landscape.natural",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "on"
                            },
                            {
                                "saturation": -60
                            },
                            {
                                "lightness": 60
                            },
                            {
                                "color": "#e9e7e4"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "off"
                            },
                            {
                                "saturation": -100
                            },
                            {
                                "lightness": 60
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "labels.text",
                        "stylers": [
                            {
                                "color": "#802728"
                            },
                            {
                                "visibility": "on"
                            }
                        ]
                    },
                    {
                        "featureType": "poi.park",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "poi.park",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "visibility": "on"
                            },
                            {
                                "color": "#d5e09d"
                            }
                        ]
                    },
                    {
                        "featureType": "poi.park",
                        "elementType": "labels",
                        "stylers": [
                            {
                                "visibility": "on"
                            }
                        ]
                    },
                    {
                        "featureType": "poi.park",
                        "elementType": "labels.text",
                        "stylers": [
                            {
                                "visibility": "on"
                            },
                            {
                                "color": "#6f9543"
                            }
                        ]
                    },
                    {
                        "featureType": "poi.park",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "visibility": "on"
                            },
                            {
                                "color": "#6f9543"
                            }
                        ]
                    },
                    {
                        "featureType": "poi.park",
                        "elementType": "labels.text.stroke",
                        "stylers": [
                            {
                                "visibility": "off"
                            },
                            {
                                "color": "#ff0000"
                            }
                        ]
                    },
                    {
                        "featureType": "poi.park",
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "visibility": "simplified"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "on"
                            },
                            {
                                "saturation": -100
                            },
                            {
                                "lightness": 40
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "weight": "1.00"
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "visibility": "on"
                            },
                            {
                                "color": "#ffffff"
                            },
                            {
                                "weight": "2.21"
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "geometry.stroke",
                        "stylers": [
                            {
                                "invert_lightness": true
                            },
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "labels",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "labels.text",
                        "stylers": [
                            {
                                "color": "#a7a9ac"
                            },
                            {
                                "visibility": "on"
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "visibility": "on"
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "labels.text.stroke",
                        "stylers": [
                            {
                                "visibility": "on"
                            },
                            {
                                "color": "#fffefe"
                            }
                        ]
                    },
                    {
                        "featureType": "road.local",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "visibility": "on"
                            }
                        ]
                    },
                    {
                        "featureType": "road.local",
                        "elementType": "geometry.stroke",
                        "stylers": [
                            {
                                "visibility": "on"
                            },
                            {
                                "color": "#d9d7d6"
                            }
                        ]
                    },
                    {
                        "featureType": "transit",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "off"
                            },
                            {
                                "saturation": -100
                            },
                            {
                                "lightness": 60
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "on"
                            },
                            {
                                "saturation": -10
                            },
                            {
                                "lightness": 30
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "visibility": "on"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#7db3ba"
                            },
                            {
                                "visibility": "on"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "geometry.stroke",
                        "stylers": [
                            {
                                "weight": "8.21"
                            },
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "labels.text",
                        "stylers": [
                            {
                                "visibility": "simplified"
                            },
                            {
                                "color": "#f4f3f3"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "lightness": "73"
                            },
                            {
                                "saturation": "0"
                            },
                            {
                                "gamma": "1"
                            },
                            {
                                "color": "#cdf2f7"
                            },
                            {
                                "visibility": "on"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "labels.text.stroke",
                        "stylers": [
                            {
                                "visibility": "on"
                            },
                            {
                                "color": "#7db3ba"
                            },
                            {
                                "weight": "3.49"
                            },
                            {
                                "lightness": "0"
                            },
                            {
                                "gamma": "1"
                            }
                        ]
                    }
            ]
        }
        // End create a map

        map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
        address = 'barnaul'
        geocoder = new google.maps.Geocoder();
        geocoder.geocode( { 'address': address}, function(results, status) {
        map.setCenter(results[0].geometry.location);
        });  

        // Create a renderer for directions and bind it to the map.
        var rendererOptions = {
        map: map
        }

        directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions);    
        stepDisplay = new google.maps.InfoWindow();
        polyline = new google.maps.Polyline({
            path: [],
            strokeColor: '#FF0000',
            strokeWeight: 3
        });
        poly2 = new google.maps.Polyline({
            path: [],
            strokeColor: '#FF0000',
            strokeWeight: 3
        });
            
        var input1 = document.getElementById('start');
        var input2 = document.getElementById('end');
        var autocomplete1 = new google.maps.places.Autocomplete(input1);
        var autocomplete2 = new google.maps.places.Autocomplete(input2);
    }//end function initialize

	var steps = []

	function calcRoute(){
        if (timerHandle) { clearTimeout(timerHandle); }
        if (marker) { marker.setMap(null);}
        polyline.setMap(null);
        poly2.setMap(null);
        directionsDisplay.setMap(null);
        polyline = new google.maps.Polyline({
        path: [],
        strokeColor: '#FF0000',
        strokeWeight: 3
        });
        poly2 = new google.maps.Polyline({
        path: [],
        strokeColor: '#FF0000',
        strokeWeight: 3
        });
        // Create a renderer for directions and bind it to the map.
        var rendererOptions = {map: map}
	
        directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions);

	    var start = document.getElementById("start").value;
	    var end = document.getElementById("end").value;
		var travelMode = google.maps.DirectionsTravelMode.DRIVING

	    var request = {
	        origin: start,
	        destination: end,
	        travelMode: travelMode
	    };
			
	    // Route the directions and pass the response to a
	    // function to create markers for each step.
        directionsService.route(request, function(response, status) {
            if (status == google.maps.DirectionsStatus.OK){
                directionsDisplay.setDirections(response);
                var bounds = new google.maps.LatLngBounds();
                var route = response.routes[0];
                startLocation = new Object();
                endLocation = new Object();

                var path = response.routes[0].overview_path;
                var legs = response.routes[0].legs;
                for (i=0;i<legs.length;i++) {
                    if (i == 0) { 
                        startLocation.latlng = legs[i].start_location;
                        startLocation.address = legs[i].start_address;
                        marker = createMarker(legs[i].start_location,"start",legs[i].start_address,"pink");
                    }
                    endLocation.latlng = legs[i].end_location;
                    endLocation.address = legs[i].end_address;
                    var steps = legs[i].steps;
                    for (j=0;j<steps.length;j++) {
                        var nextSegment = steps[j].path;
                        for (k=0;k<nextSegment.length;k++) {
                            polyline.getPath().push(nextSegment[k]);
                            bounds.extend(nextSegment[k]);
                        }
                    }
                }

                polyline.setMap(map);
                map.fitBounds(bounds);
                map.setZoom(1);
                startAnimation();
            }                                                    
        });
    }//end function calcroute
    
    var step = 1000;; // metres
    var tick = 0.001; // milliseconds
    var eol;
    var k=0;
    var stepnum=0;
    var speed = "";
    var lastVertex = 1;


    // animation functions
    function updatePoly(d) {
        // Spawn a new polyline every 20 vertices, because updating a 100-vertex poly is too slow
        if (poly2.getPath().getLength() > 20) {
          poly2=new google.maps.Polyline([polyline.getPath().getAt(lastVertex-1)]);
        }

        if (polyline.GetIndexAtDistance(d) < lastVertex+2) {
           if (poly2.getPath().getLength()>1) {
             poly2.getPath().removeAt(poly2.getPath().getLength()-1)
           }
           poly2.getPath().insertAt(poly2.getPath().getLength(),polyline.GetPointAtDistance(d));
        } else {
          poly2.getPath().insertAt(poly2.getPath().getLength(),endLocation.latlng);
        }
    }

    function animate(d) {
        if (d>eol) {
          map.panTo(endLocation.latlng);
          marker.setPosition(endLocation.latlng);
          return;
        }
        var p = polyline.GetPointAtDistance(d);
        map.panTo(p);
        marker.setPosition(p);
        updatePoly(d);
        timerHandle = setTimeout("animate("+(d+step)+")", tick);
    }


    function startAnimation() {
        eol=polyline.Distance();
        map.setCenter(polyline.getPath().getAt(0));
        poly2 = new google.maps.Polyline({path: [polyline.getPath().getAt(0)], strokeColor:"#0000FF", strokeWeight:10});
        setTimeout("animate(550)",2000);  // Allow time for the initial map display
    }
