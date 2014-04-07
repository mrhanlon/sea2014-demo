'use strict';
require.config({
  paths: {
    jquery: '../../../../bower_components/jquery/dist/jquery'
    , bootstrap: '../../../../bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap'
    , handlebars: '../../../../bower_components/handlebars/handlebars.amd'
    , highlight: '../../../../bower_components/highlightjs/highlight.pack'
  }
  , shim: {
    bootstrap: {
      deps: ['jquery']
    }
    , highlight: {}
  }
});

require(['jquery', 'getlocation', 'bootstrap'], function($, Location) {
  if (Location.supported()) {
    $('.get-forecast').on('click', Location.get);
  } else {
    $('.get-forecast').replaceWith('<div class="alert alert-danger"><i class="gylphicon glyphicon-thumbs-down"></i> Geolocation is not supported in your browser.</div>');
  }
});
