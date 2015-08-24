module.exports = function(grunt) {

  grunt.initConfig({
    less: {
      app: {
        files: {"css/main.css": "less/main.less"}
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.registerTask("default", "less:app");
};
