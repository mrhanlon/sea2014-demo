<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
   "http://www.w3.org/TR/html4/loose.dtd">

<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>SEA 2014 Demo</title>
        <link href="css/style.css" type="text/css" rel="stylesheet"/>
    </head>
    <body>
      <header>
      </header>
      <div class="container">
        <div class="jumbotron">
          <h1>Weather forcaster!</h1>
          <p>Get your local forecast.</p>
          <p><a class="btn btn-primary get-forecast">Get Forecast</a></p>
          <span class="pull-right">Powered by: <a href="http://openweathermap.org/">Open Weather Map</a></span>
        </div>
        <div class="forecast"></div>
      </div>
      <script data-main="js/main" src="js/vendor/require.js"></script>
    </body>
</html>
