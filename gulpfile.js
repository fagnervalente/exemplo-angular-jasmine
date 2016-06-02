var gulp        = require('gulp');
var connect      = require('gulp-connect');
var KarmaServer = require('karma').Server;

gulp.task('connect', function() {
  connect.server({ 
    livereload: true,
    port: 8888  
  });
});

gulp.task('test', function(done) {
    KarmaServer.start({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, function() {
        done();
    });
});

gulp.task('default', ['connect']);