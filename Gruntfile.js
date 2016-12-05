module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/* <%= pkg.name %> version: <%= pkg.version %> (Build: <%= grunt.template.today("yyyy-mm-dd H:MM") %>) */\n' +
                '/* <%= pkg.description %> */\n' +
                '/* Author: <%= pkg.author %> */\n'
      },
      build: {
        src: 'src/js/functions.js',
        dest: 'build/js/functions.min.js'
      }
    },
    copy: {
      main: {
        files: [
          {expand: true, cwd: 'src/', src: ['**'], dest: 'build/'}
        ]
      }
    },
    jshint: {
      all: ['src/js/functions.js']
    },
    watch: {
      files: ['src/js/functions.js'],
      tasks: ['jshint']
    },
    clean: {
      build: {
        src: ['build/*', '!build/.gitignore']
      },
    },
    replace: {
      base_url: {
        src: ['build/ts/setup.ts'],
        overwrite: true,
        replacements: [{
          from: "[*BASE_URL*]",
          to: "<%= pkg.homepage %>"
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-text-replace');

  // Default task(s).
  grunt.registerTask('default', ['clean', 'jshint', 'copy', 'replace', 'uglify']);

};
