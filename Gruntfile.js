module.exports = function(grunt) {
  'use strict';

  // load all grunt tasks
  require('load-grunt-tasks')(grunt);

  // grunt sass task
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // grunt configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // compile sass stylesheets to css -----------------------------------------
    sass: {
      build: {
        options: {
          implementation: require('sass'),
          style: 'expanded',
          sourcemap: false,
          quietDeps: true
        },
        files: {
          'dist/css/themes/dark/style.css': 'src/sass/themes/dark/style.scss',
          'dist/css/themes/light/style.css': 'src/sass/themes/light/style.scss'
        }
      }
    },

    // minify css files
    cssmin: {
      build: {
        files: {
          'dist/css/themes/dark/style.min.css': 'dist/css/themes/dark/style.css',
          'dist/css/themes/light/style.min.css': 'dist/css/themes/light/style.css'
        }
      }
    },

    // watch for changes and compile
    watch: {
      sass: {
        files: [
          'src/sass/**/*.scss'
        ],
        tasks: ['sass', 'cssmin']
      }
    }
  });

  // Custom task to compile Sass using modern API
  grunt.registerTask('sass-modern', 'Compile Sass using modern API', function() {
    const sass = require('sass');
    const fs = require('fs');
    const path = require('path');
    
    const themes = ['dark', 'light'];
    
    themes.forEach(theme => {
      // Check for both style.scss and .style.scss
      let inputFile = `src/sass/themes/${theme}/style.scss`;
      if (!fs.existsSync(inputFile)) {
        inputFile = `src/sass/themes/${theme}/.style.scss`;
      }
      
      const outputFile = `dist/css/themes/${theme}/style.css`;
      
      if (fs.existsSync(inputFile)) {
        try {
          const result = sass.compile(inputFile, {
            style: 'expanded',
            sourceMap: false,
            quietDeps: true
          });
          
          // Ensure output directory exists
          const outputDir = path.dirname(outputFile);
          if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
          }
          
          fs.writeFileSync(outputFile, result.css);
          grunt.log.ok(`Compiled ${inputFile} to ${outputFile}`);
        } catch (error) {
          grunt.log.error(`Error compiling ${inputFile}: ${error.message}`);
        }
      } else {
        grunt.log.warn(`Input file not found for theme: ${theme}`);
      }
    });
  });

  // register grunt tasks
  grunt.registerTask('default', ['sass-modern', 'cssmin']);
  grunt.registerTask('build', ['sass-modern', 'cssmin']);
  grunt.registerTask('sass', ['sass-modern']);
};
