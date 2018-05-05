module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    // themes list -------------------------------------------------------------
    swatch: {
      default: {}
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

    // compile sass stylesheets to css -----------------------------------------
    sass: {
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
        files: ['src/sass/skin/*.scss', 'src/sass/style.scss', 'src/sass/themes/**/variables.scss', 'src/sass/themes/**/custom.scss'],
        tasks: ['swatch']
      },
      javascript: {
        files: ['src/js/*.js'],
        tasks: ['concat:javascript', 'uglify:javascript']
      }
    }

  });

  grunt.registerTask('build', 'build a theme', function(theme) {

    // copying the style.scss file ---------------------------------------------
    var srcStyle;
    var destStyle;
    var filesStyle = {};

    srcStyle = 'src/sass/style.scss';
    destStyle = 'src/sass/themes/' + theme + '/.style.scss';
    filesStyle = {
      src: srcStyle,
      dest: destStyle
    };

    grunt.config('concat.stylesheets', filesStyle);
    grunt.task.run(['concat:stylesheets']);

    // compile sass stylesheets to css -----------------------------------------
    var srcSass;
    var destSass;
    var filesSass = {};

    srcSass = 'src/sass/themes/' + theme + '/.style.scss';
    destSass = 'dist/css/themes/' + theme + '/style.css';
    filesSass[destSass] = srcSass;

    grunt.config('sass.build.files', filesSass);

    // configure cssmin to minify css files ------------------------------------
    var srcMin;
    var destMin;
    var filesMin = {};

    srcMin = 'dist/css/themes/' + theme + '/style.css';
    destMin = 'dist/css/themes/' + theme + '/style.min.css';
    filesMin[destMin] = srcMin;

    grunt.config('cssmin.build.files', filesMin);

    grunt.task.run(['sass', 'cssmin']);
  });

  grunt.registerMultiTask('swatch', 'build themes', function() {
    var t = this.target;
    grunt.task.run('build:' + t);
  });

  grunt.registerTask('default', ['watch']);

};