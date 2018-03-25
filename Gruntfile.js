module.exports = function(grunt) {
  var config = {
    pkg: grunt.file.readJSON('package.json'),

    /* Some other tasks... */
   uglify: {
            options: {
                mangle: true
            },
            build: {
        src: 'js/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
      jshint: {
  // define the files to lint
  files: ['Gruntfile.js', 'src/**/*.js'],
  // configure JSHint (documented at http://www.jshint.com/docs/)
  options: {
    // more options here if you want to override JSHint defaults
    globals: {
      jQuery: true,
      console: true,
      module: true
    }
  }
},
      watch: {
  files: ['<%= jshint.files %>'],
  tasks: ['jshint', 'qunit']
},
  };
  grunt.initConfig(config);
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-serve');
  grunt.registerTask('default', ['uglify','jshint']);
};