module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    // themes list -------------------------------------------------------------
    swatch: {
      bliss: {},
      rain: {}
    },

    // concatenate the files ---------------------------------------------------
    concat: {
      stylesheets: {
        src: [],
        dest: ''
      },
      javascript: {
        src: ['src/js/*.js'],
        dest: 'dist/js/risherry.js'
      }
    },

    // compile less stylesheets to css -----------------------------------------
    less: {
      build: {
        files: {}
      }
    },

    // configure cssmin to minify css files ------------------------------------
    cssmin: {
      build: {
        files: {}
      }
    },

    // compress the javascript file --------------------------------------------
    uglify : {
        javascript: {
            files: {
              'dist/js/risherry.min.js' : [ 'dist/js/risherry.js' ]
            }
        }
    },

    // configure watch to auto update ------------------------------------------ 
    watch: {
      stylesheets: {
        files: ['src/less/skin/*.less', 'src/less/style.less', 'src/less/themes/**/variables.less', 'src/less/themes/**/custom.less'],
        tasks: ['swatch']
      },
      javascript: {
        files: ['src/js/*.js'],
        tasks: ['concat:javascript', 'uglify:javascript']
      }
    }

  });

  grunt.registerTask('build', 'build a theme', function(theme) {

    // copying the style.less file ---------------------------------------------
    var srcStyle;
    var destStyle;
    var filesStyle = {};

    srcStyle = 'src/less/style.less';
    destStyle = 'src/less/themes/' + theme + '/.style.less';
    filesStyle = {
      src: srcStyle,
      dest: destStyle
    };

    grunt.config('concat.stylesheets', filesStyle);
    grunt.task.run(['concat:stylesheets']);

    // compile less stylesheets to css -----------------------------------------
    var srcLess;
    var destLess;
    var filesLess = {};

    srcLess = 'src/less/themes/' + theme + '/.style.less';
    destLess = 'dist/css/themes/' + theme + '/style.css';
    filesLess[destLess] = srcLess;

    grunt.config('less.build.files', filesLess);

    // configure cssmin to minify css files ------------------------------------
    var srcMin;
    var destMin;
    var filesMin = {};

    srcMin = 'dist/css/themes/' + theme + '/style.css';
    destMin = 'dist/css/themes/' + theme + '/style.min.css';
    filesMin[destMin] = srcMin;

    grunt.config('cssmin.build.files', filesMin);

    grunt.task.run(['less', 'cssmin']);
  });

  grunt.registerMultiTask('swatch', 'build themes', function() {
    var t = this.target;
    grunt.task.run('build:' + t);
  });

  grunt.registerTask('default', ['watch']);

};