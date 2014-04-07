'use strict';

module.exports = function(grunt) {
  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({

    clean: {
      all: [
        '.tmp/*'
        , 'src/main/webapp/css/main.css'
      ]
    }

    , watch: {
      styles: {
        files: ['**/*.scss'],
        tasks: ['compass','cssmin']
      },
      scripts: {
        files: ['**/*.js'],
        tasks: ['jshint'],
        options: {
          spawn: false,
        },
      },
    }

    , compass: {
      options: {
        sassDir: 'src/main/webapp/sass',
        cssDir: '.tmp/css',
        imagesDir: 'src/main/webapp/images',
        javascriptsDir: 'src/main/webapp/js',
        fontsDir: 'src/main/webapp/fonts',
        importPath: 'bower_components',
        relativeAssets: true
      },
      dist: {},
      dev: {
        options: {
          debugInfo: true
        }
      }
    }

    , cssmin: {
      dist: {
        files: {
          'src/main/webapp/css/style.css': [
            '.tmp/css/style.css'
            , 'bower_components/highlightjs/styles/github.css'
          ]
        }
      }
    }

    , requirejs : {
      dist: {
        options: {
          baseUrl: 'src/main/webapp/scripts'
          , optimize: 'none'
          , name: 'main'
          , out: '.tmp/scripts/main.js'
          , mainConfigFile: 'src/main/webapp/scripts/main.js'
          , paths: {
            'templates': '../../../../.tmp/scripts/templates'
          }
        }
      }
    }

    , uglify: {
      dist: {
        files: {
          'src/main/webapp/js/vendor/require.js': 'bower_components/requirejs/require.js'
          , 'src/main/webapp/js/main.js': '.tmp/scripts/main.js'
        }
      }
    }

  });

  grunt.registerTask('default', [
    'clean'
    // , 'jshint'
    , 'compass:dist'
    , 'cssmin'
    // , 'handlebars'
    , 'requirejs'
    , 'uglify'
  ]);
};
