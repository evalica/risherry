module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    // compile less stylesheets to css -----------------------------------------
    less: {
      build: {
        files: {
          'dist/css/style.css': 'src/less/style.less'
        }
      }
    },

    // configure cssmin to minify css files ------------------------------------
    cssmin: {
      build: {
        files: {
          'dist/css/style.min.css': 'dist/css/style.css'
        }
      }
    },

    // configure watch to auto update ------------------------------------------ 
    watch: { 
      stylesheets: { 
        files: ['src/**/*.css', 'src/**/*.less'], 
        tasks: ['less', 'cssmin'] 
      }
    }

  });

  grunt.registerTask('default', ['watch']);

};