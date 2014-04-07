'use strict';
define(['exports', 'jquery', 'handlebars', 'highlight'], function(exports, $, Handlebars, hljs) {

  var Location = {};

  Location.supported = function() {
    if ("geolocation" in navigator) {
      /* geolocation is available */
      return true;
    } else {
      /* geolocation IS NOT available */
      return false;
    }
  };

  Location.get = function() {
    $('.forecast').html('<div class="alert alert-info"><i class="glyphicon glyphicon-cloud"></i> Getting current location...</div>');
    navigator.geolocation.getCurrentPosition(function(position) {
      $('.forecast').empty().html('<div class="alert alert-info"><i class="glyphicon glyphicon-cloud"></i> Getting current forecast...</div>');
      $.getJSON('http://api.openweathermap.org/data/2.5/forecast'
        , {lat: position.coords.latitude , lon: position.coords.longitude}
        , Location.showForecast
      );
    });
  };

  Location.showForecast = function(forecast) {
    var tmpls = [
      '<h1>Your Forecast <small>{{city.name}}, {{city.country}}</small></h1>'
      , '<div class="panel"><h3>{{dtformatted}}</h3><p><b>{{main.tempf}}&deg;F</b> {{weather.0.description}}</p></div>'
    ];

    $('.forecast').empty().html(Handlebars.default.compile(tmpls[0])(forecast));
    $.each(forecast.list, function(i,o) {
      o.dtformatted = new Date(o.dt * 1000);
      o.main.tempf = (9/5 * (o.main.temp - 273) + 32).toFixed();
      $('.forecast').append(Handlebars.default.compile(tmpls[1])(o));
    });

    $('.forecast').append('<pre><code class="raw" data-lang="json"></code></pre>');
    $('.raw').text(JSON.stringify(forecast, undefined, 2));
    hljs.highlightBlock($('.raw')[0]);
  };

  return Location;
});
