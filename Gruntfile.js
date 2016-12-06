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
      options: {
        curly: true,
        eqeqeq: true,
        eqnull: true,
        browser: true,
        reporterOutput: "",
        globals: {
          jQuery: true
        },
      },
      target: ['Gruntfile.js', 'src/js/functions.js']
    },

    watch: {
      jshint: {
        files: ['src/js/functions.js'],
        tasks: ['jshint']
      },
      style: {
        files: ['src/css/style.scss'],
        tasks: ['sass', 'ftp-deploy:css']
      }
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
    },

    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'build/css/style.css': 'src/css/style.scss'
        }
      }
    },

    'ftp-deploy': {
      build: {
        auth: {
          host: '<%= pkg.config.ftp.hostname %>',
          port: '<%= pkg.config.ftp.port %>',
          authKey: 'key1'
        },
        src: 'build',
        dest: '<%= pkg.config.ftp.path %>',
        exclusions: ['src/images/*', 'src/favicon/*', 'src/libs/*']
      },
      css: {
        auth: {
          host: '<%= pkg.config.ftp.hostname %>',
          port: '<%= pkg.config.ftp.port %>',
          authKey: 'key1'
        },
        src: 'build/css',
        dest: '<%= pkg.config.ftp.path %>/css'
      },
      js: {
        auth: {
          host: '<%= pkg.config.ftp.hostname %>',
          port: '<%= pkg.config.ftp.port %>',
          authKey: 'key1'
        },
        src: 'build/js',
        dest: '<%= pkg.config.ftp.path %>/js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-text-replace');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-ftp-deploy');

  // Default task(s).
  grunt.registerTask('default', ['clean', 'jshint', 'sass', 'copy', 'replace', 'uglify']);
  // Deploy tasks
  grunt.registerTask('deploy', ['clean', 'jshint', 'sass', 'copy', 'replace', 'uglify', 'ftp-deploy:build']);

};
