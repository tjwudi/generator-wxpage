var yeoman = require('yeoman-generator');


module.exports = yeoman.generators.Base.extend({
  fileCopy: function() {
    // Create necessary folders
    this.dest.mkdir('styles');
    this.dest.mkdir('images');
    this.dest.mkdir('scripts');

    // Copy all files just built
    this.src.copy('html/index.html', 'index.html');
  },
  install: function() {
    // Where installations are run (npm, bower)
    this.bowerInstall('zepto', {
      save: true
    });
  }
});