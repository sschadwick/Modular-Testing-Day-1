//define all the tasks that we might want to run
'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint'); //linter
var gulpMocha = require('gulp-mocha'); //tests
var watch = require('gulp-watch'); //watcher

//linter
gulp.task('jshint', function() {
  return gulp.src(['index.js', 'bin/greet', 'test/**/*.js', 'lib/**/*.js', 'gulpfile.js'])
  .pipe(jshint())
  .pipe(jshint.reporter('default'));
  //pass in all files that match this piece, created a stream from that.
});

//testing
gulp.task('test', function() {
  return gulp.src('test/**/*test.js')
    .pipe(gulpMocha({
      reporter: 'nyan'
    }));
});

gulp.task('watch', function() {
  return gulp.watch(['index.js', 'bin/greet', 'test/**/*.js', 'lib/**/*.js', 'gulpfile.js'], ['default']);
});

gulp.task('default', ['jshint', 'test']);
//default runs a series of tasks
