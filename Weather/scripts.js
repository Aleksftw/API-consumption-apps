var lon;
var lat;


$.getJSON("http://ip-api.com/json", function(data) {

	lon = data.lon;
	lat = data.lat;


	var api = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=9707b52f8f85bd74e43bd798e8770a7d ';
	//create api for geolocaton

	$.getJSON(api, function(data) {
		//JSON call from Open Weather Api
		var kTemp;
		var fTemp;
		var cTemp;
		var tempSwap = true;
		var typeWeather = data.weather[0].description;
		var windspeed = data.wind.speed;
		var city = data.name;
		kTemp = data.main.temp;
		//temp in kelvin
		fTemp = (kTemp * (9 / 5) - 459.67).toFixed(1);
		//temp in farenhait
		cTemp = (kTemp - 273).toFixed(1);
		//temp in celcious
		console.log(city);
		$("#api").html(api);
		$("#city").html(city);
		$("#typeWeather").html(typeWeather);
		$("#fTemp").html(fTemp + ' &#8457; ');
		$("#fTemp").click(function() {

			if (tempSwap === false) {
				$("#fTemp").html(cTemp + " &#8451;  ");
				tempSwap = true;
			} else {
				$("#fTemp").html(fTemp + " &#8457; ");
				tempSwap = false;
			}
		});
		windspeed = (2.237 * (windspeed)).toFixed(1);
		$("#windspeed").html(windspeed + " mph ");
		if (kTemp > 80) {
			$('body').css('background-image', 'url(https://cdn.pixabay.com/photo/2017/05/08/07/55/cloud-2294671_1280.jpg)');
		} else if (fTemp > 70) {
			$('body').css('background-image', 'url(https://static.pexels.com/photos/25833/pexels-photo-25833.jpg)');
		} else if (fTemp > 60) {
			$('body').css('background-image', 'url(https://cdn.pixabay.com/photo/2017/05/08/07/55/cloud-2294671_1280.jpg)');
		} else if (fTemp > 50) {
			$('body').css('background-image', 'url(https://static.pexels.com/photos/158163/clouds-cloudporn-weather-lookup-158163.jpeg)');
		}
	});

});
