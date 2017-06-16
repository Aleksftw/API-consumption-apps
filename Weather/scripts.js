var lon;
var lat;


$.getJSON("http://ip-api.com/json", function(data) {
	lon = data.lon;
	lat = data.lat;
	console.log("Lon: " + lon + " Lat: " + lat);
});
