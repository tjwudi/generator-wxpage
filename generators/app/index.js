var yeoman = require('yeoman-generator');


module.exports = yeoman.generators.Base.extend({
  fileCopy: function() {
    // Copy all templates
    this.directory('./', './');

    // Create necessary folders
    this.dest.mkdir('styles');
    this.dest.mkdir('images');
    this.dest.mkdir('scripts');
  },
  install: function() {
    this.installDependencies({
      bower: true,
      npm: false,
      skipInstall: false,
      callback: function() {
      }
    });
  }
});