module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>',

    // tasks
    compass: {
      dev: {
        environtment: 'development',
        config: './config.rb'
      }
    },
    // ChangeMe!!
    mincss: {
      compress: {
        files: {
          "build/css/style.min.css": ["build/css/style.css"]
        }
      }
    },
    // ChangeMe!!
    jade: {
      compile: {
        options: {
          data: {
            pretty: true,
            debug: true
          }
        },
        files: {
          "build/index.html": ["jade/index.jade"]
        }
      }
    },
    // ChangeMe!!
    concat: {
      dist: {
        src: ['js/app.js'],
        dest: 'build/js/app.js'
      }
    },
    // ChangeMe!!
    uglify: {
      options: {
        banner: '/* <%= banner %> */\n',
        mangle: false
      },
      dist: {
        files: {
          'build/js/app.min.js': ['build/js/app.js']
        }
      }
    },
    connect: {
      livereload: {
        options: {
          port: 9001,
          base: 'build'
        }
      }
    },
    regarde: {
      jade: {
        files: 'jade/*.jade',
        tasks: ['jade'],
        spawn: true
      },
      compass: {
        files: 'scss/*.scss',
        tasks: ['compass'],
        spawn: true
      },
      js: {
        files: 'js/*.js',
        tasks: ['concat']
      },
      html: {
        files: 'build/**/*',
        tasks: ['livereload']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-mincss');
  grunt.loadNpmTasks('grunt-compass');
  grunt.loadNpmTasks('grunt-contrib-jade');

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-livereload');
  grunt.loadNpmTasks('grunt-regarde');

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['livereload-start','connect','regarde']);
  grunt.registerTask('release', ['sass','mincss','jade','concat','uglify']);
};
